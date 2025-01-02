"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return (
      <div className="bg-slate-100 min-h-screen">
        <NextTopLoader color="#1d8098" height={5} showSpinner={false} />
        {children}
        <Toaster />
      </div>
    );
  }

  return (
    <div className="bg-slate-100 h-screen flex overflow-hidden relative">
      <NextTopLoader color="#1d8098" height={5} showSpinner={false} />

      {/* Sidebar */}
      <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto relative">
          <div className="h-full mx-auto max-w-[1600px]">{children}</div>
        </main>
        <Toaster />
      </div>
    </div>
  );
}

export default AdminLayout;
