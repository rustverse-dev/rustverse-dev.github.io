"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get("email") || "your email"

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp === "123456") {
      setMessage("OTP verified successfully! Redirecting...")
      localStorage.setItem("isLoggedIn", "true")
      setTimeout(() => {
        router.push("/auth-success")
      }, 1500)
    } else {
      setMessage("Invalid OTP. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <h1 className="text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Verify OTP
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        An OTP has been sent to <span className="font-semibold">{email}</span>.
      </p>

      <div className="w-full max-w-md bg-card border border-primary/30 rounded-lg p-8 shadow-lg">
        <form onSubmit={handleVerifyOtp} className="space-y-6">
          <div>
            <Label htmlFor="otp" className="text-lg text-muted-foreground">
              Enter OTP
            </Label>
            <Input
              id="otp"
              type="text"
              placeholder="******"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-2 bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
              maxLength={6}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3 text-primary-foreground">
            Verify OTP
          </Button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-muted-foreground">{message}</p>}
        <div className="mt-6 text-center">
          <Link href="/signin" className="text-primary hover:underline text-md">
            Resend OTP or Change Email
          </Link>
        </div>
      </div>
    </div>
  )
}
