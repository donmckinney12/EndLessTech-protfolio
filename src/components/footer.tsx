"use client";

import { Shield, Globe, Code, Briefcase, Mail, ExternalLink, Cpu, Zap, Radio, ChevronUp, Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 pt-24 pb-12 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logo.png" 
                  alt="EndLessTech LLC Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                EndLess<span className="text-cyan-400">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs font-light">
              Engineering the future of autonomous SaaS ecosystems. Architecting high-fidelity assets for strategic acquisition.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <motion.button 
                  key={i} 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Venture Lab Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Venture Lab
            </h4>
            <ul className="space-y-5">
              {[
                { name: "Acquisition Pipeline", href: "/venture-lab" },
                { name: "Engineered Clusters", href: "/portfolio" },
                { name: "Portfolio Assets", href: "/portfolio" },
                { name: "Exit Strategy", href: "/exit-strategy" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-cyan-400 transition-colors" />
                    {item.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence Section */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              Intelligence
            </h4>
            <ul className="space-y-5">
              {[
                { name: "Active Telemetry", href: "/telemetry" },
                { name: "Node Network", href: "/nodes" },
                { name: "Market Analysis", href: "/market-analysis" },
                { name: "System Logs", href: "/system-logs" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-blue-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* System Status Card */}
          <div className="p-8 rounded-3xl glass glow-border relative overflow-hidden group">
            <div className="border-beam opacity-50" />
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Radio className="w-4 h-4 text-green-400 animate-pulse" />
              Network Status
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">CORE_ENGINE</span>
                <span className="text-[10px] font-mono text-green-400 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 uppercase tracking-widest">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">SYNC_NODES</span>
                <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 uppercase tracking-widest">99.99%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500 font-mono">LATENCY</span>
                <span className="text-[10px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 uppercase tracking-widest">14ms</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-800">
              <Link href="/system-logs">
                <button className="w-full py-3 rounded-xl bg-white/5 border border-slate-800 text-[10px] font-mono text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                  Access System Log
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter & Acquisition Alerts Section */}
        <div className="mb-24 p-12 rounded-[40px] glass border-slate-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h4 className="text-3xl font-bold text-white mb-4 tracking-tight">Stay Ahead of the <span className="text-cyan-400">Exit</span></h4>
              <p className="text-slate-400 font-light">Join our private network for early alerts on upcoming acquisition-ready SaaS assets and market intelligence.</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="px-8 py-5 rounded-2xl bg-white/5 border border-slate-800 text-white focus:outline-none focus:border-cyan-500/50 min-w-[300px] transition-all"
              />
              <button className="px-10 py-5 rounded-2xl bg-white text-slate-950 font-black hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                JOIN NETWORK
              </button>
            </div>
          </div>
        </div>

        {/* Strategic Footprint */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-slate-900">
          {[
            { label: "Active Asset Clusters", value: "7" },
            { label: "Infrastructure Nodes", value: "142" },
            { label: "Network Uptime", value: "99.99%" },
            { label: "Core Protocols", value: "24" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-3xl font-black text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Bottom Legal Section */}
        <div className="pt-12 border-t border-slate-900 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              © 2026 EndLessTech LLC. Built for Excellence.
            </p>
            <div className="w-[1px] h-4 bg-slate-800 hidden md:block" />
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[10px] font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[10px] font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Terms</Link>
              <Link href="/legal" className="text-[10px] font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Legal</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Security:</span>
              <span className="text-[10px] font-mono text-cyan-400">AES-256_ACTIVE</span>
            </div>
            
            <motion.button
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 rounded-xl bg-white/5 border border-slate-800 flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400/50 transition-all group"
            >
              <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
