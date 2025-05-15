import Hero from "@/components/hero"
import Statistics from "@/components/statistics"
import Services from "@/components/services"
import About from "@/components/about"
import TeamSection from "@/components/team-section"
import BeforeAfterGallery from "@/components/before-after"
import EmergencySection from "@/components/emergency-section"
import InsuranceSection from "@/components/insurance-section"
import PatientResources from "@/components/patient-resources"
import Testimonials from "@/components/testimonials"
import BlogPreview from "@/components/blog-preview"
import EnhancedWhyChooseUs from "@/components/enhanced-why-choose-us"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DentalCare - Professional Dental Services",
  description: "Experience exceptional dental care with our team of experts",
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <EnhancedWhyChooseUs />
      <Services />
      <About />
      <TeamSection />
      <BeforeAfterGallery />
      <EmergencySection />
      <InsuranceSection />
      <PatientResources />
      <Testimonials />
      <BlogPreview />
    </main>
  )
}
