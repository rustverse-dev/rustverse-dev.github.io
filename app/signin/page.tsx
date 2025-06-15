"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setMessage(`OTP sent to ${email}. Please check your inbox.`)
      router.push(`/verify-otp?email=${encodeURIComponent(email)}`)
    } else {
      setMessage("Please enter your email address.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <h1 className="text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Sign In / Sign Up
      </h1>
      <p className="text-xl text-muted-foreground mb-8">Enter your email to get started.</p>

      <div className="w-full max-w-md bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
        <form onSubmit={handleSendOtp} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-lg text-muted-foreground">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3 text-primary-foreground">
            Send OTP
          </Button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-muted-foreground">{message}</p>}
        <div className="mt-6 text-center">
          <Link href="/" className="text-primary hover:underline text-md">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
