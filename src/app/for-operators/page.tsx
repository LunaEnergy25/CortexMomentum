import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "For Operators — Deal Rescue | Cortex Momentum",
  description:
    "Enterprise deals stall in committee — not because your engineering failed, but because every buying seat evaluates through a different lens of personal risk. We surface the frame and build the assets your champion deploys to win the vote.",
};

export default function ForOperatorsPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:pb-28 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-5">
            For Operators
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-[1.1] mb-10">
            Your engineering is proven. The deal is still stuck in committee.
          </h1>

          {/* Proof stat */}
          <div className="mb-10 py-8 border-y border-slate-800">
            <p className="text-4xl md:text-5xl font-serif text-white font-semibold">~60%</p>
            <p className="text-slate-400 text-sm mt-1 uppercase tracking-wide font-medium">
              More executive-seat attention on the reframe
            </p>
            <p className="text-slate-500 text-xs mt-1">Layer-1 attention signal — Elephantech engagement</p>
          </div>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
            The pilot data is clean and your champion is sold &mdash; and the deal still stalls, because
            every seat on the buying committee evaluates through a different lens of personal risk, and
            your champion walks in meeting objections nobody briefed them on. We surface which commercial
            frame each seat is actually leaning into, then build the assets your champion deploys to win
            the consensus.{" "}
            <Link href="/methodology" className="text-cyan-300 hover:text-cyan-200 transition-colors underline underline-offset-4">
              How the read works &rarr;
            </Link>
          </p>

          <div className="text-center sm:text-left">
            <a
              href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
            >
              Request a Pipeline Diagnostic
            </a>
            <p className="mt-4 text-slate-400 text-sm">
              30 minutes. Peer-to-peer. Mapping the specific dynamics stalling your deal. No pitch.
            </p>
          </div>
        </div>
      </section>

      {/* 45-day sprint */}
      <section className="px-6 py-20 md:py-28 bg-slate-900/40 border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-4">
            The Engagement
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white tracking-tight mb-6">
            The 45-day sprint
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-12">
            A fixed-scope engagement &mdash; not an open-ended marketing retainer. We diagnose the
            bottleneck, build the narrative assets, and integrate them into your team&apos;s workflow.
            When we exit, your commercial team owns everything below.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="text-cyan-400 font-serif text-2xl font-semibold leading-none mt-1 shrink-0">
                01
              </span>
              <div>
                <p className="text-white font-semibold text-lg leading-snug">
                  Evaluator-ready technical briefs
                </p>
                <p className="text-slate-300 mt-2 leading-relaxed">
                  Seat-specific documents that translate your engineering proof into the risk language
                  each committee role actually uses to decide.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="text-cyan-400 font-serif text-2xl font-semibold leading-none mt-1 shrink-0">
                02
              </span>
              <div>
                <p className="text-white font-semibold text-lg leading-snug">
                  Procurement-defense battlecards
                </p>
                <p className="text-slate-300 mt-2 leading-relaxed">
                  Built from real objection patterns &mdash; not hypotheticals &mdash; so your champion
                  enters every room prepared for the questions that kill late-stage deals.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <span className="text-cyan-400 font-serif text-2xl font-semibold leading-none mt-1 shrink-0">
                03
              </span>
              <div>
                <p className="text-white font-semibold text-lg leading-snug">
                  Premium-pricing defense that survives the committee vote
                </p>
                <p className="text-slate-300 mt-2 leading-relaxed">
                  A structured value narrative that holds under procurement pressure and gives your
                  champion standing to defend the number without concession.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/case-studies"
              className="text-cyan-300 hover:text-cyan-200 transition-colors underline underline-offset-4"
            >
              See the full engagement record &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-20 text-center border-t border-slate-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white tracking-tight mb-8">
            Your next committee is closer than the last one.
          </h2>
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
          >
            Request a Pipeline Diagnostic
          </a>
          <p className="mt-6 text-slate-300 text-sm leading-relaxed">
            We take a small number of engagements where the work can move a decision in front of
            you. If you&apos;re purely awareness-building, we&apos;ll tell you we&apos;re not the right spend.
          </p>
          <p className="mt-4 text-slate-400 text-sm">
            Not at a live deal yet?{" "}
            <a
              href="https://www.theinterconnect.energy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Read the weekly market signal &mdash; The Interconnect.
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
