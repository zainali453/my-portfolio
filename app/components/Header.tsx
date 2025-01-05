"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-sm bg-background/75 border-b border-border"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Image
            style={{ borderRadius: "50%" }}
            src="/pic.jpg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <ul className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              ))}
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
