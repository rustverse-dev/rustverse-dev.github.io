"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"

export default function AuthSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem("isLoggedIn", "true")
    const timer = setTimeout(() => {
      // Redirect to free-trial page after successful login
      router.push("/free-trial")
    }, 1500)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <CheckCircle className="h-24 w-24 text-accent mb-8 animate-bounce" />
      <h1 className="text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Authentication Successful!
      </h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl">
        You have successfully signed in. Redirecting to your trial activation...
      </p>
    </div>
  )
}
