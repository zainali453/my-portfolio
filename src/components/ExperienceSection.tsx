"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Star,
  ChevronRight,
} from "lucide-react";
import { experiences, education } from "@/data/portfolio";

export function ExperienceSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [timelineRef, timelineInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      className="py-10 md:py-14 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(79, 70, 229, 0.07) 0%, rgba(100, 116, 139, 0.07) 25%, rgba(6, 182, 212, 0.07) 50%, rgba(71, 85, 105, 0.07) 75%, rgba(14, 165, 233, 0.07) 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating glass orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-500/10 via-slate-500/8 to-teal-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-l from-teal-500/8 via-blue-500/10 to-slate-500/8 rounded-full blur-3xl"
        />

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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Glass container for header */}
          <div className="inline-block bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-3xl border border-slate-200/20 dark:border-slate-700/10 shadow-2xl shadow-slate-500/5 px-8 py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 150,
              }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-700 rounded-2xl mb-6 shadow-xl"
            >
              <Briefcase className="w-8 h-8 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-slate-400 via-gray-500 to-slate-600 bg-clip-text text-transparent">
                Professional
              </span>{" "}
              Journey
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-slate-400 via-gray-500 to-slate-600 mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A timeline of my professional growth, achievements, and
              educational milestones that shaped my expertise.
            </p>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0 }}
          animate={timelineInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="flex items-center gap-3 bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl px-6 py-3 rounded-2xl shadow-xl border border-slate-200/20 dark:border-slate-700/10">
              <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="font-semibold text-gray-900 dark:text-white">
                Professional Experience
              </span>
            </div>
          </motion.div>

          {/* Mobile-First Timeline */}
          <div className="space-y-6 md:space-y-8 ">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <div className="relative pl-8">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-teal-500" />

                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                    />

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-slate-200/20 dark:border-slate-700/10 ml-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                    >
                      {/* Company Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-100/80 to-teal-100/80 dark:from-indigo-900/30 dark:to-teal-900/30 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md border border-indigo-200/20 dark:border-indigo-700/20">
                          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                            {experience.company.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 leading-tight">
                            {experience.position}
                          </h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-1 bg-slate-200/30 dark:bg-slate-700/30 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-300/20 dark:border-slate-600/20">
                          <Calendar size={14} />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-slate-200/30 dark:bg-slate-700/30 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-300/20 dark:border-slate-600/20">
                          <MapPin size={14} />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                          >
                            <ChevronRight
                              size={16}
                              className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0"
                            />
                            <span className="text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-indigo-100/50 dark:bg-indigo-900/30 backdrop-blur-sm text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-medium border border-indigo-200/30 dark:border-indigo-700/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {experience.achievements.length > 0 && (
                        <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-4">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                            <Star size={16} className="text-yellow-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {experience.achievements.map(
                              (achievement, achievementIndex) => (
                                <li
                                  key={achievementIndex}
                                  className="text-sm text-green-600 dark:text-green-400 flex items-start gap-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block relative">
                  <div className="flex items-center">
                    {/* Timeline */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-teal-500 rounded-full" />

                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={timelineInView ? { scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                    />

                    {/* Content */}
                    <div
                      className={`w-5/12 cursor-pointer ${
                        index % 2 === 0 ? "pr-8" : "pl-8 ml-auto"
                      }`}
                    >
                      <motion.div
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl p-8 shadow-xl border border-slate-200/20 dark:border-slate-700/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                      >
                        {/* Company Badge */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-100/80 to-teal-100/80 dark:from-indigo-900/30 dark:to-teal-900/30 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-indigo-200/20 dark:border-indigo-700/20">
                            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                              {experience.company.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                              {experience.position}
                            </h3>
                            <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex gap-4 text-slate-600 dark:text-slate-400 mb-6">
                          <div className="flex items-center gap-2 bg-slate-200/30 dark:bg-slate-700/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-300/20 dark:border-slate-600/20">
                            <Calendar size={16} />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-200/30 dark:bg-slate-700/30 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-300/20 dark:border-slate-600/20">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-3 mb-6">
                          {experience.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                            >
                              <ChevronRight
                                size={18}
                                className="text-indigo-500 dark:text-indigo-400 mt-1 flex-shrink-0"
                              />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-indigo-100/50 dark:bg-indigo-900/30 backdrop-blur-sm text-indigo-700 dark:text-indigo-300 rounded-xl text-sm font-medium border border-indigo-200/30 dark:border-indigo-700/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        {experience.achievements.length > 0 && (
                          <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-6">
                            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                              <Star size={18} className="text-yellow-500" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {experience.achievements.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className="text-teal-600 dark:text-teal-400 flex items-start gap-3"
                                  >
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="flex items-center gap-3 bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl px-6 py-3 rounded-2xl shadow-xl border border-slate-200/20 dark:border-slate-700/10">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                Education
              </span>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto cursor-pointer">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200/20 dark:border-slate-700/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-100/80 to-teal-100/80 dark:from-indigo-900/30 dark:to-teal-900/30 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-indigo-200/20 dark:border-indigo-700/20">
                        <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                          {edu.degree}
                        </h4>
                        <h5 className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                          {edu.field}
                        </h5>
                        <h6 className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium">
                          {edu.institution}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="lg:text-right">
                    <div className="flex flex-col gap-2 text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2 lg:justify-end bg-slate-200/30 dark:bg-slate-700/30 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-300/20 dark:border-slate-600/20">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                    <h6 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                      <Award size={16} className="text-yellow-500" />
                      Achievements & Honors
                    </h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-center gap-2 text-teal-600 dark:text-teal-400"
                        >
                          <Star
                            size={14}
                            className="text-yellow-500 flex-shrink-0"
                          />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
