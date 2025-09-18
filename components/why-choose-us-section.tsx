"use client"

import { motion } from "framer-motion"
import { BarChart3, Award, Trophy, Folder, MessageCircle, Sparkles, Star } from "lucide-react"
import { useState } from "react"

const reasons = [
  {
    id: 1,
    title: "Collaborative approach",
    description:
      "We work closely with your team, ensuring transparent communication and shared ownership of project success",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    particles: "blue",
  },
  {
    id: 2,
    title: "Commitment to success",
    description: "Your success is our success. We're dedicated to delivering solutions that drive real business value",
    icon: <Award className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    particles: "blue",
  },
  {
    id: 3,
    title: "Innovative Solution",
    description: "Cutting-edge technologies and creative problem-solving approaches to tackle your unique challenges",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    particles: "blue",
  },
  {
    id: 4,
    title: "Proven Track Record",
    description: "Years of successful project deliveries across diverse industries with satisfied clients worldwide",
    icon: <Folder className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    particles: "blue",
  },
  {
    id: 5,
    title: "Strong Communications",
    description: "Clear, consistent, and proactive communication throughout the entire development lifecycle",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    particles: "blue",
  },
]

export function WhyChooseUsSection() {
  const [hoveredReason, setHoveredReason] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: Math.random() * 800,
                opacity: 0.1,
              }}
              animate={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
                y: Math.random() * 800,
                opacity: [0.1, 0.3, 0.1],
                rotate: 360,
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {i % 2 === 0 ? (
                <Star className="w-3 h-3 text-blue-400" />
              ) : (
                <Sparkles className="w-3 h-3 text-blue-400" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent bg-300% mb-4 leading-tight"
          >
            Why Choose Us as Your Software Development Solution Partner
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Reasons List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredReason(reason.id)}
              onHoverEnd={() => setHoveredReason(null)}
              className="group relative"
            >
              {/* Floating Glow Effect */}
              <motion.div
                animate={{
                  scale: hoveredReason === reason.id ? [1, 1.05, 1] : 1,
                  opacity: hoveredReason === reason.id ? [0.2, 0.4, 0.2] : 0,
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${reason.color} blur-xl`}
              />

              {/* Main Reason Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  z: 20,
                }}
                className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-full px-8 py-6 border border-gray-700/50 shadow-2xl group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  animate={{
                    background:
                      hoveredReason === reason.id
                        ? [
                            "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))",
                            "linear-gradient(90deg, rgba(37, 99, 235, 0.1), rgba(29, 78, 216, 0.1))",
                            "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))",
                          ]
                        : "transparent",
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 rounded-full"
                />

                {/* Sparkle Effects on Hover */}
                {hoveredReason === reason.id && (
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 2, 0],
                          x: Math.random() * 600,
                          y: Math.random() * 100,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="relative z-10 flex items-center space-x-6">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {reason.icon}
                    </div>

                    {/* Orbiting Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-20 h-20 border-2 border-dashed border-blue-400/20 rounded-full" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <motion.h3 whileHover={{ scale: 1.02 }} className="text-white text-xl md:text-2xl font-bold mb-2">
                      {reason.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      className="text-gray-400 text-sm md:text-base leading-relaxed"
                    >
                      {reason.description}
                    </motion.p>
                  </div>

                  {/* Animated Number Badge */}
                  <motion.div
                    animate={{
                      scale: hoveredReason === reason.id ? [1, 1.2, 1] : 1,
                      rotate: hoveredReason === reason.id ? [0, 10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 hidden md:block"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {reason.id}
                    </div>
                  </motion.div>
                </div>

                {/* Progress Bar Animation */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${reason.color} rounded-full`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
