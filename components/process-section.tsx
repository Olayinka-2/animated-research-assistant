"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle, Layout, User, ArrowRight } from "lucide-react"
import Image from "next/image"

export function ProcessSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            We Keep it{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Simple</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Our streamlined approach ensures efficient delivery and exceptional results
          </p>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
            <ProcessStep icon={<User className="w-5 h-5 sm:w-6 sm:h-6" />} label="Client" />
            <ArrowRight className="w-6 h-6 text-gray-500 rotate-90 sm:rotate-0" />
            <ProcessStep
              icon={
                <Image
                  src="/binarify-logo.svg"
                  alt="Binarify"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              }
              label="Binarify"
              isCenter
            />
            <ArrowRight className="w-6 h-6 text-gray-500 rotate-90 sm:rotate-0" />
            <ProcessStep
              icon={<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />}
              label="Delivery and Success"
            />
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />}
              title="Binarify Delivers your custom product/project"
              description="We transform your ideas into reality with tailored software solutions that meet your specific business needs."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={<Layout className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />}
              title="Building High performance product teams with Binarify"
              description="Scale your development capabilities with our expert teams and proven methodologies for maximum efficiency."
            />
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-4 sm:right-10 opacity-60">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center"
          >
            <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </motion.div>
        </div>

        <div className="absolute top-20 right-16 sm:right-32 opacity-60">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center"
          >
            <span className="text-white text-xs">✉</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ icon, label, isCenter = false }: { icon: React.ReactNode; label: string; isCenter?: boolean }) {
  return (
    <div className={`flex flex-col items-center space-y-3 ${isCenter ? "scale-110" : ""}`}>
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
          isCenter
            ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25"
            : "bg-gray-800 border border-gray-700"
        }`}
      >
        {icon}
      </div>
      <span className="text-white text-xs sm:text-sm font-medium text-center">{label}</span>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
