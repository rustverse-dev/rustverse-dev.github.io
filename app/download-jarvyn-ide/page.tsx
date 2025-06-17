import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ComputerIcon as Windows, Apple, LaptopIcon as Linux, ArrowLeft } from "lucide-react" // Import ArrowLeft

export default function DownloadJarvynIDE() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-dark to-background font-sans py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-rajdhani font-bold text-foreground mb-6">Download Jarvyn IDE</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Jarvyn IDE is your comprehensive integrated development environment for secure RISC-V microcontroller
          development with Rust. It features AI-powered assistance, advanced debugging tools, and a seamless workflow
          for high-performance computing and software-defined vehicles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
            <CardHeader>
              <div className="text-primary mb-2 flex justify-center">
                <Windows className="h-12 w-12" />
              </div>
              <CardTitle className="text-foreground font-rajdhani text-2xl">Windows</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-6">
                Download the installer for Windows (64-bit).
              </CardDescription>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="https://raw.githubusercontent.com/abhishekdhamale/main/docs/download-file/jarvyn-ide-windows">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Windows
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
            <CardHeader>
              <div className="text-primary mb-2 flex justify-center">
                <Apple className="h-12 w-12" />
              </div>
              <CardTitle className="text-foreground font-rajdhani text-2xl">macOS</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-6">
                Download the disk image for macOS (Intel/Apple Silicon).
              </CardDescription>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="https://raw.githubusercontent.com/abhishekdhamale/main/docs/download-file/jarvyn-ide-macos">
                  <Download className="mr-2 h-5 w-5" />
                  Download for macOS
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-card/80 transition-all duration-300">
            <CardHeader>
              <div className="text-primary mb-2 flex justify-center">
                <Linux className="h-12 w-12" />
              </div>
              <CardTitle className="text-foreground font-rajdhani text-2xl">Linux</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground mb-6">
                Download the AppImage or .deb package for Linux (64-bit).
              </CardDescription>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="https://raw.githubusercontent.com/abhishekdhamale/main/docs/download-file/jarvyn-ide-linux">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Linux
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Add Go to Home option */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-primary hover:underline text-lg flex items-center justify-center">
            <ArrowLeft className="mr-2 h-5 w-5" /> Go back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
