"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { Globe, Server, Link2, Shield } from "lucide-react";
import { SecurityGate } from "@/components/security-gate";

export default function NodesPage() {
  return (
    <LayoutShell>
      <SecurityGate
        title="Node Infrastructure Restricted"
        description="Global node distribution data is restricted to authenticated users with authorized clearance."
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
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">Global Fabric Distribution</span>
              </div>
              
              <h1 className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-12">
                NODE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  NETWORK
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                Distributed edge infrastructure ensuring low-latency delivery for all EndLessTech assets.
              </p>
            </motion.div>

            <div className="p-1 rounded-[40px] bg-gradient-to-br from-slate-800 via-blue-500/20 to-cyan-500/20 shadow-2xl overflow-hidden mb-24">
              <div className="p-12 md:p-20 rounded-[38px] bg-slate-950 relative overflow-hidden">
                <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-8">
                    {[
                      { label: "Total Nodes", value: "142", icon: Server },
                      { label: "Active Connections", value: "24.8K", icon: Link2 },
                      { label: "Security Layer", icon: Shield, value: "AES-256" },
                    ].map((stat, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 p-6 rounded-2xl glass border-slate-800"
                      >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-white">{stat.value}</p>
                          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="aspect-square rounded-[40px] glass border-slate-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                    <Globe className="w-64 h-64 text-blue-400 opacity-20 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecurityGate>
    </LayoutShell>
  );
}
