"use client";

import { useAuth, SignInButton } from "@clerk/nextjs";
import { Lock, ShieldAlert, EyeOff } from "lucide-react";
import { LayoutShell } from "./layout-shell";
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

  // Show a high-fidelity loading state if Clerk isn't loaded yet
  if (!isLoaded) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="relative w-16 h-16 mb-8">
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="text-center">
          <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.3em] animate-pulse">Establishing Secure Uplink</p>
          <p className="text-slate-500 text-[9px] mt-2 font-mono uppercase tracking-wider">Verifying Institutional Identity...</p>
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
