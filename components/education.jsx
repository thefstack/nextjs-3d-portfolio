"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education({ id, isActive }) {
  const educationData = {
    degree: "B.Sc (Hons.) Computer Science",
    institution: "University of Delhi",
    period: "2021-2024",
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id={id} className="py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="space-y-8"
      >
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-dark dark:text-blue-medium">Education</h2>
        </motion.div>

        <motion.div variants={item} className="max-w-md mx-auto">
          <Card className="border-blue-light/30 dark:border-blue-gray/30 bg-white/80 dark:bg-blue-dark/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4 bg-blue-pale/30 dark:bg-blue-gray/20">
              <div className="bg-blue-medium/10 dark:bg-blue-medium/20 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-blue-dark dark:text-blue-medium" />
              </div>
              <div>
                <CardTitle className="text-blue-dark dark:text-blue-light">{educationData.degree}</CardTitle>
                <CardDescription className="text-base text-blue-gray dark:text-blue-light/70">
                  {educationData.institution}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-blue-gray dark:text-blue-light/70">{educationData.period}</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
