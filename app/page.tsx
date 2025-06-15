"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code2,
  Cpu,
  Brain,
  Download,
  Shield,
  Settings,
  CheckCircle,
  ArrowRight,
  Play,
  Terminal,
  Layers,
  ShieldCheck,
  Bot,
  LogOut,
  BookOpen,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function RiscVPlatform() {
  const [activeTab, setActiveTab] = useState("starter")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn")
    if (loggedInStatus === "true") {
      setIsLoggedIn(true)
    }
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
    router.push("/")
  }

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
      title: "Vertically Integrated IDE (SLM-based)",
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
      description:
        "Achieve functional safety compliance with our certified Rust toolchains for automotive applications.",
      slug: "certified-toolchains",
    },
  ]

  const downloads = [
    {
      title: "TrusteD-V IDE",
      description: "Complete integrated development environment",
      downloadLink: "/download-file?file=trusted-v-ide",
    },
    {
      title: "Rust RISC-V Toolchain",
      description: "Optimized Rust compiler and tools",
      downloadLink: "/download-file?file=rust-toolchain",
    },
    {
      title: "SDK Collection",
      description: "Hardware abstraction layers and drivers",
      downloadLink: "/download-file?file=sdk-collection",
    },
    {
      title: "RTOS Package",
      description: "Real-time operating system components",
      downloadLink: "/download-file?file=rtos-package",
    },
    {
      title: "AI Models",
      description: "Pre-trained models for code assistance",
      downloadLink: "/download-file?file=ai-models",
    },
    {
      title: "Documentation",
      description: "Complete API reference and tutorials",
      downloadLink: "/documentation",
    },
  ]

  const blogPosts = [
    {
      title: "Why Rust is the Future for Embedded Systems",
      description: "A deep dive into Rust's advantages for secure and reliable embedded development.",
      slug: "why-rust-for-embedded",
    },
    {
      title: "Deep Dive into rustBoot and Secure Boot",
      description: "Understanding the architecture and benefits of our secure bootloader.",
      slug: "rustboot-deep-dive",
    },
    {
      title: "Building SDKs for RISC-V Chips",
      description: "Our approach to creating comprehensive and easy-to-use SDKs for new chip families.",
      slug: "building-riscv-sdks",
    },
  ]

  const partners = [
    { name: "IIT Madras", type: "Academic", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CDAC (Vega Project)", type: "Government", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Mindgrove", type: "Startup", logo: "/placeholder.svg?height=60&width=120" },
    { name: "IIT Bombay", type: "Academic", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background font-sans">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-md bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="text-2xl font-rajdhani font-bold text-foreground">TrusteD-V</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/product-suite" className="text-muted-foreground hover:text-foreground transition-colors">
                Product Suite
              </Link>
              <Link href="/developer-portal" className="text-muted-foreground hover:text-foreground transition-colors">
                Developer Portal
              </Link>
              <Link href="/plans" className="text-muted-foreground hover:text-foreground transition-colors">
                Plans
              </Link>
              <Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors">
                Partners
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/training-support" className="text-muted-foreground hover:text-foreground transition-colors">
                Training & Support
              </Link>
              {isLoggedIn ? (
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <Link href="/signin">Sign In</Link>
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link href="/free-trial">Start Free Trial</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-background to-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">
                Secure RISC-V + Rust Ecosystem
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-rajdhani font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              The Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}
                Secure Embedded Development
              </span>
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto" variants={fadeInUp}>
              Professional-grade platform for RISC-V microcontroller development with Rust. Featuring AI-powered
              assistance, comprehensive toolsets, and everything you need for high-performance computing and
              software-defined vehicles.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 text-primary-foreground"
                asChild
              >
                <Link href="/free-trial">
                  <Play className="mr-2 h-5 w-5" />
                  Start Development
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-accent/10 text-lg px-8 py-3"
                asChild
              >
                <Link href="/download-jarvyn-ide">
                  <Download className="mr-2 h-5 w-5" />
                  Download Jarvyn IDE
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
      </section>

      {/* Product Suite Overview */}
      <section className="py-20 bg-card-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-foreground mb-4">Our Product Suite</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and components for building secure, high-performance RISC-V systems.
            </p>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/product-suite">
                Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productSuiteItems.slice(0, 6).map((item, index) => (
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
      </section>

      {/* Developer Portal Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-rajdhani font-bold text-foreground mb-6">
                Your Central Developer Hub
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                The Developer Portal provides all the resources you need for efficient RISC-V + Rust development, from
                integrated tools to comprehensive documentation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Extensive Documentation & API References</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code2 className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Web-based IDE & Tool Integrations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Terminal className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Advanced Debugging & Flashing Tools</span>
                </div>
              </div>
              <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/developer-portal">
                  Visit Developer Portal <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="bg-card border-primary/30 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-primary font-medium">AI Assistant</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <span className="text-muted-foreground">
                      💡 Suggestion: Consider using RISC-V vector extensions for this loop optimization
                    </span>
                  </div>
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <span className="text-muted-foreground">
                      🔧 Auto-fix: Memory alignment issue detected and corrected
                    </span>
                  </div>
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <span className="text-muted-foreground">
                      ⚡ Performance: 23% improvement with suggested changes
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-card-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-foreground mb-4">Explore Our Plans</h2>
            <p className="text-xl text-muted-foreground">Flexible options for every development need</p>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/plans">
                View All Plans <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              <TabsTrigger
                value="starter"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Subscription
              </TabsTrigger>
              <TabsTrigger
                value="professional"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Direct Sales
              </TabsTrigger>
              <TabsTrigger
                value="enterprise"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                IP Licensing
              </TabsTrigger>
            </TabsList>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <TabsContent value="starter" className="col-span-full">
                <PricingCard
                  title="Subscription Model (SaaS)"
                  description="Access our powerful IDE and core tools via a flexible subscription."
                  features={[
                    "Web-based IDE access",
                    "Standard AI assistance",
                    "Community support",
                    "Regular software updates",
                    "Scalable usage tiers",
                  ]}
                  buttonText="Start Free Trial"
                  popular={false}
                  buttonLink="/free-trial"
                />
              </TabsContent>
              <TabsContent value="professional" className="col-span-full">
                <PricingCard
                  title="Direct Sales (Bundles)"
                  description="Acquire software and hardware bundles tailored for your specific projects."
                  features={[
                    "Custom SDKs and toolchains",
                    "Dedicated technical support",
                    "On-premise deployment options",
                    "Hardware integration services",
                    "Long-term maintenance contracts",
                  ]}
                  buttonText="Contact Sales"
                  popular={true}
                  buttonLink="/contact"
                />
              </TabsContent>
              <TabsContent value="enterprise" className="col-span-full">
                <PricingCard
                  title="Hardware IP Licensing / Bundling"
                  description="Integrate our secure software IP directly into your hardware designs."
                  features={[
                    "Secure Bootloader IP",
                    "Microkernel IP",
                    "Customizable HALs",
                    "Royalty-based licensing",
                    "Joint development agreements",
                  ]}
                  buttonText="Inquire Now"
                  popular={false}
                  buttonLink="/contact"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Our Partners Section */}
      <section id="partners" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-foreground mb-4">Our Valued Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with leading institutions and innovators to build a stronger ecosystem.
            </p>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/partners">
                View All Partners <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Link href={`/partners`} className="block h-full">
                  <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300 h-full">
                    <CardHeader>
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} Logo`}
                        className="h-16 object-contain mb-2"
                      />
                      <CardTitle className="text-foreground font-rajdhani">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">{partner.type}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from the Blog Section */}
      <section id="blog" className="py-20 bg-card-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-rajdhani font-bold text-foreground mb-4">Latest from the Blog</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dives, tutorials, and insights into RISC-V, Rust, and secure embedded systems.
            </p>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/blog">
                Read All Blogs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

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
                      <CardTitle className="text-foreground font-rajdhani">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">{post.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Support CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2
              className="text-3xl md:text-5xl font-rajdhani font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              Empower Your Team with Expert Training
            </motion.h2>
            <motion.p className="text-xl text-muted-foreground mb-8" variants={fadeInUp}>
              From foundational workshops to advanced certifications, we provide the knowledge and support you need.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 text-primary-foreground"
                asChild
              >
                <Link href="/training-support">
                  Explore Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-accent/10 text-lg px-8 py-3"
                asChild
              >
                <Link href="/contact">Request Consulting</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="text-xl font-rajdhani font-bold text-foreground">TrusteD-V</span>
              </div>
              <p className="text-muted-foreground">
                The ultimate platform for RISC-V microcontroller development with Rust.
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/product-suite" className="hover:text-foreground transition-colors">
                    Product Suite
                  </Link>
                </li>
                <li>
                  <Link href="/developer-portal" className="hover:text-foreground transition-colors">
                    Developer Portal
                  </Link>
                </li>
                <li>
                  <Link href="/plans" className="hover:text-foreground transition-colors">
                    Plans
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-foreground transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/training-support" className="hover:text-foreground transition-colors">
                    Training & Support
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 TrusteD-V. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PricingCard({
  title,
  description,
  features,
  buttonText,
  popular,
  buttonLink,
}: {
  title: string
  description: string
  features: string[]
  buttonText: string
  popular: boolean
  buttonLink: string
}) {
  return (
    <Card className={`relative bg-card border-border ${popular ? "border-primary bg-primary/10" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
        </div>
      )}
      <CardHeader className="text-center">
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
