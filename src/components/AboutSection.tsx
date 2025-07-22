"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Smartphone,
  Database,
  Cloud,
  Lightbulb,
  Building,
} from "lucide-react";
import { skills } from "@/data/portfolio";

const skillCategories = [
  { name: "Frontend", icon: Code, color: "from-sky-700 to-sky-900" },
  { name: "Backend", icon: Database, color: "from-slate-500 to-gray-600" },
  {
    name: "DevOps",
    icon: Cloud,
    color: "from-teal-600 to-cyan-700",
  },
  { name: "Mobile", icon: Smartphone, color: "from-slate-600 to-slate-700" },
  { name: "Database", icon: Database, color: "from-sky-500 to-sky-800" },
  {
    name: "Enterprise/Integrations",
    icon: Building,
    color: "from-teal-600 to-emerald-600",
  },
];

export function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      className="py-12 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(79, 70, 229, 0.07) 0%, rgba(100, 116, 139, 0.07) 25%, rgba(6, 182, 212, 0.07) 50%, rgba(71, 85, 105, 0.07) 75%, rgba(14, 165, 233, 0.07) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating glass orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/10 via-slate-500/8 to-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-l from-teal-500/8 via-blue-500/10 to-slate-500/8 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79, 70, 229, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 116, 139, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl shadow-sm shadow-slate-500/5 px-8 py-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 via-gray-500 to-slate-600 mx-auto rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glass card container */}
            <div className="bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-3xl border border-slate-200/20 dark:border-slate-700/10 shadow-sm shadow-slate-500/5 p-8 lg:p-10">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 via-slate-500/3 to-teal-500/3 rounded-3xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                  Passionate Developer & Problem Solver
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
                  <p>
                    With over 3 years of experience in software development, I
                    specialize in creating modern, scalable web applications
                    using cutting-edge technologies. My journey began with a
                    curiosity for technology and has evolved into a passion for
                    solving complex problems through elegant code.
                  </p>
                  <p>
                    I excel in both frontend and backend development, with
                    expertise in React, Next.js, Node.js, and various database
                    technologies. I'm particularly passionate about creating
                    intuitive user experiences and implementing robust, scalable
                    architectures.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community.
                  </p>
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="grid grid-cols-3 gap-6 mt-8"
                >
                  <div className="text-center p-4 bg-indigo-100/10 dark:bg-indigo-900/20 backdrop-blur-xl rounded-2xl border border-indigo-200/20 dark:border-indigo-800/10">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      3+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-slate-100/10 dark:bg-slate-900/20 backdrop-blur-xl rounded-2xl border border-slate-200/20 dark:border-slate-800/10">
                    <div className="text-3xl font-bold text-slate-600 dark:text-slate-400 mb-2">
                      20+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center p-4 bg-teal-100/10 dark:bg-teal-900/20 backdrop-blur-xl rounded-2xl border border-teal-200/20 dark:border-teal-800/10">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                      15+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Technologies Mastered
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 cursor-pointer">
              {/* Glass container for central element */}
              <div className="absolute inset-0 bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-full border border-slate-200/20 dark:border-slate-700/10 shadow-sm shadow-slate-500/10" />

              {/* Central Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-500 to-slate-600 rounded-full flex items-center justify-center shadow-sm shadow-indigo-500/25 backdrop-blur-xl border border-indigo-200/20"
              >
                <Lightbulb size={40} className="text-white" />
              </motion.div>

              {/* Orbiting Icons */}
              {skillCategories.map((category, index) => {
                const angle = index * 60 * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius - 40;
                const y = Math.sin(angle) * radius - 20;

                return (
                  <motion.div
                    key={category.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      },
                    }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-xl border border-white/20`}
                    >
                      <category.icon size={24} className="text-white" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <div className="inline-block bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl  dark:border-slate-700/10 shadow-sm shadow-slate-500/5 px-10 py-4">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <div className="w-34 h-1 bg-gradient-to-r from-slate-400 via-gray-500 to-slate-600 mx-auto rounded-full mb-6" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(
                (skill) => skill.category === category.name.toLowerCase()
              );

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-slate-100/10 cursor-pointer dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl border border-slate-200/20 dark:border-slate-700/10 shadow-sm shadow-slate-500/5 p-6 hover:shadow-sm hover:scale-[1.02] transition-all duration-300 group"
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 via-slate-500/3 to-teal-500/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-sm backdrop-blur-xl`}
                      >
                        <category.icon size={22} className="text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category.name}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {categorySkills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ width: 0 }}
                          animate={skillsInView ? { width: "100%" } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 bg-slate-100/20 dark:bg-slate-700/20 px-2 py-1 rounded-lg backdrop-blur-sm">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200/30 dark:bg-slate-700/30 rounded-full h-2 backdrop-blur-sm">
                            <motion.div
                              className={`h-2 bg-gradient-to-r ${category.color} rounded-full shadow-sm`}
                              initial={{ width: 0 }}
                              animate={
                                skillsInView ? { width: `${skill.level}%` } : {}
                              }
                              transition={{
                                duration: 1.5,
                                delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
