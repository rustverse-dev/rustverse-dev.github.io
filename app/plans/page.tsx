"use client"

import { Button } from "@/components/ui/button"
import type React from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, DollarSign, Package, Repeat, LucideLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

function PlanCard({
  title,
  description,
  features,
  buttonText,
  popular,
  buttonLink,
  icon,
}: {
  title: string
  description: string
  features: string[]
  buttonText: string
  popular: boolean
  buttonLink: string
  icon: React.ReactNode
}) {
  return (
    <Card className={`relative bg-card border-border ${popular ? "border-primary bg-primary/10" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
        </div>
      )}
      <CardHeader className="text-center">
        <div className="text-primary mb-2">{icon}</div>
        <CardTitle className="text-foreground text-2xl font-rajdhani">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full ${popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-card-foreground hover:bg-card-foreground/80 text-foreground"}`}
          asChild
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function PlansPage() {
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
          Flexible Business Models
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          TrusteD-V offers a variety of engagement models to suit individual developers, startups, academia, and large
          enterprises.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <PlanCard
              title="Subscription Model (SaaS)"
              description="Cloud-based access to our IDE, AI assistant, and core development tools."
              features={[
                "Web-based IDE access",
                "Standard AI assistance",
                "Community support forums",
                "Regular software updates",
                "Scalable usage tiers",
                "Version control integration",
              ]}
              buttonText="Start Free Trial"
              popular={false}
              buttonLink="/free-trial"
              icon={<Repeat className="h-12 w-12" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <PlanCard
              title="Direct Sales (Software/Hardware Bundles)"
              description="Acquire tailored software and hardware packages for specific project needs."
              features={[
                "Custom SDKs for RISC-V processors",
                "Dedicated technical support",
                "On-premise deployment options",
                "Hardware integration services",
                "Long-term maintenance contracts",
                "Functional safety compliance support",
              ]}
              buttonText="Contact Sales"
              popular={true}
              buttonLink="/contact"
              icon={<Package className="h-12 w-12" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <PlanCard
              title="Pay-per-use Utility Model"
              description="Flexible consumption-based access for specific tools or compute resources."
              features={[
                "On-demand compiler usage",
                "Simulation environment compute time",
                "AI model inference credits",
                "Fine-grained resource control",
                "Optimized for intermittent use",
                "Detailed usage analytics",
              ]}
              buttonText="Learn More"
              popular={false}
              buttonLink="/contact" // Link to contact for more details on this model
              icon={<DollarSign className="h-12 w-12" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <PlanCard
              title="Hardware IP Licensing / Bundling"
              description="Integrate our secure software IP directly into your hardware designs and products."
              features={[
                "Secure Bootloader IP (rustBoot)",
                "Secure Microkernel IP",
                "Trusted HAL source code licensing",
                "Royalty-based or one-time licensing",
                "Joint development agreements",
                "Customizable for specific silicon",
              ]}
              buttonText="Inquire Now"
              popular={false}
              buttonLink="/contact"
              icon={<LucideLink className="h-12 w-12" />}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
