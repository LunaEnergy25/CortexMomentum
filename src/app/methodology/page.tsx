import { BOOKING_URL } from "@/lib/links";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TheInstrument from "@/components/sections/TheInstrument";

export const metadata: Metadata = {
  title: "How It Works — The Standing Instrument | Cortex Momentum",
  description: "The measurement system behind every Cortex Momentum read: what a standing instrument is, and why attention is not demand. Every figure scoped to its evidence.",
  alternates: { canonical: "/methodology" },
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
          Not a dashboard you can buy. A standing instrument we&apos;ve run for years &mdash; and the discipline that keeps every figure honest.
        </p>
      </div>
      <TheInstrument />

      {/* Closing CTA */}
      <section className="bg-slate-950 py-20 md:py-28 px-6 border-t border-slate-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold tracking-tight mb-6">
            See the instrument applied to a real decision.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Bring a deal in committee, a thesis to stress-test, or a transaction to read. We scope the engagement to the specific decision in front of you.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
          >
            Book a call
          </a>
          <p className="text-slate-500 text-sm mt-4">30 minutes. If it isn&apos;t a fit, we&apos;ll say so.</p>
          <p className="mt-6">
            <Link href="/case-studies" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4 text-sm">
              Or see the full engagement record &rarr;
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
