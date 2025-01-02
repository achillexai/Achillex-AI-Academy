"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, UserSubscription, Message } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq, and } from "drizzle-orm";
import React, { useEffect, useState, useContext, useCallback } from "react";
import { useUserSubscription } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import type { HistoryItem } from "@/@types/history";

function UsageTrack() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const { totalUsage, setTotalUsage, plan, setPlan, credits, setCredits } =
    useUserSubscription();
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );
  const [promptUsage, setPromptUsage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdatedFullName, setLastUpdatedFullName] = useState<string | null>(
    null
  );

  const getMaxPrompts = () => {
    return plan === "monthly" ? Infinity : 1;
  };

  const fetchAndUpdateSubscription = useCallback(async () => {
    if (!user) return;

    try {
      const subscriptionData = await db
        .select()
        .from(UserSubscription)
        .where(eq(UserSubscription.userId, user.id))
        .limit(1);

      if (subscriptionData.length > 0) {
        const subscription = subscriptionData[0];
        const fullName = user.fullName || "";

        // Update full name if it's different
        if (fullName !== subscription.fullName) {
          await db
            .update(UserSubscription)
            .set({ fullName: fullName })
            .where(eq(UserSubscription.userId, user.id));
          subscription.fullName = fullName;
          setLastUpdatedFullName(fullName);
        }

        updateSubscriptionState(subscription);
      } else {
        console.error("No subscription found for user:", user.id);
      }
    } catch (error) {
      console.error("Error fetching/updating subscription status:", error);
    }
  }, [user, router]);

  useEffect(() => {
    if (isLoaded && user) {
      Promise.all([
        GetData(),
        fetchAndUpdateSubscription(),
        fetchPromptUsage(),
      ]).then(() => {
        // Refresh router after all data is loaded
        router.refresh();
      });
    }
  }, [isLoaded, user, updateCreditUsage, fetchAndUpdateSubscription, router]);

  useEffect(() => {
    if (user && user.fullName !== lastUpdatedFullName) {
      fetchAndUpdateSubscription();
    }
  }, [user, lastUpdatedFullName, fetchAndUpdateSubscription]);

  const fetchPromptUsage = async () => {
    if (!user?.id) return;

    try {
      const messages = await db
        .select()
        .from(Message)
        .where(and(eq(Message.userId, user.id), eq(Message.role, "user")));

      setPromptUsage(messages.length);
    } catch (error) {
      console.error("Error fetching prompt usage:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSubscriptionState = (subscription: any) => {
    if (subscription.stripeStatus === "active") {
      if (subscription.plan === "free" || subscription.plan === "monthly") {
        setPlan(subscription.plan);
      }
      if (subscription.credits !== null) {
        setCredits(subscription.credits);
      }
    } else {
      setPlan("free");
      setCredits(10000);
    }
  };

  const GetData = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    try {
      const result = await db
        .select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

      const filteredResult = result.map((item) => ({
        ...item,
        createdBy: item.createdBy ?? "",
        aiResponse: item.aiResponse ?? undefined,
        createdAt: item.createdAt ? new Date(item.createdAt) : undefined,
      }));

      GetTotalUsage(filteredResult);
    } catch (error) {
      console.error("Error fetching usage data:", error);
    }
  };

  const GetTotalUsage = (result: HistoryItem[]) => {
    const total = result.reduce((acc, element) => {
      const response =
        typeof element.aiResponse === "string"
          ? element.aiResponse
          : (element.aiResponse ?? "").toString();

      return acc + response.length;
    }, 0);
    setTotalUsage(total);
  };

  const getUsagePercentage = () => {
    if (plan === "monthly") return (totalUsage / credits) * 100;
    return totalUsage >= credits ? 100 : (totalUsage / credits) * 100;
  };

  const getPromptPercentage = () => {
    const maxPrompts = getMaxPrompts();
    if (maxPrompts === Infinity) return 0;
    return promptUsage >= maxPrompts ? 100 : (promptUsage / maxPrompts) * 100;
  };

  if (isLoading) {
    return (
      <div className="bg-primary p-3 text-white rounded-lg">
        Loading usage data...
      </div>
    );
  }

  return (
    <div className="">
      <div className="bg-primary p-3 text-white rounded-lg">
        <h2 className="font-medium">Usage</h2>
        <div className="h-2 bg-[#69b1be] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full transition-all duration-300"
            style={{
              width: `${getUsagePercentage()}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {totalUsage}/{plan === "monthly" ? "Unlimited" : credits} credits used
        </h2>
        <div className="h-2 bg-[#69b1be] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full transition-all duration-300"
            style={{
              width: `${getPromptPercentage()}%`,
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {promptUsage}/{plan === "monthly" ? "Unlimited" : "1"} prompts used
        </h2>
        <p className="text-sm my-2">Current Plan: {plan}</p>
      </div>
      <Button
        variant={"secondary"}
        className="w-full my-3 text-primary"
        onClick={() => {
          router.push("/dashboard/billing");
        }}
      >
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
