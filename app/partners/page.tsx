"use client"

import Link from "next/link"
import { ArrowLeft, University, Lightbulb, Building2, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const academicPartners = [
  {
    name: "IIT Madras",
    description: "Leading research in RISC-V processor design (Shakti) and embedded systems.",
    logo: "/images/iit-m.png?height=80&width=160",
  },
  {
    name: "IIT Bombay",
    description: "Collaborating on advanced compiler optimizations and secure software architectures.",
    logo: "/images/iit-b.png?height=80&width=160",
  },
  {
    name: "IISc",
    description: "Pioneering work in AI/ML hardware acceleration and secure computing.",
    logo: "/images/iisc.png?height=80&width=160",
  },
]

const startupPartners = [
  {
    name: "Mindgrove",
    description: "Developing innovative RISC-V SoCs for various applications, including Vision AI.",
    logo: "/images/mindgrove.png?height=80&width=160",
  },
  {
    name: "SecureSi",
    description: "Specializing in hardware-rooted security solutions for embedded devices.",
    logo: "/images/securesi.png?height=80&width=160",
  },
  {
    name: "Incore",
    description: "Focusing on high-performance RISC-V core designs and verification.",
    logo: "/images/incore.png?height=80&width=160",
  },
  {
    name: "Tweedgolf",
    description: "Innovating in IoT and connected devices with a focus on secure embedded software.",
    logo: "/images/tweedgolf.png?height=80&width=160",
  },
]

const governmentPartners = [
  {
    name: "CDAC (Vega Project)",
    description: "Key contributor to India's indigenous processor development, including the Vega series.",
    logo: "/placeholder.svg?height=80&width=160",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <div className="max-w-6xl mx-auto py-16">
        <Link href="/" className="text-primary hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <motion.h1
          className="text-4xl md:text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          Our Partner Network
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          We believe in the power of collaboration. Our strong network of academic, startup, and government partners is
          crucial to building a robust and secure RISC-V + Rust ecosystem.
        </motion.p>

        <div className="space-y-16">
          {/* Academic Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-rajdhani font-bold text-foreground mb-8 flex items-center">
              <University className="h-8 w-8 mr-3 text-primary" /> Academic Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {academicPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-card border-border h-full">
                    <CardHeader className="flex flex-col items-center text-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} Logo`}
                        className="h-20 object-contain mb-4"
                      />
                      <CardTitle className="text-foreground text-xl font-rajdhani">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground">{partner.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Startup Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-rajdhani font-bold text-foreground mb-8 flex items-center">
              <Lightbulb className="h-8 w-8 mr-3 text-primary" /> Startup Innovators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {startupPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-card border-border h-full">
                    <CardHeader className="flex flex-col items-center text-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} Logo`}
                        className="h-20 object-contain mb-4"
                      />
                      <CardTitle className="text-foreground text-xl font-rajdhani">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground">{partner.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Government Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-rajdhani font-bold text-foreground mb-8 flex items-center">
              <Building2 className="h-8 w-8 mr-3 text-primary" /> Government Collaborations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {governmentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <Card className="bg-card border-border h-full">
                    <CardHeader className="flex flex-col items-center text-center">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} Logo`}
                        className="h-20 object-contain mb-4"
                      />
                      <CardTitle className="text-foreground text-xl font-rajdhani">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground">{partner.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-rajdhani font-bold text-foreground mb-4">Become a Partner</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Are you an academic institution, startup, or government entity interested in collaborating on the future of
            secure RISC-V + Rust development? We'd love to hear from you.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/contact">
              Contact Our Partnership Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
