import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "For Operators — Deal Rescue | Cortex Momentum",
  description: "For energy and deep-tech teams with a seven-figure deal stalled in committee: we read why it's stuck, then build the briefs, battlecards, and pricing defense your champion needs in the room.",
};

export default function ForOperatorsPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />

      <section className="px-6 pt-32 pb-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-5">For Operators</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-[1.1] mb-8">
            Your engineering is proven. The deal is still stuck in committee.
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
            <p>
              The pilot data is clean and the champion is sold &mdash; and the deal still stalls, because every seat on the buying committee evaluates through a different lens of personal risk, and your champion walks into the room meeting objections nobody briefed them on. That gap between your pipeline activity and the buyer&apos;s internal politics is where enterprise deals go to die.
            </p>
            <p>
              We close it. We read which commercial frame the room is actually leaning into &mdash; from which seats &mdash; against years of baseline, then build the assets your champion deploys to win the consensus: evaluator-ready technical briefs, procurement-defense battlecards from real objection patterns, and a premium-pricing defense that survives the committee vote.{" "}
              <Link href="/methodology" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">How the read works &rarr;</Link>
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
            >
              Request a Pipeline Diagnostic
            </a>
            <p className="text-slate-400 text-sm mt-4">30 minutes. Peer-to-peer. Mapping the specific dynamics stalling your deal. No pitch.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-semibold mb-5">The 45-day sprint</h2>
          <p className="text-lg text-slate-200 leading-relaxed mb-6">
            A fixed-scope engagement &mdash; not an open-ended marketing retainer. We diagnose the bottleneck, build the narrative assets, and integrate them into your team&apos;s workflow. When we exit, your commercial team owns the briefs, the battlecards, and the pricing defense. Your team walks into the next committee with a different conversation.
          </p>
          <Link href="/case-studies" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">See the full engagement record &rarr;</Link>
        </div>
      </section>
    </main>
  );
}
