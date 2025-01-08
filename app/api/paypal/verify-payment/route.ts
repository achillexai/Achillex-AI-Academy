import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import axios from "axios";
import { UserSubscription, Counter } from "@/utils/schema";

export async function POST(req: NextRequest) {
  try {
    const { userId, paymentMethod, paymentDetails } = await req.json();

    // Validate required fields
    if (!userId || paymentMethod !== "paypal" || !paymentDetails) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

    let isPaymentVerified = await verifyPayPalPayment(paymentDetails);

    if (!isPaymentVerified) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed",
        },
        { status: 400 }
      );
    }

    // Get the current counter value for PayPal and increment it
    const counter = await db
      .select()
      .from(Counter)
      .where(eq(Counter.type, "paypal"))
      .execute();
    const currentCounter = counter[0].value;
    const newCounter = currentCounter + 1;

    // Update the counter value in the database
    await db
      .update(Counter)
      .set({ value: newCounter })
      .where(eq(Counter.type, "paypal"))
      .execute();

    // Update subscription
    await db
      .update(UserSubscription)
      .set({
        plan: "monthly",
        credits: 2000000000,
        stripeSubscriptionId: `paypal1-${newCounter}`,
        stripeCustomerId: `paypal1-${newCounter}`,
        stripePriceId: `paypal1-${newCounter}`,
        stripeCurrentPeriodEnd: null,
        stripeStatus: "active",
      })
      .where(eq(UserSubscription.userId, userId))
      .execute();

    return NextResponse.json({
      success: true,
      message: "Subscription updated successfully",
    });
  } catch (error) {
    console.error("Payment processing error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error processing payment",
      },
      { status: 500 }
    );
  }
}

async function verifyPayPalPayment(paymentDetails: any) {
  // TODO: Implement actual PayPal verification logic here
  // For now, we'll assume the payment is valid if paymentDetails exist
  return !!paymentDetails;
}

async function getPayPalAccessToken(): Promise<string> {
  const auth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response = await axios.post(
      `${process.env.PAYPAL_API_URL}/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    console.log("PayPal access token response:", response.data); // Debugging log

    return response.data.access_token;
  } catch (error) {
    console.error("Error getting PayPal access token:", error);
    throw error;
  }
}
