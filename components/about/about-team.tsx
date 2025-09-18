"use client"

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Abu from "../../public/Abu.jpg";
import Chan from "../../public/Chan.jpg";

const teamMembers = [
  {
    name: "Abu Johnson",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in software development and business strategy",
    // image: "/placeholder.svg?height=300&width=300",
    image: Abu,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "abu@binarify.com",
    },
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Technical architect specializing in scalable systems and emerging technologies",
    image:Chan,
    // image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "sarah@binarify.com",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Development",
    bio: "Full-stack expert leading our development teams with passion for clean code",
    // image: "/placeholder.svg?height=300&width=300",
    image: Abu,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "michael@binarify.com",
    },
  },
  {
    name: "Emily Watson",
    role: "Head of Design",
    bio: "Creative director crafting beautiful and intuitive user experiences",
    // image: "/placeholder.svg?height=300&width=300",
    image: Abu,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "emily@binarify.com",
    },
  },
]

export function AboutTeam() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">The talented individuals behind Binarify's success</p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Team Member Card */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={member.image.src}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Social Links Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                  >
                    {[
                      { icon: <Linkedin className="w-5 h-5" />, href: member.social.linkedin },
                      { icon: <Twitter className="w-5 h-5" />, href: member.social.twitter },
                      { icon: <Github className="w-5 h-5" />, href: member.social.github },
                      { icon: <Mail className="w-5 h-5" />, href: `mailto:${member.social.email}` },
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.href}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-white hover:bg-blue-500/40 transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  {/* <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-white text-2xl font-bold mb-4">Want to Join Our Team?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
