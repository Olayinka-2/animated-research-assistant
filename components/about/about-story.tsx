"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"

export function AboutStory() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From humble beginnings to global impact - the journey of Binarify
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded with a vision to bridge the gap between innovative technology and business success, Binarify
                began as a small team of passionate developers who believed in the transformative power of software.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                What started as a mission to help local businesses embrace digital transformation has evolved into a
                global partnership network, serving clients across continents with cutting-edge software solutions.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we continue to push boundaries, explore new technologies, and deliver solutions that not only
                meet current needs but anticipate future challenges.
              </p>
            </div>

            {/* Key Milestones */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                { icon: <Calendar className="w-6 h-6" />, label: "Founded", value: "2020" },
                { icon: <Users className="w-6 h-6" />, label: "Team Members", value: "50+" },
                { icon: <Trophy className="w-6 h-6" />, label: "Projects Delivered", value: "200+" },
                { icon: <MapPin className="w-6 h-6" />, label: "Countries Served", value: "15+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: "Company Founded",
                  description: "Started with a vision to transform businesses through technology",
                },
                {
                  year: "2021",
                  title: "First Major Client",
                  description: "Delivered our first enterprise-level software solution",
                },
                {
                  year: "2022",
                  title: "Global Expansion",
                  description: "Extended services to international markets",
                },
                {
                  year: "2023",
                  title: "Innovation Hub",
                  description: "Established R&D division for emerging technologies",
                },
                {
                  year: "2024",
                  title: "Industry Recognition",
                  description: "Recognized as a leading software development partner",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-4"
                >
                  {/* Timeline Line */}
                  {index < 4 && (
                    <div className="absolute left-6 top-12 w-px h-16 bg-gradient-to-b from-blue-500 to-transparent" />
                  )}

                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex-shrink-0"
                  >
                    {milestone.year.slice(-2)}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">{milestone.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
