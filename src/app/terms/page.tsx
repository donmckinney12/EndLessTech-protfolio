"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { FileText, Cpu, Zap, Activity } from "lucide-react";

export default function TermsPage() {
  return (
    <LayoutShell>
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 pt-40 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-8">
              <FileText className="w-10 h-10 text-blue-400" />
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">MASTER_OPERATIONAL_AGREEMENT</h1>
            </div>
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Contract ID: ET-992-DELTA | Binding Institutional Terms</p>
          </motion.div>

          <div className="space-y-12">
            <section className="p-10 rounded-[40px] glass border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Cpu className="w-20 h-20 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">1. SYSTEM_ACCESS_STIPULATIONS</h2>
              <div className="text-slate-400 leading-relaxed font-light space-y-4">
                <p>Access to the EndLessTech Command Center and related infrastructure is a privilege granted to authorized entities. Unauthorized attempts to bypass security gates or decompile neural agent architecture will result in immediate termination of clearance.</p>
                <p>Users must maintain absolute confidentiality of their uplink credentials and are responsible for all telemetry generated under their institutional ID.</p>
              </div>
            </section>

            <section className="p-10 rounded-[40px] glass border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Zap className="w-20 h-20 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">2. INTELLECTUAL_PROPERTY_SOVEREIGNTY</h2>
              <div className="text-slate-400 leading-relaxed font-light">
                All software assets, architectural blueprints, neural weights, and infrastructure designs presented within this portal remain the exclusive intellectual property of EndLessTech LLC. We build for acquisition, but until a formal Exit Event, all rights are strictly reserved.
              </div>
            </section>

            <section className="p-10 rounded-[40px] glass border-slate-800 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Activity className="w-20 h-20 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">3. INFRASTRUCTURE_LIABILITY</h2>
              <div className="text-slate-400 leading-relaxed font-light">
                EndLessTech infrastructure is provided "As-Is" for institutional due diligence and portfolio oversight. While we maintain 99.99% uptime, we are not liable for incidental telemetry drift or downstream network latency beyond our controlled node environment.
              </div>
            </section>
          </div>

          <div className="mt-20 pt-12 border-t border-slate-900 flex justify-between items-center">
            <span className="text-[10px] font-mono text-slate-700 tracking-widest uppercase italic">EndLessTech legal department</span>
            <span className="text-[10px] font-mono text-slate-700 tracking-widest uppercase">Verified: 2026-Q1</span>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
