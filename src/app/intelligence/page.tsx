"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { Cpu, Globe, Activity, CheckCircle2 } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { telemetry } from "@/lib/telemetry";
import { SecurityGate } from "@/components/security-gate";

export default function IntelligencePage() {
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      telemetry.trackIntelligenceView();
    }
  }, [userId]);

  return (
    <LayoutShell>
      <SecurityGate
        title="Intelligence Access Restricted"
        description="Detailed technical intelligence is restricted to authenticated users with authorized clearance."
        icon="shield"
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
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">Neural Intelligence Feed</span>
              </div>
              
              <h1 className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-12 italic">
                TECH <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  INTEL
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                High-fidelity technical documentation and architectural blueprints for EndLessTech assets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {[
                { title: "System Uptime", value: "99.99%", unit: "%", color: "#22d3ee", icon: Globe },
                { title: "Infrastructure Nodes", value: "142", unit: "active", color: "#3b82f6", icon: Activity },
                { title: "Readiness Score", value: "94%", unit: "idx", color: "#10b981", icon: CheckCircle2 },
                { title: "Active Agents", value: "1.2K", unit: "unit", color: "#06b6d4", icon: Cpu },
              ].map((metric, i) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl glass border-slate-800 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                    <metric.icon className="w-12 h-12" style={{ color: metric.color }} />
                  </div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">{metric.title}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">{metric.value}</span>
                    <span className="text-xs font-mono text-slate-500 uppercase">{metric.unit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SecurityGate>
    </LayoutShell>
  );
}
