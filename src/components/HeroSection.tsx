"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import Link from "next/link";

import Image from "next/image";

const words = [
  "Full Stack Developer",
  "Frontend Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator",
];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Hello from your portfolio!");
    const body = encodeURIComponent(
      "Hi Zain, I saw your portfolio and would like to get in touch."
    );

    // Try to open default email client
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(14, 165, 233, 0.05) 25%, rgba(6, 182, 212, 0.05) 50%, rgba(34, 211, 238, 0.05) 75%, rgba(79, 70, 229, 0.05) 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating glass orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/20 via-blue-500/15 to-cyan-500/20 rounded-full blur-3xl backdrop-blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 120, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-slate-500/15 via-gray-500/20 to-blue-500/15 rounded-full blur-3xl backdrop-blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-400/10 via-indigo-500/15 to-slate-500/10 rounded-full blur-3xl"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79, 70, 229, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 116, 139, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left relative"
          >
            {/* Glass card container */}
            <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-white/10 shadow-sm shadow-black/5 p-8 lg:p-12">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-slate-500/5 to-teal-500/5 rounded-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Greeting */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-lg text-gray-600 dark:text-gray-300 mb-4 flex items-center justify-center lg:justify-start gap-2"
                >
                  <span className="text-2xl">👋</span>
                  <span>{"Hello, I'm"}</span>
                </motion.p>

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-6xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  <span className="bg-gradient-to-r from-slate-300 via-gray-400 to-slate-500 bg-clip-text text-transparent drop-shadow-sm">
                    {personalInfo.name}
                  </span>
                </motion.h1>

                {/* Dynamic Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-3xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-200 mb-8 h-20 flex items-center justify-center lg:justify-start"
                >
                  <span>{"I'm a "}</span>
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="ml-2 bg-gradient-to-r from-indigo-500 via-blue-600 to-teal-500 bg-clip-text text-transparent font-bold"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  {personalInfo.description}
                </motion.p>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex items-center justify-center lg:justify-start gap-3 text-gray-600 dark:text-gray-300 mb-8"
                >
                  <div className="p-2 bg-slate-100/20 dark:bg-slate-800/10 rounded-xl backdrop-blur-sm border border-slate-200/20">
                    <MapPin
                      size={18}
                      className="text-slate-600 dark:text-slate-400"
                    />
                  </div>
                  <span className="font-medium">{personalInfo.location}</span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="gradient"
                      size="lg"
                      onClick={handleEmailClick}
                      className="cursor-pointer"
                    >
                      <Link
                        href={"#contact"}
                        className="flex items-center gap-2"
                      >
                        Get In Touch
                        <motion.div
                          className="ml-1"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Mail size={18} />
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="group bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-xl border-slate-200/20 dark:border-slate-700/10 hover:bg-slate-200/20 dark:hover:bg-slate-700/10 text-gray-800 dark:text-gray-200 shadow-sm transition-all duration-300"
                      asChild
                    >
                      <Link href={personalInfo.resume} target="_blank">
                        <Download
                          size={18}
                          className="mr-2 group-hover:animate-bounce transition-transform duration-300"
                        />
                        Download Resume
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="flex gap-4 justify-center lg:justify-start"
                >
                  {personalInfo.github && (
                    <motion.a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-xl border border-slate-200/20 dark:border-slate-700/10 text-gray-700 dark:text-gray-300 hover:bg-slate-200/20 dark:hover:bg-slate-700/10 transition-all duration-300 shadow-sm group"
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github
                        size={22}
                        className="group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors duration-300"
                      />
                    </motion.a>
                  )}
                  {personalInfo.linkedin && (
                    <motion.a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-indigo-100/10 dark:bg-indigo-900/20 backdrop-blur-xl border border-indigo-200/20 dark:border-indigo-800/10 text-gray-700 dark:text-gray-300 hover:bg-indigo-200/20 dark:hover:bg-indigo-800/10 transition-all duration-300 shadow-sm group"
                      whileHover={{ scale: 1.1, y: -5, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin
                        size={22}
                        className="group-hover:text-indigo-600 transition-colors duration-300"
                      />
                    </motion.a>
                  )}
                  <motion.button
                    onClick={handleEmailClick}
                    className="p-4 rounded-2xl bg-teal-100/10 dark:bg-teal-900/20 backdrop-blur-xl border border-teal-200/20 dark:border-teal-800/10 text-gray-700 dark:text-gray-300 hover:bg-teal-200/20 dark:hover:bg-teal-800/10 transition-all duration-300 shadow-sm group cursor-pointer"
                    whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={`Send email to ${personalInfo.email}`}
                  >
                    <Mail
                      size={22}
                      className="group-hover:text-teal-600 transition-colors duration-300"
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Multi-layered Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-slate-500/30 to-teal-500/30 rounded-full blur-3xl opacity-60 animate-pulse" />
              <div
                className="absolute inset-0 bg-gradient-to-l from-teal-500/20 via-gray-500/20 to-indigo-500/20 rounded-full blur-2xl opacity-40 animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              {/* Glass container for profile */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden backdrop-blur-2xl bg-slate-100/10 dark:bg-slate-800/20 border border-slate-200/20 dark:border-slate-700/10 shadow-sm shadow-slate-500/10 p-3">
                {/* Replace the div above with this when you have an actual image */}
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-sm shadow-indigo-500/30 backdrop-blur-xl border border-indigo-200/20"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-600 rounded-2xl flex items-center justify-center text-white shadow-sm shadow-slate-500/30 backdrop-blur-xl border border-slate-200/20"
              >
                <span className="text-xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/3 -left-8 w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-sm shadow-teal-500/30 backdrop-blur-xl border border-teal-200/20"
              >
                <span className="text-sm">⚡</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
