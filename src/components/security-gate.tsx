"use client";

import { useAuth, SignInButton } from "@clerk/nextjs";
import { Lock, ShieldAlert, EyeOff, AlertCircle, Terminal, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface SecurityGateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  icon?: "lock" | "shield" | "eye";
}

export function SecurityGate({ 
  children, 
  title = "System Access Required", 
  description = "This secure sector is restricted to authenticated users with authorized system clearance.",
  icon = "lock"
}: SecurityGateProps) {
  const { isLoaded, userId } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing on server-side to prevent hydration mismatch
  if (!mounted) return null;

  const [showDebug, setShowDebug] = useState(false);
  const [hasTimeout, setHasTimeout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) setHasTimeout(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [isLoaded]);

  // Show a high-fidelity loading state if Clerk isn't loaded yet
  if (!isLoaded) {
    const hasKey = typeof window !== "undefined" && !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
        <div className="relative w-16 h-16 mb-8">
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="text-center max-w-sm">
          <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em] animate-pulse">Establishing Secure Uplink</p>
          <p className="text-slate-500 text-[9px] mt-2 font-mono uppercase tracking-wider">Verifying Institutional Identity...</p>
          
          <div className="mt-8 space-y-2">
            <p className="text-slate-700 text-[8px] font-mono uppercase">
              Uplink Key: {hasKey ? "DETECTED" : "MISSING"}
            </p>
            
            {hasTimeout && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-4"
              >
                <p className="text-red-500/50 text-[8px] font-mono uppercase mb-4">Uplink sequence exceeded timeout</p>
                <button 
                  onClick={() => setShowDebug(!showDebug)}
                  className="px-4 py-2 rounded-lg border border-slate-800 text-[9px] text-slate-500 hover:text-white transition-colors font-mono"
                >
                  {showDebug ? "HIDE_DIAGNOSTICS" : "SHOW_DIAGNOSTICS"}
                </button>
              </motion.div>
            )}

            {showDebug && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-left"
              >
                <pre className="text-[7px] font-mono text-slate-500 leading-relaxed overflow-x-auto">
                  {JSON.stringify({
                    isLoaded,
                    hasUserId: !!userId,
                    env: process.env.NODE_ENV,
                    keyPrefix: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.split('_').slice(0, 2).join('_'),
                    ua: typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 50) : 'unknown'
                  }, null, 2)}
                </pre>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!userId) {
    const Icon = icon === "shield" ? ShieldAlert : icon === "eye" ? EyeOff : Lock;

    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center p-12 rounded-[40px] glass border-slate-800 max-w-md relative overflow-hidden group">
          <div className="border-beam opacity-50" />
          <Icon className="w-16 h-16 text-cyan-400 mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">{title}</h2>
          <p className="text-slate-400 mb-8 font-light leading-relaxed">{description}</p>
          <SignInButton mode="modal">
            <button className="w-full py-4 rounded-xl bg-white text-slate-950 font-black text-sm hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              SIGN IN FOR ACCESS
            </button>
          </SignInButton>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
