import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SparklesCore } from "@/components/sparkles"
import { ProjectHero } from "@/components/project/project-hero"
import { ProjectForm } from "@/components/project/project-form"
import { ProjectProcess } from "@/components/project/project-process"
import { ProjectFAQ } from "@/components/project/project-faq"
import { ProjectTestimonials } from "@/components/project/project-testimonials"
import { ScrollProgress } from "@/components/scroll-progress"

export default function StartProjectPage() {
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
        <ProjectHero />
        <ProjectForm />
        <ProjectProcess />
        <ProjectTestimonials />
        <ProjectFAQ />
        <Footer />
      </div>
    </main>
  )
}
