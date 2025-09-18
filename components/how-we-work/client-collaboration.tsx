"use client"

import { motion } from "framer-motion"
import { MessageCircle, Video, FileText, Calendar, Users, Zap } from "lucide-react"
import Link from "next/link"

const collaborationTools = [
  {
    title: "Regular Communication",
    description: "Daily updates and weekly progress reports keep you informed every step of the way",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    features: ["Daily standups", "Weekly reports", "Instant messaging", "Email updates"],
  },
  {
    title: "Video Conferences",
    description: "Face-to-face meetings for important discussions, demos, and milestone reviews",
    icon: <Video className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    features: ["Sprint demos", "Milestone reviews", "Planning sessions", "Q&A sessions"],
  },
  {
    title: "Documentation Sharing",
    description: "Comprehensive documentation and real-time collaboration on project materials",
    icon: <FileText className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    features: ["Shared documents", "Version control", "Real-time editing", "Knowledge base"],
  },
  {
    title: "Project Management",
    description: "Transparent project tracking with access to timelines, tasks, and progress",
    icon: <Calendar className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    features: ["Task tracking", "Timeline visibility", "Progress dashboards", "Milestone tracking"],
  },
  {
    title: "Collaborative Workspace",
    description: "Dedicated project spaces where teams can collaborate and share resources",
    icon: <Users className="w-8 h-8" />,
    color: "from-pink-500 to-pink-600",
    features: ["Team channels", "File sharing", "Resource libraries", "Discussion boards"],
  },
  {
    title: "Rapid Feedback",
    description: "Quick feedback loops ensure we stay aligned with your vision and requirements",
    icon: <Zap className="w-8 h-8" />,
    color: "from-cyan-500 to-cyan-600",
    features: ["Instant feedback", "Quick iterations", "Rapid prototyping", "Agile responses"],
  },
]

export function ClientCollaboration() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Collaboration</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We believe in transparent, collaborative partnerships that ensure your vision becomes reality
          </p>
        </motion.div>

        {/* Collaboration Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {collaborationTools.map((tool, index) => (
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
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tool.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
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

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="mb-6">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {tool.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3">{tool.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{tool.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tool.color}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${tool.color} mt-6 rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
        >
          <h3 className="text-white text-2xl font-bold mb-8 text-center">Our Collaboration Promise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "Complete visibility into project progress, challenges, and decisions",
                icon: "👁️",
              },
              {
                title: "Responsiveness",
                description: "Quick response times and proactive communication on all matters",
                icon: "⚡",
              },
              {
                title: "Partnership",
                description: "We work as an extension of your team, not just a vendor",
                icon: "🤝",
              },
            ].map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.7 }}
                  className="text-4xl mb-4"
                >
                  {promise.icon}
                </motion.div>
                <h4 className="text-white font-semibold text-lg mb-2">{promise.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-white text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and show you how our proven process can bring your vision to life.
          </p>
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
              Schedule a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
