"use client"

import { CardContent } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CalendarDays } from "lucide-react"
import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "Why Rust is the Future for Embedded Systems",
    description: "A deep dive into Rust's advantages for secure and reliable embedded development.",
    slug: "why-rust-for-embedded",
    date: "May 20, 2024",
    author: "TrusteD-V Team",
  },
  {
    title: "Deep Dive into rustBoot and Secure Boot",
    description: "Understanding the architecture and benefits of our secure bootloader.",
    slug: "rustboot-deep-dive",
    date: "April 15, 2024",
    author: "Security Engineering",
  },
  {
    title: "Building SDKs for RISC-V Chips",
    description: "Our approach to creating comprehensive and easy-to-use SDKs for new chip families.",
    slug: "building-riscv-sdks",
    date: "March 10, 2024",
    author: "SDK Development Lead",
  },
  {
    title: "Taming Embedded Concurrency with Rust",
    description: "Strategies and best practices for managing concurrency in embedded Rust applications.",
    slug: "taming-embedded-concurrency",
    date: "February 28, 2024",
    author: "Rust Embedded Expert",
  },
  {
    title: "How to Debug and Flash RISC-V Devices",
    description: "A practical guide to using our debugging and flashing tools for RISC-V hardware.",
    slug: "debug-flash-riscv",
    date: "January 20, 2024",
    author: "Tools & IDE Team",
  },
  {
    title: "Compiler Backend Comparison: Pliron vs Cranelift",
    description: "An in-depth analysis of the two powerful compiler backends integrated into our Rust toolchain.",
    slug: "compiler-backends-comparison",
    date: "December 5, 2023",
    author: "Compiler Engineering",
  },
  {
    title: "Achieving ISO 26262 Certification with Rust",
    description: "Insights into the process and challenges of developing safety-critical software with Rust.",
    slug: "iso-26262-certification",
    date: "November 1, 2023",
    author: "Functional Safety Expert",
  },
  {
    title: "Building a Vertically Integrated Rust IDE",
    description: "The vision and technical challenges behind creating our seamless development environment.",
    slug: "building-integrated-ide",
    date: "October 10, 2023",
    author: "IDE Development Lead",
  },
  {
    title: "Integrating HSM with Shakti",
    description:
      "A technical guide on leveraging Hardware Security Modules (HSM) with Shakti processors for enhanced security.",
    slug: "hsm-shakti-integration",
    date: "September 1, 2023",
    author: "Hardware Security Team",
  },
  {
    title: "Partner Spotlight: Mindgrove + Shakti Vision SoC",
    description: "A case study on our collaboration with Mindgrove and their innovative Shakti Vision SoC.",
    slug: "partner-spotlight-mindgrove",
    date: "August 15, 2023",
    author: "Partnership Team",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function BlogListingPage() {
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
          Our Technical Blog
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Stay informed with our latest technical articles, tutorials, case studies, and roadmap updates on RISC-V,
          Rust, and secure embedded systems.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-foreground text-xl font-rajdhani">{post.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1 text-accent" /> {post.date} by {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
