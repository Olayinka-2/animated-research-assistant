"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Happy Clients", value: 150, suffix: "+" },
  { label: "Team Members", value: 50, suffix: "+" },
  { label: "Countries Served", value: 15, suffix: "+" },
  { label: "Years of Experience", value: 4, suffix: "" },
  { label: "Technologies Mastered", value: 25, suffix: "+" },
]

function CounterAnimation({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function AboutStats() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 text-center group"
            >
              {/* Animated Background */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)",
                    "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1))",
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), transparent)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10">
                {/* Number */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <CounterAnimation target={stat.value} suffix={stat.suffix} />
                </motion.div>

                {/* Label */}
                <h3 className="text-white font-semibold text-lg">{stat.label}</h3>

                {/* Animated Underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "50px" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mt-4 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
