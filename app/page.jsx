"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for the 3D model with a longer timeout
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // Increased to 3 seconds to give more time for model loading

    return () => clearTimeout(timer)
  }, [])

  const handleSetActive = (section) => {
    setActiveSection(section)
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-background z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="text-4xl font-bold text-primary"
            >
              Loading...
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <Navbar activeSection={activeSection} setActiveSection={handleSetActive} />

      <HeroSection id="home" isActive={activeSection === "home"} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-8"
      >
        <Experience id="experience" isActive={activeSection === "experience"} />
        <Projects id="projects" isActive={activeSection === "projects"} />
        <Skills id="skills" isActive={activeSection === "skills"} />
        <Education id="education" isActive={activeSection === "education"} />
        <Contact id="contact" isActive={activeSection === "contact"} />
      </motion.div>

      <Footer />
    </main>
  )
}
