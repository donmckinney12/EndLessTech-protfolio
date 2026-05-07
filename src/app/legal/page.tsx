"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { Scale, Globe, Briefcase, Info } from "lucide-react";

export default function LegalPage() {
  return (
    <LayoutShell>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 pt-40 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-10 h-10 text-emerald-400" />
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">INSTITUTIONAL_GOVERNANCE</h1>
            </div>
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Entity Registry: ET-LLC-2026-HQ | Legal HQ: Autonomous Cloud Network</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl glass border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <h3 className="text-white font-bold tracking-tight uppercase">Entity_Identity</h3>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                EndLessTech LLC is a legally registered parent holding company. 
                Our operational hub and infrastructure nodes are geographically 
                distributed to ensure regulatory resilience and technical stability.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-emerald-400" />
                <h3 className="text-white font-bold tracking-tight uppercase">Global_Compliance</h3>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                We adhere to international SaaS standards and regional infrastructure 
                regulations. Our autonomous agents are audited for compliance with 
                modern AI ethical frameworks and data security laws.
              </p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-emerald-400 font-mono">IP_ENFORCEMENT</span>
            </h2>
            <div className="p-10 rounded-[40px] bg-slate-900/30 border border-slate-800/50 space-y-6">
              <p className="text-slate-400 font-light italic leading-relaxed">
                "EndLessTech," the EndLessTech logo, and all neural asset names (including Aegis, Synthetix, and Nexus) are registered trademarks and proprietary architectural frameworks of EndLessTech LLC."
              </p>
              <p className="text-sm text-slate-500 font-light">
                Unauthorized use of our brand identity, de-obfuscation of our source code, or replication of our synthesis protocols is strictly prohibited and subject to institutional legal enforcement.
              </p>
            </div>
          </section>

          <div className="flex items-center gap-2 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
            <Info className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-mono text-emerald-400/70 uppercase tracking-widest">For legal inquiries: uplink@endlesstech.llc</span>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
