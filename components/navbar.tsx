"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import type React from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between px-4 sm:px-6 py-4 backdrop-blur-sm relative z-50"
      >
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/binarify-logo.svg" alt="Binarify Logo" width={32} height={32} className="w-8 h-8" />
          <span className="text-white font-medium text-xl">Binarify</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/how-we-work">How we work</NavLink>
          <NavLink href="/about">About us</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/start-project">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Consultancy</Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800 relative z-40"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="/" onClick={toggleMenu}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="/how-we-work" onClick={toggleMenu}>
                  How we work
                </MobileNavLink>
                <MobileNavLink href="/about" onClick={toggleMenu}>
                  About us
                </MobileNavLink>
                <MobileNavLink href="/portfolio" onClick={toggleMenu}>
                  Portfolio
                </MobileNavLink>
                <div className="pt-4 border-t border-gray-800">
                  <Link href="/start-project">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Consultancy</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors text-lg py-2 block" onClick={onClick}>
      {children}
    </Link>
  )
}
