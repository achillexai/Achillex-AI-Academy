"use client";
import {
  Home,
  Users,
  Sparkles,
  LogOut,
  PanelLeftClose,
  UserX,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface SideNavProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function SideNav({ isOpen, toggleSidebar }: SideNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        router.push("/admin/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  interface NavItem {
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick?: () => void;
  }

  const navItems: { section: string; items: NavItem[] }[] = [
    {
      section: "Main",
      items: [
        { href: "/admin", icon: Home, label: "Dashboard" },
        { href: "/admin/users", icon: Users, label: "Users" },
      ],
    },
    {
      section: "Settings",
      items: [
        { href: "/admin/tutors", icon: UserX, label: "Coursework/Tutors" },
        { href: "/admin/training", icon: Sparkles, label: "Model Training" },
      ],
    },
    {
      section: "Others",
      items: [
        { href: "#", icon: LogOut, label: "Logout", onClick: handleLogout },
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

  const renderSidebarContent = (isMobile?: boolean) => (
    <div className="flex flex-col h-full">
      <div className="flex justify-center items-center h-24 border-b">
        <Image src="/logo-black.png" alt="logo" width={100} height={100} />
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-100 rounded-full transition-colors absolute right-2 top-2"
            aria-label="Close sidebar"
          >
            <PanelLeftClose className="h-6 w-6" />
          </button>
        )}
      </div>

      <div className="flex-1 mt-6">
        {navItems.map((section) => (
          <div key={uuidv4()} className="mb-6">
            <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase mb-2">
              {section.section}
            </h3>
            {section.items.map((item) => (
              <div
                key={uuidv4()}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                  if (isMobile) {
                    toggleSidebar();
                  }
                }}
                className="block"
              >
                <Link href={item.href}>
                  <div
                    className={`flex items-center px-4 py-2 mb-3 hover:bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 hover:text-white
                      rounded-lg cursor-pointer transition-all hover-parent
                      ${
                        pathname === item.href
                          ? "bg-gradient-to-br from-cyan-500 via-cyan-700 to-zinc-900 text-white"
                          : ""
                      }`}
                  >
                    <item.icon className="h-5 w-5 mr-3 icon-bounce" />
                    <span className="text-base">{item.label}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-auto pb-4">
        <hr className="my-4 border-t border-gray-200" />
        <p className="text-xs text-center text-gray-500">
          © {new Date().getFullYear()} Achillex AI Academy Inc.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden lg:block h-full w-64">
        <div className="h-full flex flex-col p-4 shadow-sm border bg-white">
          {renderSidebarContent()}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              onClick={toggleSidebar}
            />

            <motion.div
              className="fixed inset-0 w-64 z-[999] lg:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
            >
              <div className="h-full bg-white p-4">
                {renderSidebarContent(true)}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
