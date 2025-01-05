"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  zainyounas101@gmail.com
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a href="tel:+923016211450">
                  <Phone className="mr-2 h-4 w-4" />
                  (+92) 301-6211450
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a
                  href="https://github.com/zainali0286"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/zainyounas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
