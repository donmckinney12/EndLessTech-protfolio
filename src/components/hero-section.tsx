"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, Shield, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { label: "Aggregate ARR", value: "$1.2M+", icon: Zap, color: "text-cyan-400" },
    { label: "Exit Potential", value: "84%", icon: Cpu, color: "text-blue-400" },
    { label: "Node Uptime", value: "99.99%", icon: Shield, color: "text-emerald-400" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-32 min-h-[90vh] flex items-center justify-center">
      {/* Dynamic Neural Flux Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
        <motion.div 
          animate={{ 
            x: mousePos.x * -1.5,
            y: mousePos.y * -1.5,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      </div>

      {/* Interactive Floating Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            className="absolute w-24 h-24 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-800 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em]">Next-Gen SaaS Holding Company</span>
        </motion.div>

        {/* Main Headline with Dynamic Parallax */}
        <motion.h1
          style={{ 
            translateX: mousePos.x,
            translateY: mousePos.y 
          }}
          className="text-7xl md:text-[140px] font-black text-white tracking-tighter leading-[0.8] mb-12 italic"
        >
          ARCHITECTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
            HIGH-VALUE ASSETS
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          animate={{ 
            translateX: mousePos.x * 0.5,
            translateY: mousePos.y * 0.5 
          }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-20 font-light"
        >
          EndLessTech LLC is a premier parent company engineering high-fidelity, 
          acquisition-ready software ecosystems designed for strategic exit.
        </motion.p>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24"
        >
          <Link href="/portfolio">
            <button className="relative px-10 py-5 rounded-2xl bg-white text-slate-950 font-black text-xl hover:bg-cyan-400 transition-all group overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]">
              <span className="relative z-10 flex items-center gap-3">
                Explore Portfolio
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>
          
          <Link href="/inquire">
            <button className="px-10 py-5 rounded-2xl glass border-slate-800 text-white font-bold text-xl hover:bg-white/5 transition-all">
              Inquire Now
            </button>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="p-8 rounded-3xl glass glow-border group relative overflow-hidden"
            >
              <div className="border-beam opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mx-auto mb-4 border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                <item.icon className={cn("w-6 h-6", item.color)} />
              </div>
              <p className="text-3xl font-black text-white mb-1">{item.value}</p>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hover:text-cyan-400 transition-colors"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
