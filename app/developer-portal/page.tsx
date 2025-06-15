"use client"

import Link from "next/link"
import { ArrowLeft, Code2, BookOpen, Terminal, Download, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function DeveloperPortalPage() {
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
          Developer Portal
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Your central hub for all TrusteD-V development resources. Access our powerful IDE, comprehensive
          documentation, essential tools, and connect with the community.
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
                <Code2 className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-foreground font-rajdhani">Vertically Integrated IDE</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Our SLM-based IDE provides a seamless, web-based environment for Rust and RISC-V development, with
                  intelligent code completion, debugging, and project management.
                </CardDescription>
                <Link href="/product-suite/slm-based-ide" className="text-primary hover:underline flex items-center">
                  Learn More & Launch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
                <BookOpen className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-foreground font-rajdhani">Documentation & API References</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Access detailed guides, API documentation for all SDKs and libraries, and tutorials to accelerate your
                  learning curve.
                </CardDescription>
                <Link href="/documentation" className="text-primary hover:underline flex items-center">
                  Explore Docs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
                <Terminal className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-foreground font-rajdhani">Debugging & Flashing Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Utilize Probe.rs and other advanced tools for efficient debugging, secure flashing, and real-time
                  analysis of your RISC-V hardware.
                </CardDescription>
                <Link
                  href="/product-suite/debugging-flashing-tools"
                  className="text-primary hover:underline flex items-center"
                >
                  View Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <Download className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-foreground font-rajdhani">Downloadable SDKs & Toolchains</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Get direct access to our Rust RISC-V toolchains, Shakti SDK, and other essential development kits.
                </CardDescription>
                <Link href="#downloads" className="text-primary hover:underline flex items-center">
                  Go to Downloads <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-foreground font-rajdhani">Community & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  Join our vibrant community forums, access help resources, and get expert support for your development
                  journey.
                </CardDescription>
                <Link href="/community" className="text-primary hover:underline flex items-center">
                  Connect Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
