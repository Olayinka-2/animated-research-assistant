"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const techCategories = [
  {
    category: "Frontend",
    color: "from-blue-500 to-blue-600",
    technologies: [
      { name: "React", icon: "⚛️", description: "Modern UI library" },
      { name: "Next.js", icon: "▲", description: "Full-stack framework" },
      { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS" },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-green-600",
    technologies: [
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      { name: "Python", icon: "🐍", description: "Versatile language" },
      { name: "PHP", icon: "🐘", description: "Web development" },
      { name: "Rust", icon: "🦀", description: "Systems programming" },
    ],
  },
  {
    category: "Database",
    color: "from-purple-500 to-purple-600",
    technologies: [
      { name: "PostgreSQL", icon: "🐘", description: "Relational database" },
      { name: "MongoDB", icon: "🍃", description: "Document database" },
      { name: "Redis", icon: "🔴", description: "In-memory cache" },
      { name: "Supabase", icon: "⚡", description: "Backend as a service" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-orange-500 to-orange-600",
    technologies: [
      { name: "AWS", icon: "☁️", description: "Cloud platform" },
      { name: "Docker", icon: "🐳", description: "Containerization" },
      { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
      { name: "Vercel", icon: "▲", description: "Deployment platform" },
    ],
  },
  {
    category: "Mobile",
    color: "from-pink-500 to-pink-600",
    technologies: [
      { name: "Flutter", icon: "💙", description: "Cross-platform" },
      { name: "React Native", icon: "📱", description: "Native apps" },
      { name: "Swift", icon: "🍎", description: "iOS development" },
      { name: "Kotlin", icon: "🤖", description: "Android development" },
    ],
  },
  {
    category: "AI & ML",
    color: "from-cyan-500 to-cyan-600",
    technologies: [
      { name: "TensorFlow", icon: "🧠", description: "Machine learning" },
      { name: "PyTorch", icon: "🔥", description: "Deep learning" },
      { name: "OpenAI", icon: "🤖", description: "AI integration" },
      { name: "Hugging Face", icon: "🤗", description: "NLP models" },
    ],
  },
]

export function TechStack() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Technology Stack</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Cutting-edge technologies and tools we use to build exceptional software solutions
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${category.color} rounded-full text-white font-semibold text-lg shadow-lg`}
                >
                  {category.category}
                </motion.div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * techIndex }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="text-2xl"
                    >
                      {tech.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold">{tech.name}</h4>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Animated Underline */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5 + categoryIndex * 0.1, duration: 0.8 }}
                className={`h-1 bg-gradient-to-r ${category.color} mt-6 rounded-full`}
              />
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
          <h3 className="text-white text-2xl font-bold mb-4">Need a Different Technology?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always exploring new technologies and can adapt to your specific requirements.
          </p>
          <Link  href="/start-project">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Discuss Your Tech Stack
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
