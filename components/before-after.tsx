"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const beforeAfterCases = [
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatment that removed years of stains and discoloration.",
  },
  {
    title: "Dental Implants",
    description: "Replacement of missing teeth with natural-looking dental implants.",
  },
  {
    title: "Veneers",
    description: "Porcelain veneers to correct chipped, misaligned, and discolored teeth.",
  },
  {
    title: "Invisalign Treatment",
    description: "Clear aligners to straighten teeth without traditional metal braces.",
  },
]

export default function BeforeAfterGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextCase = () => {
    setActiveIndex((prev) => (prev === beforeAfterCases.length - 1 ? 0 : prev + 1))
  }

  const prevCase = () => {
    setActiveIndex((prev) => (prev === 0 ? beforeAfterCases.length - 1 : prev - 1))
  }

  return (
    <section id="gallery" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Before & After Gallery</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the transformative results of our dental procedures. These before and after images showcase the quality
            of our work and the beautiful smiles we've helped create.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <motion.div
                    key={`before-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-64 md:h-96"
                  >
                    <div className="absolute top-4 left-4 bg-gray-900/70 text-white px-3 py-1 rounded-md text-sm font-medium z-10">
                      Before
                    </div>
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Before+${beforeAfterCases[activeIndex].title}`}
                      alt={`Before ${beforeAfterCases[activeIndex].title}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    key={`after-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-64 md:h-96"
                  >
                    <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-md text-sm font-medium z-10">
                      After
                    </div>
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=After+${beforeAfterCases[activeIndex].title}`}
                      alt={`After ${beforeAfterCases[activeIndex].title}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/80 hover:bg-white text-gray-800"
                    onClick={prevCase}
                    aria-label="Previous case"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/80 hover:bg-white text-gray-800"
                    onClick={nextCase}
                    aria-label="Next case"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-white">
                <motion.div
                  key={`info-${activeIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{beforeAfterCases[activeIndex].title}</h3>
                  <p className="text-gray-600">{beforeAfterCases[activeIndex].description}</p>
                </motion.div>

                <div className="flex justify-center mt-6">
                  {beforeAfterCases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full mx-1 ${activeIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
                      aria-label={`View case ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
