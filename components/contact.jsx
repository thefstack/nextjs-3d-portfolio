"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact({ id, isActive }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, text: "Kolkata, India", label: "Location" },
    {
      icon: <Mail className="h-5 w-5" />,
      text: "rajsharmahwh19@gmail.com",
      href: "mailto:rajsharmahwh19@gmail.com",
      label: "Email",
    },
    { icon: <Phone className="h-5 w-5" />, text: "+91 9142892678", href: "tel:+919142892678", label: "Phone" },
    {
      icon: <Linkedin className="h-5 w-5" />,
      text: "linkedin.com/in/thefstack",
      href: "https://linkedin.com/in/thefstack",
      label: "LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      text: "github.com/thefstack",
      href: "https://github.com/thefstack",
      label: "GitHub",
    },
  ]

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
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-dark dark:text-blue-medium">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={item}>
            <Card className="h-full border-blue-light/30 dark:border-blue-gray/30 bg-white/80 dark:bg-blue-dark/80 backdrop-blur-sm">
              <CardHeader className="bg-blue-pale/30 dark:bg-blue-gray/20">
                <CardTitle className="text-blue-dark dark:text-blue-light">Get In Touch</CardTitle>
                <CardDescription className="text-blue-gray dark:text-blue-light/70">
                  Fill out the form and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-blue-dark dark:text-blue-light">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="border-blue-light/50 p-2 focus:border-blue-medium dark:border-blue-gray/50 dark:focus:border-blue-medium bg-white/50 dark:bg-blue-dark/50 text-blue-dark dark:text-blue-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-blue-dark dark:text-blue-light">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="border-blue-light/50 p-2 focus:border-blue-medium dark:border-blue-gray/50 dark:focus:border-blue-medium bg-white/50 dark:bg-blue-dark/50 text-blue-dark dark:text-blue-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-blue-dark dark:text-blue-light">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message"
                      rows={5}
                      className="border-blue-light/50 p-2 focus:border-blue-medium dark:border-blue-gray/50 dark:focus:border-blue-medium bg-white/50 dark:bg-blue-dark/50 text-blue-dark dark:text-blue-light"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-medium hover:bg-blue-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-500 text-center mt-2"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full border-blue-light/30 dark:border-blue-gray/30 bg-white/80 dark:bg-blue-dark/80 backdrop-blur-sm">
              <CardHeader className="bg-blue-pale/30 dark:bg-blue-gray/20">
                <CardTitle className="text-blue-dark dark:text-blue-light">Contact Information</CardTitle>
                <CardDescription className="text-blue-gray dark:text-blue-light/70">
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6 mt-4">
                  {contactInfo.map((info, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className="bg-blue-medium/10 dark:bg-blue-medium/20 p-2 rounded-full">
                        <div className="text-blue-dark dark:text-blue-medium">{info.icon}</div>
                      </div>
                      <div>
                        <p className="text-sm text-blue-gray dark:text-blue-light/70">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-medium text-blue-dark hover:text-blue-medium dark:text-blue-light dark:hover:text-blue-medium transition-colors"
                          >
                            {info.text}
                          </a>
                        ) : (
                          <p className="font-medium text-blue-dark dark:text-blue-light">{info.text}</p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <p className="text-sm text-blue-gray dark:text-blue-light/70 mb-2">Additional Information</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-blue-dark dark:text-blue-light">
                      <span className="font-medium">Location Preference:</span>
                      <span>Open to relocate</span>
                    </li>
                    <li className="flex items-center gap-2 text-blue-dark dark:text-blue-light">
                      <span className="font-medium">Availability:</span>
                      <span>60 days notice period</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
