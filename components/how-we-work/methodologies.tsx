"use client"

import { motion } from "framer-motion"
import { Zap, RefreshCw, Shield, Users, Target, Layers } from "lucide-react"

const methodologies = [
  {
    name: "Agile Development",
    description: "Iterative development with regular client feedback and adaptability to changing requirements",
    icon: <Zap className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    features: ["2-week sprints", "Daily standups", "Sprint reviews", "Retrospectives"],
  },
  {
    name: "DevOps Integration",
    description: "Continuous integration and deployment for faster, more reliable software delivery",
    icon: <RefreshCw className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    features: ["CI/CD pipelines", "Automated testing", "Infrastructure as code", "Monitoring"],
  },
  {
    name: "Security First",
    description: "Security considerations integrated throughout the development lifecycle",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-red-600",
    features: ["Security audits", "Penetration testing", "Secure coding", "Compliance"],
  },
  {
    name: "Collaborative Approach",
    description: "Close partnership with clients ensuring alignment and shared ownership",
    icon: <Users className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    features: ["Regular demos", "Client workshops", "Feedback loops", "Transparent communication"],
  },
  {
    name: "Quality Assurance",
    description: "Comprehensive testing strategy ensuring reliable and bug-free software",
    icon: <Target className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    features: ["Unit testing", "Integration testing", "Performance testing", "User acceptance testing"],
  },
  {
    name: "Scalable Architecture",
    description: "Building solutions that grow with your business and handle increasing demands",
    icon: <Layers className="w-8 h-8" />,
    color: "from-cyan-500 to-cyan-600",
    features: ["Microservices", "Cloud-native", "Load balancing", "Auto-scaling"],
  },
]

export function Methodologies() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Methodologies</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Proven approaches and best practices that ensure successful project delivery
          </p>
        </motion.div>

        {/* Methodologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodologies.map((methodology, index) => (
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
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${methodology.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
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
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${methodology.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {methodology.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-white text-xl font-bold mb-3">{methodology.name}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{methodology.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {methodology.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${methodology.color}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${methodology.color} mt-6 rounded-full`}
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
