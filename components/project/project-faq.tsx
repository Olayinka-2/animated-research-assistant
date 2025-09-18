"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary based on complexity and scope. Simple projects may take 4-8 weeks, while complex enterprise solutions can take 3-6 months or more. We'll provide a detailed timeline estimate during our initial consultation.",
  },
  {
    question: "What information do you need to provide a quote?",
    answer:
      "To provide an accurate quote, we need to understand your project requirements, desired features, timeline expectations, and budget constraints. The more details you can provide, the more precise our estimate will be.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! We offer two months of free technical support after project delivery. Beyond that, we provide various maintenance and support packages to ensure your software continues to perform optimally.",
  },
  {
    question: "Can you work with our existing team or systems?",
    answer:
      "Absolutely. We're experienced in collaborating with in-house teams and integrating with existing systems. We can adapt our approach to complement your current resources and technology stack.",
  },
  {
    question: "What if I'm not satisfied with the deliverables?",
    answer:
      "Client satisfaction is our priority. We work iteratively with regular feedback cycles to ensure the final product meets your expectations. If adjustments are needed, we'll work with you to address any concerns and make necessary revisions.",
  },
]

export function ProjectFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get answers to common questions about starting a project with us
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-lg flex items-center justify-between transition-colors duration-300 ${
                  openFAQ === index
                    ? "bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30"
                    : "bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30"
                }`}
              >
                <h3 className="text-white font-semibold text-lg pr-8">{faq.question}</h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openFAQ === index ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {openFAQ === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </motion.button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-800/30 border-x border-b border-gray-700/50 rounded-b-lg">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
