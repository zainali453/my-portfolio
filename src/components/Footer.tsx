"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Code,
  Coffee,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
    },
  ].filter((link) => link.href);

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-900/30 to-teal-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-slate-800/40 to-indigo-900/40 rounded-full blur-3xl" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-slate-400 text-lg">{personalInfo.title}</p>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Creating digital experiences that make a difference. Passionate
                about clean code, beautiful design, and solving complex problems
                through technology.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl flex items-center justify-center text-slate-400 hover:text-white border border-slate-700/20 hover:bg-slate-700/30 hover:border-slate-600/30 transition-all duration-200 shadow-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-slate-100">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#experience", label: "Experience" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(
                          link.href.replace("#", "")
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-slate-400 hover:text-slate-100 hover:translate-x-1 transition-all duration-200 block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-slate-100">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-400 hover:text-slate-100 hover:translate-x-1 transition-all duration-200 block"
                >
                  {personalInfo.email}
                </a>
                {personalInfo.phone && (
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-slate-400 hover:text-slate-100 hover:translate-x-1 transition-all duration-200 block"
                  >
                    {personalInfo.phone}
                  </a>
                )}
                <p className="text-slate-400">{personalInfo.location}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-slate-400"
              >
                <span>
                  © {currentYear} {personalInfo.name}. Made with
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart
                    size={16}
                    className="text-red-500"
                    fill="currentColor"
                  />
                </motion.div>
                <span>and</span>
                <Coffee size={16} className="text-yellow-600" />
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-slate-400 text-sm"
              >
                <Code size={14} />
                <span>Built with Next.js, TypeScript, and Tailwind CSS</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-slate-600 via-gray-700 to-slate-800 backdrop-blur-xl rounded-xl flex items-center justify-center text-white shadow-2xl hover:shadow-indigo-500/25 hover:scale-110 transition-all duration-200 z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
