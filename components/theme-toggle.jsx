"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden rounded-full border-blue-light bg-blue-pale/50 dark:bg-blue-dark/50 dark:border-blue-gray"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "dark" ? <Moon className="h-5 w-5 text-blue-medium" /> : <Sun className="h-5 w-5 text-blue-dark" />}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
