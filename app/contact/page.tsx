import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, ArrowRight, LifeBuoy } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          We're here to help! Reach out to our team for sales inquiries, technical support, or partnership
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <Mail className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">General Inquiries</h2>
            <p className="text-muted-foreground mb-4">
              For general questions or information about our platform and services.
            </p>
            <a href="mailto:info@trusted-v.com" className="text-primary hover:underline flex items-center">
              info@trusted-v.com <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <Phone className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Sales & Partnerships</h2>
            <p className="text-muted-foreground mb-4">Interested in our plans, custom solutions, or collaboration?</p>
            <a href="mailto:sales@trusted-v.com" className="text-primary hover:underline flex items-center">
              sales@trusted-v.com <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <LifeBuoy className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Technical Support</h2>
            <p className="text-muted-foreground mb-4">Need assistance with our tools, SDKs, or development issues?</p>
            <Link href="/help" className="text-primary hover:underline flex items-center">
              Visit Help Center <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
            <MapPin className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Our Location</h2>
            <p className="text-muted-foreground mb-4">
              TrusteD-V Headquarters
              <br />
              123 Secure Lane, Tech City, 560001
              <br />
              India
            </p>
            <a href="#" className="text-primary hover:underline flex items-center">
              Get Directions <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
