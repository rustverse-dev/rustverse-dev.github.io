import Link from "next/link"
import { ArrowLeft, LifeBuoy, MessageSquare, Users, ArrowRight } from "lucide-react"

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Help Center
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Find answers to your questions, troubleshoot issues, and get the support you need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <LifeBuoy className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Knowledge Base</h2>
            <p className="text-muted-foreground mb-4">
              Browse our extensive collection of articles, FAQs, and troubleshooting guides.
            </p>
            <Link href="/documentation" className="text-primary hover:underline flex items-center">
              Explore Knowledge Base <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <MessageSquare className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Contact Support</h2>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
            <Link href="/contact" className="text-primary hover:underline flex items-center">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg col-span-full">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Community Forums</h2>
            <p className="text-muted-foreground mb-4">
              Connect with other developers, share insights, and get peer-to-peer support.
            </p>
            <Link href="/community" className="text-primary hover:underline flex items-center">
              Join the Community <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
