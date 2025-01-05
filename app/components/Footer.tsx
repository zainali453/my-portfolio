'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="py-6 bg-background border-t border-border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Zain Ali. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

