"use client";
import React, { useState, useEffect } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "../(context)/UpdateCreditUsageContext";
import NextTopLoader from "nextjs-toploader";
import { LoadingSpinner } from "./_components/Loading";
import "./globals.css";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <UserProvider>
      <UpdateCreditUsageContext.Provider
        value={{ updateCreditUsage, setUpdateCreditUsage }}
      >
        <div className="bg-slate-100 h-screen flex overflow-hidden relative">
          <NextTopLoader color="#1d8098" height={5} showSpinner={false} />

          {/* Desktop Sidebar */}
          <div className="w-64 flex-shrink-0 hidden lg:block relative">
            <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>

          {/* Mobile Sidebar - Rendered outside the flex container */}
          <div className="lg:hidden">
            <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main className="flex-1 overflow-y-auto relative">
              <div className="h-full mx-auto max-w-[1600px]">{children}</div>
            </main>
            <Toaster />
          </div>
        </div>
      </UpdateCreditUsageContext.Provider>
    </UserProvider>
  );
}

export default DashboardLayout;
