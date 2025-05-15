"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold text-blue-400">DentalCare</h2>
            </Link>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 mr-3" />
                <p>
                  123 Dental Care Drive
                  <br />
                  Los Angeles, CA 90001
                </p>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <p>(555) 123-4567</p>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <p>contact@dentalcare.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="col-span-1"
          >
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="col-span-1"
          >
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#general" className="text-gray-400 hover:text-blue-400 transition-colors">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link href="#cosmetic" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link href="#implants" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="#emergency" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Emergency Care
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="col-span-1"
          >
            <h4 className="text-lg font-bold mb-6 text-white">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <p className="text-gray-400">Subscribe to our newsletter for updates and special offers.</p>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DentalCare. All rights reserved by Imran Atif.</p>
        </div>
      </div>
    </footer>
  )
}
