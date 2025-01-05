"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Full Stack Developer with a Computer Science degree from
                FAST-NUCES and expertise in React, Node.js, Chrome Extension and
                Puppeteer. I have proven experience in developing MERN stack
                applications, including a scholarship platform and Facebook
                Marketplace Automation tool, and integrating real-time data with
                React Flow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled in enterprise solutions with Azure, Active Directory,
                Google Workspace, and API integrations for user management and
                web traffic analysis using chrome extensions. My passion lies in
                creating efficient, scalable, and user-friendly applications
                that solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
