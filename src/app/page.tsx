import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrackSelector from "@/components/TrackSelector";

export const metadata: Metadata = {
  title: "Cortex Momentum — Commercial Intelligence for Energy & Deep-Tech Deals",
  description: "When your deal stalls in committee, we surface what each buyer seat is actually evaluating and rebuild the positioning around it. Standing intelligence instrument, five years running.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />

      <TrackSelector />

      {/* ENGAGEMENT RECORD BRIDGE */}
      <section className="bg-slate-950 py-16 md:py-20 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif text-white font-semibold leading-snug mb-3">
            8 engagements across energy, deep-tech, and industrials.
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Each figure is scoped to its evidence and built to survive a diligence committee.
          </p>
          <Link
            href="/case-studies"
            className="inline-block text-white font-bold border-b-2 border-slate-600 pb-1 hover:border-white transition-colors uppercase tracking-widest text-sm"
          >
            See the full record &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section id="diagnostic-booking" className="relative bg-slate-950 py-24 md:py-32 px-6 text-white overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-slate-800/20 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold leading-tight tracking-tight">
            The room is running a different risk calculation<br className="hidden md:block" /> than the one you prepared for.
          </h2>

          <div className="bg-slate-900/80 p-8 md:p-12 border-2 border-cyan-900/50 text-left mx-auto rounded-sm shadow-xl max-w-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-600/70"></div>
            <p className="text-xl text-white leading-relaxed font-medium mb-4">
              We take a small number of engagements where the work can move a decision in front of you &mdash; a deal in committee, a thesis to stress-test, or a market to read before you commit.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              If you&apos;re purely awareness-building with no decision attached, we&apos;ll tell you we&apos;re not the right spend.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <a
              href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-950 px-12 py-6 font-semibold text-xl tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl w-full md:w-auto transform hover:-translate-y-1"
            >
              Request a Diagnostic
            </a>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              30 minutes. Peer-to-peer. No pitch.
            </p>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed pt-2">
              Not at a live decision yet? Read the weekly market signal &mdash;{" "}
              <a href="https://www.theinterconnect.energy/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
                The Interconnect
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
