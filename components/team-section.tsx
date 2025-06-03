"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const dentists = [
  {
    name: "Dr. Sarah Williams",
    role: "General Dentist",
    description: "Dr. Williams has over 10 years of experience in general dentistry with a focus on preventive care.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    image: "/images/dr-sarah-williams.jpg",
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    description: "Specializing in orthodontics, Dr. Chen is an expert in creating beautiful, aligned smiles.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    image: "/images/dr-michael-chen.jpg",
  },
  {
    name: "Dr. Jessica Rodriguez",
    role: "Cosmetic Dentist",
    description: "Dr. Rodriguez is passionate about aesthetic dentistry and smile makeovers.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    image: "/images/dr-jessica-rodriguez.jpg",
  },
  {
    name: "Dr. Robert Johnson",
    role: "Pediatric Dentist",
    description: "With a gentle approach, Dr. Johnson specializes in dental care for children of all ages.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    image: "/images/dr-robert-johnson.jpg",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Dental Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced dental professionals is committed to providing you with the highest quality care in
            a comfortable and friendly environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {dentists.map((dentist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden shadow-lg border-0 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dentist.image || "/placeholder.svg"}
                    alt={dentist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{dentist.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{dentist.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{dentist.description}</p>

                  <div className="flex justify-center space-x-3">
                    <a
                      href={dentist.socials.facebook}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`${dentist.name}'s Facebook`}
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href={dentist.socials.instagram}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`${dentist.name}'s Instagram`}
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href={dentist.socials.linkedin}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`${dentist.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
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
