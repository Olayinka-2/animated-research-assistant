"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Mail, Calendar } from "lucide-react"
import { useState } from "react"

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-2xl w-80"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-400 text-sm mb-6">Ready to start your project? Let's discuss your requirements.</p>

            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                className="w-full flex items-center space-x-3 p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors text-left"
              >
                <Calendar className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-white font-medium">Schedule a Call</div>
                  <div className="text-gray-400 text-xs">Book a free consultation</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                className="w-full flex items-center space-x-3 p-3 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition-colors text-left"
              >
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-white font-medium">Call Now</div>
                  <div className="text-gray-400 text-xs">+1 (555) 123-4567</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                className="w-full flex items-center space-x-3 p-3 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors text-left"
              >
                <Mail className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white font-medium">Send Email</div>
                  <div className="text-gray-400 text-xs">contact@binarify.com</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Contact Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 30px rgba(59, 130, 246, 0.5)",
            "0 0 20px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          scale: { duration: 0.2 },
        }}
        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
