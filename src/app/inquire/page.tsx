"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { 
  Mail, MessageSquare, Shield, 
  Send, Globe, Cpu, Zap, Radio 
} from "lucide-react";
import { useState } from "react";

export default function InquirePage() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 2000);
  };

  return (
    <LayoutShell>
      <div className="relative min-h-screen bg-slate-950 overflow-hidden pt-32 pb-24">
        {/* Extreme Background Visuals */}
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Context & Branding */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-800 mb-8"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Establish Connection</span>
                  </motion.div>
                  <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8 italic uppercase">
                    SECURE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">UPLINK</span>
                  </h1>
                  <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md">
                    Initiate a secure communication channel for technical inquiries, asset acquisition, or strategic discussions.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Institutional Inquiries", value: "hq@endlesstech.llc", icon: Mail, color: "text-cyan-400" },
                    { label: "Asset Acquisition", value: "m-a@endlesstech.llc", icon: MessageSquare, color: "text-blue-400" },
                    { label: "Network Presence", value: "Global Node Clusters", icon: Globe, color: "text-emerald-400" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-6 p-6 rounded-3xl glass border-slate-800/50 hover:border-white/10 transition-all group"
                    >
                      <div className="p-3 rounded-2xl bg-white/5 border border-slate-800 group-hover:border-white/20 transition-all">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-white font-bold text-lg">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Uplink Status: Secure</span>
                  </div>
                  <p className="text-sm text-slate-400 font-light">
                    All communications are encrypted using RSA-4096 protocols and audited for system integrity.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative p-12 rounded-[50px] glass border-slate-800/50 overflow-hidden shadow-2xl"
              >
                <div className="border-beam opacity-50" />
                <div className="absolute top-0 right-0 p-8">
                  <Shield className="w-12 h-12 text-slate-900" />
                </div>

                {formState !== "sent" ? (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] ml-4">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-8 py-5 rounded-3xl bg-slate-900/50 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] ml-4">Entity Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@organization.com"
                          className="w-full px-8 py-5 rounded-3xl bg-slate-900/50 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] ml-4">Inquiry Category</label>
                      <select className="w-full px-8 py-5 rounded-3xl bg-slate-900/50 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light appearance-none">
                        <option>Asset Acquisition</option>
                        <option>Technical Partnership</option>
                        <option>Strategic Due Diligence</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] ml-4">Message / Intent</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="Describe your strategic objective..."
                        className="w-full px-8 py-6 rounded-[32px] bg-slate-900/50 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light resize-none"
                      />
                    </div>

                    <button 
                      disabled={formState === "sending"}
                      className="w-full py-6 rounded-3xl bg-white text-slate-950 font-black text-xl hover:bg-cyan-400 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group flex items-center justify-center gap-3 overflow-hidden"
                    >
                      {formState === "sending" ? (
                        <>
                          <Cpu className="w-6 h-6 animate-spin" />
                          ESTABLISHING LINK...
                        </>
                      ) : (
                        <>
                          INITIATE SEND
                          <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                      <Zap className="w-12 h-12 text-cyan-400" />
                    </div>
                    <h2 className="text-4xl font-black text-white mb-4 italic tracking-tighter">UPLINK SUCCESSFUL</h2>
                    <p className="text-slate-400 font-light max-w-xs mx-auto">
                      Your inquiry has been encrypted and transmitted. A strategic architect will review your request within 24 standard cycles.
                    </p>
                    <button 
                      onClick={() => setFormState("idle")}
                      className="mt-12 text-[10px] font-mono text-slate-500 uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Re-establish Connection
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
