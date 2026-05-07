"use client";

import { Shield, Zap, Menu, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";

export function Navbar() {
  const { isLoaded, userId } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.8)"]
  );

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "border-slate-800/50 backdrop-blur-md py-3" : "border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10">
            <Image 
              src="/logo.png" 
              alt="EndLessTech LLC Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            EndLess<span className="text-cyan-400">Tech</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { name: "About", href: "/about" },
            { name: "Venture Lab", href: "/venture-lab" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Intelligence", href: "/intelligence" },
            { name: "Inquire", href: "/inquire" },
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Nodes Active</span>
          </div>
          
          <Link href="/command-center">
            <button className="px-5 py-2 rounded-lg bg-white text-slate-950 text-sm font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Command Center
            </button>
          </Link>

          {isLoaded && userId ? (
            <UserButton />
          ) : isLoaded ? (
            <SignInButton mode="modal">
              <button className="px-5 py-2 rounded-lg border border-slate-700 text-white text-sm font-bold hover:border-cyan-400 hover:text-cyan-400 transition-all">
                Sign In
              </button>
            </SignInButton>
          ) : null}
          
          <button className="md:hidden text-slate-400">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
