"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience({ id, isActive }) {
  const experienceData = {
    title: "Full Stack Developer",
    company: "IVY Knowledge Service Pvt Ltd",
    period: "September 2024 - Present",
    description:
      "IVY Knowledge Services Pvt. Ltd is a leading data analytics training institute operating as Ivy Professional School.",
    responsibilities: [
      "Integrated AI-powered chatbot features for resolving user queries on topics like Data Science, Data Engineering, and Power BI.",
      "Developed an AI-based quiz system generating questions based on selected topics and subtopics.",
      "Implemented an AI-driven review system analyzing quiz performance and offering personalized improvement suggestions.",
      "Built a dynamic lesson plan feature that unlocks quizzes upon completion of daily lessons to encourage progressive learning.",
      "Created an AI-powered resume builder with ATS score analysis and skill scoring for optimized resume building.",
      "Collaborated with Agile teams, managing repositories and project workflows using GitHub.",
    ],
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
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-dark dark:text-blue-medium">Work Experience</h2>
        </motion.div>

        <motion.div variants={item}>
          <Card className="overflow-hidden border-blue-light/30 dark:border-blue-gray/30 bg-white/80 dark:bg-blue-dark/80 backdrop-blur-sm">
            <CardHeader className="bg-blue-pale/30 dark:bg-blue-gray/20">
              <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-blue-dark dark:text-blue-light">
                <span>{experienceData.title}</span>
                <span className="text-sm font-normal text-blue-gray dark:text-blue-light/70">
                  {experienceData.period}
                </span>
              </CardTitle>
              <CardDescription className="text-lg font-medium text-blue-medium dark:text-blue-medium">
                {experienceData.company}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-blue-dark dark:text-blue-light">{experienceData.description}</p>
              <ul className="space-y-2 list-disc pl-5">
                {experienceData.responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-blue-gray dark:text-blue-light/80"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
