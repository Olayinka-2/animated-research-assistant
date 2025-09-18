"use client"

import { motion } from "framer-motion"
import { Shield, Bug, Zap, CheckCircle, Eye, Lock } from "lucide-react"

const qaProcesses = [
  {
    title: "Code Review",
    description: "Every line of code is reviewed by senior developers before merging",
    icon: <Eye className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
    metrics: ["100% code coverage", "Peer review required", "Automated checks"],
  },
  {
    title: "Automated Testing",
    description: "Comprehensive test suites run automatically on every code change",
    icon: <Zap className="w-6 h-6" />,
    color: "from-green-500 to-green-600",
    metrics: ["Unit tests", "Integration tests", "E2E tests"],
  },
  {
    title: "Security Audits",
    description: "Regular security assessments to identify and fix vulnerabilities",
    icon: <Lock className="w-6 h-6" />,
    color: "from-red-500 to-red-600",
    metrics: ["OWASP compliance", "Penetration testing", "Vulnerability scans"],
  },
  {
    title: "Performance Testing",
    description: "Load testing and optimization to ensure optimal performance",
    icon: <Zap className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
    metrics: ["Load testing", "Stress testing", "Performance monitoring"],
  },
  {
    title: "Bug Tracking",
    description: "Systematic bug identification, tracking, and resolution process",
    icon: <Bug className="w-6 h-6" />,
    color: "from-orange-500 to-orange-600",
    metrics: ["Issue tracking", "Priority classification", "Resolution SLA"],
  },
  {
    title: "Quality Gates",
    description: "Defined quality checkpoints that must be passed before deployment",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "from-cyan-500 to-cyan-600",
    metrics: ["Quality metrics", "Acceptance criteria", "Sign-off process"],
  },
]

export function QualityAssurance() {
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
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Quality Assurance</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our comprehensive QA process ensures reliable, secure, and high-performance software delivery
          </p>
        </motion.div>

        {/* QA Processes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {qaProcesses.map((process, index) => (
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
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${process.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl group-hover:border-blue-500/30 transition-all duration-500 h-full">
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${process.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {process.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{process.description}</p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {process.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * metricIndex }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
        >
          <h3 className="text-white text-2xl font-bold mb-8 text-center">Our Quality Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Code Coverage", value: "95%", color: "text-green-400" },
              { label: "Bug Detection Rate", value: "99.5%", color: "text-blue-400" },
              { label: "Performance Score", value: "A+", color: "text-purple-400" },
              { label: "Security Rating", value: "5/5", color: "text-orange-400" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  className={`text-4xl font-bold ${metric.color} mb-2`}
                >
                  {metric.value}
                </motion.div>
                <div className="text-gray-400 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
