import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { ProcessSection } from "@/components/process-section"
import { EnhancedPartners } from "@/components/enhanced-partners"
import { CompanyStats } from "@/components/company-stats"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { FloatingContactWidget } from "@/components/floating-contact-widget"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <EnhancedPartners />
        <CompanyStats />
        <ProcessSection />
        <HowWeWorkSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>

      {/* Floating Contact Widget */}
      <FloatingContactWidget />
    </main>
  )
}
