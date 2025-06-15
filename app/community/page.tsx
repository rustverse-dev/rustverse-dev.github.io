import Link from "next/link"
import { ArrowLeft, Users, MessageSquare, Github, Twitter, ArrowRight } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Join Our Community
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Connect with fellow RISC-V + Rust developers, share knowledge, and contribute to the ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <MessageSquare className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Community Forums</h2>
            <p className="text-muted-foreground mb-4">
              Engage in discussions, ask questions, and get support from experienced developers.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              Visit Forums <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <Github className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">GitHub Repository</h2>
            <p className="text-muted-foreground mb-4">
              Explore our open-source projects, contribute code, and report issues.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <Twitter className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Social Media</h2>
            <p className="text-muted-foreground mb-4">
              Follow us on Twitter and other platforms for the latest news and updates.
            </p>
            <Link href="#" className="text-primary hover:underline flex items-center">
              Follow Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Community Events</h2>
            <p className="text-muted-foreground mb-4">
              Participate in webinars, meetups, and our annual RustTechX Summit.
            </p>
            <Link href="/training-support" className="text-primary hover:underline flex items-center">
              See Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
