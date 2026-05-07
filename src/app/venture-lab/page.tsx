"use client";

import { LayoutShell } from "@/components/layout-shell";
import { PipelineStep } from "@/components/pipeline-step";
import { motion } from "framer-motion";
import { FlaskConical, Zap, Shield, DollarSign, Microscope } from "lucide-react";
import { SecurityGate } from "@/components/security-gate";

export default function VentureLabPage() {
  return (
    <SecurityGate
      title="Venture Protocol Restricted"
      description="The Acquisition Pipeline and synthesis protocols are restricted to authenticated users."
      icon="lock"
    >
      <LayoutShell>
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Mesh Gradient */}
          <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
          
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
                <Microscope className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">Synthesis & Scaling Protocols</span>
              </motion.div>
              
              <h1 className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-12">
                ACQUISITION <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  PIPELINE
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                Our systematic approach to building, scaling, and exiting high-margin 
                SaaS assets. From initial synthesis to institutional hand-off.
              </p>
            </motion.div>

            {/* High-Fidelity Pipeline Visualization */}
            <div className="p-1 rounded-[40px] bg-gradient-to-br from-slate-800 via-cyan-500/20 to-blue-500/20 shadow-2xl overflow-hidden group mb-32">
              <div className="p-12 md:p-20 rounded-[38px] bg-slate-950 relative overflow-hidden">
                <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
                  <PipelineStep 
                    number="01" 
                    title="Synthesis" 
                    description="Identifying high-margin market gaps and architecting the core autonomous engine." 
                    icon={FlaskConical} 
                  />
                  <PipelineStep 
                    number="02" 
                    title="Hyper-Scale" 
                    description="Aggressive optimization of MRR and unit economics via automated user acquisition." 
                    icon={Zap} 
                  />
                  <PipelineStep 
                    number="03" 
                    title="Hardening" 
                    description="Final infrastructure hardening and technical due diligence preparation." 
                    icon={Shield} 
                  />
                  <PipelineStep 
                    number="04" 
                    title="Strategic Exit" 
                    description="Engineering the technical hand-off for acquisition via institutional and M&A channels." 
                    icon={DollarSign} 
                    isLast 
                  />
                </div>
              </div>
            </div>

            {/* Technical Detail Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Architecture Readiness", desc: "Modular, cloud-native codebases designed for immediate buyer hand-off." },
                { title: "Automated Growth", desc: "Proprietary stacks for zero-marginal-cost scaling and optimization." },
                { title: "Due Diligence Ready", desc: "100% IP clarity and technical robustness audited from day one." },
              ].map((box, i) => (
                <motion.div
                  key={box.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl glass border-slate-800/50 hover:border-cyan-500/30 transition-all"
                >
                  <h4 className="text-white font-bold mb-4">{box.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{box.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </LayoutShell>
    </SecurityGate>
  );
}
