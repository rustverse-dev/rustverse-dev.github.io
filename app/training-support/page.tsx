"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, GraduationCap, Award, BookOpen, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function TrainingSupportPage() {
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
          Training & Support
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Empower your team with the expertise needed for secure RISC-V + Rust development. We offer comprehensive
          training programs, certification, and dedicated support services.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-foreground font-rajdhani">Workshops & Bootcamps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Hands-on training sessions covering everything from Rust basics for embedded systems to advanced
                  secure bootloader implementation and compiler usage.
                </CardDescription>
                <ul className="space-y-2 text-muted-foreground text-sm mb-4">
                  <li>**Upcoming:** Rust for Embedded Systems (Beginner) - July 15-17, 2024</li>
                  <li>**Upcoming:** Secure RISC-V Development with rustBoot - August 5-9, 2024</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">Register for Workshops</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-foreground font-rajdhani">Certification Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Validate your expertise with SafeV certifications in secure embedded Rust development, RISC-V
                  toolchain mastery, and functional safety.
                </CardDescription>
                <ul className="space-y-2 text-muted-foreground text-sm mb-4">
                  <li>**SafeV Certified Embedded Rust Developer**</li>
                  <li>**SafeV Certified Secure RISC-V Engineer**</li>
                  <li>**Functional Safety Specialist (ISO 26262)**</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">View Certification Paths</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-foreground font-rajdhani">Consulting & Custom Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Leverage our deep expertise for tailored consulting services, custom toolchain development, and
                  on-site training programs for your enterprise.
                </CardDescription>
                <ul className="space-y-2 text-muted-foreground text-sm mb-4">
                  <li>Project-specific technical guidance</li>
                  <li>Custom toolchain integration</li>
                  <li>On-site team training</li>
                  <li>Security audits and reviews</li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-card border border-primary/30 rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-3xl font-rajdhani font-bold text-foreground mb-4 flex items-center">
            <BookOpen className="h-8 w-8 mr-3 text-primary" /> ASIL D Compiler Development Roadmap
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            We are actively working towards developing and certifying our Rust compiler toolchain to meet the stringent
            requirements of ASIL D (Automotive Safety Integrity Level D) for ISO 26262. This will enable the creation of
            the highest integrity automotive software using Rust on RISC-V.
          </p>
          <ul className="space-y-3 text-muted-foreground list-disc pl-5">
            <li>**Phase 1 (Current):** Toolchain qualification and internal process establishment.</li>
            <li>**Phase 2:** Collaboration with certification bodies and pilot projects.</li>
            <li>**Phase 3:** Full ASIL D certification and public release.</li>
          </ul>
          <p className="text-muted-foreground mt-6">
            Stay tuned for updates on our progress and opportunities to participate in early access programs.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
