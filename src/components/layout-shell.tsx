import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-400">
      <div className="bg-grid fixed inset-0 z-0 opacity-20 pointer-events-none" />
      <div className="bg-vignette fixed inset-0 z-0 pointer-events-none" />
      <div className="scanline" />
      
      <Navbar />
      
      <div className="relative z-10">
        <main>
          {children}
        </main>
      </div>

      <Footer />

      {/* Ambient glow effects */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-cyan-500/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/[0.03] blur-[150px] pointer-events-none rounded-full" />
    </div>
  );
}
