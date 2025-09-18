import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutValues } from "@/components/about/about-values"
import { AboutTeam } from "@/components/about/about-team"
import { AboutStats } from "@/components/about/about-stats"
import { AboutMission } from "@/components/about/about-mission"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SparklesCore } from "@/components/sparkles"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
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
        <AboutHero />
        <AboutStory />
        <AboutMission />
        <AboutValues />
        <AboutStats />
        <AboutTeam />
        <Footer />
      </div>
    </main>
  )
}
