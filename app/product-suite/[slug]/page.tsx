import ProductDetailPageClient from "./ProductDetailPageClient"

const productDetails: {
  [key: string]: {
    title: string
    description: string
    longDescription: string
    keyFeatures: string[]
    simulationLink?: string
  }
} = {
  "secure-bootloader-rustboot": {
    title: "Secure Bootloader (rustBoot)",
    description: "Ensure system integrity from power-on with our robust, Rust-based secure bootloader.",
    longDescription:
      "rustBoot is a highly secure and customizable bootloader written entirely in Rust, designed to establish a Root of Trust from the very first instruction. It verifies the integrity and authenticity of subsequent boot stages and application firmware, protecting against unauthorized modifications and malicious attacks. Ideal for safety-critical and security-sensitive embedded systems.",
    keyFeatures: [
      "Cryptographic verification of firmware (signatures, hashes)",
      "Support for various flash memory types and boot flows",
      "Minimalistic design for reduced attack surface",
      "Written in Rust for memory safety and reliability",
      "Easy integration with RISC-V hardware",
      "Firmware update mechanisms (OTA support)",
    ],
  },
  "trusted-hal": {
    title: "Trusted Hardware Abstraction Layer (HAL)",
    description: "Simplify hardware interaction with a secure and efficient HAL for RISC-V processors.",
    longDescription:
      "Our Trusted HAL provides a safe, idiomatic, and high-performance interface to RISC-V hardware peripherals. Developed with security in mind, it minimizes common embedded programming errors and ensures robust interaction between software and hardware components. It's designed to be modular and extensible, supporting a wide range of RISC-V microcontrollers and custom silicon.",
    keyFeatures: [
      "Memory-safe Rust abstractions for peripherals",
      "Compile-time checks for common hardware errors",
      "Optimized for performance and low resource usage",
      "Modular design for easy customization and extension",
      "Supports various RISC-V architectures and extensions",
      "Reduces development time and improves code quality",
    ],
  },
  "rust-compiler": {
    title: "Rust Compiler with Pliron & Cranelift",
    description: "Optimized Rust compiler toolchain for RISC-V, leveraging advanced backends for performance.",
    longDescription:
      "Our custom Rust compiler toolchain is specifically optimized for RISC-V architectures, delivering highly efficient and compact binaries. By integrating advanced compiler backends like Pliron and Cranelift, we achieve superior code generation, enabling high-performance computing and efficient resource utilization on embedded devices. This toolchain is a cornerstone for building robust and performant RISC-V applications in Rust.",
    keyFeatures: [
      "RISC-V specific code generation and optimizations",
      "Integration of Pliron for high-level IR transformations",
      "Cranelift backend for fast, secure, and efficient code generation",
      "Cross-compilation support for diverse RISC-V targets",
      "Advanced static analysis and optimization passes",
      "Seamless integration with Cargo build system",
    ],
  },
  "secure-microkernel-os": {
    title: "Secure Microkernel & OS Integrations",
    description: "Build reliable embedded systems with our secure microkernel and Tock OS/Linux integrations.",
    longDescription:
      "We provide a secure microkernel designed for embedded systems, emphasizing isolation, minimal attack surface, and real-time performance. For more complex applications, we offer robust integrations with secure operating systems like Tock OS (a Rust-based embedded OS) and hardened Linux distributions, ensuring a trusted execution environment for your applications.",
    keyFeatures: [
      "Minimalistic, secure microkernel architecture",
      "Memory isolation and privilege separation",
      "Integration with Tock OS for Rust-native embedded development",
      "Support for hardened Linux distributions for complex systems",
      "Real-time capabilities and deterministic behavior",
      "Secure inter-process communication mechanisms",
    ],
  },
  "integrated-sdks": {
    title: "Integrated SDKs for Heterogeneous Chips",
    description: "Comprehensive SDKs for various RISC-V processors, including AI accelerators (TPU/NPU).",
    longDescription:
      "Our Software Development Kits (SDKs) are designed to provide a complete development environment for a wide range of RISC-V processors, including those with heterogeneous compute units like TPUs, NPUs, and GPUs. These SDKs include drivers, libraries, middleware, and examples, enabling rapid prototyping and efficient development of complex embedded and AI-driven applications.",
    keyFeatures: [
      "Drivers and libraries for diverse RISC-V cores and peripherals",
      "Support for AI accelerators (TPU, NPU, VPU) and GPUs",
      "Middleware for networking, file systems, and security protocols",
      "Example projects and templates for quick starts",
      "Optimized for performance on heterogeneous architectures",
      "Regular updates and compatibility with latest hardware",
    ],
  },
  "slm-based-ide": {
    title: "Vertically Integrated IDE (SLM-based)",
    description: "A powerful, web-based IDE designed for seamless Rust and RISC-V development.",
    longDescription:
      "Our Vertically Integrated Development Environment (IDE) is built on a cutting-edge SLM (Small Language Model) framework, providing a unified and intuitive experience for RISC-V + Rust development. It offers advanced features like intelligent code completion, integrated debugging, project management, and seamless integration with our toolchains and hardware. Being web-based, it offers unparalleled accessibility and collaboration capabilities.",
    keyFeatures: [
      "Intelligent code completion and syntax highlighting for Rust and RISC-V assembly",
      "Integrated debugger with hardware and software breakpoints",
      "Real-time error checking and code analysis",
      "Project management and build system integration",
      "Collaborative development features (web-based)",
      "Customizable interface and extensions",
    ],
    simulationLink: "/simulate/slm-ide",
  },
  "debugging-flashing-tools": {
    title: "Debugging & Flashing Toolchains (Probe.rs)",
    description: "Advanced tools for efficient debugging and secure flashing of RISC-V devices.",
    longDescription:
      "Our debugging and flashing toolchains, powered by Probe.rs, provide unparalleled control and visibility into your RISC-V hardware. From low-level register inspection to complex multi-core debugging, these tools streamline the development and testing process. Secure flashing mechanisms ensure that only authorized firmware is loaded onto your devices, maintaining the integrity of your embedded systems.",
    keyFeatures: [
      "Multi-core debugging capabilities",
      "Real-time trace and profiling",
      "Secure over-the-air (OTA) flashing support",
      "JTAG/SWD probe integration (e.g., Probe.rs)",
      "Memory inspection and modification",
      "Breakpoints, watchpoints, and step-by-step execution",
    ],
    simulationLink: "/simulate/probe-rs",
  },
  "certified-toolchains": {
    title: "Certified Rust Toolchains (ISO 26262)",
    description: "Achieve functional safety compliance with our certified Rust toolchains for automotive applications.",
    longDescription:
      "For safety-critical applications, particularly in the automotive sector, our Rust toolchains are developed with a roadmap towards ISO 26262 ASIL D certification. This ensures that the compiler and associated tools meet the highest standards for functional safety, enabling developers to build highly reliable and secure software for software-defined vehicles and other critical embedded systems.",
    keyFeatures: [
      "Compliance with ISO 26262 functional safety standard",
      "ASIL D development roadmap",
      "Robust error detection and prevention mechanisms",
      "Comprehensive validation and verification processes",
      "Traceability from requirements to code",
      "Support for safety-critical Rust programming patterns",
    ],
  },
  "peripheral-access-crates": {
    title: "Peripheral Access Crates",
    description: "Rust crates providing safe and idiomatic access to RISC-V peripherals.",
    longDescription:
      "Our Peripheral Access Crates (PACs) are auto-generated or hand-crafted Rust libraries that provide a safe, low-level interface to the memory-mapped registers of RISC-V microcontrollers. They leverage Rust's type system to prevent common programming errors like incorrect register access or bit manipulation, making embedded development more robust and less prone to bugs.",
    keyFeatures: [
      "Type-safe access to hardware registers",
      "Prevents common embedded programming errors at compile time",
      "Idiomatic Rust API for peripheral control",
      "Supports various RISC-V microcontroller families",
      "Generated from SVD files for accuracy",
      "Foundation for building higher-level HALs",
    ],
  },
  "trusted-accelerator-apis": {
    title: "Trusted Accelerator APIs (GPU/VPU)",
    description: "Secure APIs for integrating and utilizing hardware accelerators like GPUs and VPUs.",
    longDescription:
      "As embedded systems increasingly rely on specialized hardware accelerators for AI/ML and signal processing, our Trusted Accelerator APIs provide a secure and efficient way to interact with GPUs, VPUs, and other custom compute units. These APIs ensure data integrity and isolation, allowing developers to offload complex computations while maintaining the overall security of the system.",
    keyFeatures: [
      "Secure communication channels with accelerators",
      "Memory-safe data transfer mechanisms",
      "Optimized for high-throughput data processing",
      "Supports various accelerator architectures",
      "Integration with secure OS environments",
      "Enables efficient heterogeneous computing",
    ],
  },
  "hsm-integration": {
    title: "Secure Hardware Security Module (HSM) Integration",
    description: "Seamless integration with HSMs for enhanced cryptographic operations and secure key storage.",
    longDescription:
      "Hardware Security Modules (HSMs) are critical for protecting sensitive cryptographic keys and operations in embedded systems. Our platform provides seamless integration with various HSMs, allowing developers to leverage hardware-rooted security for secure boot, secure storage, and cryptographic acceleration. This significantly enhances the overall security posture of RISC-V devices.",
    keyFeatures: [
      "Secure key generation and storage in hardware",
      "Hardware-accelerated cryptographic operations",
      "Tamper detection and response mechanisms",
      "Integration with secure boot and firmware updates",
      "API for secure element communication",
      "Compliance with industry security standards",
    ],
  },
  "software-testing-toolchain": {
    title: "Software Testing Toolchain",
    description: "Comprehensive tools for automated testing, verification, and validation of embedded software.",
    longDescription:
      "Our Software Testing Toolchain provides a complete set of tools for ensuring the quality, reliability, and security of your RISC-V + Rust embedded software. From unit testing and integration testing to static analysis and formal verification, these tools help identify bugs early in the development cycle and ensure compliance with industry standards.",
    keyFeatures: [
      "Unit testing frameworks for embedded Rust",
      "Integration testing with hardware-in-the-loop (HIL) and software-in-the-loop (SIL)",
      "Static analysis tools for code quality and security vulnerabilities",
      "Code coverage analysis",
      "Fuzz testing for robustness",
      "Continuous integration (CI) pipeline integration",
    ],
  },
  "shakti-sdk": {
    title: "Shakti SDK",
    description: "The official SDK for the Shakti processor family, enabling rapid development.",
    longDescription:
      "The Shakti SDK provides a complete development environment specifically tailored for the Shakti family of RISC-V processors. It includes optimized toolchains, board support packages (BSPs), example projects, and comprehensive documentation, enabling developers to quickly get started and build high-performance applications on Shakti-based hardware.",
    keyFeatures: [
      "Optimized Rust toolchain for Shakti processors",
      "Board Support Packages (BSPs) for various Shakti boards",
      "Example projects and templates",
      "Drivers and libraries for Shakti peripherals",
      "Debugging and flashing support for Shakti hardware",
      "Integration with SafeV IDE",
    ],
  },
  "llvm-integration": {
    title: "LLVM Integration",
    description: "Leveraging the LLVM infrastructure for advanced compiler optimizations and code generation.",
    longDescription:
      "Our Rust compiler toolchain deeply integrates with the LLVM infrastructure, allowing us to leverage its powerful optimization passes and robust code generation capabilities. This integration ensures that the generated RISC-V binaries are highly optimized for performance and code size, while also benefiting from LLVM's extensive support for various architectures and continuous development.",
    keyFeatures: [
      "Utilizes LLVM's optimization pipeline",
      "Leverages LLVM's code generation for RISC-V targets",
      "Benefits from LLVM's active development and community",
      "Enables advanced compiler features and analyses",
      "Ensures high performance and code efficiency",
      "Foundation for future compiler enhancements",
    ],
  },
  "full-stack-secure-software": {
    title: "Full-stack Secure Embedded System Software",
    description: "End-to-end secure software solutions from bootloader to application layer.",
    longDescription:
      "We provide comprehensive, full-stack secure software solutions for embedded systems. This includes everything from the secure bootloader (rustBoot) and trusted microkernel/OS to secure HALs, peripheral drivers, and application-level security features. Our integrated approach ensures a consistent security posture across the entire software stack, minimizing vulnerabilities and enhancing overall system trustworthiness.",
    keyFeatures: [
      "Integrated secure boot, OS, and application layers",
      "Consistent security policies across the stack",
      "Reduced attack surface through secure design principles",
      "End-to-end data integrity and confidentiality",
      "Simplified security implementation for developers",
      "Tailored for specific embedded use cases",
    ],
  },
  "custom-riscv-sdks": {
    title: "Custom SDKs for RISC-V Processors",
    description: "Tailored SDKs designed to meet the unique requirements of your specific RISC-V hardware.",
    longDescription:
      "Beyond our standard SDKs, we offer custom SDK development services for unique RISC-V processor designs or specialized hardware. Our team works closely with you to create an SDK that perfectly matches your silicon, including custom drivers, optimized libraries, and specific toolchain configurations, ensuring maximum performance and ease of development for your proprietary hardware.",
    keyFeatures: [
      "Tailored to specific custom RISC-V silicon",
      "Optimized drivers for proprietary peripherals",
      "Custom toolchain configurations",
      "Dedicated support during development",
      "Accelerates time-to-market for new hardware",
      "Ensures optimal performance and compatibility",
    ],
  },
  "secure-ai-stacks": {
    title: "Secure Software Stacks for TPUs, NPUs, and AI Accelerators",
    description: "Specialized software solutions ensuring security and performance for AI-driven embedded systems.",
    longDescription:
      "As AI moves to the edge, securing AI accelerators like TPUs and NPUs becomes critical. We develop secure software stacks specifically for these heterogeneous compute environments, ensuring that AI models and data are protected from tampering and unauthorized access. Our solutions provide trusted execution environments for AI inference, secure data pipelines, and robust integration with the underlying hardware.",
    keyFeatures: [
      "Secure loading and execution of AI models",
      "Data integrity and confidentiality for AI workloads",
      "Trusted execution environments for AI inference",
      "Optimized for performance on AI accelerators",
      "Integration with secure boot and OS",
      "Supports various AI frameworks and formats",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({
    slug,
  }))
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <ProductDetailPageClient params={params} />
}
