import { WorkflowHero } from "@/components/how-we-work/workflow-hero"
import { ProcessOverview } from "@/components/how-we-work/process-overview"
import { DetailedProcess } from "@/components/how-we-work/detailed-process"
import { Methodologies } from "@/components/how-we-work/methodologies"
import { TechStack } from "@/components/how-we-work/tech-stack"
import { ProjectLifecycle } from "@/components/how-we-work/project-lifecycle"
import { QualityAssurance } from "@/components/how-we-work/quality-assurance"
import { ClientCollaboration } from "@/components/how-we-work/client-collaboration"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SparklesCore } from "@/components/sparkles"

export default function HowWeWorkPage() {
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
        <WorkflowHero />
        <ProcessOverview />
        <DetailedProcess />
        <ProjectLifecycle />
        <Methodologies />
        <TechStack />
        <QualityAssurance />
        <ClientCollaboration />
        <Footer />
      </div>
    </main>
  )
}
