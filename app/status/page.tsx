import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function StatusPage() {
  const services = [
    { name: "Web Platform", status: "Operational", icon: <CheckCircle className="text-accent" /> },
    { name: "IDE Services", status: "Operational", icon: <CheckCircle className="text-accent" /> },
    { name: "Compiler Backend", status: "Operational", icon: <CheckCircle className="text-accent" /> },
    { name: "AI Assistant", status: "Operational", icon: <CheckCircle className="text-accent" /> },
    { name: "Download Servers", status: "Operational", icon: <CheckCircle className="text-accent" /> },
    { name: "Authentication Service", status: "Operational", icon: <CheckCircle className="text-accent" /> },
    { name: "Documentation Portal", status: "Operational", icon: <CheckCircle className="text-accent" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          System Status
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Real-time operational status of TrusteD-V services. All systems are currently operational.
        </p>

        <div className="bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-4">Service Health</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-border pb-3 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center space-x-3">
                  {service.icon}
                  <span className="text-lg text-muted-foreground">{service.name}</span>
                </div>
                <span className={`font-medium ${service.status === "Operational" ? "text-accent" : "text-red-400"}`}>
                  {service.status}
                </span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-6">Last updated: {new Date().toLocaleString()}</p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-rajdhani font-bold text-foreground mb-4">Incident History</h2>
          <p className="text-muted-foreground">No recent incidents to report.</p>
          {/* You could add a link to a more detailed incident history page here */}
        </div>
      </div>
    </div>
  )
}
