import Link from "next/link"
import { ArrowLeft, Users, Code, DollarSign, ArrowRight } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Careers at TrusteD-V
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Join our passionate team and help shape the future of secure RISC-V + Rust embedded systems. We're looking for
          innovators, problem-solvers, and community builders.
        </p>

        <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg space-y-8">
          <div>
            <Users className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Why Work With Us?</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li>Work on cutting-edge RISC-V and Rust technologies.</li>
              <li>Contribute to a secure and open-source-friendly ecosystem.</li>
              <li>Collaborate with leading academic and industry partners.</li>
              <li>Be part of a team that values innovation, quality, and community.</li>
              <li>Opportunities for continuous learning and professional growth.</li>
            </ul>
          </div>

          <div>
            <Code className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Current Openings</h2>
            <p className="text-muted-foreground mb-4">
              We are always looking for talented individuals to join our growing team. If you don't see a role that fits
              your profile, feel free to send us your resume.
            </p>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li>**Senior Embedded Rust Engineer:** Develop secure bootloaders and microkernels.</li>
              <li>**Compiler Engineer (Rust/LLVM):** Focus on Pliron and Cranelift integration.</li>
              <li>**Hardware/Software Co-Design Architect:** Work on Shakti processor integrations.</li>
              <li>**AI/ML Embedded Software Developer:** Build secure stacks for TPUs/NPUs.</li>
              <li>**Technical Writer/Documentation Specialist:** Create comprehensive guides and API references.</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 bg-primary hover:bg-primary/90 inline-flex items-center px-4 py-2 rounded text-primary-foreground"
            >
              Apply Now / Send Resume <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div>
            <DollarSign className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Benefits & Culture</h2>
            <p className="text-muted-foreground">
              We offer competitive salaries, comprehensive benefits, and a flexible work environment that fosters
              creativity and collaboration. Our culture is built on mutual respect, continuous learning, and a shared
              passion for open-source and secure technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
