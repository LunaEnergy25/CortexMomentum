"use client";

import { useState } from "react";

type TrackId = "gtm" | "dd" | "capital";

const tracks = [
  {
    id: "gtm" as TrackId,
    label: "My pitch or deal is stalling in market",
    sub: "GTM · Deal Rescue",
    metric: "~60%",
    metricLabel: "More executive-seat attention",
  },
  {
    id: "dd" as TrackId,
    label: "I need an outside read on a thesis or strategy",
    sub: "Due Diligence · Validation",
    metric: "Board-ready",
    metricLabel: "Independent read you can defend in the room",
  },
  {
    id: "capital" as TrackId,
    label: "I'm in a capital transaction — raising or evaluating",
    sub: "Capital · Evaluation",
    metric: "Months→Days",
    metricLabel: "Time-to-first-signal",
  },
];

function GtmContent() {
  return (
    <div className="space-y-12 pt-2">
      <div className="space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
        <p>
          Your champion walked into that committee meeting with a pitch the engineering team believes in. The room heard something else. Every seat in a buying committee is running its own risk calculation &mdash; procurement, the CFO, and the VP of Innovation are not evaluating the same problem. A single narrative cannot clear all three simultaneously.
        </p>
        <p>
          We surface what each seat is actually evaluating, and rebuild the positioning around it. The output is a reframe your champion can walk into that meeting with &mdash; one that speaks to the operational risk, the financial risk, and the credibility risk in the same conversation, without diluting any of them.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Elephantech</p>
          <p className="text-3xl font-serif text-white mb-3">~60%</p>
          <p className="text-slate-300 text-base leading-relaxed">
            More executive-seat attention after shifting &ldquo;Green Tech&rdquo; to &ldquo;Supply Chain Risk&rdquo; &mdash; the frame procurement could defend without calling it a green premium.
          </p>
          <p className="text-xs text-slate-500 mt-3">Layer-1 attention signal</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">ClimateHive &times; EarthGrid</p>
          <p className="text-3xl font-serif text-white mb-3">48 Hours</p>
          <p className="text-slate-300 text-base leading-relaxed">
            Shifted the lead hook from &ldquo;Boring Cost&rdquo; to &ldquo;Permitting Speed&rdquo; &mdash; the frame that drew active debate from operator seats, not passive reaction.
          </p>
          <p className="text-xs text-slate-500 mt-3">Attention signal; demand confirmation requires interviews</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">FOAK Private Credit</p>
          <p className="text-3xl font-serif text-white mb-3">Months &rarr; Days</p>
          <p className="text-slate-300 text-base leading-relaxed">
            Term sheets the market kept filtering out. We read the opposing boardroom fears and ran a separate frame for each &mdash; compressing time-to-first-signal from months to days.
          </p>
        </div>
      </div>

      <div className="space-y-3 text-center">
        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
        >
          Request a Pipeline Diagnostic
        </a>
        <p className="text-slate-400 text-sm">30 minutes. Peer-to-peer. We map what the committee is actually afraid of. No pitch.</p>
      </div>
    </div>
  );
}

function DdContent() {
  return (
    <div className="space-y-12 pt-2">
      <div className="space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
        <p>
          Before you commit to a thesis &mdash; a pivot, a new market entry, a strategy the board is about to fund &mdash; you need to know if it reads the way you need it to. Not whether the logic holds on paper, but whether the relevant audience actually leans into it from the seats that matter.
        </p>
        <p>
          We run an independent read: which seats lean in, which stay cold, where the thesis has gaps the next conversation will expose. That independence from your internal view is the point. If it holds up, you carry defensible signal forward. If it doesn&apos;t, you find out before it costs you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">RNG Pivot</p>
          <p className="text-3xl font-serif text-white mb-3">5 Days</p>
          <p className="text-slate-300 text-base leading-relaxed">
            Board-imposed 45-day clock, investors frozen. Board-ready pivot direction in 5 days &mdash; surfacing European SAF regulation as the highest-signal vector to validate with buyer interviews.
          </p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Cleantech SaaS</p>
          <p className="text-3xl font-serif text-white mb-3">12 Interviews</p>
          <p className="text-slate-300 text-base leading-relaxed">
            Across 12 buyer interviews, deal velocity outranked cost savings as the stated decision driver &mdash; directional, not market-wide, but enough to rebuild the entire GTM around Speed, Compliance, and Guarantees.
          </p>
          <p className="text-xs text-slate-500 mt-3">Layer-2 demand finding — interviews, not attention alone</p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Solar Hardware</p>
          <p className="text-3xl font-serif text-white mb-3">~40%</p>
          <p className="text-slate-300 text-base leading-relaxed">
            Client reported gross margins in the ~40% range following a metro-segmented price change. Cortex informed the targeting; client reported the outcome.
          </p>
          <p className="text-xs text-slate-500 mt-3">Client-reported</p>
        </div>
      </div>

      <div className="space-y-3 text-center">
        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
        >
          Request a Diagnostic
        </a>
        <p className="text-slate-400 text-sm">We scope the read to the specific decision you&apos;re carrying.</p>
      </div>
    </div>
  );
}

function CapitalContent() {
  return (
    <div className="space-y-12 pt-2">
      <div className="space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
        <p>
          On both sides of a capital decision, the same question is usually unresolved: does the commercial thesis read as defensible to the people who have to say yes? A founder preparing to raise needs to know if their story is landing with the right capital seats before they&apos;re filtered out. A fund manager evaluating a target needs to know if the market is actually leaning into the thesis &mdash; or if the demand being projected is ahead of what the market has confirmed.
        </p>
        <p>
          We give you that independent read. Which seats lean in, which stay cold, and what&apos;s been confirmed as demand versus what&apos;s still attention waiting on interview. For diligence engagements we disclose and wall off any concurrent operating-company work on the target &mdash; the independence is structural, not just stated.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">FOAK Private Credit</p>
          <p className="text-3xl font-serif text-white mb-3">Months &rarr; Days</p>
          <p className="text-slate-300 text-base leading-relaxed">
            Term sheets the market kept filtering out. We read the opposing boardroom fears &mdash; founders wary of cap-table dilution, PE gatekeepers wary of execution failure &mdash; and ran a frame that cleared both.
          </p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Targeted Investor Readiness</p>
          <p className="text-3xl font-serif text-white mb-3">250 &rarr; 25</p>
          <p className="text-slate-300 text-base leading-relaxed">
            Narrowed an outreach universe from ~250 generalist VCs to 25 thesis-aligned family offices by mapping public statements against the thesis &mdash; a targeting filter, not a raise outcome.
          </p>
        </div>
      </div>

      <div className="space-y-3 text-center">
        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
        >
          Request a Diligence Read
        </a>
        <p className="text-slate-400 text-sm">We scope the read to the transaction in front of you.</p>
      </div>
    </div>
  );
}

export default function TrackSelector() {
  const [active, setActive] = useState<TrackId | null>("gtm");

  return (
    <section className="bg-slate-900/40 py-20 md:py-28 px-6 border-b border-slate-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-5">Start here</p>
        <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold leading-tight tracking-tight mb-10">
          What&apos;s the decision in front of you?
        </h2>

        {/* Visual card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setActive(active === track.id ? null : track.id)}
              aria-expanded={active === track.id}
              className={`text-left p-7 border rounded-sm transition-all duration-200 group cursor-pointer ${
                active === track.id
                  ? "border-cyan-500/70 bg-slate-900/90 shadow-lg shadow-cyan-950/30"
                  : "border-slate-800 bg-slate-900/30 hover:border-slate-600 hover:bg-slate-900/60"
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-widest mb-4 transition-colors ${
                active === track.id ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-400"
              }`}>
                {track.sub}
              </p>
              <p className={`text-3xl md:text-4xl font-serif font-semibold leading-tight mb-2 transition-colors overflow-hidden ${
                active === track.id ? "text-white" : "text-slate-300"
              }`}>
                {track.metric}
              </p>
              <p className={`text-sm mb-5 transition-colors ${
                active === track.id ? "text-slate-300" : "text-slate-500"
              }`}>
                {track.metricLabel}
              </p>
              <p className={`text-base leading-snug transition-colors ${
                active === track.id ? "text-slate-200" : "text-slate-400 group-hover:text-slate-300"
              }`}>
                {track.label}
              </p>
              {active === track.id && (
                <p className="text-xs text-cyan-500 uppercase tracking-widest mt-4 font-semibold">View details ↓</p>
              )}
            </button>
          ))}
        </div>

        {/* Full-width expanded content panel */}
        {active && (
          <div className="border border-slate-800 bg-slate-950/60 rounded-sm p-8 md:p-12">
            {active === "gtm" && <GtmContent />}
            {active === "dd" && <DdContent />}
            {active === "capital" && <CapitalContent />}
          </div>
        )}
      </div>
    </section>
  );
}
