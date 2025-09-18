"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, FileText, Code, Bug, Rocket, Settings } from "lucide-react"

const detailedSteps = [
  {
    phase: "Discovery",
    title: "Requirements Gathering",
    activities: [
      "Stakeholder interviews and workshops",
      "Business requirements analysis",
      "Technical feasibility assessment",
      "Project scope definition",
      "Risk assessment and mitigation planning",
    ],
    deliverables: ["Project Charter", "Requirements Document", "Technical Specification"],
    icon: <Users className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    phase: "Design",
    title: "Solution Architecture",
    activities: [
      "System architecture design",
      "Database schema planning",
      "UI/UX wireframes and mockups",
      "API design and documentation",
      "Security and performance planning",
    ],
    deliverables: ["Architecture Document", "Design Mockups", "API Specifications"],
    icon: <FileText className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    phase: "Development",
    title: "Implementation",
    activities: [
      "Agile development sprints",
      "Code reviews and pair programming",
      "Continuous integration setup",
      "Regular client demos and feedback",
      "Documentation and code commenting",
    ],
    deliverables: ["Working Software", "Source Code", "Technical Documentation"],
    icon: <Code className="w-6 h-6" />,
    color: "from-green-500 to-green-600",
  },
  {
    phase: "Testing",
    title: "Quality Assurance",
    activities: [
      "Unit and integration testing",
      "Performance and load testing",
      "Security vulnerability assessment",
      "User acceptance testing",
      "Bug fixing and optimization",
    ],
    deliverables: ["Test Reports", "Bug Reports", "Performance Metrics"],
    icon: <Bug className="w-6 h-6" />,
    color: "from-orange-500 to-orange-600",
  },
  {
    phase: "Deployment",
    title: "Go-Live",
    activities: [
      "Production environment setup",
      "Data migration and validation",
      "Deployment automation",
      "Monitoring and alerting setup",
      "User training and handover",
    ],
    deliverables: ["Live Application", "Deployment Guide", "User Manual"],
    icon: <Rocket className="w-6 h-6" />,
    color: "from-red-500 to-red-600",
  },
  {
    phase: "Support",
    title: "Maintenance",
    activities: [
      "24/7 monitoring and support",
      "Regular updates and patches",
      "Performance optimization",
      "Feature enhancements",
      "Backup and disaster recovery",
    ],
    deliverables: ["Support Reports", "Update Releases", "Maintenance Schedule"],
    icon: <Settings className="w-6 h-6" />,
    color: "from-cyan-500 to-cyan-600",
  },
]

export function DetailedProcess() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Detailed Process Breakdown</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Deep dive into each phase of our development process with specific activities and deliverables
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 via-red-500 to-cyan-500 opacity-60 hidden lg:block"
          />

          <div className="space-y-16">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"} relative`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotateY: index % 2 === 0 ? 5 : -5,
                    }}
                    className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl hover:border-blue-500/30 transition-all duration-500 group"
                  >
                    {/* Phase Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <div className="text-blue-400 font-medium text-sm uppercase tracking-wider">{step.phase}</div>
                        <h3 className="text-white text-2xl font-bold">{step.title}</h3>
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, actIndex) => (
                          <motion.li
                            key={actIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * actIndex }}
                            className="flex items-start space-x-3 text-gray-400"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{activity}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, delIndex) => (
                          <motion.span
                            key={delIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * delIndex }}
                            className={`px-3 py-1 bg-gradient-to-r ${step.color} bg-opacity-20 rounded-full text-sm font-medium text-white border border-current border-opacity-30`}
                          >
                            {deliverable}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 20px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("purple") ? "#a855f7" : step.color.includes("green") ? "#10b981" : step.color.includes("orange") ? "#f97316" : step.color.includes("red") ? "#ef4444" : "#06b6d4"}`,
                        `0 0 40px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("purple") ? "#a855f7" : step.color.includes("green") ? "#10b981" : step.color.includes("orange") ? "#f97316" : step.color.includes("red") ? "#ef4444" : "#06b6d4"}`,
                        `0 0 20px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("purple") ? "#a855f7" : step.color.includes("green") ? "#10b981" : step.color.includes("orange") ? "#f97316" : step.color.includes("red") ? "#ef4444" : "#06b6d4"}`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl`}
                  >
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
