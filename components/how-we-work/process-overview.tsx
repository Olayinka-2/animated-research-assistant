"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react"

const processSteps = [
  {
    id: 1,
    title: "Discovery & Analysis",
    description: "We dive deep into your requirements, goals, and challenges to create a comprehensive project roadmap",
    icon: <Search className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    duration: "1-2 weeks",
  },
  {
    id: 2,
    title: "Design & Planning",
    description: "Our team creates detailed wireframes, prototypes, and technical architecture for your solution",
    icon: <Palette className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    duration: "2-3 weeks",
  },
  {
    id: 3,
    title: "Development",
    description: "We build your solution using cutting-edge technologies and best practices with regular updates",
    icon: <Code className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    duration: "4-12 weeks",
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "Rigorous testing ensures your software is reliable, secure, and performs optimally",
    icon: <TestTube className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    duration: "1-2 weeks",
  },
  {
    id: 5,
    title: "Deployment",
    description: "We handle the complete deployment process and ensure smooth go-live of your solution",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
    duration: "1 week",
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to keep your software running smoothly and up-to-date",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    color: "from-cyan-500 to-cyan-600",
    duration: "Ongoing",
  },
]

export function ProcessOverview() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Process Overview</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A systematic approach that ensures quality, transparency, and successful project delivery
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="group relative"
            >
              {/* Floating Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl group-hover:border-blue-500/30 transition-all duration-500 h-full">
                {/* Step Number */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                  {step.id}
                </motion.div>

                {/* Sparkle Effects on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        x: Math.random() * 300,
                        y: Math.random() * 200,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="mb-6">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {step.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                    Duration: {step.duration}
                  </div>

                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${step.color} mt-6 rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
