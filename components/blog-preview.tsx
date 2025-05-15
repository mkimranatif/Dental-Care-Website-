"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Essential Tips for Daily Dental Care",
    excerpt: "Learn the best practices for maintaining optimal oral health...",
    link: "#",
  },
  {
    title: "Advanced Dental Technologies",
    excerpt: "Discover how modern technology is revolutionizing dental care...",
    link: "#",
  },
  {
    title: "Foods That Promote Dental Health",
    excerpt: "The right diet can significantly improve your oral health...",
    link: "#",
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Dental Tips & News</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden shadow-lg border-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=${post.title.split(" ").slice(0, 2).join("+")}`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
