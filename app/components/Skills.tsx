"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "Material-UI",
    "Chrome Extension",
    "Active Directory",
    "Google Workspace",
    "Electron",
    "Puppeteer",
    "Socket.io",
    "React Flow",
    "Git",
    "C++",
    "SQL",
    "NoSQL",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Badge variant="secondary" className="text-sm font-medium">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
