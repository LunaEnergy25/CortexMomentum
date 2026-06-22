import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "For Investors — Commercial-Diligence Signal | Cortex Momentum",
  description: "An independent commercial read for energy and deep-tech diligence: is the target's market actually leaning into its thesis, and from which seats? Attention measured; demand confirmed by interview. Deal-attached, partner-discretionary.",
};

export default function ForInvestorsPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-5">For Investors &amp; Platform Teams</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-[1.1] mb-8">
            The asset underwrites. The thesis is sound. Deals still stall in committee &mdash; because most of a market&apos;s real reaction to a thesis never appears anywhere you can pull it.
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
            <p>
              Most of a market&apos;s response to a commercial thesis leaves no trace you can find in a data room &mdash; no press, no comments, no document. It shows up as senior operators quietly studying the thesis and never reacting in public. For about five years we&apos;ve run one continuous measurement system that reads exactly that: how a target&apos;s real market &mdash; grouped by seniority and sector, never by named individual &mdash; responds to its commercial pitch, including the senior buyers who evaluate in silence and never surface in normal metrics.
            </p>
            <p>
              As a diligence input it answers one question and stops there: <strong className="text-white">is the market leaning in, and from which seats?</strong> <span className="text-slate-400">(&ldquo;Seats&rdquo; = the buying-committee roles that actually decide.)</span> That is an <em>attention</em> read &mdash; what we call <strong className="text-white">Layer 1</strong>. It is not proof of demand. Before we tell you buyers want this, we confirm it directly through peer interviews &mdash; <strong className="text-white">Layer 2</strong>. We measure attention, and we never call it demand. The engagement is deal-attached and partner-discretionary.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
            >
              Request a Diligence Read
            </a>
            <p className="text-slate-400 text-sm mt-4">
              Not at a live deal yet?{" "}
              <a href="https://www.theinterconnect.energy/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Read The Interconnect</a>{" "}for a sample of the signal.
            </p>
          </div>
        </div>
      </section>

      {/* Independence firewall */}
      <section className="px-6 py-16 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-semibold mb-5">Independence, stated before you ask.</h2>
          <p className="text-lg text-slate-200 leading-relaxed">
            For diligence engagements we disclose and wall off any prior or concurrent operating-company work touching the target or its direct competitors. The commercial read is delivered independent of any go-to-market engagement. You get the read, not a pitch with a conflict attached.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="px-6 py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-semibold mb-10">Read against capital decisions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/60 border border-slate-800 p-7 rounded-sm">
              <p className="text-sm uppercase tracking-wide text-slate-400 mb-2">Private Equity &amp; FOAK Capital</p>
              <p className="text-3xl font-serif text-white mb-3">Months &rarr; Days</p>
              <p className="text-slate-300 leading-relaxed">A FOAK private-credit fund whose term sheets the market kept filtering out. We read the silent attention behind two opposing boardroom fears and ran a frame for each &mdash; compressing time-to-first-signal from months to days.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-7 rounded-sm">
              <p className="text-sm uppercase tracking-wide text-slate-400 mb-2">Targeted Investor Readiness</p>
              <p className="text-3xl font-serif text-white mb-3">250 &rarr; 25</p>
              <p className="text-slate-300 leading-relaxed">Narrowed an outreach universe from ~250 generalist VCs to 25 thesis-aligned family offices by mapping public statements to filter misaligned capital &mdash; a targeting filter, not a raise outcome.</p>
            </div>
          </div>
          <p className="mt-8">
            <Link href="/case-studies" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">See the full engagement record &rarr;</Link>
          </p>
        </div>
      </section>

      {/* Close */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold mb-6">Read the market before you commit the capital.</h2>
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
          >
            Request a Diligence Read
          </a>
        </div>
      </section>
    </main>
  );
}
