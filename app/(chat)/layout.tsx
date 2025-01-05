"use client";
import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { LoadingSpinner } from "./(routes)/chat/[chatid]/_components/loading";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-4xl h-full w-full">
        {children}
        <Toaster />
      </div>
    </div>
  );
};

export default ChatLayout;
