"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Users, Target, TrendingUp, CheckCircle } from "lucide-react"

const lifecyclePhases = [
  {
    name: "Project Initiation",
    duration: "Week 1",
    progress: 100,
    status: "completed",
    activities: ["Kickoff meeting", "Team assignment", "Environment setup"],
    icon: <Target className="w-5 h-5" />,
  },
  {
    name: "Requirements Analysis",
    duration: "Week 2-3",
    progress: 100,
    status: "completed",
    activities: ["Stakeholder interviews", "Documentation", "Approval"],
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Design & Architecture",
    duration: "Week 4-5",
    progress: 75,
    status: "in-progress",
    activities: ["System design", "UI/UX mockups", "Technical specs"],
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    name: "Development Sprint 1",
    duration: "Week 6-8",
    progress: 25,
    status: "upcoming",
    activities: ["Core features", "API development", "Database setup"],
    icon: <Clock className="w-5 h-5" />,
  },
  {
    name: "Testing & QA",
    duration: "Week 9-10",
    progress: 0,
    status: "upcoming",
    activities: ["Unit testing", "Integration testing", "Bug fixes"],
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    name: "Deployment",
    duration: "Week 11",
    progress: 0,
    status: "upcoming",
    activities: ["Production setup", "Go-live", "Monitoring"],
    icon: <TrendingUp className="w-5 h-5" />,
  },
]

export function ProjectLifecycle() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Lifecycle Example</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A typical 11-week project timeline showing phases, progress, and key milestones
          </p>
        </motion.div>

        {/* Project Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Overall Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-semibold">Overall Project Progress</h3>
              <span className="text-blue-400 font-bold text-lg">50%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
              >
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-white/20 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Phase Cards */}
          <div className="space-y-6">
            {lifecyclePhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-xl p-6 border transition-all duration-300 ${
                  phase.status === "completed"
                    ? "border-green-500/30 bg-green-500/5"
                    : phase.status === "in-progress"
                      ? "border-blue-500/30 bg-blue-500/5"
                      : "border-gray-700/50"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {/* Status Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        phase.status === "completed"
                          ? "bg-green-500 text-white"
                          : phase.status === "in-progress"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {phase.icon}
                    </motion.div>

                    {/* Phase Info */}
                    <div>
                      <h4 className="text-white font-semibold text-lg">{phase.name}</h4>
                      <p className="text-gray-400 text-sm">{phase.duration}</p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                      phase.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : phase.status === "in-progress"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-gray-700/20 text-gray-400"
                    }`}
                  >
                    {phase.status.replace("-", " ")}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Progress</span>
                    <span className="text-white font-medium">{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${phase.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full ${
                        phase.status === "completed"
                          ? "bg-green-500"
                          : phase.status === "in-progress"
                            ? "bg-blue-500"
                            : "bg-gray-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Activities */}
                <div className="flex flex-wrap gap-2">
                  {phase.activities.map((activity, actIndex) => (
                    <motion.span
                      key={actIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * actIndex }}
                      className="px-2 py-1 bg-gray-700/50 rounded text-gray-300 text-xs"
                    >
                      {activity}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
