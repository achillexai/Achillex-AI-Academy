"use client";
import {
  FileClock,
  Settings,
  WalletCards,
  BookOpen,
  MessageSquare,
  Plus,
  PanelLeftClose,
  AudioLines,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

interface SideNavProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

function SideNav({ isOpen, toggleSidebar }: SideNavProps) {
  const createId = "new";
  const path = usePathname();

  const MenuList = [
    {
      section: "GENERAL",
      items: [
        {
          name: "AI Coursework",
          icon: BookOpen,
          path: "/dashboard",
        },
        {
          name: "AI Tutor",
          icon: MessageSquare,
          path: "/dashboard/tutor",
        },
        {
          name: "AI Voice Agent",
          icon: AudioLines,
          path: "/dashboard/agent",
        },
        {
          name: "History",
          icon: FileClock,
          path: "/dashboard/history",
        },
      ],
    },
    {
      section: "SUPPORT",
      items: [
        {
          name: "Create",
          icon: Plus,
          path: `/dashboard/create/${createId}`,
        },
        {
          name: "Billing",
          icon: WalletCards,
          path: "/dashboard/billing",
        },
        {
          name: "Settings",
          icon: Settings,
          path: "/dashboard/settings",
        },
      ],
    },
  ];

  const sidebarVariants = {
    hidden: {
      x: "-100%",
      borderRadius: "0 100% 100% 0",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    visible: {
      x: 0,
      borderRadius: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Common sidebar content that will be used for both mobile and desktop
  const renderSidebarContent = (isMobile?: boolean) => (
    <div className="flex flex-col h-full">
      {/* Logo section */}
      <div className="flex justify-center items-center ">
        <Image src="/logo-black.png" alt="logo" width={100} height={100} />
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-100 rounded-full transition-colors absolute translate-x-28"
            aria-label="Close sidebar"
          >
            <PanelLeftClose className="h-6 w-6" />
          </button>
        )}
      </div>
      <hr className="mb-4 border" />

      {/* Menu sections */}
      <div className="flex-1">
        {MenuList.map((section) => (
          <div key={uuidv4()} className="mb-1">
            <h3 className="text-xs font-medium tracking-wide text-gray-500 mb-1 mt-1">
              {section.section}
            </h3>
            {section.items.map((menu) => (
              <Link
                href={menu.path}
                key={uuidv4()}
                onClick={isMobile ? toggleSidebar : undefined}
                className="block"
              >
                <div
                  className={`flex gap-2 mb-3 p-2 hover:bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 hover:text-white
                    rounded-lg cursor-pointer items-center transition-all hover-parent
                    ${
                      path === menu.path
                        ? "bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 text-white"
                        : ""
                    }`}
                >
                  <menu.icon className="h-5 w-5 icon-bounce" />
                  <h2 className="text-base">{menu.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Footer section */}
      <div className="pt-2">
        <UsageTrack />
        <hr className="my-2 border" />
        <p className="text-xs text-center text-gray-500">
          © {new Date().getFullYear()} Achillex AI Academy Inc.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block h-full">
        <div className="h-full flex flex-col p-5 shadow-sm border bg-white">
          {renderSidebarContent()}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              onClick={toggleSidebar}
            />

            {/* Mobile Sidebar */}
            <motion.div
              className="fixed inset-0 w-full max-w-[300px] z-[999] lg:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
            >
              <div className="h-full bg-white p-5">
                {renderSidebarContent(true)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideNav;
