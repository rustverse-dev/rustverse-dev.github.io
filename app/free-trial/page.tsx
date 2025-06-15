"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Code2, BookOpen, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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

export default function FreeTrialPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [trialActivated, setTrialActivated] = useState(false)

  const starterPlanFeatures = [
    "Web-based IDE Access",
    "Basic AI-Powered Code Assistance",
    "Limited Cloud Build & Simulation Hours",
    "Access to Core SDKs & Toolchains",
    "Community Support & Forums",
    "Version Control Integration",
    "Basic Performance Analytics",
    "Up to 5 Projects",
    "Single User Access",
  ]

  useEffect(() => {
    // Check login status
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedInStatus)

    // Check if trial has already been activated in a previous session
    const trialStatus = localStorage.getItem("freeTrialStarted") === "true"
    setTrialActivated(trialStatus)
  }, [])

  const handleStartTrial = () => {
    // This function is called when a logged-in user clicks "Start My Free Trial"
    localStorage.setItem("freeTrialStarted", "true")
    setTrialActivated(true)
    // No immediate redirect, let the user see the activated page content
  }

  if (trialActivated) {
    // State 2: Free Trial Activated! (Final confirmation page)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <CheckCircle className="h-24 w-24 text-accent mb-8 animate-bounce" />
          </motion.div>
          <motion.h1
            className="text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center"
            variants={fadeInUp}
          >
            Free Trial Activated!
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-12 text-center"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Welcome to SafeV. You now have access to all features included in your **Starter Plan**. Start exploring and
            building!
          </motion.p>

          <motion.div
            className="w-full bg-card border border-primary/30 rounded-lg p-8 shadow-lg mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-6">Your Free Trial Includes:</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              {starterPlanFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 text-primary-foreground"
              asChild
            >
              <Link href="/developer-portal">
                <Code2 className="mr-2 h-5 w-5" />
                Go to Developer Portal
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-accent/10 text-lg px-8 py-3"
              asChild
            >
              <Link href="/documentation">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Documentation
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    )
  } else {
    // State 1: Pre-activation (showing features and prompting login/start)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center"
            variants={fadeInUp}
          >
            Start Your Free Trial
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-12 text-center"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Experience the full power of SafeV with our free trial. No credit card required.
          </motion.p>

          <motion.div
            className="w-full bg-card border border-primary/30 rounded-lg p-8 shadow-lg mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-rajdhani font-semibold text-foreground mb-6">Your Free Trial Includes:</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              {starterPlanFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {isLoggedIn ? (
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 text-primary-foreground"
                onClick={handleStartTrial}
              >
                Start My Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 text-primary-foreground"
                asChild
              >
                <Link href="/signin">
                  Sign In / Sign Up to Start Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    )
  }
}
