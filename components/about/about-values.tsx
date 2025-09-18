"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Users, Globe, Award, Rocket } from "lucide-react"

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity",
    description: "We build trust through honest communication and ethical practices",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Innovation",
    description: "We embrace cutting-edge technologies to solve complex challenges",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaboration",
    description: "We work as partners, not just vendors, to achieve shared success",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    description: "We create solutions that make a positive difference worldwide",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description: "We strive for perfection in every project and interaction",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Growth",
    description: "We continuously evolve and help our clients reach new heights",
    color: "from-pink-500 to-pink-600",
  },
]

export function AboutValues() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do and shape our company culture
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
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
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl group-hover:border-blue-500/30 transition-all duration-500 h-full">
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

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="mb-6">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-white shadow-lg mx-auto group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {value.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>

                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${value.color} mx-auto mt-6 rounded-full`}
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
