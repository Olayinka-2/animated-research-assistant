"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const techIcons = [
  { name: "JS", color: "#F7DF1E", symbol: "JS" },
  { name: "HTML", color: "#E34F26", symbol: "</>" },
  { name: "Android", color: "#3DDC84", symbol: "🤖" },
  { name: "React", color: "#61DAFB", symbol: "⚛" },
  { name: "Python", color: "#3776AB", symbol: "🐍" },
  { name: "CSS", color: "#1572B6", symbol: "#" },
]

export function TechIcons() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-full">
      {techIcons.map((tech, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div
            className="w-16 h-16 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 flex items-center justify-center transform hover:scale-110 transition-transform"
            style={{ borderColor: tech.color + "40" }}
          >
            <span className="text-2xl font-bold" style={{ color: tech.color }}>
              {tech.symbol}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
