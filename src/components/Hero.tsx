import Link from "next/link";
import GlobalIntelligence from "@/components/GlobalIntelligence";
import { BOOKING_URL } from "@/lib/links";

// Corpus figures: deduplicated posts in cortex.db as of 2026-10-18 (847 unique).
// Topic counts overlap; never sum them.
const STATS = [
  { value: "850+", label: "published market reads, so we don't start from zero", href: "/interconnect" },
  { value: "~5 years", label: "tracking these markets, so we read change, not snapshots" },
  { value: "200,000+", label: "LinkedIn members reached by our reads each quarter" },
];

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white py-20 md:py-28 lg:py-36 px-6 border-b border-slate-800 overflow-hidden text-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-6 md:mb-10 w-full max-w-lg lg:max-w-xl">
          <GlobalIntelligence />
        </div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight mb-6">
          Your deal has a date.<br className="hidden md:block" /> Get a read on what buyers and capital are weighing before then.
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
          A contract, a raise, an energization date. We read where storage, solar, firm-power, large-load and deep-tech deals are stalling, and what that means for your next move.
        </p>

        {/* Stat bar: corpus depth, tenure, reach */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-slate-700 mb-4 w-full max-w-3xl">
          {STATS.map((s) => {
            const inner = (
              <>
                <span className="text-3xl md:text-4xl font-serif text-white font-semibold">{s.value}</span>
                <span className="text-xs text-slate-400 tracking-wider uppercase mt-2 leading-relaxed">{s.label}</span>
              </>
            );
            return s.href ? (
              <Link key={s.value} href={s.href} className="flex-1 flex flex-col items-center px-4 hover:opacity-80 transition-opacity">
                {inner}
              </Link>
            ) : (
              <div key={s.value} className="flex-1 flex flex-col items-center px-4">
                {inner}
              </div>
            );
          })}
        </div>
        <p className="text-slate-500 text-xs tracking-wide mb-12 max-w-3xl">
          Reads by topic: storage 280+ &middot; data centers 200+ &middot; grid 360+ &middot; solar 350+ &middot; natural gas 190+
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-12 py-5 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            Book a call
          </a>
          <Link
            href="/read?from=home"
            className="inline-block border border-slate-500 text-white px-8 py-5 font-semibold tracking-wide hover:border-white hover:bg-slate-900 transition-all duration-300 rounded-sm text-lg"
          >
            Get a one-page read on your sector
          </Link>
        </div>
        <p className="text-slate-400 text-sm mt-4 max-w-xl leading-relaxed">
          30 minutes. If it isn&apos;t a fit, we&apos;ll say so.
        </p>
        <p className="text-slate-400 text-sm mt-3 max-w-xl leading-relaxed">
          Not at a decision yet?{" "}
          <Link href="/interconnect" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
            See the energy threads we&apos;re tracking &rarr;
          </Link>
        </p>
      </div>

      <div className="relative z-10 mt-16 md:mt-20 max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm tracking-wide leading-relaxed">
          Past engagements in advanced manufacturing, renewable natural gas and private credit. Currently tracking large loads, storage, solar and firm power.
        </p>
      </div>
    </section>
  );
}
