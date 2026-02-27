"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects({ id, isActive }) {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      title: "TheFStack Portfolio",
      description: "Interactive portfolio mimicking Windows 10 desktop environment with AI features using OpenAI APIs.",
      tags: ["featured", "next.js", "react", "ai"],
      demoLink: "#",
      featured: true,
      details: [
        "Developed an interactive portfolio mimicking the Windows 10 desktop environment, providing a unique and engaging user experience.",
        "Showcases a range of full-stack projects, including Rocket Health, RSMEDS Interface, and Roche Biotique, highlighting proficiency in modern web technologies.",
        "Integrated AI features using OpenAI APIs to implement chatbot functionality and natural language processing capabilities.",
        "Utilized Next.js for both frontend and backend development, ensuring seamless communication and optimized performance.",
        "Managed project versioning using GitHub and collaborated in an Agile workflow for efficient project delivery.",
        "Demonstrated expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, and AI integration.",
      ],
    },
    {
      title: "PrepAI",
      description: "AI-powered learning platform with chatbot, quiz system, and resume builder.",
      tags: ["featured", "ai", "react", "node.js"],
      demoLink: "#",
      featured: true,
      details: [
        "Integrated AI-powered chatbot features where users can select specific topics related to Data Science, Data Engineering, and Power BI to resolve their queries.",
        "Developed an AI-based quiz system where users can test their knowledge, with AI-generated questions based on selected topics and subtopics.",
        "Implemented an AI-driven review system to analyze quiz performance, highlighting strengths and weak points with personalized improvement suggestions.",
        "Built a dynamic lesson plan feature that unlocks quizzes after completing daily lessons, ensuring progressive learning.",
        "Developed an AI-powered resume builder with ATS score analysis and skill scoring, allowing users to optimize their resumes effectively.",
        "Collaborated in Agile teams, managing projects via GitHub.",
      ],
    },
    {
      title: "PDF Splitter",
      description: "Web application for splitting PDF files with drag-and-drop interface.",
      tags: ["react", "node.js", "express"],
      demoLink: "#",
      details: [
        "Built a web application that allows users to split PDF files into individual pages or custom ranges.",
        "Implemented a drag-and-drop interface for easy file uploading and a preview feature to view PDF pages.",
        "Used React.js for the frontend and Node.js with Express for the backend processing.",
        "Integrated PDF.js for rendering previews and pdf-lib for manipulation operations.",
        "Ensured secure file handling with temporary storage and automatic cleanup.",
      ],
    },
    {
      title: "Real Time Chat Application",
      description: "Chat app with Socket.io and Strapi for real-time communication.",
      tags: ["socket.io", "react", "strapi"],
      demoLink: "#",
      details: [
        "Developed a real-time chat app where users can sign up, log in, and communicate in a shared chat room.",
        "Enabled instant messaging using Socket.io, ensuring smooth, real-time communication.",
        "Integrated Strapi as a headless CMS backend for user and message management.",
        "Built a secure authentication system for user registration and login.",
      ],
    },
    {
      title: "Rocket Health",
      description: "Static healthcare-themed web application with clean UI and minimal design.",
      tags: ["html", "css"],
      demoLink: "#",
      details: [
        "Developed a static healthcare-themed web application with a focus on clean UI and minimal design.",
        "Implemented a typing text animation for improved interactivity using pure CSS.",
        "Structured entirely using HTML and CSS without any JavaScript frameworks.",
        "Designed an informative layout to clearly present health-related content.",
        "Emphasized performance and responsiveness for fast user experience.",
      ],
    },
    {
      title: "Basic E-Commerce API",
      description: "API with user authentication, product management, and JWT security.",
      tags: ["node.js", "mongodb", "express"],
      demoLink: "#",
      details: [
        "Implemented secure user authentication with OTP-based email verification.",
        "Designed and developed CRUD operations for product management.",
        "Secured API endpoints using JWT-based token authentication.",
        "Integrated MongoDB for efficient data storage and retrieval.",
        "Utilized Nodemailer for sending verification emails during user registration.",
      ],
    },
  ]

  const filteredProjects =
    activeTab === "all"
      ? projects
      : activeTab === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.tags.includes(activeTab))

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

  const tabs = [
    { id: "all", label: "All" },
    { id: "featured", label: "Featured" },
    { id: "react", label: "React" },
    { id: "next.js", label: "Next.js" },
    { id: "ai", label: "AI" },
    { id: "node.js", label: "Node.js" },
  ]

  return (
    <section id={id} className="py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
        className="space-y-8"
      >
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-dark dark:text-blue-medium">Projects</h2>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className={`m-1 ${
                activeTab === tab.id
                  ? "bg-blue-medium hover:bg-blue-dark text-white"
                  : "border-blue-gray text-blue-dark hover:border-blue-medium hover:text-blue-medium dark:border-blue-gray dark:text-blue-light"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </motion.div>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-blue-light/30 hover:border-blue-medium/50 transition-colors dark:border-blue-gray/30 dark:hover:border-blue-medium/50 bg-white/80 dark:bg-blue-dark/80 backdrop-blur-sm">
                <CardHeader className="bg-blue-pale/30 dark:bg-blue-gray/20">
                  <CardTitle className="flex items-center gap-2 text-blue-dark dark:text-blue-light">
                    {project.title}
                    {project.featured && (
                      <Badge variant="default" className="ml-2 bg-blue-medium px-1 text-white">
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-blue-gray dark:text-blue-light/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 list-disc pl-5">
                    {project.details.slice(0, 3).map((detail, i) => (
                      <li key={i} className="text-sm text-blue-gray dark:text-blue-light/70">
                        {detail}
                      </li>
                    ))}
                    {project.details.length > 3 && (
                      <li className="text-sm text-blue-gray dark:text-blue-light/70">And more...</li>
                    )}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 bg-blue-pale/20 dark:bg-blue-gray/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs px-1 border-blue-medium/50 text-blue-dark dark:text-blue-light dark:border-blue-light/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 p-2 border-blue-gray text-blue-dark hover:border-blue-medium hover:text-blue-medium dark:border-blue-gray dark:text-blue-light"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-2 p-2 ml-auto bg-blue-medium hover:bg-blue-dark text-white"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
