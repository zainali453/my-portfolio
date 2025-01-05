"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/20 to-background">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Zain Ali
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild>
            <a href="/ZainAli_Resume.pdf" download>
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            asChild
            style={{
              marginLeft: "10px",
            }}
          >
            <a href="#contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
