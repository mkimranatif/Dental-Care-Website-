"use client"

import { motion } from "framer-motion"
import { Users, Award, SmileIcon as Tooth, BadgeIcon as Certificate } from "lucide-react"

const stats = [
  {
    icon: <Users className="w-12 h-12" />,
    number: "10,000+",
    label: "Happy Patients",
  },
  {
    icon: <Award className="w-12 h-12" />,
    number: "25+",
    label: "Awards Won",
  },
  {
    icon: <Tooth className="w-12 h-12" />,
    number: "15,000+",
    label: "Dental Procedures",
  },
  {
    icon: <Certificate className="w-12 h-12" />,
    number: "100%",
    label: "Patient Satisfaction",
  },
]

export default function Statistics() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <motion.h3
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
