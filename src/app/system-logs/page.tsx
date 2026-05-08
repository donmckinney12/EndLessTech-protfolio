"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { Terminal, Activity, Shield, Cpu, Lock } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { SecurityGate } from "@/components/security-gate";

export default function SystemLogsPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchLogs = async () => {
    try {
      const res = await fetch("/api/logs");
      const data = await res.json();
      setLogs(data.logs);
      setIsLoaded(true);
    } catch (e) {
      console.error("Logs uplink failed", e);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutShell>
      <SecurityGate
        title="Log Access Restricted"
        description="System logs contain sensitive infrastructure events and are restricted to authenticated users."
        icon="eye"
      >
        <div className="relative min-h-screen bg-slate-950 font-mono">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
          
          <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-6">
                <Terminal className="w-8 h-8 text-cyan-400" />
                <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">SYSTEM_JOURNAL</h1>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-400 uppercase tracking-widest">Live Uplink</div>
                <div className="px-4 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-slate-500 uppercase tracking-widest italic">Auth: Root_Authorized</div>
              </div>
            </motion.div>

            <div className="rounded-[40px] glass border-slate-800 overflow-hidden shadow-2xl">
              <div className="bg-slate-900/50 p-6 border-b border-slate-800 flex justify-between items-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Infrastructure Audit Log</span>
                <Activity className="w-4 h-4 text-cyan-500 animate-pulse" />
              </div>
              <div className="p-8 space-y-4">
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-2xl bg-white/5 border border-slate-800/50 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
                  >
                    <span className="text-[10px] text-slate-700 font-mono">{log.time}</span>
                    <div className="flex-1">
                      <span className="text-sm text-white font-bold tracking-tight group-hover:text-cyan-400 transition-colors">{log.event}</span>
                      <span className="ml-4 text-[9px] text-slate-600 uppercase tracking-widest">{log.origin}</span>
                    </div>
                    <span className={`text-[10px] px-3 py-1 rounded border ${
                      log.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                      log.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                      'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                    }`}>
                      {log.status}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-slate-900/50 p-6 border-t border-slate-800 text-center">
                <button className="text-[10px] text-slate-500 hover:text-white uppercase tracking-[0.3em] transition-colors">Load Extended Archive_</button>
              </div>
            </div>
          </div>
        </div>
      </SecurityGate>
    </LayoutShell>
  );
}
