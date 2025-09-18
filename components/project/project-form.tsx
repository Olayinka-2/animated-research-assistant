"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, ChevronRight, Code, Smartphone, Globe, Database, Server, Zap } from "lucide-react"

const projectTypes = [
  {
    id: "web",
    name: "Web Application",
    icon: <Globe className="w-6 h-6" />,
    description: "Custom web applications with responsive design",
  },
  {
    id: "mobile",
    name: "Mobile App",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Native or cross-platform mobile applications",
  },
  {
    id: "backend",
    name: "Backend System",
    icon: <Server className="w-6 h-6" />,
    description: "Scalable APIs and server-side solutions",
  },
  {
    id: "database",
    name: "Database Solution",
    icon: <Database className="w-6 h-6" />,
    description: "Database design, migration, and optimization",
  },
  {
    id: "integration",
    name: "System Integration",
    icon: <Zap className="w-6 h-6" />,
    description: "Connect and integrate existing systems",
  },
  {
    id: "custom",
    name: "Custom Software",
    icon: <Code className="w-6 h-6" />,
    description: "Bespoke software for specific business needs",
  },
]

const budgetRanges = [
  { id: "small", label: "$5,000 - $10,000", description: "Small projects and MVPs" },
  { id: "medium", label: "$10,000 - $25,000", description: "Medium-sized applications" },
  { id: "large", label: "$25,000 - $50,000", description: "Complex, feature-rich systems" },
  { id: "enterprise", label: "$50,000+", description: "Enterprise-grade solutions" },
]

const timeframes = [
  { id: "urgent", label: "ASAP (1-2 weeks)", description: "Urgent delivery" },
  { id: "standard", label: "Standard (1-2 months)", description: "Normal development cycle" },
  { id: "relaxed", label: "Flexible (3+ months)", description: "No immediate deadline" },
]

export function ProjectForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeframe: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  })

  const handleProjectTypeSelect = (type: string) => {
    setFormData({ ...formData, projectType: type })
  }

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget })
  }

  const handleTimeframeSelect = (timeframe: string) => {
    setFormData({ ...formData, timeframe })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    setStep(4) // Move to success step
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <section className="py-20 relative overflow-hidden" id="project-form">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Form Steps Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <motion.div
                    animate={{
                      scale: step === i ? [1, 1.1, 1] : 1,
                      backgroundColor: step >= i ? "#3b82f6" : "#1f2937",
                      borderColor: step >= i ? "#3b82f6" : "#4b5563",
                    }}
                    transition={{ duration: 0.5, repeat: step === i ? Number.POSITIVE_INFINITY : 0, repeatDelay: 2 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white border-2 ${
                      step >= i ? "border-blue-500" : "border-gray-600"
                    }`}
                  >
                    {step > i ? <Check className="w-5 h-5" /> : i}
                  </motion.div>
                  {i < 3 && (
                    <div
                      className={`w-16 h-1 ${step > i ? "bg-blue-500" : "bg-gray-700"} transition-colors duration-500`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <span className="text-gray-400 text-sm">
                {step === 1
                  ? "Project Details"
                  : step === 2
                    ? "Budget & Timeline"
                    : step === 3
                      ? "Contact Information"
                      : "Submission Complete"}
              </span>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Project Type */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">What type of project do you need?</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {projectTypes.map((type) => (
                      <motion.div
                        key={type.id}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleProjectTypeSelect(type.id)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.projectType === type.id
                            ? "bg-blue-500/20 border-2 border-blue-500"
                            : "bg-gray-800/50 border border-gray-700 hover:border-blue-500/50"
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-3 rounded-lg ${
                              formData.projectType === type.id ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
                            }`}
                          >
                            {type.icon}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold mb-1">{type.name}</h3>
                            <p className="text-gray-400 text-sm">{type.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.projectType}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium ${
                        formData.projectType
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-700 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <span>Next Step</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Budget & Timeline */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">Budget & Timeline</h2>

                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4">What's your budget range?</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {budgetRanges.map((range) => (
                        <motion.div
                          key={range.id}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleBudgetSelect(range.id)}
                          className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.budget === range.id
                              ? "bg-blue-500/20 border-2 border-blue-500"
                              : "bg-gray-800/50 border border-gray-700 hover:border-blue-500/50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-medium">{range.label}</h4>
                            {formData.budget === range.id && <Check className="w-5 h-5 text-blue-500" />}
                          </div>
                          <p className="text-gray-400 text-sm">{range.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-white font-semibold mb-4">What's your preferred timeframe?</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {timeframes.map((time) => (
                        <motion.div
                          key={time.id}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleTimeframeSelect(time.id)}
                          className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.timeframe === time.id
                              ? "bg-blue-500/20 border-2 border-blue-500"
                              : "bg-gray-800/50 border border-gray-700 hover:border-blue-500/50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-white font-medium">{time.label}</h4>
                            {formData.timeframe === time.id && <Check className="w-5 h-5 text-blue-500" />}
                          </div>
                          <p className="text-gray-400 text-sm">{time.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.budget || !formData.timeframe}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium ${
                        formData.budget && formData.timeframe
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-700 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <span>Next Step</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-400 mb-2 text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-400 mb-2 text-sm">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-400 mb-2 text-sm">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Please describe your project requirements and goals..."
                    ></textarea>
                  </div>

                  <div className="flex justify-between">
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                    >
                      Submit Project Request
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Success */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, times: [0, 0.8, 1] }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-white mb-4">Project Request Submitted!</h2>
                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Thank you for your interest! Our team will review your project details and get back to you within 24
                    hours.
                  </p>
                  <div className="flex justify-center">
                    <motion.a
                      href="/"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                    >
                      Return to Homepage
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
