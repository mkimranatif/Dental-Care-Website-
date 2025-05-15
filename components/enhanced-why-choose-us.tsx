"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, CreditCard, Phone, Award, Smile, HeartPulse, Microscope } from "lucide-react"

const features = [
  {
    icon: <Clock className="h-10 w-10 text-cyan-600" />,
    title: "Extended Hours",
    description: "Open evenings and weekends for your convenience",
  },
  {
    icon: <Shield className="h-10 w-10 text-cyan-600" />,
    title: "Safety First",
    description: "Advanced sterilization protocols and safety measures",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-cyan-600" />,
    title: "Flexible Payment",
    description: "Multiple payment options and insurance plans accepted",
  },
  {
    icon: <Phone className="h-10 w-10 text-cyan-600" />,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency dental care services",
  },
  {
    icon: <Award className="h-10 w-10 text-cyan-600" />,
    title: "Experienced Team",
    description: "Highly qualified dentists with specialized training",
  },
  {
    icon: <Smile className="h-10 w-10 text-cyan-600" />,
    title: "Comfort-Focused",
    description: "Amenities and techniques for a stress-free experience",
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-cyan-600" />,
    title: "Personalized Care",
    description: "Customized treatment plans for your unique needs",
  },
  {
    icon: <Microscope className="h-10 w-10 text-cyan-600" />,
    title: "Advanced Technology",
    description: "State-of-the-art equipment for precise diagnostics and treatment",
  },
]

export default function EnhancedWhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
              <div className="w-20 h-1 bg-cyan-600"></div>
            </motion.div>

            <p className="text-lg text-gray-700 mb-6">
              At DentalCare, we're committed to providing exceptional dental care in a comfortable, patient-centered
              environment. Our approach combines clinical excellence with a genuine concern for our patients'
              well-being.
            </p>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Modern+Dental+Office"
                  alt="Modern dental office"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 px-4 py-2 bg-cyan-50 rounded-md">
                  <Award className="h-8 w-8 text-cyan-600" />
                  <div>
                    <p className="text-sm text-gray-600">Recognized as</p>
                    <p className="font-bold text-gray-800">Top Dental Practice 2023</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-cyan-50 rounded-lg">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Your Comfort Is Our Priority</h3>
          <p className="text-lg mb-6">
            We understand dental visits can cause anxiety. That's why we've created a soothing environment with
            amenities designed for your comfort, including noise-cancelling headphones, warm blankets, and entertainment
            options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Gentle Care", "Sedation Options", "Relaxing Environment", "Patient Education"].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
