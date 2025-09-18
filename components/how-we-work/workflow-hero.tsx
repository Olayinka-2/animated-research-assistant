"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Users, Rocket, CheckCircle } from "lucide-react"
import Link from "next/link"

export function WorkflowHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
            {i % 4 === 0 ? (
              <Code className="w-4 h-4 text-blue-400" />
            ) : i % 4 === 1 ? (
              <Users className="w-3 h-3 text-purple-400" />
            ) : i % 4 === 2 ? (
              <Rocket className="w-3 h-3 text-green-400" />
            ) : (
              <CheckCircle className="w-3 h-3 text-orange-400" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent bg-300% mb-6"
          >
            How We Work
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Our proven methodology transforms your ideas into exceptional software solutions
          </motion.p>

          {/* Animated Process Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 md:space-x-8 mb-12 flex-wrap gap-4"
          >
            {[
              { icon: <Users className="w-6 h-6" />, label: "Discover", color: "from-blue-500 to-blue-600" },
              { icon: <Code className="w-6 h-6" />, label: "Design", color: "from-purple-500 to-purple-600" },
              { icon: <Rocket className="w-6 h-6" />, label: "Develop", color: "from-green-500 to-green-600" },
              { icon: <CheckCircle className="w-6 h-6" />, label: "Deliver", color: "from-orange-500 to-orange-600" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="flex items-center space-x-2"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {step.icon}
                </motion.div>
                <span className="text-white font-medium text-lg hidden md:block">{step.label}</span>
                {index < 3 && (
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="hidden md:block"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-500 ml-4" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/start-project"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
