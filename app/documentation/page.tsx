import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Comprehensive Documentation
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore our extensive documentation, API references, and tutorials to master RISC-V + Rust development.
        </p>

        <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg space-y-6">
          <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-4">Key Documentation Areas:</h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-start space-x-3">
              <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <span>
                **Getting Started Guides:** Step-by-step instructions for setting up your development environment.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <span>**API References:** Detailed documentation for all SDKs, HALs, and libraries.</span>
            </li>
            <li className="flex items-start space-x-3">
              <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <span>**Tutorials & Examples:** Practical examples and code snippets for common development tasks.</span>
            </li>
            <li className="flex items-start space-x-3">
              <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <span>**Compiler & Toolchain Manuals:** In-depth guides for our Rust compiler and associated tools.</span>
            </li>
            <li className="flex items-start space-x-3">
              <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <span>
                **Changelogs & Release Notes:** Stay updated with the latest features, improvements, and bug fixes.
              </span>
            </li>
          </ul>
          <p className="text-muted-foreground mt-6">
            Our documentation is continuously updated to provide the most accurate and helpful information.
          </p>
        </div>
      </div>
    </div>
  )
}
