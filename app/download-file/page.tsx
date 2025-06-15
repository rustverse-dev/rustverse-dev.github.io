"use client"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { DownloadCloud } from "lucide-react"

export default function DownloadFilePage() {
  const searchParams = useSearchParams()
  const fileName = searchParams.get("file") || "your file"

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-primary-dark to-background text-foreground p-4 font-sans">
      <DownloadCloud className="h-24 w-24 text-primary mb-8 animate-bounce" />
      <h1 className="text-5xl font-rajdhani font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Download Initiated
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Thank you for downloading {fileName}! Your download should begin shortly.
      </p>
      <div className="space-y-4 text-center">
        <Link href="/" className="text-primary hover:underline text-lg">
          Go back to Home
        </Link>
      </div>
    </div>
  )
}
