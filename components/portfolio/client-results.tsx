"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, DollarSign, Clock, Award, Target } from "lucide-react"

const results = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Business Growth",
    description: "Average revenue increase achieved by our clients after implementing our solutions",
    value: "250%",
    color: "from-green-500 to-emerald-500",
    details: ["Revenue Growth", "Market Expansion", "Operational Efficiency"],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User Engagement",
    description: "Improvement in user engagement and retention rates across all platforms",
    value: "180%",
    color: "from-blue-500 to-cyan-500",
    details: ["User Retention", "Session Duration", "Active Users"],
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Time Savings",
    description: "Reduction in manual processes and operational overhead through automation",
    value: "65%",
    color: "from-purple-500 to-pink-500",
    details: ["Process Automation", "Workflow Optimization", "Task Efficiency"],
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Cost Reduction",
    description: "Average cost savings achieved through optimized systems and processes",
    value: "40%",
    color: "from-orange-500 to-red-500",
    details: ["Operational Costs", "Infrastructure Savings", "Resource Optimization"],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Success Rate",
    description: "Project completion rate with full client satisfaction and requirements met",
    value: "98%",
    color: "from-yellow-500 to-orange-500",
    details: ["On-Time Delivery", "Quality Standards", "Client Satisfaction"],
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Goal Achievement",
    description: "Percentage of client business objectives successfully achieved or exceeded",
    value: "95%",
    color: "from-indigo-500 to-purple-500",
    details: ["Business Objectives", "KPI Targets", "ROI Goals"],
  },
]

export function ClientResults() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900/30 to-transparent">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Results</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Measurable impact and tangible results that demonstrate the value we deliver to our clients
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
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
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${result.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
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
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${result.color} flex items-center justify-center text-white shadow-lg mx-auto group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {result.icon}
                    </div>
                  </motion.div>

                  {/* Value */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                    className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${result.color} mb-4`}
                  >
                    {result.value}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-white text-xl font-bold mb-3">{result.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{result.description}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    {result.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * detailIndex }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${result.color}`} />
                        <span className="text-gray-300 text-xs">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${result.color} mx-auto mt-6 rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-white text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve measurable growth and success with our proven solutions.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
