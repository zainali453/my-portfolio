"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Play,
  X,
  ArrowRight,
  Calendar,
  Tag,
  Star,
  Code,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

const categories = ["all", "web", "mobile", "fullstack", "other"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-teal-200/30 dark:from-indigo-900/20 dark:to-teal-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-slate-200/40 to-indigo-200/40 dark:from-slate-800/30 dark:to-indigo-900/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-2xl shadow-xl mb-6"
          >
            <Code className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="bg-gradient-to-r from-slate-600 via-gray-700 to-slate-800 bg-clip-text text-transparent">
              Featured
            </span>{" "}
            Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my most impactful projects, demonstrating expertise
            across various technologies and domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-2 bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl shadow-xl border border-slate-200/20 dark:border-slate-700/10">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-200 capitalize ${
                  selectedCategory === category
                    ? "bg-slate-100/20 dark:bg-slate-700/30 text-indigo-600 dark:text-indigo-400 shadow-lg backdrop-blur-sm border border-indigo-200/30 dark:border-indigo-700/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/20 dark:hover:bg-slate-700/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-xl border border-slate-200/20 dark:border-slate-700/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-100/80 to-teal-100/80 dark:from-indigo-900/30 dark:to-teal-900/30 backdrop-blur-sm overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl opacity-20">
                      {project.category === "web"
                        ? "🌐"
                        : project.category === "mobile"
                        ? "📱"
                        : project.category === "fullstack"
                        ? "⚡"
                        : "💡"}
                    </div>
                  </div>

                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <motion.button
                      onClick={() => openProjectModal(project)}
                      className="p-3 bg-slate-100/20 dark:bg-slate-800/30 backdrop-blur-xl rounded-full text-white hover:bg-slate-100/30 dark:hover:bg-slate-700/40 border border-slate-200/20 dark:border-slate-600/20 transition-colors shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={20} />
                    </motion.button>

                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-100/20 dark:bg-slate-800/30 backdrop-blur-xl rounded-full text-white hover:bg-slate-100/30 dark:hover:bg-slate-700/40 border border-slate-200/20 dark:border-slate-600/20 transition-colors shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}

                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-100/20 dark:bg-slate-800/30 backdrop-blur-xl rounded-full text-white hover:bg-slate-100/30 dark:hover:bg-slate-700/40 border border-slate-200/20 dark:border-slate-600/20 transition-colors shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                        project.status === "completed"
                          ? "bg-teal-100/80 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200/30 dark:border-teal-700/30"
                          : project.status === "in-progress"
                          ? "bg-indigo-100/80 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-200/30 dark:border-indigo-700/30"
                          : "bg-slate-100/80 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300 border-slate-200/30 dark:border-slate-700/30"
                      }`}
                    >
                      {project.status.replace("-", " ")}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title and Year */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-indigo-100/50 dark:bg-indigo-900/30 backdrop-blur-sm text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium border border-indigo-200/30 dark:border-indigo-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100/50 dark:bg-slate-700/30 backdrop-blur-sm text-slate-600 dark:text-slate-400 rounded text-xs border border-slate-200/30 dark:border-slate-600/30">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openProjectModal(project)}
                    className="w-full group/btn"
                  >
                    View Details
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={closeProjectModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl border border-slate-200/20 dark:border-slate-700/10 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-indigo-100/80 to-teal-100/80 dark:from-indigo-900/30 dark:to-teal-900/30 backdrop-blur-sm flex items-center justify-center rounded-t-2xl">
                    <div className="text-8xl opacity-20">
                      {selectedProject.category === "web"
                        ? "🌐"
                        : selectedProject.category === "mobile"
                        ? "📱"
                        : selectedProject.category === "fullstack"
                        ? "⚡"
                        : "💡"}
                    </div>
                  </div>

                  <button
                    onClick={closeProjectModal}
                    className="absolute top-4 right-4 p-2 bg-slate-100/20 dark:bg-slate-800/30 backdrop-blur-xl rounded-full text-white hover:bg-slate-100/30 dark:hover:bg-slate-700/40 border border-slate-200/20 dark:border-slate-600/20 transition-colors shadow-lg"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {selectedProject.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag size={16} />
                          {selectedProject.category}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border ${
                        selectedProject.status === "completed"
                          ? "bg-teal-100/80 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200/30 dark:border-teal-700/30"
                          : selectedProject.status === "in-progress"
                          ? "bg-indigo-100/80 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-200/30 dark:border-indigo-700/30"
                          : "bg-slate-100/80 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300 border-slate-200/30 dark:border-slate-700/30"
                      }`}
                    >
                      {selectedProject.status.replace("-", " ")}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {selectedProject.demoUrl && (
                      <Button variant="gradient" asChild>
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button variant="outline" asChild>
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {selectedProject.videoUrl && (
                      <Button variant="outline">
                        <Play size={16} className="mr-2" />
                        Watch Demo
                      </Button>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                      About This Project
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Star
                            size={16}
                            className="text-yellow-500 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-slate-600 dark:text-slate-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-indigo-100/50 dark:bg-indigo-900/30 backdrop-blur-sm text-indigo-700 dark:text-indigo-300 rounded-lg font-medium flex items-center gap-2 border border-indigo-200/30 dark:border-indigo-700/30"
                        >
                          <Code size={16} />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
