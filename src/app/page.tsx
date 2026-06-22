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

      {/* SELECTED IMPACT */}
      <section className="bg-slate-900/40 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-semibold mb-6 leading-tight tracking-tight">
              Selected Impact
            </h2>
            <p className="text-xl text-slate-200 leading-relaxed">
              A cross-section of engagements. Each figure is scoped to its evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="bg-slate-900 border border-slate-800 flex flex-col p-8 md:p-10 rounded-sm shadow-xl">
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-3 block">GTM / Deal Rescue</span>
              <h3 className="text-3xl font-serif font-semibold text-white mb-8">Elephantech</h3>
              <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-slate-500 p-6 mb-8 rounded-sm shadow-inner">
                <span className="block text-sm font-medium tracking-wide text-slate-400 mb-3">Impact at a Glance</span>
                <span className="block text-5xl md:text-6xl font-serif font-semibold text-white leading-none tracking-tighter">~60%</span>
                <span className="block text-lg text-slate-300 mt-3">More executive-seat attention vs the account&apos;s baseline</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-white">
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Shifted narrative from &ldquo;Green Tech&rdquo; to &ldquo;Supply Chain Risk&rdquo;.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Bypassed technical vetoes masking as &ldquo;70% Material Reduction&rdquo;.</span>
                </li>
              </ul>
              <Link href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-1 self-start hover:border-white transition-colors uppercase tracking-widest text-sm mt-auto">
                Read full engagement &rarr;
              </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 flex flex-col p-8 md:p-10 rounded-sm shadow-xl">
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-3 block">DD · Validation</span>
              <h3 className="text-3xl font-serif font-semibold text-white mb-8">Climate Hive &times; EarthGrid</h3>
              <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-slate-500 p-6 mb-8 rounded-sm shadow-inner">
                <span className="block text-sm font-medium tracking-wide text-slate-400 mb-3">Impact at a Glance</span>
                <span className="block text-5xl md:text-6xl font-serif font-semibold text-white leading-none tracking-tighter">48 Hrs</span>
                <span className="block text-lg text-slate-300 mt-3">To reach 103 decision-makers</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-white">
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Shifted sales hook from &ldquo;Boring Cost&rdquo; to &ldquo;Permitting Speed&rdquo;.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Reframed &ldquo;Science Project&rdquo; into rapid-deployment infrastructure.</span>
                </li>
              </ul>
              <Link href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-1 self-start hover:border-white transition-colors uppercase tracking-widest text-sm mt-auto">
                Read full engagement &rarr;
              </Link>
            </div>

            <div className="bg-slate-900 border border-slate-800 flex flex-col p-8 md:p-10 rounded-sm shadow-xl">
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-3 block">Capital Transaction</span>
              <h3 className="text-3xl font-serif font-semibold text-white mb-8">FOAK Private Credit Fund</h3>
              <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-slate-500 p-6 mb-8 rounded-sm shadow-inner">
                <span className="block text-sm font-medium tracking-wide text-slate-400 mb-3">Impact at a Glance</span>
                <span className="block text-5xl md:text-6xl font-serif font-semibold text-white leading-none tracking-tighter">Months &rarr; Days</span>
                <span className="block text-lg text-slate-300 mt-3">Time-to-Signal compression</span>
              </div>
              <p className="mb-8 flex-grow text-white text-lg leading-relaxed">
                Read the opposing boardroom fears &mdash; founders wary of cap-table dilution, PE gatekeepers wary of execution failure &mdash; then ran a separate frame for each so the facility cleared both reads.
              </p>
              <Link href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-1 self-start hover:border-white transition-colors uppercase tracking-widest text-sm mt-auto">
                Read full engagement &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section id="diagnostic-booking" className="relative bg-slate-950 py-24 md:py-32 px-6 text-white overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-slate-800/20 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold leading-tight tracking-tight">
            The decision in front of you has a read it hasn&apos;t gotten yet.
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re moving a deal through committee, stress-testing a thesis before the board commits, or reading a transaction before capital flows &mdash; the commercial frame underneath that decision is either legible in that room or it isn&apos;t.
          </p>

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
