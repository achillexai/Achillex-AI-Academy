import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import crypto from "crypto";
import { UserSubscription, Counter } from "@/utils/schema";

export async function POST(req: NextRequest) {
  try {
    const { userId, paymentDetails } = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      paymentDetails;

    if (
      !userId ||
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const isPaymentVerified = verifyRazorpayPayment(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (isPaymentVerified) {
      // Get the current counter value for Razorpay and increment it
      const counter = await db
        .select()
        .from(Counter)
        .where(eq(Counter.type, "razorpay"))
        .execute();
      const currentCounter = counter[0].value;
      const newCounter = currentCounter + 1;

      // Update the counter value in the database
      await db
        .update(Counter)
        .set({ value: newCounter })
        .where(eq(Counter.type, "razorpay"))
        .execute();

      // Update user subscription in the database
      await db
        .update(UserSubscription)
        .set({
          plan: "monthly",
          credits: 2000000000, // Using 2 billion as "unlimited"
          stripeSubscriptionId: `razorpay1-${newCounter}`,
          stripeCustomerId: `razorpay1-${newCounter}`,
          stripePriceId: `razorpay1-${newCounter}`,
          stripeCurrentPeriodEnd: null,
          stripeStatus: "active",
        })
        .where(eq(UserSubscription.userId, userId))
        .execute();

      return NextResponse.json({
        success: true,
        message: "Subscription updated successfully",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Payment verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error processing Razorpay payment:", error);
    return NextResponse.json(
      { success: false, message: "Error processing payment" },
      { status: 500 }
    );
  }
}

function verifyRazorpayPayment(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const text = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(text)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature),
    Buffer.from(signature)
  );
}
