"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-blue-light/30 dark:border-blue-gray/30 bg-blue-pale/30 dark:bg-blue-dark/80"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-blue-dark dark:text-blue-light">&copy; {currentYear} Raj Sharma. All rights reserved.</p>
        <p className="text-sm text-blue-gray dark:text-blue-light/70 mt-2">Built with Next.js and Framer Motion</p>
      </div>
    </motion.footer>
  )
}
