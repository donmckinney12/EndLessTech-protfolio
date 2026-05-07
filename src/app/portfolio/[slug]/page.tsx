"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { 
  Bot, Package, FileText, ShieldCheck, 
  Search, Cpu, Code, Database, 
  ArrowLeft, ExternalLink, Activity,
  Globe, Lock, Zap, BarChart3, Terminal,
  Radio
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const projectData: Record<string, any> = {
  "aegis-agent-id": {
    title: "Aegis-Agent ID",
    tagline: "Zero-Trust Identity for AI Agents",
    description: "Enterprise-grade Zero-Trust Identity Control Plane. Employs cryptographic X.509 SVID identities via SPIFFE, enforced with an embedded Open Policy Agent (OPA) engine for sub-millisecond policy evaluation.",
    icon: ShieldCheck,
    stack: ["Go 1.24", "SPIFFE", "OPA", "Next.js 15", "PostgreSQL"],
    features: [
      "React Flow Trust Graph for network topology",
      "Cryptographic SPIFFE SVID Registry",
      "Embedded OPA/Rego Policy Engine",
      "X.509 SVID issuing compliant with SPIFFE",
      "RBAC via Clerk & Multi-tenant isolation"
    ],
    architecture: "Go Control Plane + Next.js 15 Frontend",
  },
  "agenticfr8": {
    title: "AgenticFr8",
    tagline: "Sovereign Intelligence for Global Logistics",
    description: "Autonomous procurement and auditing node for international freight. Refactoring logistics into a mathematical certainty through neural quote ingestion and predictive yield matrices.",
    icon: Package,
    stack: ["Python (FastAPI)", "LangChain", "GPT-4", "Next.js 15", "PyMuPDF"],
    features: [
      "Neural Ingestion (OCR for PDF quotes)",
      "Predictive Yield Matrix for corridors",
      "Multi-agent procurement logic",
      "Automated invoice variance detection",
      "Sovereign Mission Control dashboard"
    ],
    architecture: "Python/FastAPI Backend + Next.js Frontend",
  },
  "brochuregen": {
    title: "BrochureGen",
    tagline: "Neural Marketing Collateral Generator",
    description: "Advanced AI platform that transforms raw data into print-ready, high-converting brochures. Features an autonomous spatial architect engine with brand-adaptive 3D materials.",
    icon: FileText,
    stack: ["Node.js", "Next.js 15", "FastAPI", "Playwright", "Stripe"],
    features: [
      "Velocity Protocol (Voice Scrape & Matrix)",
      "Neural Layout Transformer Engine",
      "Spatial AR Design Preview",
      "Autonomous lead retargeting system",
      "Holographic Admin Diagnostics"
    ],
    architecture: "Next.js Frontend + FastAPI/Node.js Edge Nodes",
  },
  "synthetix-os": {
    title: "Synthetix OS",
    tagline: "Nervous System for Virtual Personas",
    description: "Centralized governance for digital legacies. Manages virtual personas through vectorized memory (Lore Vault), linguistic DNA algorithms, and autonomous social execution.",
    icon: Bot,
    stack: ["FastAPI", "Pinecone", "OpenAI", "Next.js", "ElevenLabs"],
    features: [
      "Lore Vault (Vectorized Persona Memory)",
      "Linguistic DNA Dialogue Transformers",
      "Autonomous Lifecycle Management",
      "Zero-Trust Neural Uplink (Clerk JWT)",
      "Holographic Persona HUD"
    ],
    architecture: "FastAPI AI Core + Next.js Stealth Interface",
  },
  "carrierscore-ai": {
    title: "CarrierScore AI",
    tagline: "Carrier Risk Intelligence Platform",
    description: "Enterprise-grade risk intelligence for freight brokerages. Analyzes real-time safety data and fraud networks to provide instant, AI-explained risk scoring for MC/DOT numbers.",
    icon: BarChart3,
    stack: ["FastAPI", "SQLAlchemy", "Redis", "Next.js 15", "Clerk"],
    features: [
      "Instant MC/DOT Risk Scoring",
      "Fraud Network Graph (Chameleon detection)",
      "Andriana AI Risk Assistant",
      "Sliding Window Rate-Limiting",
      "Bulk CSV Analysis Engine"
    ],
    architecture: "Async Python Backend + Next.js 15 Dashboard",
  },
  "sentinelvoice-ai": {
    title: "SentinelVoice AI",
    tagline: "Real-time Voice Deepfake Detection",
    description: "Security middleware for financial institutions. Monitors live audio for identity verification through voiceprint matching and Wav2Vec2-based deepfake liveness analysis.",
    icon: Radio,
    stack: ["FastAPI", "Next.js 16", "SpeechBrain", "Wav2Vec2", "Redis"],
    features: [
      "ECAPA-TDNN Speaker Embeddings",
      "Wav2Vec2 Liveness Analysis",
      "Real-time WebSocket Trust Gauges",
      "Composite Trust Scoring (Similarity + Liveness)",
      "Encrypted Voiceprint Vault"
    ],
    architecture: "FastAPI WebSocket Core + Next.js 16 Dashboard",
  },
  "auralint-insight": {
    title: "ResearchFlux",
    tagline: "Evidence Architecture for Intelligence",
    description: "Organizational intelligence platform that transforms fragmented feedback into auditable truth. Implements a distributed Evidence Architecture to back every decision with a verified lineage.",
    icon: Search,
    stack: ["Go", "Python 3.11", "Next.js 14", "Snowflake", "Clerk"],
    features: [
      "Intelligence Hub (Insight Synthesis)",
      "Evidence Tracing (Mathematical Lineage)",
      "Data Governance Integrity Scanning",
      "Unified Intake Ecosystem (Slack/Snowflake)",
      "High-Concurrency Audit Logging"
    ],
    architecture: "Golang Lineage Core + Python Synthesis API",
  }
};

export default function ProjectDeepDive() {
  const { slug } = useParams();
  const project = projectData[slug as string];

  if (!project) return (
    <LayoutShell>
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-tighter">Node Not Found</h1>
          <Link href="/portfolio" className="text-cyan-400 hover:underline">Return to Asset Inventory</Link>
        </div>
      </div>
    </LayoutShell>
  );

  return (
    <LayoutShell>
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-10">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8">
                <project.icon className="w-10 h-10 text-cyan-400" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 leading-none uppercase italic">
                {project.title}
              </h1>
              <p className="text-xl text-cyan-400 font-mono uppercase tracking-widest mb-12">{project.tagline}</p>
              
              <div className="space-y-8 text-xl text-slate-400 font-light leading-relaxed">
                <p>{project.description}</p>
              </div>

              <div className="mt-16 space-y-4">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Architectural Stack</p>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech: string) => (
                    <span key={tech} className="px-5 py-2 rounded-xl glass border-slate-800 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Feature Grid */}
              <div className="p-12 rounded-[40px] glass border-slate-800/50 relative overflow-hidden">
                <div className="border-beam" />
                <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  Engineering Features
                </h3>
                <ul className="space-y-6">
                  {project.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-4 text-slate-400 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                      <span className="group-hover:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deployment Info */}
              <div className="p-10 rounded-[40px] bg-slate-900/50 border border-slate-800 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Terminal className="w-32 h-32 text-slate-500" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Deployment Topology</h3>
                  <p className="text-sm text-slate-500 font-mono mb-8">{project.architecture}</p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Core Production Ready</span>
                    </div>
                    <Link href="/inquire">
                      <button className="px-6 py-3 rounded-xl bg-white text-slate-950 font-black text-xs flex items-center gap-2 hover:bg-cyan-400 transition-all">
                        Request Due Diligence
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
