"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, DollarSign, Landmark, Wallet, Shield, Banknote } from "lucide-react"

const insurancePlans = [
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "Guardian",
  "Blue Cross Blue Shield",
  "United Healthcare",
  "Humana",
]

const paymentOptions = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Credit Cards",
    description: "We accept all major credit cards for your convenience.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-blue-600" />,
    title: "Flexible Spending",
    description: "Use your FSA or HSA accounts for eligible dental expenses.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    title: "Payment Plans",
    description: "Flexible payment options to fit your budget.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-blue-600" />,
    title: "Financing",
    description: "CareCredit and other financing options available.",
  },
]

export default function InsuranceSection() {
  return (
    <section id="insurance" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with most major insurance providers and offer flexible payment options to make dental care
            accessible to everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-10 w-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Accepted Insurance Plans</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We accept most major dental insurance plans. Please contact our office to verify acceptance of your
                  plan. Here are some of the plans we accept:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {insurancePlans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">{plan}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Banknote className="h-10 w-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Payment Options</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We offer various payment options to make dental care affordable and accessible:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {paymentOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className="mb-3">{option.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h4>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
