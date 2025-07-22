"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real application, you would send the data to your backend
      console.log("Form submitted:", formData);

      setFormStatus({
        type: "success",
        message: "Thank you for your message! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-indigo-500 to-teal-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone || "+1 (555) 123-4567",
      href: `tel:${personalInfo.phone}`,
      color: "from-slate-500 to-slate-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      color: "from-teal-500 to-indigo-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.github,
      color: "hover:text-slate-900 dark:hover:text-slate-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      color: "hover:text-indigo-600 dark:hover:text-indigo-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: personalInfo.twitter,
      color: "hover:text-teal-600 dark:hover:text-teal-400",
    },
  ].filter((link) => link.href);

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-teal-200/30 dark:from-indigo-900/20 dark:to-teal-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-slate-200/40 to-indigo-200/40 dark:from-slate-800/30 dark:to-indigo-900/30 rounded-full blur-3xl" />
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
            <Mail className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            <span className="bg-gradient-to-r from-slate-600 via-gray-700 to-slate-800 bg-clip-text text-transparent">
              Get In
            </span>{" "}
            Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project or just want to say hello? I'd
            love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl shadow-xl border border-slate-200/20 dark:border-slate-700/10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                  >
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                      {item.label}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl shadow-lg border border-slate-200/20 dark:border-slate-700/10 text-slate-600 dark:text-slate-400 ${social.color} transition-colors hover:shadow-xl`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 p-6 bg-gradient-to-r from-indigo-500 to-teal-500 backdrop-blur-xl rounded-2xl text-white shadow-2xl border border-indigo-300/20"
            >
              <h4 className="text-lg font-semibold mb-2">
                Ready to work together?
              </h4>
              <p className="text-indigo-100 mb-4">
                I'm always excited to take on new challenges and create amazing
                digital experiences.
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="bg-slate-100/20 hover:bg-slate-100/30 backdrop-blur-sm text-white border-slate-200/20 hover:border-slate-200/30"
                asChild
              >
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200/20 dark:border-slate-700/10 p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Send me a message
              </h3>

              {/* Form Status */}
              {formStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-sm border ${
                    formStatus.type === "success"
                      ? "bg-teal-100/50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border-teal-200/30 dark:border-teal-700/30"
                      : "bg-red-100/50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200/30 dark:border-red-700/30"
                  }`}
                >
                  {formStatus.type === "success" ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span>{formStatus.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300/30 dark:border-slate-600/30 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-100/20 dark:bg-slate-800/30 backdrop-blur-sm text-slate-900 dark:text-slate-100 transition-colors placeholder-slate-500 dark:placeholder-slate-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300/30 dark:border-slate-600/30 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-100/20 dark:bg-slate-800/30 backdrop-blur-sm text-slate-900 dark:text-slate-100 transition-colors placeholder-slate-500 dark:placeholder-slate-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300/30 dark:border-slate-600/30 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-100/20 dark:bg-slate-800/30 backdrop-blur-sm text-slate-900 dark:text-slate-100 transition-colors placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300/30 dark:border-slate-600/30 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-slate-100/20 dark:bg-slate-800/30 backdrop-blur-sm text-slate-900 dark:text-slate-100 transition-colors resize-none placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
