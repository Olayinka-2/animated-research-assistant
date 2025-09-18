"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Code, HeadphonesIcon, Users } from "lucide-react"

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const services = [
  {
    id: 1,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs with cutting-edge technologies.",
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Client Product Team Setup",
    description: "Build high-performance development teams with our expert guidance and proven methodologies.",
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Education Services",
    description: "Comprehensive training programs to upskill your team with the latest technologies.",
    icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Two-Month Free Technical Support",
    description: "Complimentary technical support to ensure smooth operation and success of your projects.",
    icon: <HeadphonesIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: "from-orange-500 to-red-500",
  },
] as const

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "📘" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "PHP", icon: "🐘" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Rust", icon: "🦀" },
  { name: "Google Workspace", icon: "📊" },
  { name: "Flutter", icon: "💙" },
] as const

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* ✨ Floating tech emojis (background) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {technologies.map((tech, i) => (
          <motion.span
            key={tech.name}
            className="absolute text-2xl sm:text-4xl opacity-10 select-none"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * 800,
            }}
            animate={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * 800,
              rotate: [0, 360],
            }}
            transition={{
              duration: 25 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {tech.icon}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl lg:text-6xl"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          Our Solutions
        </motion.h2>

        {/* Services grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              onHoverStart={() => setHovered(service.id)}
              onHoverEnd={() => setHovered(null)}
              className="group relative"
            >
              {/* Glow on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} blur-xl`}
                animate={{
                  opacity: hovered === service.id ? [0, 0.5, 0] : 0,
                  scale: hovered === service.id ? [1, 1.1, 1] : 1,
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              {/* Card */}
              <div className="relative flex h-full flex-col rounded-2xl border border-gray-700/40 bg-gray-900/80 p-6 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="mb-5 flex items-center justify-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${service.color} text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-center text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-center text-sm leading-relaxed text-gray-400">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Tech icons carousel */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-5 sm:mt-16">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center rounded-xl border border-gray-700/40 bg-gray-800/40 px-4 py-3 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.05,
                type: "spring",
                stiffness: 180,
              }}
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="mt-1 text-xs text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
