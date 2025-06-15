import type React from "react"
import "./globals.css"
import { Inter, Rajdhani } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-rajdhani" })

export const metadata = {
  title: "TrusteD-V - Secure RISC-V + Rust Ecosystem",
  description:
    "Professional platform for RISC-V microcontroller development with Rust, featuring AI-powered assistance, comprehensive toolsets, and secure software solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, rajdhani.variable)}>
        {children}
      </body>
    </html>
  )
}
