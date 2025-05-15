"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Dentist+with+Patient"
                alt="Dental Team"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-blue-600 text-white p-6 rounded-full text-center shadow-lg">
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="text-sm">Years</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience, our team of dental professionals is committed to providing exceptional
              oral healthcare using the latest technology and techniques.
            </p>

            <ul className="space-y-4">
              {[
                "State-of-the-art dental facilities",
                "Experienced and caring dental team",
                "Comfortable and relaxing environment",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 p-1 bg-blue-100 rounded-full mr-3">
                    <Check className="h-5 w-5 text-blue-600" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
