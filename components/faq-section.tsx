"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, HelpCircle, Sparkles, Star } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    id: 1,
    question: "What types of software development services do you offer?",
    answer:
      "We offer comprehensive software development services including web applications, mobile apps, enterprise software, API development, cloud solutions, and custom software tailored to your specific business needs. Our expertise spans across various technologies and industries.",
  },
  {
    id: 2,
    question: "How long does a typical software development project take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple projects may take 4-8 weeks, while complex enterprise solutions can take 3-6 months or more. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We offer two months of free technical support after project delivery. Beyond that, we provide various maintenance and support packages to ensure your software continues to perform optimally, including bug fixes, updates, and feature enhancements.",
  },
  {
    id: 4,
    question: "What is your development process like?",
    answer:
      "Our process follows four key stages: Requirements Analysis, Software Design & Development, Quality Assurance & Testing, and Delivery & Support. We maintain transparent communication throughout, provide regular updates, and ensure your involvement in key decisions.",
  },
  {
    id: 5,
    question: "Can you help scale our existing development team?",
    answer:
      "Our Client Product Team Setup service is designed to help you build high-performance development teams. We provide expert guidance, proven methodologies, and can augment your existing team with our skilled developers.",
  },
  {
    id: 6,
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in a wide range of technologies including React, Node.js, Python, TypeScript, PHP, Flutter, TensorFlow, Rust, AWS, Docker, MongoDB, PostgreSQL, and Google Workspace. We stay current with the latest technologies to provide cutting-edge solutions.",
  },
  {
    id: 7,
    question: "How do you ensure the quality of your software?",
    answer:
      "Quality is paramount in our development process. We implement rigorous testing procedures, code reviews, automated testing, and follow industry best practices. Our Quality Assurance & Testing phase ensures your software is reliable, secure, and performs optimally.",
  },
  {
    id: 8,
    question: "What makes Binarify different from other development companies?",
    answer:
      "Our collaborative approach, commitment to success, innovative solutions, proven track record, and strong communication set us apart. We work as your partner, not just a vendor, ensuring your success is our success.",
  },
]

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Floating Background Elements */}
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
                opacity: [0.1, 0.2, 0.1],
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 25 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {i % 3 === 0 ? (
                <HelpCircle className="w-4 h-4 text-blue-400" />
              ) : i % 3 === 1 ? (
                <Star className="w-3 h-3 text-blue-400" />
              ) : (
                <Sparkles className="w-3 h-3 text-blue-400" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent bg-300% mb-4"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Get answers to common questions about our software development services and process
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group"
            >
              {/* FAQ Item */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden group-hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Question Header */}
                <motion.button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Question Number */}
                    <motion.div
                      animate={{
                        rotate: openFAQ === faq.id ? 360 : 0,
                        scale: openFAQ === faq.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    >
                      {faq.id}
                    </motion.div>

                    {/* Question Text */}
                    <motion.h3
                      animate={{
                        color: openFAQ === faq.id ? "#60A5FA" : "#FFFFFF",
                      }}
                      className="text-lg md:text-xl font-semibold pr-4"
                    >
                      {faq.question}
                    </motion.h3>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    animate={{
                      rotate: openFAQ === faq.id ? 180 : 0,
                      scale: openFAQ === faq.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"
                  >
                    {openFAQ === faq.id ? (
                      <Minus className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-400" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Answer Content */}
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="px-8 pb-6"
                      >
                        {/* Sparkle Effects */}
                        <div className="relative">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                x: Math.random() * 400,
                                y: Math.random() * 50,
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.2,
                              }}
                            />
                          ))}

                          <div className="ml-14">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "60px" }}
                              transition={{ duration: 0.5 }}
                              className="h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mb-4 rounded-full"
                            />
                            <motion.p
                              initial={{ opacity: 0.8 }}
                              animate={{ opacity: 1 }}
                              className="text-gray-300 leading-relaxed text-base"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
          <motion.div className="mb-6">
            <h3 className="text-white text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-400">We're here to help! Get in touch with our team.</p>
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
