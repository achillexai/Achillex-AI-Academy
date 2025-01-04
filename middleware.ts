import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { eq } from "drizzle-orm";

// Define public routes that don't need authentication
const publicPaths = ["/", "/sign-in*", "/sign-up*", "/api*", "/admin/login"];

function isPublic(path: string) {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x.replace("*", ".*")}$`))
  );
}

export default clerkMiddleware((auth, req, evt) => {
  // Enable satellite mode for iframe support
  //@ts-ignore
  evt.isSatellite = true;

  const path = req.nextUrl.pathname;

  // For admin routes, check admin authentication
  if (path.startsWith("/admin")) {
    const authToken = req.cookies.get("admin_token")?.value;

    if (!authToken && !path.startsWith("/admin/login")) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    if (authToken && path === "/admin/login") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }

    return NextResponse.next();
  }

  // Allow public routes without any redirects
  if (isPublic(path)) {
    return NextResponse.next();
  }

  // Handle cross-origin requests
  const origin = req.headers.get("origin");
  if (origin) {
    const allowedOrigins = (
      process.env.NEXT_PUBLIC_CLERK_CROSS_ORIGIN_AUTH_ALLOWED_ORIGINS || ""
    ).split(",");
    if (allowedOrigins.includes(origin)) {
      const response = NextResponse.next();
      response.headers.set("Access-Control-Allow-Origin", origin);
      return response;
    }
  }

  // For dashboard routes, check authentication
  if (path.startsWith("/dashboard")) {
    const userId = auth().userId;

    if (!userId) {
      const signInUrl = new URL("/sign-in", req.url);
      signInUrl.searchParams.set("redirect_url", req.url);
      return NextResponse.redirect(signInUrl);
    }

    // Manage subscription for authenticated users
    console.log(`Processing dashboard request for user: ${userId}`);
    evt.waitUntil(manageUserSubscription(userId));
  }

  return NextResponse.next();
});

async function manageUserSubscription(userId: string) {
  try {
    console.log(`Checking subscription for user: ${userId}`);

    const existingSubscription = await db
      .select()
      .from(UserSubscription)
      .where(eq(UserSubscription.userId, userId))
      .limit(1);

    if (!existingSubscription || existingSubscription.length === 0) {
      console.log(
        `No existing subscription found for user: ${userId}. Creating new subscription.`
      );

      try {
        await db
          .insert(UserSubscription)
          .values({
            userId: userId,
            stripeCustomerId: "not_set",
            stripeSubscriptionId: "not_set",
            stripePriceId: "not_set",
            stripeStatus: "inactive",
            plan: "free",
            credits: 10000,
            minutes: 0,
            stripeCurrentPeriodEnd: null,
            fullName: "", // Initialize with an empty string
          })
          .execute();

        console.log(`Created subscription for user: ${userId}`);
      } catch (insertError) {
        // Check if the error is due to a unique constraint violation
        //
        if ((insertError as any).code === "23505") {
          // PostgreSQL unique violation error code
          console.log(
            `Subscription already exists for user: ${userId}. Skipping creation.`
          );
        } else {
          throw insertError; // Re-throw if it's a different error
        }
      }
    } else {
      console.log(
        `Existing subscription found for user: ${userId}. Skipping creation.`
      );
    }
  } catch (error) {
    console.error(`Error managing user subscription for ${userId}:`, error);
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/admin/:path*"],
};
