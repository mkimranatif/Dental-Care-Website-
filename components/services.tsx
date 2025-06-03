"use client"

import { motion } from "framer-motion"
import { SmileIcon as Tooth, Smile, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    icon: <Tooth className="w-16 h-16 text-blue-600" />,
    title: "General Dentistry",
    description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
    image: "/images/general-dentistry.jpg",
  },
  {
    icon: <Smile className="w-16 h-16 text-blue-600" />,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with professional whitening, veneers, and aesthetic procedures.",
    image: "/images/cosmetic-dentistry.jpg",
  },
  {
    icon: <UserCheck className="w-16 h-16 text-blue-600" />,
    title: "Dental Implants",
    description: "Restore your smile with permanent tooth replacement solutions.",
    image: "/images/dental-implants.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full shadow-lg border-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
