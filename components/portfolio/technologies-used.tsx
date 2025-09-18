"use client"

import { motion } from "framer-motion"

const techCategories = [
  {
    category: "Frontend",
    color: "from-blue-500 to-blue-600",
    technologies: [
      { name: "React", usage: 85, projects: 120 },
      { name: "Next.js", usage: 70, projects: 95 },
      { name: "Vue.js", usage: 45, projects: 60 },
      { name: "Angular", usage: 35, projects: 45 },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-green-600",
    technologies: [
      { name: "Node.js", usage: 80, projects: 110 },
      { name: "Python", usage: 75, projects: 100 },
      { name: "PHP", usage: 60, projects: 80 },
      { name: "Java", usage: 40, projects: 55 },
    ],
  },
  {
    category: "Database",
    color: "from-purple-500 to-purple-600",
    technologies: [
      { name: "MongoDB", usage: 70, projects: 90 },
      { name: "PostgreSQL", usage: 65, projects: 85 },
      { name: "MySQL", usage: 55, projects: 70 },
      { name: "Redis", usage: 45, projects: 60 },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-orange-500 to-orange-600",
    technologies: [
      { name: "AWS", usage: 75, projects: 95 },
      { name: "Docker", usage: 70, projects: 90 },
      { name: "Kubernetes", usage: 50, projects: 65 },
      { name: "Vercel", usage: 60, projects: 75 },
    ],
  },
]

export function TechnologiesUsed() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technologies We Master</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our expertise spans across modern technologies, ensuring we choose the right tools for every project
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
            >
              {/* Category Header */}
              <div className="mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${category.color} rounded-full text-white font-semibold text-lg shadow-lg mb-4`}
                >
                  {category.category}
                </motion.div>
              </div>

              {/* Technologies */}
              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * techIndex }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{tech.name}</span>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{tech.projects} projects</span>
                        <span>{tech.usage}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.usage}%` }}
                        transition={{ duration: 1.5, delay: 0.2 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="absolute inset-0 bg-white/20 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
