import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="top-0 left-0 right-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700 ">
      <nav
        className="pb-10 relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div>
            <Image src={"/logo.png"} alt="logo" width={120} height={120} />
          </div>
          <button
            onClick={toggleMenu}
            className="sm:hidden text-white hover:text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
            <div className="z-10 relative mx-3 text-xl hover:cursor-pointer transition">
              <Link
                href="/"
                className="text-[#fff] text-lg hover:text-cyan-400 hover:no-underline"
              >
                Home
              </Link>
            </div>
            <div className="z-10 relative mx-3 text-xl hover:cursor-pointer transition">
              <Link
                href="/about"
                className="text-[#fff] text-lg hover:text-cyan-400 hover:no-underline"
              >
                About
              </Link>
            </div>
            <div className="z-10 relative mx-3 text-xl hover:cursor-pointer transition">
              <Link
                href="/features"
                className="text-[#fff] text-lg hover:text-cyan-400 hover:no-underline"
              >
                Features
              </Link>
            </div>
            <div className="z-10 relative mx-3 text-xl hover:cursor-pointer transition">
              <Link
                href="/subscriptions"
                className="text-[#fff] text-lg hover:text-cyan-400 hover:no-underline"
              >
                Pricing
              </Link>
            </div>
            <div className="z-10 relative mx-3 text-xl hover:cursor-pointer transition">
              <Link
                href="/visionary"
                className="text-[#fff] text-lg hover:text-cyan-400 hover:no-underline"
              >
                Meet The Visionary
              </Link>
            </div>
            <div className="z-10 relative mx-3 text-xl hover:cursor-pointer transition">
              <Link
                href="/contact"
                className="text-[#fff] text-lg hover:text-cyan-400 hover:no-underline"
              >
                Contact Us
              </Link>
            </div>
            <div className="z-10 relative py-3 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl px-10 bg-gradient-to-r from-[#02162d] to-[#36e0f7] hover:from-[#042b45] hover:to-[#1bc6dc] hover:cursor-pointer transition">
              <Link
                href="/dashboard"
                className="text-white text-lg font-semibold no-underline hover:no-underline"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black sm:hidden z-40"
                onClick={toggleMenu}
              />

              {/* Side Navigation */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-neutral-800 shadow-lg sm:hidden overflow-y-auto z-50"
              >
                <div className="p-5">
                  <div className="flex justify-end mb-8">
                    <button onClick={toggleMenu}>
                      <X
                        size={24}
                        className="text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                      />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-6 mb-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-teal-800 dark:text-neutral-300"
                      onClick={toggleMenu}
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-6 mb-2">
                    <Link
                      href="/"
                      className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-teal-800 dark:text-neutral-300"
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-6 mb-2">
                    <Link
                      href="/about"
                      className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-teal-800 dark:text-neutral-300"
                      onClick={toggleMenu}
                    >
                      About
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-6 mb-2">
                    <Link
                      href="/features"
                      className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-teal-800 dark:text-neutral-300"
                      onClick={toggleMenu}
                    >
                      Features
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-6 mb-2">
                    <Link
                      href="/subscriptions"
                      className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-teal-800 dark:text-neutral-300"
                      onClick={toggleMenu}
                    >
                      Pricing
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-6 mb-2">
                    <Link
                      href="/visionary"
                      className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-teal-800 dark:text-neutral-300"
                      onClick={toggleMenu}
                    >
                      Meet The Visionary
                    </Link>
                  </div>
                  <div className="flex flex-col space-y-6 mb-2">
                    <Link
                      href="/contact"
                      className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-teal-800 dark:text-neutral-300"
                      onClick={toggleMenu}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
