"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Trophy, Users, Globe, Code, Clock, Star } from "lucide-react"

const stats = [
  {
    label: "Projects Completed",
    value: 250,
    suffix: "+",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Happy Clients",
    value: 150,
    suffix: "+",
    icon: <Users className="w-6 h-6" />,
    color: "from-green-500 to-green-600",
  },
  {
    label: "Countries Served",
    value: 15,
    suffix: "+",
    icon: <Globe className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
  },
  {
    label: "Years Experience",
    value: 4,
    suffix: "",
    icon: <Clock className="w-6 h-6" />,
    color: "from-orange-500 to-orange-600",
  },
  {
    label: "Client Satisfaction",
    value: 98,
    suffix: "%",
    icon: <Star className="w-6 h-6" />,
    color: "from-pink-500 to-pink-600",
  },
  {
    label: "Awards Won",
    value: 12,
    suffix: "+",
    icon: <Trophy className="w-6 h-6" />,
    color: "from-cyan-500 to-cyan-600",
  },
]

function CounterAnimation({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
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

export function CompanyStats() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional software solutions
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
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 text-center group relative overflow-hidden"
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

              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                {[...Array(6)].map((_, i) => (
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
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="mb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg mx-auto`}
                  >
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2"
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
                  className={`h-1 bg-gradient-to-r ${stat.color} mx-auto mt-4 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
