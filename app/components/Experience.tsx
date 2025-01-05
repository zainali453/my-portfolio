'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Techmutator",
      period: "June 2023 - Present",
      responsibilities: [
        "Led the development and deployment of enterprise solutions utilizing Azure and Active Directory.",
        "Integrated Google Workspace APIs for effective user management and streamlined enterprise processes.",
        "Designed and developed Chrome Extensions for real-time data collection, leveraging WebSockets and React Flow for visualization.",
        "Utilized ELK.js for advanced graph visualizations, enhancing data analysis and presentation.",
        "Managed deployment and server setup on Linux, ensuring robust and efficient operations."
      ]
    },
    {
      title: "Scholarship Recommendation Project",
      company: "FAST NUCES",
      period: "September 2023 - May 2024",
      responsibilities: [
        "Developed a MERN stack-based platform for recommending scholarships.",
        "Employed Puppeteer for scraping scholarship-related feeds and data from LinkedIn, Twitter, and a dedicated scholarship portal.",
        "Implemented content-based filtering algorithms to match and recommend relevant scholarships to users based on their interests and keywords."
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="mr-2 h-4 w-4" />
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

