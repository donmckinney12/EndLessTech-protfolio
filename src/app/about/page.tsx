"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { Shield, Zap, Target, Cpu, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      title: "Autonomous First",
      description: "We engineer systems that don't just work—they evolve. Our architecture minimizes human overhead to maximize operational fidelity.",
      icon: Cpu,
      color: "text-cyan-400"
    },
    {
      title: "Hardened Integrity",
      description: "Institutional-grade security is not an option; it is our foundation. Every line of code is written with a 'secure-by-default' mindset.",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "Strategic Velocity",
      description: "We move at the speed of the market, identifying gaps and synthesizing acquisition-ready solutions with extreme precision.",
      icon: Zap,
      color: "text-emerald-400"
    },
    {
      title: "Global Reach",
      description: "Our node networks are distributed globally, ensuring 99.99% uptime and sub-20ms latency for all SaaS assets.",
      icon: Globe,
      color: "text-blue-400"
    }
  ];

  return (
    <LayoutShell>
      <div className="relative min-h-screen bg-slate-950 overflow-hidden pt-32 pb-24">
        {/* Ambient Visuals */}
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero Section */}
          <div className="mb-32 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-800 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Our Mission</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none italic"
            >
              THE ARCHITECTS OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">AUTONOMY</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              EndLessTech LLC is a premier software holding company dedicated to engineering high-fidelity, 
              acquisition-ready SaaS ecosystems. We don't just build apps; we architect the future of 
              autonomous digital commerce.
            </motion.p>
          </div>

          {/* Founder Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[60px] overflow-hidden group shadow-2xl"
            >
              <Image 
                src="/donald_founder.png" 
                alt="Donald McKinney" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12">
                <p className="text-4xl font-black text-white italic tracking-tighter">Donald McKinney</p>
                <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Founder & Lead Architect</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white tracking-tight leading-tight italic">
                "We are in the business of creating assets that can outlast the trends of today."
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                Under the leadership of Donald McKinney, EndLessTech has evolved from a small venture lab into a 
                formidable powerhouse of SaaS engineering. Our philosophy is simple: build with such technical 
                excellence that acquisition becomes the only logical conclusion.
              </p>
              <div className="flex gap-4">
                <div className="p-6 rounded-3xl glass border-slate-800 flex-1">
                  <p className="text-3xl font-black text-white mb-1">10+</p>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Successful Syncs</p>
                </div>
                <div className="p-6 rounded-3xl glass border-slate-800 flex-1">
                  <p className="text-3xl font-black text-white mb-1">100%</p>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Uptime Record</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values Grid */}
          <div className="mb-32">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 italic">CORE VALUES</h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[40px] glass border-slate-800/50 hover:border-cyan-500/30 transition-all group relative"
                >
                  <div className="border-beam opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="p-4 rounded-2xl bg-white/5 border border-slate-800 group-hover:border-cyan-500/30 transition-all mb-8 inline-block">
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight italic">{value.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-light text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[60px] bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 border border-cyan-500/20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic">READY FOR THE NEXT <span className="text-cyan-400">SYNC?</span></h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you're looking for our latest asset reports or want to discuss technical acquisition, our doors are open.
            </p>
            <button className="px-12 py-6 rounded-2xl bg-white text-slate-950 font-black text-xl hover:bg-cyan-400 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] group">
              <span className="flex items-center gap-3">
                Inquire Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </LayoutShell>
  );
}
