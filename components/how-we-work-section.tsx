"use client"

import { motion } from "framer-motion"
import { Sparkles, CheckCircle, Code, TestTube, Rocket } from "lucide-react"

const workflowSteps = [
  {
    title: "We Do Requirement Analysis",
    description: "Understanding your vision and translating it into actionable requirements",
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Software Design And Development",
    description: "Creating robust, scalable solutions using cutting-edge technologies",
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Quality Assurance And Testing",
    description: "Rigorous testing to ensure reliability and performance",
    icon: <TestTube className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-green-400 to-emerald-400",
  },
  {
    title: "Delivery, Success And Support",
    description: "Seamless deployment and ongoing support for your success",
    icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    color: "from-orange-400 to-red-400",
  },
]

export function HowWeWorkSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-gray-300 text-lg sm:text-xl">Tell Us Your Requirements</p>
        </motion.div>

        {/* Animated Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{
                  x: Math.random() * 800,
                  y: Math.random() * 600,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * 800,
                  y: Math.random() * 600,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 opacity-60 hidden sm:block"
          ></motion.div>

          <div className="space-y-8 sm:space-y-16">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 * index,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"} relative`}
              >
                {/* Timeline Card */}
                <div className={`w-full max-w-md ${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"}`}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotateY: index % 2 === 0 ? 2 : -2,
                    }}
                    className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 border border-gray-700/50 shadow-2xl relative overflow-hidden group"
                  >
                    {/* Sparkle Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: Math.random() * 300,
                            y: Math.random() * 200,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>

                    {/* Gradient Border Animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          {step.icon}
                        </motion.div>
                        <div className="text-xl sm:text-2xl font-bold text-white">{index + 1}</div>
                      </div>

                      <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Central Timeline Dot - positioned based on index */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 * index + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className={`absolute z-20 hidden sm:block ${
                    index === 1 || index === 3
                      ? "right-1/2 transform translate-x-1/2"
                      : "left-1/2 transform -translate-x-1/2"
                  }`}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 20px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("purple") ? "#a855f7" : step.color.includes("green") ? "#10b981" : "#f97316"}`,
                        `0 0 40px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("purple") ? "#a855f7" : step.color.includes("green") ? "#10b981" : "#f97316"}`,
                        `0 0 20px ${step.color.includes("blue") ? "#3b82f6" : step.color.includes("purple") ? "#a855f7" : step.color.includes("green") ? "#10b981" : "#f97316"}`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl`}
                  >
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Sparkle Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: Math.random() * 800,
              }}
              animate={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: Math.random() * 800,
                rotate: 360,
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 opacity-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
