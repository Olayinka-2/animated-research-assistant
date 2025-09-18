"use client"

import { motion } from "framer-motion"
import { Quote, Star, Sparkles, Heart } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Becky Jamieson",
    role: "HubSpot CRM Specialist",
    avatar: "/placeholder.svg?height=80&width=80",
    content: "Abu it's been a pleasure working with you on this",
    highlight: "thank you for stepping up and making things happen",
    continuation: "i am sure you will do amazingly well as a consultant",
    rating: 5,
    company: "HubSpot",
  },
  {
    id: 2,
    name: "Robert Arus",
    role: "CTO at SuperMart",
    avatar: "/placeholder.svg?height=80&width=80",
    content: "At first opportunity",
    highlight: "this is amazing.",
    continuation: "",
    rating: 5,
    company: "SuperMart",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Product Manager at TechFlow",
    avatar: "/placeholder.svg?height=80&width=80",
    content: "The team delivered beyond our expectations.",
    highlight: "Exceptional quality and attention to detail",
    continuation: "would definitely work with them again!",
    rating: 5,
    company: "TechFlow",
  },
]

export function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
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
                opacity: [0.1, 0.3, 0.1],
                rotate: 360,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {i % 3 === 0 ? (
                <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-pink-400" />
              ) : i % 3 === 1 ? (
                <Star className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400" />
              ) : (
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-blue-400" />
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
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent bg-300% mb-4">
              Our Clients' Voices
            </h2>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Floating Quote Icon */}
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 z-10"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/25">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </motion.div>

              {/* Main Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  z: 50,
                }}
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl relative overflow-hidden group-hover:border-pink-500/30 transition-all duration-500"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  animate={{
                    background:
                      hoveredCard === testimonial.id
                        ? [
                            "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))",
                            "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
                            "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))",
                          ]
                        : "linear-gradient(45deg, transparent, transparent)",
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl"
                />

                {/* Sparkle Effects on Hover */}
                {hoveredCard === testimonial.id && (
                  <div className="absolute inset-0">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          x: Math.random() * 300,
                          y: Math.random() * 250,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex space-x-1 mb-4"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.5 + i * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Content */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-2">
                      {testimonial.content}{" "}
                      <motion.span
                        animate={{
                          color: ["#ec4899", "#a855f7", "#3b82f6", "#ec4899"],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        className="font-semibold"
                      >
                        {testimonial.highlight}
                      </motion.span>
                    </p>
                    {testimonial.continuation && (
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{testimonial.continuation}</p>
                    )}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gradient-to-r from-pink-500 to-purple-500 p-0.5">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      {/* Floating Ring Animation */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-pink-400/30"
                      />
                    </motion.div>

                    <div>
                      <motion.h4 whileHover={{ scale: 1.05 }} className="text-white font-semibold text-base sm:text-lg">
                        {testimonial.name}
                      </motion.h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60px" }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 mt-1 rounded-full"
                      />
                    </div>
                  </div>
                </div>
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
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            Join Our Happy Clients
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
