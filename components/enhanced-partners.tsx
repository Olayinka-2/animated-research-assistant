"use client"

import { motion } from "framer-motion"
import { Star, Award, CheckCircle } from "lucide-react"

const partners = [
  {
    name: "Girl Child Foundation",
    logo: "GCF",
    description: "Non-profit organization",
    project: "Educational Platform",
  },
  {
    name: "London Institute",
    logo: "LI",
    description: "Educational institution",
    project: "Learning Management System",
  },
  {
    name: "Partite Dynamic Enterprise",
    logo: "PDE",
    description: "Business solutions",
    project: "Enterprise Software",
  },
]

export function EnhancedPartners() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <h3 className="text-gray-400 text-sm font-medium tracking-wider">TRUSTED PARTNERS</h3>
            <Star className="w-5 h-5 text-yellow-400" />
          </div>

          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 max-w-5xl mx-auto border border-gray-700/50">
            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center space-y-3 p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25"
                  >
                    <span className="text-white text-sm font-bold text-center px-2">{partner.logo}</span>
                  </motion.div>
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-lg mb-1">{partner.name}</h4>
                    <p className="text-gray-400 text-sm mb-2">{partner.description}</p>
                    <div className="flex items-center justify-center space-x-1 text-green-400 text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>{partner.project}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center space-x-8 mt-8 pt-6 border-t border-gray-700/50"
            >
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Certified Partners</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">100% Success Rate</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
