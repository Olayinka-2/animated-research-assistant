"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"

export function AboutMission() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Mission */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center"
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses worldwide by delivering innovative, scalable, and reliable software solutions that
                drive digital transformation and create lasting value for our clients and their customers.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <Eye className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the global leader in software development partnerships, recognized for our innovation, quality,
                and commitment to client success in an increasingly digital world.
              </p>
            </div>
          </motion.div>

          {/* Core Principles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Core Principles</h3>

            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Client-First Approach",
                description: "Every decision we make is guided by what's best for our clients' success",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Continuous Innovation",
                description: "We constantly explore new technologies and methodologies to stay ahead",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Quality Excellence",
                description: "We maintain the highest standards in every aspect of our work",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: "Transparent Communication",
                description: "Open, honest, and clear communication builds trust and success",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 bg-gradient-to-r ${principle.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {principle.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{principle.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
