"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, Clock, CalendarCheck } from "lucide-react"

export default function EmergencySection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-300 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold">Dental Emergency?</h2>
              </div>
              <p className="text-xl mb-6 text-blue-100">
                We understand that dental emergencies can happen at any time. Our team is ready to provide prompt care
                for your urgent dental needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-start"
                >
                  <Phone className="h-6 w-6 text-yellow-300 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us Immediately</h3>
                    <p className="text-blue-100">
                      Contact our emergency line at <strong>(555) 911-DENTAL</strong> for immediate assistance.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-start"
                >
                  <Clock className="h-6 w-6 text-yellow-300 mt-1 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">24/7 Availability</h3>
                    <p className="text-blue-100">
                      Our emergency dental services are available 24 hours a day, 7 days a week.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-bold"
                  onClick={() => (window.location.href = "tel:5559113368")}
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
                <Button
                  size="lg"
                  className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold shadow-lg"
                  onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <CalendarCheck className="mr-2 h-5 w-5" /> Schedule Appointment
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="md:w-1/3 bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-center">Common Dental Emergencies</h3>
              <ul className="space-y-3">
                {[
                  "Severe toothache or dental pain",
                  "Knocked-out or broken tooth",
                  "Lost filling or crown",
                  "Swollen or infected gums",
                  "Broken jaw or facial trauma",
                  "Bleeding from the mouth",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
