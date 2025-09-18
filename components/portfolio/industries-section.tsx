"use client"

import { motion } from "framer-motion"
import {
  ShoppingCart,
  Heart,
  GraduationCap,
  Building2,
  Truck,
  Gamepad2,
  Plane,
  Home,
  Utensils,
  Dumbbell,
  Car,
  Briefcase,
  Calculator,
  Brain,
  Bot,
} from "lucide-react"

const industries = [
  {
    id: 1,
    name: "E-commerce & Retail",
    description: "Online stores, inventory management, and customer experience platforms",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    projects: ["Multi-vendor Marketplace", "Inventory Management System", "Customer Analytics Platform"],
  },
  {
    id: 2,
    name: "Healthcare & Medical",
    description: "Patient management systems, telemedicine platforms, and health analytics",
    icon: <Heart className="w-8 h-8" />,
    color: "from-red-500 to-pink-500",
    projects: ["Patient Portal System", "Telemedicine Platform", "Medical Records Management"],
  },
  {
    id: 3,
    name: "Education & E-learning",
    description: "Learning management systems, online courses, and educational tools",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    projects: ["LMS Platform", "Virtual Classroom", "Student Assessment Tool"],
  },
  {
    id: 4,
    name: "Finance & Banking",
    description: "Digital banking solutions, payment systems, and financial analytics",
    icon: <Building2 className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    projects: ["Digital Banking App", "Payment Gateway", "Risk Assessment System"],
  },
  {
    id: 5,
    name: "Logistics & Supply Chain",
    description: "Fleet management, warehouse systems, and delivery optimization",
    icon: <Truck className="w-8 h-8" />,
    color: "from-purple-500 to-violet-500",
    projects: ["Fleet Management System", "Warehouse Automation", "Delivery Tracking App"],
  },
  {
    id: 6,
    name: "Gaming & Entertainment",
    description: "Mobile games, streaming platforms, and interactive entertainment",
    icon: <Gamepad2 className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    projects: ["Mobile Game Platform", "Streaming Service", "Interactive Entertainment App"],
  },
  {
    id: 7,
    name: "Travel & Tourism",
    description: "Booking platforms, travel management, and hospitality solutions",
    icon: <Plane className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
    projects: ["Hotel Booking System", "Travel Planning App", "Tourism Management Platform"],
  },
  {
    id: 8,
    name: "Real Estate & Property",
    description: "Property management, listing platforms, and real estate analytics",
    icon: <Home className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-500",
    projects: ["Property Listing Platform", "Property Management System", "Real Estate CRM"],
  },
  {
    id: 9,
    name: "Food & Beverage",
    description: "Restaurant management, food delivery, and culinary platforms",
    icon: <Utensils className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    projects: ["Restaurant POS System", "Food Delivery App", "Recipe Management Platform"],
  },
  {
    id: 10,
    name: "Fitness & Wellness",
    description: "Health tracking, workout platforms, and wellness applications",
    icon: <Dumbbell className="w-8 h-8" />,
    color: "from-green-500 to-teal-500",
    projects: ["Fitness Tracking App", "Workout Planning Platform", "Wellness Dashboard"],
  },
  {
    id: 11,
    name: "Automotive",
    description: "Vehicle management, automotive services, and transportation solutions",
    icon: <Car className="w-8 h-8" />,
    color: "from-gray-600 to-gray-700",
    projects: ["Vehicle Management System", "Auto Service Platform", "Fleet Tracking Solution"],
  },
  {
    id: 12,
    name: "Professional Services",
    description: "Business consulting, legal services, and professional management tools",
    icon: <Briefcase className="w-8 h-8" />,
    color: "from-slate-500 to-slate-600",
    projects: ["Client Management System", "Professional Services CRM", "Business Analytics Platform"],
  },
  {
    id: 13,
    name: "Tax & Accounting",
    description: "Tax preparation software, accounting systems, and compliance management platforms",
    icon: <Calculator className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
    projects: ["Tax Filing System", "Expense Tracker", "Compliance Dashboard"],
  },
  {
    id: 14,
    name: "AI & Machine Learning",
    description: "Intelligent systems, predictive analytics, and machine learning solutions",
    icon: <Brain className="w-8 h-8" />,
    color: "from-violet-500 to-purple-500",
    projects: ["Recommendation Engine", "Predictive Analytics", "NLP Chatbot"],
  },
  {
    id: 15,
    name: "Automation & Robotics",
    description: "Process automation, workflow optimization, and robotic process automation (RPA)",
    icon: <Bot className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-500",
    projects: ["RPA System", "Workflow Automation", "Smart Manufacturing"],
  },
]

export function IndustriesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Industries We've Worked In</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Our diverse portfolio spans across multiple industries, delivering tailored solutions for unique business
            challenges
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                z: 50,
              }}
              className="group relative"
            >
              {/* Floating Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${industry.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl group-hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col">
                {/* Sparkle Effects on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-2xl">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        x: Math.random() * 300,
                        y: Math.random() * 200,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 sm:mb-6"
                  >
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                    >
                      {industry.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-3">{industry.name}</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">{industry.description}</p>

                    {/* Projects List */}
                    <div className="mb-4">
                      <h4 className="text-white text-sm font-semibold mb-2">Key Projects:</h4>
                      <ul className="space-y-1">
                        {industry.projects.map((project, projectIndex) => (
                          <li key={projectIndex} className="text-gray-400 text-xs sm:text-sm flex items-center">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Animated Underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${industry.color} rounded-full mt-auto`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
