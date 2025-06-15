import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

// Define detailed content for each feature
const featureDetails: {
  [key: string]: {
    title: string
    description: string
    details: string[]
  }
} = {
  "advanced-ide": {
    title: "Advanced Integrated Development Environment",
    description:
      "Our IDE is meticulously crafted for RISC-V and Rust, offering a seamless coding experience with powerful tools.",
    details: [
      "Intelligent code completion for Rust and RISC-V assembly.",
      "Integrated debugger with hardware and software breakpoints.",
      "Syntax highlighting and error checking for efficient development.",
      "Project management and build system integration.",
      "Customizable themes and layouts to suit your workflow.",
    ],
  },
  "ai-powered-assistant": {
    title: "AI-Powered Development Assistant",
    description:
      "Leverage the power of AI to accelerate your RISC-V development, from code optimization to bug detection.",
    details: [
      "Real-time code suggestions and refactoring.",
      "Architecture-specific performance optimizations.",
      "Automated bug detection and suggested fixes.",
      "Natural language interaction for complex queries.",
      "Generates documentation and code comments automatically.",
    ],
  },
  "risc-v-compiler": {
    title: "Optimized RISC-V Compiler",
    description:
      "Our highly optimized Rust compiler is specifically designed for RISC-V architectures, ensuring maximum performance and efficiency.",
    details: [
      "Advanced optimization passes for smaller code size and faster execution.",
      "Full cross-compilation support for various RISC-V targets.",
      "Integration with popular build systems like Cargo.",
      "Support for custom RISC-V extensions and instruction sets.",
      "Detailed assembly output for low-level analysis.",
    ],
  },
  "rtos-integration": {
    title: "Real-Time Operating System (RTOS) Integration",
    description: "Seamlessly integrate and develop with leading RTOS solutions optimized for RISC-V microcontrollers.",
    details: [
      "Pre-configured RTOS kernels for various RISC-V boards.",
      "Tools for task scheduling, memory management, and inter-process communication.",
      "Debugging support for RTOS-aware applications.",
      "Examples and templates for rapid RTOS-based development.",
      "Support for real-time constraints and deterministic behavior.",
    ],
  },
  "comprehensive-sdks": {
    title: "Comprehensive Software Development Kits",
    description: "Access a rich collection of SDKs, drivers, and libraries to jumpstart your RISC-V projects.",
    details: [
      "Hardware abstraction layers (HALs) for various peripherals.",
      "Extensive driver libraries for common sensors and actuators.",
      "Middleware components for networking, file systems, and more.",
      "Example projects and templates for quick prototyping.",
      "Regular updates with new hardware support and features.",
    ],
  },
  "performance-tools": {
    title: "Advanced Performance Tools",
    description: "Analyze, profile, and optimize your RISC-V applications for peak performance.",
    details: [
      "Code profilers to identify performance bottlenecks.",
      "Benchmarking tools for comparing different implementations.",
      "Memory usage analysis and leak detection.",
      "Power consumption estimation and optimization tools.",
      "Visualization of execution flow and resource utilization.",
    ],
  },
  "automotive-support": {
    title: "Automotive Development Support",
    description: "Specialized tools and libraries tailored for software-defined vehicles and automotive applications.",
    details: [
      "Safety-critical development features and guidelines.",
      "AUTOSAR-compliant software components.",
      "Vehicle network communication protocols (CAN, LIN, Ethernet).",
      "Functional safety analysis tools (ISO 26262).",
      "Hardware-in-the-loop (HIL) and software-in-the-loop (SIL) testing.",
    ],
  },
  "security-features": {
    title: "Robust Security Features",
    description: "Ensure the integrity and confidentiality of your RISC-V applications with built-in security tools.",
    details: [
      "Static and dynamic security analysis for vulnerabilities.",
      "Cryptographic libraries for secure communication and data storage.",
      "Secure boot implementations to prevent unauthorized firmware.",
      "Hardware security module (HSM) integration.",
      "Threat modeling and attack surface analysis tools.",
    ],
  },
  "simulation-environment": {
    title: "Comprehensive Simulation Environment",
    description:
      "Test and debug your RISC-V code without physical hardware using our powerful simulation and emulation tools.",
    details: [
      "Full-system simulation for accurate hardware behavior.",
      "Instruction set simulators (ISS) for rapid code execution.",
      "Virtual prototyping for early software development.",
      "Fault injection and robustness testing.",
      "Integration with continuous integration/continuous deployment (CI/CD) pipelines.",
    ],
  },
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const feature = featureDetails[slug]

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Feature Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8">The feature you are looking for does not exist.</p>
        <Link href="/" className="text-purple-400 hover:underline text-lg flex items-center">
          <ArrowLeft className="mr-2 h-5 w-5" /> Go back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4">
      <div className="max-w-4xl mx-auto py-16">
        <Link href="/" className="text-purple-400 hover:underline text-lg flex items-center mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          {feature.title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">{feature.description}</p>

        <div className="bg-black/40 border border-purple-400/30 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Key Aspects:</h2>
          <ul className="space-y-4 text-lg text-gray-300">
            {feature.details.map((detail, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(featureDetails).map((slug) => ({
    slug,
  }))
}
