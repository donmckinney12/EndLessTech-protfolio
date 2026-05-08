"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, DollarSign, Search } from "lucide-react";
import { SecurityGate } from "@/components/security-gate";

export default function MarketAnalysisPage() {
  return (
    <LayoutShell>
      <SecurityGate
        title="Market Data Restricted"
        description="Proprietary SaaS acquisition intelligence and valuation tracking are restricted to authenticated users."
        icon="lock"
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-32"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-800 mb-8">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.2em]">SaaS Acquisition Intelligence</span>
              </div>
              
              <h1 className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-12">
                MARKET <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-emerald-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  ANALYSIS
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                Predictive modeling and valuation tracking for the high-margin SaaS exit landscape.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
              {[
                { title: "Valuation Trends", icon: DollarSign, color: "text-emerald-400" },
                { title: "Acquisition Volume", icon: BarChart3, color: "text-cyan-400" },
                { title: "Buyer Intent", icon: Search, color: "text-blue-400" },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[40px] glass border-slate-800/50 hover:border-emerald-500/30 transition-all group overflow-hidden"
                >
                  <div className="border-beam" />
                  <box.icon className={`w-12 h-12 ${box.color} mb-8`} />
                  <h3 className="text-2xl font-bold text-white mb-4">{box.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">
                    Analyzing real-time signals from Acquire.com and Tier-1 M&A channels to project optimal exit timing.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SecurityGate>
    </LayoutShell>
  );
}
