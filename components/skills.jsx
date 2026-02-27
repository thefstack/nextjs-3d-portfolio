"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills({ id, isActive }) {
  const skillsData = {
    technical: [
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 65 },
      { name: "Git", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Java", level: 60 },
    ],
    soft: ["Problem-solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"],
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
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-dark dark:text-blue-medium">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={item}>
            <Card className="h-full border-blue-light/30 dark:border-blue-gray/30 bg-white/80 dark:bg-blue-dark/80 backdrop-blur-sm">
              <CardHeader className="bg-blue-pale/30 dark:bg-blue-gray/20">
                <CardTitle className="text-blue-dark dark:text-blue-light">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillsData.technical.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-blue-dark dark:text-blue-light">{skill.name}</span>
                      <span className="text-blue-gray dark:text-blue-light/70">{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-2 w-full bg-blue-pale dark:bg-blue-gray/30 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-dark to-blue-medium rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-blue-light/30 dark:border-blue-gray/30 bg-white/80 dark:bg-blue-dark/80 backdrop-blur-sm">
              <CardHeader className="bg-blue-pale/30 dark:bg-blue-gray/20">
                <CardTitle className="text-blue-dark dark:text-blue-light">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skillsData.soft.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge className="text-base py-2 px-4 bg-blue-medium hover:bg-blue-dark text-white">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
