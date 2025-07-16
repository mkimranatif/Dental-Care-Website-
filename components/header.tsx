"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById("home")
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest(".navbar")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/95"}`}
    >
      <nav className="navbar container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="logo flex items-center">
          <h1 className="text-2xl font-bold text-blue-600">DentalCare</h1>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="nav-links flex items-center space-x-6">
            <li>
              <Link href="#home" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#blog" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={scrollToAppointment}>
            Book Appointment
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-600 mr-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={scrollToAppointment}>
            Book
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-md"
          >
            <ul className="flex flex-col py-4 px-4">
              <li>
                <Link
                  href="#home"
                  className="block py-3 text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-3 text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-3 text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="block py-3 text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="block py-3 text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-3 text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
