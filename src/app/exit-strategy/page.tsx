"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { TrendingUp, Shield, ArrowRight, Briefcase, Code, HardDrive } from "lucide-react";
import { SecurityGate } from "@/components/security-gate";

export default function ExitStrategyPage() {
  return (
    <LayoutShell>
      <SecurityGate
        title="Exit Framework Restricted"
        description="Proprietary acquisition frameworks and exit strategies are restricted to authenticated users."
        icon="shield"
      >
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
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em]">Strategic Exit Readiness</span>
              </motion.div>
              
              <h1 className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-12">
                ACQUISITION <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  FRAMEWORK
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                Architecting SaaS assets with absolute technical transparency. 
                We build software that is inherently prepared for acquisition and institutional hand-off.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 rounded-[40px] glass border-slate-800/50 space-y-8 group relative overflow-hidden"
              >
                <div className="border-beam" />
                <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center">
                  <Code className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-4xl font-bold text-white tracking-tight">Technical Due Diligence</h3>
                <p className="text-xl text-slate-400 leading-relaxed font-light">
                  Every line of code and infrastructure node is engineered for absolute clarity. 
                  We provide clean IP, modular architecture, and automated documentation for seamless buyer hand-off.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 rounded-[40px] glass border-slate-800/50 space-y-8 group relative overflow-hidden"
              >
                <div className="border-beam opacity-50" />
                <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 flex items-center justify-center">
                  <HardDrive className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-4xl font-bold text-white tracking-tight">Scalable Foundations</h3>
                <p className="text-xl text-slate-400 leading-relaxed font-light">
                  Our assets are built on cloud-native, multi-tenant frameworks designed to scale 100x without 
                  re-architecting—making them highly attractive to growth-focused acquirers.
                </p>
              </motion.div>
            </div>

            {/* Infrastructure Maturity Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-1 rounded-[50px] bg-gradient-to-br from-slate-800 via-emerald-500/20 to-cyan-500/20 shadow-3xl overflow-hidden"
            >
              <div className="p-20 md:p-32 rounded-[48px] bg-slate-950 text-center relative">
                <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
                <h2 className="text-3xl font-bold text-white mb-8 tracking-widest uppercase opacity-50">Technical Readiness Index</h2>
                <p className="text-8xl md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-500/50 leading-none mb-12">
                  100%
                </p>
                <button className="px-12 py-6 rounded-2xl bg-white text-slate-950 font-black text-2xl hover:bg-emerald-400 transition-all flex items-center gap-3 mx-auto shadow-[0_0_60px_rgba(255,255,255,0.1)]">
                  View Technical Whitepaper
                  <ArrowRight className="w-8 h-8" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </SecurityGate>
    </LayoutShell>
  );
}
