"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: "Active" | "Developing" | "Stable";
  exitStatus?: "In Pipeline" | "Acquisition Ready" | "Exit Candidate";
  tags: string[];
  slug: string;
  className?: string;
}

export function ProjectCard({ title, description, icon: Icon, status, exitStatus, tags, slug, className }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className={cn(
          "group relative p-6 rounded-2xl glass glow-border overflow-hidden flex flex-col h-full",
          className
        )}
      >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
          <Icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className={cn(
            "text-[10px] font-mono px-2 py-0.5 rounded-full border tracking-wider uppercase",
            status === "Active" ? "border-green-500/20 bg-green-500/10 text-green-400" :
            status === "Developing" ? "border-amber-500/20 bg-amber-500/10 text-amber-400" :
            "border-blue-500/20 bg-blue-500/10 text-blue-400"
          )}>
            {status}
          </div>
          {exitStatus && (
            <div className="text-[9px] font-mono px-2 py-0.5 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 uppercase tracking-widest">
              {exitStatus}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-4 border-t border-slate-800/50 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono text-slate-500 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800">
                {tag}
              </span>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 text-slate-400 group-hover:text-cyan-400 cursor-pointer"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>

      {/* Animated Border Beam */}
      <div className="border-beam opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
}
