"use client";

import { LayoutShell } from "@/components/layout-shell";
import { HeroSection } from "@/components/hero-section";
import { VentureThesis } from "@/components/venture-thesis";

export default function Home() {
  return (
    <LayoutShell>
      <div className="flex flex-col">
        <HeroSection />
        <VentureThesis />
      </div>
    </LayoutShell>
  );
}
