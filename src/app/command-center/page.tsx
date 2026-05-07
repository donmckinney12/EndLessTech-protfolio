"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Activity, Globe, Cpu, Lock, 
  Terminal, Zap, BarChart3, Radio, 
  ArrowUpRight, AlertCircle, CheckCircle2, Code 
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth, SignInButton } from "@clerk/nextjs";
import { telemetry } from "@/lib/telemetry";

import { SecurityGate } from "@/components/security-gate";
import { cn } from "@/lib/utils";

export default function CommandCenterPage() {
  const { isLoaded, userId } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);
  const [auditStep, setAuditStep] = useState("");
  const [isProtocolActive, setIsProtocolActive] = useState(false);

  const initiateProtocol = () => {
    setIsProtocolActive(true);
    telemetry.trackProtocolInitiation("ENDLESS_ALPHA_V2");
    
    // Auto-terminate after a sequence
    setTimeout(() => {
      setIsProtocolActive(false);
    }, 5000);
  };

  const startAudit = () => {
    setIsAuditing(true);
    setAuditProgress(0);
    telemetry.trackSecurityAudit();
    
    const steps = [
      "Initializing RSA-4096 Handshake...",
      "Auditing Neural Shield integrity...",
      "Scrubbing IP Protection layers...",
      "Verifying M&A Vault encryption...",
      "Hardening distributed edge nodes...",
      "Security Audit Complete. System 100% Cleared."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setAuditProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsAuditing(false), 2000);
          return 100;
        }
        const next = prev + (Math.random() * 15);
        
        // Update steps based on progress
        const stepIndex = Math.floor((next / 100) * steps.length);
        if (stepIndex > currentStep && stepIndex < steps.length) {
          currentStep = stepIndex;
          setAuditStep(steps[currentStep]);
        }
        
        return Math.min(next, 100);
      });
    }, 400);
    
    setAuditStep(steps[0]);
  };

  useEffect(() => {
    setMounted(true);
    if (userId) {
      telemetry.trackEvent("COMMAND_CENTER_VIEWED");
    }
  }, [userId]);

  const stats = [
    { label: "Core Efficiency", value: "94.2%", icon: Zap, color: "text-cyan-400" },
    { label: "Active Agents", value: "1,240", icon: Activity, color: "text-blue-400" },
    { label: "System Integrity", value: "100%", icon: Shield, color: "text-emerald-400" },
    { label: "Network Latency", value: "14ms", icon: Globe, color: "text-blue-400" },
  ];

  const logs = [
    { time: "09:42:11", event: "SYNTHETIX_NODE_SYNC", status: "COMPLETE", type: "success" },
    { time: "09:41:05", event: "AGENT_ID_ROTATION", status: "VERIFIED", type: "info" },
    { time: "09:38:54", event: "ACQUISITION_READY_SCAN", status: "7_DETECTED", type: "warning" },
    { time: "09:35:22", event: "ENCRYPTION_HANDSHAKE", status: "SECURE", type: "success" },
  ];

  return (
    <SecurityGate 
      title="System Access Required"
      description="The Command Center is restricted to authenticated users with high-level system clearance."
    >
      <LayoutShell>
      <div className="relative min-h-screen bg-slate-950 overflow-hidden font-sans">
        {/* Extreme Background Visuals */}
        <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />
        
        {/* Cinematic Protocol Overlay */}
        <AnimatePresence>
          {isProtocolActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[100] pointer-events-none"
            >
              <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay" />
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="px-12 py-6 rounded-2xl glass border-cyan-400/50 backdrop-blur-2xl text-center"
                >
                  <Radio className="w-12 h-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
                  <h2 className="text-3xl font-black text-white tracking-[0.5em] uppercase italic">ALPHA_V2_ACTIVE</h2>
                  <p className="text-[10px] font-mono text-cyan-400 mt-2 uppercase tracking-widest">Global Asset Synchronization in Progress</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="max-w-[1600px] mx-auto px-6 pt-32 pb-24 relative z-10">
          {/* Dashboard Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full animate-pulse",
                    isProtocolActive ? "bg-blue-500" : "bg-cyan-400"
                  )} />
                  <span className={cn(
                    "text-[10px] font-mono uppercase tracking-widest",
                    isProtocolActive ? "text-blue-400" : "text-cyan-400"
                  )}>
                    {isProtocolActive ? "Protocol Active" : "System Live"}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  {isProtocolActive ? "ID: SYNC_SEQUENCE_441" : "Protocol: ENDLESS_ALPHA_V2"}
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">
                COMMAND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">CENTER</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <div className="text-right">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Global Load</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: isProtocolActive ? [30, 45, 25, 50, 30] : [10, 25, 15, 30, 10] }}
                      transition={{ duration: isProtocolActive ? 0.5 : 2, repeat: Infinity, delay: i * 0.1 }}
                      className={cn(
                        "w-1.5 rounded-full transition-colors",
                        isProtocolActive ? "bg-blue-500" : "bg-cyan-400/30"
                      )}
                    />
                  ))}
                </div>
              </div>
              <button 
                onClick={initiateProtocol}
                disabled={isProtocolActive}
                className={cn(
                  "px-8 py-4 rounded-xl glass border-slate-800 text-white font-bold text-sm transition-all flex items-center gap-2 group",
                  isProtocolActive ? "bg-blue-500/20 border-blue-500/50" : "hover:bg-white/5"
                )}
              >
                <Zap className={cn("w-4 h-4", isProtocolActive ? "text-blue-400" : "text-cyan-400")} />
                {isProtocolActive ? "PROTOCOL_RUNNING" : "INITIATE PROTOCOL"}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
              </button>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Real-time Stats */}
            <div className="lg:col-span-3 space-y-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl glass border-slate-800/50 relative group overflow-hidden"
                >
                  <div className="border-beam opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-slate-800 group-hover:border-white/20 transition-all">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <BarChart3 className="w-4 h-4 text-slate-700" />
                  </div>
                  <p className="text-4xl font-black text-white mb-1 tracking-tight">{stat.value}</p>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Center Column: Global Nexus Visualization */}
            <div className="lg:col-span-6 space-y-8">
              <div className="relative aspect-square md:aspect-video rounded-[40px] glass border-slate-800/50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
                <div className="bg-grid absolute inset-0 opacity-10" />
                
                {/* Visual "Nexus" Map */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulsing Core */}
                    <div className="w-32 h-32 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-2 border-cyan-400/50 flex items-center justify-center animate-spin-slow">
                        <Cpu className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>

                    {/* Orbiting Nodes (7 Asset Clusters) */}
                    {[...Array(7)].map((_, i) => {
                      const angle = (i * 360) / 7;
                      const radius = 160;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.2 }}
                          className="absolute top-1/2 left-1/2"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, zIndex: 20 }}
                            onHoverStart={() => setActiveNode(i)}
                            onHoverEnd={() => setActiveNode(null)}
                            className="w-10 h-10 rounded-xl glass border-slate-700 flex items-center justify-center cursor-pointer hover:border-cyan-400 transition-all shadow-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Node Info Overlay */}
                <AnimatePresence>
                  {activeNode !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 p-6 rounded-2xl glass border-cyan-500/30 backdrop-blur-xl w-64"
                    >
                      <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">Node_0{activeNode + 1} Status</p>
                      <h4 className="text-white font-bold text-lg mb-1">Asset Operational</h4>
                      <p className="text-[10px] text-slate-400">Heartbeat: Nominal | Sync: 100%</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute top-8 left-8">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">Neural_Nexus_Monitor</div>
                </div>
              </div>

              {/* Bottom Console Ticker */}
              <div className="p-8 rounded-[32px] glass border-slate-800/50 bg-slate-950/50 overflow-hidden font-mono">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-slate-500" />
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest">Active System Logs</span>
                  </div>
                  <div className="text-[10px] text-cyan-400 animate-pulse">LIVE_UPLINK</div>
                </div>
                <div className="space-y-3">
                  {logs.map((log, i) => (
                    <div key={i} className="flex items-center gap-6 text-[11px] group">
                      <span className="text-slate-700">[{log.time}]</span>
                      <span className="text-white group-hover:text-cyan-400 transition-colors">{log.event}</span>
                      <span className="ml-auto px-2 py-0.5 rounded bg-white/5 border border-slate-800 text-slate-500 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all">
                        {log.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Control & Security */}
            <div className="lg:col-span-3 space-y-8">
              <div className="p-8 rounded-3xl glass border-slate-800/50 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                <h4 className="text-white font-bold mb-8 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-400" />
                  Security Protocols
                </h4>
                <div className="space-y-6">
                  {[
                    { label: "Neural Shield", status: isAuditing ? "Auditing..." : "Active", color: isAuditing ? "text-yellow-400" : "text-emerald-400" },
                    { label: "IP Protection", status: isAuditing ? "Auditing..." : "Hardened", color: isAuditing ? "text-yellow-400" : "text-cyan-400" },
                    { label: "M&A Vault", status: isAuditing ? "Auditing..." : "Encrypted", color: isAuditing ? "text-yellow-400" : "text-blue-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-slate-800/50">
                      <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>

                {isAuditing && (
                  <div className="mt-8 space-y-2">
                    <div className="flex justify-between text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                      <span>{auditStep}</span>
                      <span>{Math.floor(auditProgress)}%</span>
                    </div>
                    <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${auditProgress}%` }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600"
                      />
                    </div>
                  </div>
                )}

                <button 
                  onClick={startAudit}
                  disabled={isAuditing}
                  className={`w-full mt-8 py-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${
                    isAuditing 
                      ? "bg-slate-900 border-slate-800 text-slate-500 cursor-not-allowed" 
                      : "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                  }`}
                >
                  {isAuditing ? "Audit in Progress..." : "Run Global Security Audit"}
                </button>
              </div>

              <div className="p-8 rounded-3xl glass border-slate-800/50 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
                <h4 className="text-white font-bold mb-8 flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  Portfolio Stack Audit
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { tech: "Go / Golang", level: "Core" },
                    { tech: "Python / AI", level: "Core" },
                    { tech: "Rust / Sec", level: "Edge" },
                    { tech: "Next.js 16", level: "UI" },
                    { tech: "PostgreSQL", level: "Data" },
                    { tech: "FastAPI", level: "API" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-slate-800/50">
                      <p className="text-[11px] font-bold text-white mb-1">{item.tech}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span className="text-[9px] font-mono text-slate-500 uppercase">{item.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 border border-cyan-500/20 relative overflow-hidden">
                <div className="relative z-10">
                  <Radio className="w-8 h-8 text-cyan-400 mb-6 animate-pulse" />
                  <h4 className="text-2xl font-bold text-white mb-4">Network Status</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light mb-8">
                    142 nodes globally distributed. All channels synchronized at 14ms average latency.
                  </p>
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden mb-2">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-1/2 h-full bg-cyan-400"
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    <span>Syncing...</span>
                    <span>100% Secure</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </LayoutShell>
    </SecurityGate>
  );
}
