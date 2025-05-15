"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "New Patient Forms",
    description: "Complete these forms before your first visit to save time.",
    links: [
      { name: "Patient Registration Form", url: "#" },
      { name: "Medical History Form", url: "#" },
      { name: "Privacy Policy", url: "#" },
    ],
  },
  {
    title: "Insurance Information",
    description: "Learn about our accepted insurance plans and payment options.",
    links: [
      { name: "Insurance Verification Form", url: "#" },
      { name: "Financial Policy", url: "#" },
      { name: "Insurance FAQ", url: "#" },
    ],
  },
  {
    title: "Patient Education",
    description: "Educational resources to help you maintain optimal oral health.",
    links: [
      { name: "Oral Hygiene Guide", url: "#" },
      { name: "Post-Treatment Care", url: "#" },
      { name: "Nutrition and Dental Health", url: "#" },
    ],
  },
]

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "Most dental professionals recommend visiting the dentist every six months for a check-up and professional cleaning. However, your dentist may suggest more frequent visits based on your specific oral health needs.",
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer:
      "If you experience a dental emergency, contact our office immediately at (555) 911-DENTAL. For after-hours emergencies, follow the instructions on our voicemail to reach our on-call dentist. For severe emergencies involving facial trauma or difficulty breathing, go to the nearest emergency room.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact our office to verify that we accept your specific plan. We also offer various payment options for patients without insurance coverage.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We accept cash, credit cards, and personal checks. We also offer financing options through CareCredit and in-house payment plans for certain treatments. Our team will work with you to find the best payment solution for your needs.",
  },
  {
    question: "How can I improve my oral health at home?",
    answer:
      "Maintaining good oral health at home involves brushing your teeth twice a day with fluoride toothpaste, flossing daily, using mouthwash, eating a balanced diet, limiting sugary foods and drinks, and avoiding tobacco products. Regular dental check-ups are also essential for optimal oral health.",
  },
]

export default function PatientResources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Resources</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access important forms, educational materials, and frequently asked questions to help you prepare for your
            visit and maintain optimal oral health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <ul className="space-y-3">
                    {resource.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + linkIndex * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={link.url}
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          <span>{link.name}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-10">
            <HelpCircle className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <Button
                  variant="ghost"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 hover:bg-gray-50"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  )}
                </Button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-gray-600"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
