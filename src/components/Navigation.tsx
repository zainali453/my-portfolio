"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: Code },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };
    setIsMobile(window.innerWidth < 768);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={cn(
          isMobile
            ? "fixed top-0 left-0 right-0 z-50 transition-all duration-900 w-full"
            : "fixed bottom-0 left-0 right-0 z-50 transition-all duration-900 w-full",

          "bg-transparent"
        )}
        style={{
          background: "transparent",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 w-full relative">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2 flex-1 justify-center relative z-10">
              <div className="flex items-center space-x-1 bg-white/10 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 p-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group cursor-pointer",
                      activeSection === item.href.replace("#", "")
                        ? "text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    )}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeSection === item.href.replace("#", "") && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-slate-600 via-gray-700 to-slate-700 rounded-xl shadow-lg shadow-blue-500/25"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 45,
                        }}
                      />
                    )}
                    {activeSection !== item.href.replace("#", "") && (
                      <motion.div className="absolute inset-0 bg-white/5 dark:bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                    <span className="relative z-10 flex items-center gap-2 text-base">
                      <item.icon size={20} className="opacity-90" />
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-shrink-0 relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative z-50 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 rounded-xl shadow-lg"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-white/10 dark:bg-black/20 backdrop-blur-2xl shadow-2xl z-50 md:hidden border-l border-white/20 dark:border-white/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)",
              }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 pointer-events-none" />

              <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto relative z-10">
                {/* Navigation Items */}
                <div className="space-y-3 mb-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.href}
                      // initial={{ x: 100, opacity: 0 }}
                      // animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "flex items-center gap-4 w-full px-5 py-4 rounded-2xl text-left transition-all duration-300 group relative overflow-hidden",
                        activeSection === item.href.replace("#", "")
                          ? "bg-gradient-to-r from-slate-600 via-gray-700 to-slate-800 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white "
                      )}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeSection !== item.href.replace("#", "") && (
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-gray-700 to-slate-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                      <div className="relative z-10 flex items-center gap-4 w-full">
                        <div
                          className={cn(
                            "p-2 rounded-xl transition-all duration-300",
                            activeSection === item.href.replace("#", "")
                              ? "bg-white/20 shadow-md"
                              : "bg-white/5 group-hover:bg-white/10"
                          )}
                        >
                          <item.icon size={20} className="flex-shrink-0" />
                        </div>
                        <span className="font-medium text-base">
                          {item.label}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Resume Button */}
                {/* <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: navItems.length * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="mt-auto"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="gradient"
                      className="w-full  bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 text-white border-0 py-4 rounded-2xl font-medium text-base backdrop-blur-xl transition-all duration-300"
                      asChild
                    >
                      <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-3"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="p-1 bg-white/20 rounded-lg">
                          <FileText size={18} />
                        </div>
                        Download Resume
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
