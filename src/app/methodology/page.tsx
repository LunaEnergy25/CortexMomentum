import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TheInstrument from "@/components/sections/TheInstrument";

export const metadata: Metadata = {
  title: "How It Works — The Standing Instrument | Cortex Momentum",
  description: "The measurement system behind every Cortex Momentum read: what a standing instrument is, what silent reactors are, and why attention is a leading indicator, not demand. Every figure scoped to its evidence.",
};

export default function MethodologyPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-8 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-4">How It Works</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-tight mb-6">
          The measurement system behind every read
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          No opinion, no dashboard you can buy. A standing instrument we&apos;ve run for years &mdash; and the discipline that keeps every figure honest.
        </p>
      </div>
      <TheInstrument />
    </main>
  );
}
