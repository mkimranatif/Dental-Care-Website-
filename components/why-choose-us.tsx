"use client"

import { motion } from "framer-motion"
import { Clock, Shield, CreditCard, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

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
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
