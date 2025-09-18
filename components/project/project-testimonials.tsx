"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The project consultation process was smooth and professional. Binarify delivered exactly what we needed, on time and on budget.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow",
  },
  {
    quote:
      "I was impressed by how quickly they understood our requirements and turned them into a working solution. Highly recommended!",
    author: "Michael Rodriguez",
    role: "Product Manager",
    company: "SuperMart",
  },
  {
    quote:
      "Working with Binarify was a game-changer for our business. Their team was responsive, skilled, and delivered beyond our expectations.",
    author: "Becky Jamieson",
    role: "HubSpot CRM Specialist",
    company: "HubSpot",
  },
]

export function ProjectTestimonials() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from clients who have successfully completed projects with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-6">
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
