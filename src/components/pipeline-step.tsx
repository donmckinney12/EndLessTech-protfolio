"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PipelineStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export function PipelineStep({ number, title, description, icon: Icon, isLast }: PipelineStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center p-6 flex-1">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-20 h-20 rounded-2xl glass border-slate-800 flex items-center justify-center mb-6 relative group"
      >
        <div className="absolute inset-0 bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="w-8 h-8 text-cyan-400 relative z-10" />
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] font-mono text-cyan-400">
          {number}
        </div>
      </motion.div>
      
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto">
        {description}
      </p>

      {!isLast && (
        <div className="hidden lg:block absolute top-16 -right-4 w-8 h-[2px] bg-gradient-to-r from-slate-800 to-transparent" />
      )}
    </div>
  );
}
