"use client"

import { motion } from "framer-motion"
import { MessageCircle, FileText, Users, Calendar, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Initial Consultation",
    description: "We'll discuss your project requirements, goals, and vision",
    timeline: "Within 24 hours",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Project Proposal",
    description: "You'll receive a detailed proposal with timeline and cost estimates",
    timeline: "Within 2-3 days",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Assignment",
    description: "We'll assemble the perfect team for your specific project needs",
    timeline: "Within 1 week",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Project Kickoff",
    description: "Development begins with regular updates and milestone reviews",
    timeline: "Within 2 weeks",
  },
]

export function ProjectProcess() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Happens Next?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            After you submit your project request, here's what you can expect
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"
            />

            {/* Process Steps */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start relative"
                >
                  {/* Step Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg z-10 flex-shrink-0"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Content */}
                  <div className="ml-8">
                    <h3 className="text-white text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 mb-2">{step.description}</p>
                    <div className="flex items-center space-x-2 text-blue-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">{step.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
