"use client";

import { LayoutShell } from "@/components/layout-shell";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Globe } from "lucide-react";

export default function PrivacyPage() {
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
              <Shield className="w-10 h-10 text-cyan-400" />
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">NEURAL_PRIVACY_PROTOCOL</h1>
            </div>
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Version 2.0.4 | Classification: Institutional</p>
          </motion.div>

          <div className="space-y-16">
            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400 font-mono">01.</span> DATA_SOVEREIGNTY
              </h2>
              <div className="p-8 rounded-3xl glass border-slate-800 text-slate-400 leading-relaxed font-light">
                EndLessTech LLC operates on a Zero-Trust data architecture. We prioritize the absolute sovereignty of user and institutional data. Any telemetry processed through our autonomous nodes is encrypted at the source using RSA-4096 protocols before being synchronized with the holding ledger.
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400 font-mono">02.</span> IDENTITY_OBFUSCATION
              </h2>
              <div className="p-8 rounded-3xl glass border-slate-800 text-slate-400 leading-relaxed font-light">
                We do not engage in the monetization of individual identity data. Our systems are engineered to obfuscate personal identifiers, focusing instead on aggregate behavioral telemetry to optimize agent performance across our SaaS holding portfolio.
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-cyan-400 font-mono">03.</span> SECURE_UPLINK_POLICIES
              </h2>
              <div className="p-8 rounded-3xl glass border-slate-800 text-slate-400 leading-relaxed font-light">
                Third-party integrations (including Clerk and New Relic) are strictly audited to ensure they comply with our high-fidelity privacy standards. Your session data is strictly for infrastructure stabilization and security auditing.
              </div>
            </section>

            <div className="p-12 rounded-[40px] bg-slate-900/50 border border-slate-800 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Lock className="w-24 h-24 text-cyan-400" />
              </div>
              <p className="text-sm text-slate-500 italic mb-8">"Technical transparency is the foundation of institutional trust."</p>
              <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em]">EndLessTech Security Council</p>
            </div>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
