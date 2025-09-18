"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar } from "lucide-react"

const featuredProjects = [
  {
    title: "Girl Child Foundation Platform",
    industry: "Non-Profit",
    description:
      "A comprehensive platform for managing donations, volunteers, and educational programs for underprivileged girls.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Donation Management", "Volunteer Portal", "Program Tracking", "Impact Analytics"],
    results: {
      metric1: { label: "Donations Increased", value: "150%" },
      metric2: { label: "Volunteer Engagement", value: "200%" },
      metric3: { label: "Program Reach", value: "500+" },
    },
    color: "from-pink-500 to-rose-500",
    year: "2023",
  },
  {
    title: "London Institute LMS",
    industry: "Education",
    description:
      "Advanced learning management system with virtual classrooms, assessment tools, and student analytics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "PostgreSQL", "WebRTC", "AWS"],
    features: ["Virtual Classrooms", "Assessment Engine", "Progress Tracking", "Mobile Learning"],
    results: {
      metric1: { label: "Student Engagement", value: "180%" },
      metric2: { label: "Course Completion", value: "95%" },
      metric3: { label: "Active Users", value: "10K+" },
    },
    color: "from-blue-500 to-cyan-500",
    year: "2023",
  },
  {
    title: "Partite Dynamic ERP",
    industry: "Enterprise",
    description: "Complete enterprise resource planning solution with inventory, HR, and financial management modules.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Python", "PostgreSQL", "Docker"],
    features: ["Inventory Management", "HR Module", "Financial Reporting", "Workflow Automation"],
    results: {
      metric1: { label: "Efficiency Gain", value: "300%" },
      metric2: { label: "Cost Reduction", value: "40%" },
      metric3: { label: "Process Automation", value: "85%" },
    },
    color: "from-purple-500 to-indigo-500",
    year: "2024",
  },
]

export function ProjectShowcase() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore some of our most impactful projects that have transformed businesses across different industries
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              {/* Project Image */}
              <motion.div whileHover={{ scale: 1.05 }} className="lg:w-1/2">
                <div className="relative group">
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 30px ${project.color.includes("pink") ? "#ec4899" : project.color.includes("blue") ? "#3b82f6" : "#a855f7"}40`,
                        `0 0 50px ${project.color.includes("pink") ? "#ec4899" : project.color.includes("blue") ? "#3b82f6" : "#a855f7"}60`,
                        `0 0 30px ${project.color.includes("pink") ? "#ec4899" : project.color.includes("blue") ? "#3b82f6" : "#a855f7"}40`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="rounded-2xl overflow-hidden"
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center space-x-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}
                    >
                      {project.industry}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Results Achieved:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.values(project.results).map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50"
                      >
                        <div
                          className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.color} mb-1`}
                        >
                          {result.value}
                        </div>
                        <div className="text-gray-400 text-xs">{result.label}</div>
                      </motion.div>
                    ))}
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
