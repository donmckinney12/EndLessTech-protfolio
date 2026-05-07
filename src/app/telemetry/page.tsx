"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { Activity, Zap, Shield, Cpu } from "lucide-react";
import { SecurityGate } from "@/components/security-gate";

import { useState, useEffect } from "react";

export default function TelemetryPage() {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch("/api/metrics");
        const data = await res.json();
        setMetrics(data);
      } catch (e) {
        console.error("Metrics uplink failed", e);
      }
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SecurityGate
      title="Telemetry Uplink Restricted"
      description="Real-time infrastructure telemetry is restricted to authenticated users with authorized access."
      icon="eye"
    >
      <LayoutShell>
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-32"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-800 mb-8">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">
                  {metrics ? `Uplink Active: ${metrics.system.platform}` : "Establishing Uplink..."}
                </span>
              </div>
              
              <h1 className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-12">
                ACTIVE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  TELEMETRY
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                Sub-millisecond latency monitoring across all active SaaS assets and autonomous agents.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="p-12 rounded-[40px] glass border-slate-800/50 relative overflow-hidden">
                <div className="border-beam" />
                <h3 className="text-2xl font-bold text-white mb-8">Core Performance</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">CPU Efficiency</span>
                      <span className="text-xs font-mono text-cyan-400">{metrics?.metrics.cpuUsage || 0}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${metrics?.metrics.cpuUsage || 0}%` }}
                        className="h-full bg-cyan-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-4">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Memory Fidelity</span>
                      <span className="text-xs font-mono text-blue-400">{metrics?.metrics.memUsage || 0}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${metrics?.metrics.memUsage || 0}%` }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 rounded-[40px] glass border-slate-800/50 relative overflow-hidden">
                <div className="border-beam opacity-50" />
                <h3 className="text-2xl font-bold text-white mb-8">Institutional Nodes</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Agent Load", value: `${metrics?.metrics.agentLoad || 0}%`, icon: Zap },
                    { label: "Active Nodes", value: metrics?.metrics.activeNodes || 0, icon: Shield },
                    { label: "Uptime", value: "99.99%", icon: Cpu },
                    { label: "Latency", value: `${metrics?.metrics.latency || 0}ms`, icon: Activity },
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                      <item.icon className="w-6 h-6 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                      <p className="text-2xl font-bold text-white">{item.value}</p>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutShell>
    </SecurityGate>
  );
}
