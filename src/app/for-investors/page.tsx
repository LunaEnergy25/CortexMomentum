import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "For Investors — Diligence Read | Cortex Momentum",
  description:
    "An independent commercial read for energy and deep-tech diligence: is the target's market actually leaning into its thesis, and from which seats? Attention measured; demand confirmed by interview. Deal-attached, partner-discretionary.",
};

export default function ForInvestorsPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:pb-28 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-5">
            For Investors &amp; Platform Teams
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-[1.1] mb-12">
            The asset underwrites. The thesis is sound. Deals still stall in committee &mdash; because most of a market&apos;s real reaction to a thesis never appears anywhere you can pull it.
          </h1>

          {/* Proof cards — before prose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            <div className="bg-slate-900/60 border border-slate-800 p-7 rounded-sm">
              <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Private Equity &amp; FOAK Capital
              </p>
              <p className="text-4xl md:text-5xl font-serif text-white font-semibold mb-4">
                Months &rarr; Days
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                A FOAK private-credit fund whose term sheets the market kept filtering out. We read
                the silent attention behind two opposing boardroom fears and ran a frame for each &mdash;
                compressing time-to-first-signal from months to days.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-7 rounded-sm">
              <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Targeted Investor Readiness
              </p>
              <p className="text-4xl md:text-5xl font-serif text-white font-semibold mb-4">
                250 &rarr; 25
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Narrowed an outreach universe from ~250 generalist VCs to 25 thesis-aligned family
                offices by mapping public statements to filter misaligned capital &mdash; a targeting
                filter, not a raise outcome.
              </p>
            </div>
          </div>

          {/* Mechanism */}
          <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-4 max-w-3xl">
            Most of a market&apos;s response to a commercial thesis leaves no trace you can find in a data room.
          </p>
          <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-3xl">
            Silent reactors &mdash; the operators, allocators, and procurement committees who evaluate
            a thesis and never respond publicly &mdash; form the majority of any market&apos;s real signal.
            The instrument reads <strong className="text-white">Layer 1</strong> attention (what the
            market is leaning toward, measured from public behavior) and separates it from{" "}
            <strong className="text-white">Layer 2</strong> demand (confirmed only through peer
            interviews). For a diligence engagement, it answers one question: is the market leaning in,
            and from which seats? That answer is deal-attached, partner-discretionary, and delivered
            before you commit the capital.
          </p>

          <div className="text-center sm:text-left">
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
              <a href="https://www.theinterconnect.energy/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
                Read The Interconnect
              </a>{" "}for a sample of the signal.
            </p>
          </div>
        </div>
      </section>

      {/* Independence firewall */}
      <section className="px-6 py-16 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-4">Independence</p>
          <h2 className="text-2xl md:text-3xl font-serif text-white font-semibold mb-5">
            Stated before you ask.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            For diligence engagements we disclose and wall off any prior or concurrent
            operating-company work touching the target or its direct competitors. The commercial read
            is delivered independent of any go-to-market engagement. You get the read, not a pitch
            with a conflict attached.
          </p>
        </div>
      </section>

      {/* Close */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold tracking-tight mb-8">
            Read the market before you commit the capital.
          </h2>
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
          >
            Request a Diligence Read
          </a>
          <p className="mt-6">
            <Link href="/case-studies" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4 text-sm">
              See the full engagement record &rarr;
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
