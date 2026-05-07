"use client";

import { motion } from "framer-motion";
import { Shield, Target, Cpu, TrendingUp } from "lucide-react";

export function VentureThesis() {
  const pillars = [
    {
      title: "Autonomous Architecture",
      description: "We build systems that operate with zero human intervention, focusing on agentic workflows and neural logic to maximize operational margin.",
      icon: Cpu,
      color: "text-cyan-400",
    },
    {
      title: "Exit-First Engineering",
      description: "Every asset is engineered for technical due diligence from day one. Modular codebases, clean IP, and institutional-grade documentation.",
      icon: Target,
      color: "text-blue-400",
    },
    {
      title: "Market Synthesis",
      description: "We identify high-value market gaps and synthesize high-fidelity SaaS solutions designed for strategic acquisition within 12-24 months.",
      icon: TrendingUp,
      color: "text-emerald-400",
    },
    {
      title: "Institutional Integrity",
      description: "Rooted in absolute technical transparency. We provide buyers with a secure, hardened foundation that is ready for enterprise hand-off.",
      icon: Shield,
      color: "text-blue-400",
    },
  ];

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-6">Strategic Foundation</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
            THE VENTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">THESIS</span>
          </h3>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            EndLessTech is not just a software house; it is an autonomous venture lab. 
            We engineer high-fidelity SaaS ecosystems designed for institutional acquisition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] glass border-slate-800/50 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
            >
              <div className="border-beam opacity-0 group-hover:opacity-50 transition-opacity" />
              <div className="flex items-start gap-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-slate-800 group-hover:border-cyan-500/30 transition-all">
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{pillar.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
