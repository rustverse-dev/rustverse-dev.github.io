import Link from "next/link"
import { ArrowLeft, Lock, FileText, ShieldCheck } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your privacy is paramount to us. This policy outlines how we collect, use, and protect your personal
          information.
        </p>

        <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg space-y-8">
          <div>
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information to provide and improve our services. This may include:
            </p>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li>
                **Personal Identification Information:** Name, email address, contact details (e.g., when you sign up
                for an account, newsletter, or contact support).
              </li>
              <li>
                **Usage Data:** Information on how you access and use our platform, such as IP address, browser type,
                pages visited, and time spent.
              </li>
              <li>
                **Technical Data:** Information about your device and development environment (e.g., operating system,
                IDE version) to help with support and product improvement.
              </li>
            </ul>
          </div>

          <div>
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">Your information is used to:</p>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              <li>Provide and maintain our services, including account management and access to tools.</li>
              <li>Improve and personalize your experience on the platform.</li>
              <li>Communicate with you, respond to inquiries, and send updates.</li>
              <li>Analyze usage patterns to enhance product features and performance.</li>
              <li>Ensure the security and integrity of our platform.</li>
            </ul>
          </div>

          <div>
            <ShieldCheck className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Data Security & Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We implement robust security measures to protect your data from unauthorized access, alteration,
              disclosure, or destruction. We do not sell or rent your personal information to third parties. We may
              share data with trusted partners only when necessary to provide services or comply with legal obligations,
              under strict confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-3">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to access, correct, or delete your personal information. You can also object to or
              restrict certain processing activities. Please contact us to exercise these rights.
            </p>
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            This Privacy Policy may be updated periodically. We encourage you to review it regularly.
            <br />
            Last updated: June 3, 2025
          </p>
        </div>
      </div>
    </div>
  )
}
