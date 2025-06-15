"use client"

import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

const simulationDetails: {
  [key: string]: {
    title: string
    message: string
  }
} = {
  "slm-ide": {
    title: "SLM-based IDE Simulation",
    message: "Launching your web-based RISC-V + Rust IDE. Please wait...",
  },
  "probe-rs": {
    title: "Probe.rs Debugger Simulation",
    message: "Connecting to simulated RISC-V target via Probe.rs. Debugging session starting...",
  },
  // Add more simulation details as needed
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function SimulateToolClientPage({ params }: { params: { toolSlug: string } }) {
  const { toolSlug } = params
  const simulation = simulationDetails[toolSlug]

  if (!simulation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
        <h1 className="text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Simulation Not Found
        </h1>
        <p className="text-xl text-muted-foreground mb-8">The simulation you are looking for does not exist.</p>
        <Link href="/product-suite" className="text-primary hover:underline text-lg flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Product Suite
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Loader2 className="h-24 w-24 text-primary mb-8 animate-spin" />
      </motion.div>
      <motion.h1
        className="text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {simulation.title}
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground mb-8 text-center max-w-2xl"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        {simulation.message}
      </motion.p>
      <div className="space-y-4 text-center">
        <Link href="/product-suite" className="text-primary hover:underline text-lg">
          <ArrowLeft className="mr-2 h-5 w-5" /> Go back to Product Suite
        </Link>
      </div>
    </div>
  )
}
