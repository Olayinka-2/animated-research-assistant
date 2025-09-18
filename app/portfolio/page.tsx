import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SparklesCore } from "@/components/sparkles"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { IndustriesSection } from "@/components/portfolio/industries-section"
import { ProjectShowcase } from "@/components/portfolio/project-showcase"
import { TechnologiesUsed } from "@/components/portfolio/technologies-used"
import { ClientResults } from "@/components/portfolio/client-results"
import { ScrollProgress } from "@/components/scroll-progress"

export default function PortfolioPage() {
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
        <PortfolioHero />
        <IndustriesSection />
        <ProjectShowcase />
        <TechnologiesUsed />
        <ClientResults />
        <Footer />
      </div>
    </main>
  )
}
