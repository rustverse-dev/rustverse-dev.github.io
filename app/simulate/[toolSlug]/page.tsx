import SimulateToolClientPage from "./SimulateToolClientPage"

const simulationDetails: {
  [key: string]: {
    title: string
    message: string
  }
} = {
  "slm-ide": {
    title: "SLM-based IDE Simulation",
    message: "Launching your web-based RISC-V + Rust IDE. Please wait...",
  },
  "probe-rs": {
    title: "Probe.rs Debugger Simulation",
    message: "Connecting to simulated RISC-V target via Probe.rs. Debugging session starting...",
  },
  // Add more simulation details as needed
}

export default function SimulateToolPage({ params }: { params: { toolSlug: string } }) {
  return <SimulateToolClientPage params={params} />
}

export async function generateStaticParams() {
  return Object.keys(simulationDetails).map((toolSlug) => ({
    toolSlug,
  }))
}
