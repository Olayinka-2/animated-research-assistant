"use client"

import { motion } from "framer-motion"

export function PartnersSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-gray-400 text-sm font-medium tracking-wider mb-8">PARTNERS</h3>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-12 md:space-x-16">
              <PartnerLogo name="Girl Child Foundation" />
              <PartnerLogo name="London Institute" />
              <PartnerLogo name="Partite Dynamic Enterprise" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity">
      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-medium text-center px-2">
          {name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </span>
      </div>
      <span className="text-gray-400 text-xs text-center max-w-20">{name}</span>
    </div>
  )
}
