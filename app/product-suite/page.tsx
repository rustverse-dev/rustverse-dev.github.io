"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Layers, Cpu, Brain, Settings, Code2, Terminal, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const productSuiteItems = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Bootloader (rustBoot)",
    description: "Ensure system integrity from power-on with our robust, Rust-based secure bootloader.",
    slug: "secure-bootloader-rustboot",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Trusted Hardware Abstraction Layer (HAL)",
    description: "Simplify hardware interaction with a secure and efficient HAL for RISC-V processors.",
    slug: "trusted-hal",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Rust Compiler with Pliron & Cranelift",
    description: "Optimized Rust compiler toolchain for RISC-V, leveraging advanced backends for performance.",
    slug: "rust-compiler",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Secure Microkernel & OS Integrations",
    description: "Build reliable embedded systems with our secure microkernel and Tock OS/Linux integrations.",
    slug: "secure-microkernel-os",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Integrated SDKs for Heterogeneous Chips",
    description: "Comprehensive SDKs for various RISC-V processors, including AI accelerators (TPU/NPU).",
    slug: "integrated-sdks",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Vertically Integrated IDE  ",
    description: "A powerful, web-based IDE designed for seamless Rust and RISC-V development.",
    slug: "slm-based-ide",
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Debugging & Flashing Toolchains (Probe.rs)",
    description: "Advanced tools for efficient debugging and secure flashing of RISC-V devices.",
    slug: "debugging-flashing-tools",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Certified Rust Toolchains (ISO 26262)",
    description: "Achieve functional safety compliance with our certified Rust toolchains for automotive applications.",
    slug: "certified-toolchains",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Peripheral Access Crates",
    description: "Rust crates providing safe and idiomatic access to RISC-V peripherals.",
    slug: "peripheral-access-crates",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Trusted Accelerator APIs (GPU/VPU)",
    description: "Secure APIs for integrating and utilizing hardware accelerators like GPUs and VPUs.",
    slug: "trusted-accelerator-apis",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Hardware Security Module (HSM) Integration",
    description: "Seamless integration with HSMs for enhanced cryptographic operations and secure key storage.",
    slug: "hsm-integration",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Software Testing Toolchain",
    description: "Comprehensive tools for automated testing, verification, and validation of embedded software.",
    slug: "software-testing-toolchain",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Shakti SDK",
    description: "The official SDK for the Shakti processor family, enabling rapid development.",
    slug: "shakti-sdk",
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "LLVM Integration",
    description: "Leveraging the LLVM infrastructure for advanced compiler optimizations and code generation.",
    slug: "llvm-integration",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Full-stack Secure Embedded System Software",
    description: "End-to-end secure software solutions from bootloader to application layer.",
    slug: "full-stack-secure-software",
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Custom SDKs for RISC-V Processors",
    description: "Tailored SDKs designed to meet the unique requirements of your specific RISC-V hardware.",
    slug: "custom-riscv-sdks",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Secure Software Stacks for TPUs, NPUs, and AI Accelerators",
    description: "Specialized software solutions ensuring security and performance for AI-driven embedded systems.",
    slug: "secure-ai-stacks",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ProductSuitePage() {
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
          Our Product Suite
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-12"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          TrusteD-V offers a comprehensive suite of secure, Rust-based software components, tools, and solutions for
          RISC-V embedded systems, from low-level bootloaders to high-level IDEs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productSuiteItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <Link href={`/product-suite/${item.slug}`} className="block h-full">
                <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="text-primary mb-2">{item.icon}</div>
                    <CardTitle className="text-foreground font-rajdhani">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
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
