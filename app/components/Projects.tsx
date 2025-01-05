"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Facebook Marketplace Automation Tool",
      description:
        "Developed a tool for managing vehicle posts using Node.js, React, and Puppeteer. Built a desktop application with Electron.js, including automatic updates.",
      tags: ["Node.js", "React", "Puppeteer", "Electron.js"],
      github: "private",
      live: "private",
      disabled: true,
    },
    {
      title: "Scholarship Recommendation Platform",
      description:
        "Created a MERN stack-based platform for recommending scholarships, using Puppeteer for data scraping and implementing content-based filtering algorithms.",
      tags: ["MERN Stack", "Puppeteer", "Recommendation System"],
      github: "private",
      live: "private",
      disabled: true,
    },
    {
      title: "Event Management System",
      description:
        "Collaborated on developing an event management system using React and Node.js, gaining experience in teamwork and real-world application deployment.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "private",
      live: "private",
      disabled: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {project.disabled ? (
                  <CardFooter className="flex justify-between cursor-pointer">
                    <Button variant="outline" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </CardFooter>
                ) : (
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
