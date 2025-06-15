import Link from "next/link"
import { ArrowLeft, Users, Lightbulb, Target, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          About TrusteD-V
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          We are a Rust and RISC-V-centric engineering initiative focused on secure, efficient, and scalable software
          platforms for next-generation embedded systems.
        </p>

        <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg space-y-8">
          <div>
            <Lightbulb className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Our Vision</h2>
            <p className="text-muted-foreground">
              To make Rust the default language for RISC-V systems in safety-critical and AI-driven applications. We
              envision a future where secure, high-performance embedded development is accessible and reliable for
              everyone.
            </p>
          </div>

          <div>
            <Target className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Our Mission</h2>
            <p className="text-muted-foreground">
              To build a secure, vertically integrated software ecosystem with strong academic, industrial, and
              open-source partnerships. We are committed to fostering innovation and collaboration within the RISC-V
              community.
            </p>
          </div>

          <div>
            <Briefcase className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">What We Do</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li>Design secure bootloaders and OS kernels</li>
              <li>Build trusted compiler toolchains</li>
              <li>Create integrated SDKs for new chip families</li>
              <li>Provide training and long-term support</li>
              <li>Develop secure software stacks for TPUs, NPUs, and AI accelerators</li>
              <li>Offer certified Rust toolchains for functional safety standards like ISO 26262</li>
            </ul>
          </div>

          <div>
            <Users className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Leadership in Community</h2>
            <p className="text-muted-foreground mb-4">
              We are deeply committed to the growth and success of the RISC-V and Rust embedded communities:
            </p>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li>Hosts the RustTechX Summit, bringing together experts and enthusiasts.</li>
              <li>Actively involved in standardization and certification efforts for secure embedded systems.</li>
              <li>Bridges startups and industry adoption, fostering a vibrant ecosystem.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Our Timeline & Roadmap</h2>
            <p className="text-muted-foreground">
              (Placeholder for a detailed timeline of key milestones and future development roadmap. This would
              typically be a visual component or a list of achievements and upcoming goals.)
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li>**2022:** TrusteD-V Initiative Founded, Initial RustBoot Prototype</li>
              <li>**2023:** First Release of Trusted HAL, Compiler Toolchain Alpha</li>
              <li>**2024:** Launch of Web Platform, SLM-based IDE Beta, Strategic Partnerships</li>
              <li>**Future:** ASIL D Compiler Certification, Expanded AI Accelerator Support, Global Expansion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
