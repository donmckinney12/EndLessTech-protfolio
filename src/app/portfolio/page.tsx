"use client";

import { LayoutShell } from "@/components/layout-shell";
import { ProjectCard } from "@/components/project-card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Package, BarChart3, Radio, FileText, ShieldCheck, Search, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Aegis-Agent ID",
    description: "Enterprise-grade Zero-Trust Identity Control Plane. Employs SPIFFE/SVID identities and OPA policy enforcement for autonomous agents.",
    icon: ShieldCheck,
    status: "Active" as const,
    exitStatus: "Acquisition Ready" as const,
    tags: ["Go", "SPIFFE", "Security"],
    slug: "aegis-agent-id",
  },
  {
    title: "BrochureGen",
    description: "Automated AI marketing collateral generator. Transforms URLs and raw data into print-ready brochures with neural layout engines.",
    icon: FileText,
    status: "Active" as const,
    exitStatus: "Acquisition Ready" as const,
    tags: ["FastAPI", "Node.js", "AI"],
    slug: "brochuregen",
  },
  {
    title: "Synthetix OS",
    description: "The nervous system for virtual personas. Manages digital identities via vectorized memory (Lore Vault) and linguistic DNA algorithms.",
    icon: Bot,
    status: "Developing" as const,
    exitStatus: "In Pipeline" as const,
    tags: ["FastAPI", "Pinecone", "AI"],
    slug: "synthetix-os",
  },
  {
    title: "AgenticFr8",
    description: "Autonomous procurement and auditing node for international freight. Refactoring logistics through neural quote ingestion.",
    icon: Package,
    status: "Developing" as const,
    exitStatus: "In Pipeline" as const,
    tags: ["Python", "LangChain", "Logistics"],
    slug: "agenticfr8",
  },
  {
    title: "CarrierScore AI",
    description: "Risk intelligence platform for freight brokerages. Instant AI-explained risk scoring for MC/DOT numbers with fraud network detection.",
    icon: BarChart3,
    status: "Developing" as const,
    exitStatus: "In Pipeline" as const,
    tags: ["FastAPI", "Redis", "Risk"],
    slug: "carrierscore-ai",
  },
  {
    title: "SentinelVoice AI",
    description: "Real-time voice identity verification and deepfake detection middleware. Built for security analysts in financial institutions.",
    icon: Radio,
    status: "Developing" as const,
    exitStatus: "In Pipeline" as const,
    tags: ["Next.js 16", "FastAPI", "Voice"],
    slug: "sentinelvoice-ai",
  },
  {
    title: "ResearchFlux",
    description: "Evidence Architecture for organizational intelligence. Transforms fragmented feedback into an auditable record of product truth.",
    icon: Search,
    status: "Developing" as const,
    exitStatus: "In Pipeline" as const,
    tags: ["Go", "Python", "Intelligence"],
    slug: "auralint-insight", // Keeping the slug for compatibility or changing it
  },
];

export default function PortfolioPage() {
  return (
    <LayoutShell>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Mesh Gradient */}
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-10">
          {/* Stunning Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-800 mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">High-Value Asset Inventory</span>
            </motion.div>
            
            <h1 className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-12">
              ENGINEERED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                CLUSTERS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              A curated selection of high-fidelity SaaS assets architected for 
              absolute technical transparency and institutional acquisition.
            </p>
          </motion.div>

          {/* Dynamic Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={i % 2 === 1 ? "lg:mt-24" : ""}
              >
                <div className="group relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl" />
                  
                  <ProjectCard 
                    {...project} 
                    className="relative z-10 min-h-[400px] border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500" 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-40 pt-20 border-t border-slate-900 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8 uppercase tracking-tighter italic">READY FOR <span className="text-cyan-400">DUE DILIGENCE</span>?</h2>
            <Link href="/inquire">
              <button className="px-12 py-6 rounded-2xl bg-white text-slate-950 font-black text-xl hover:bg-cyan-400 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                Request Data Room Access
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </LayoutShell>
  );
}
