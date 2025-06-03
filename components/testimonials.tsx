"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

const testimonials = [
  {
    text: "The best dental experience I've ever had. Professional staff and state-of-the-art facilities.",
    name: "Sarah Johnson",
    info: "Regular Patient since 2020",
    image: "/images/patient-sarah-johnson.jpg",
  },
  {
    text: "Transformed my smile completely. I couldn't be happier with the results!",
    name: "Michael Brown",
    info: "Cosmetic Dentistry Patient",
    image: "/images/patient-michael-brown.jpg",
  },
  {
    text: "Excellent care and attention to detail. The whole team is fantastic!",
    name: "Emma Davis",
    info: "Dental Implant Patient",
    image: "/images/patient-emma-davis.jpg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-blue-600 rounded-full p-1">
                      <QuoteIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <p className="text-gray-700 italic mb-6">{testimonial.text}</p>

                  <div className="mt-auto">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.info}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
