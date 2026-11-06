import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { formatAsOf, getQuarterlies, getThreads } from "@/lib/threads";
import ReadRequestForm from "@/components/ReadRequestForm";
import { BOOKING_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "The Interconnect | Cortex Momentum",
  description:
    "The energy-market questions we're tracking: what each is really about, where it stands now, and what would change our read.",
  alternates: { canonical: "/interconnect" },
};

const h2 = "text-2xl md:text-3xl font-serif font-semibold text-white tracking-tight mb-4";
const link = "text-cyan-300 hover:text-cyan-200 underline underline-offset-4";

export default function InterconnectPage() {
  const threads = getThreads();
  const snapshot = getQuarterlies()[0];

  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-tight mb-6">
          The Interconnect
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          The energy-market questions we&apos;re tracking: what each is really about, where it stands now, and what would change our read.
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-12">
        {snapshot && (
          <Link
            href={`/interconnect/quarterly/${snapshot.slug}`}
            className="block border border-cyan-500/40 bg-slate-900/60 hover:bg-slate-900 transition-colors rounded-sm p-7 mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
              Snapshot &middot; as of {formatAsOf(snapshot.asOf)}
            </p>
            <p className="text-2xl font-serif font-semibold text-white mb-2">{snapshot.title}</p>
            <p className="text-slate-300 leading-relaxed">{snapshot.summary}</p>
          </Link>
        )}
        <div className="grid md:grid-cols-2 gap-6">
          {threads.map((t) => (
            <Link
              key={t.slug}
              href={`/interconnect/threads/${t.slug}`}
              className="block border border-slate-800 bg-slate-900/40 hover:border-slate-600 hover:bg-slate-900/70 transition-colors rounded-sm p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">{t.sector}</p>
              <p className="text-xl font-serif font-semibold text-white mb-3 leading-snug">{t.title}</p>
              <p className="text-slate-300 text-base leading-relaxed mb-4">{t.summary}</p>
              <p className="text-xs text-slate-500">As of {formatAsOf(t.asOf)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 px-6 border-t border-slate-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className={h2}>Have a decision riding on one of these?</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            If you&apos;re weighing an entry, an investment or a positioning call, and it has a date, the useful question is what this market will have settled by then and what it won&apos;t. We can put together a one-page read on what&apos;s moving in your market (rules, capital, offtake), where the skepticism sits, and what it means for that decision. It&apos;s only worth doing if it feeds a real decision. If it doesn&apos;t, we&apos;ll tell you.
          </p>
          <div className="bg-slate-900/60 border border-slate-800 rounded-sm p-6 md:p-8 max-w-xl mx-auto">
            <p className="text-white font-semibold mb-5 text-left">Start with a one-page read on your sector</p>
            <ReadRequestForm source="hub" />
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Rather talk it through?{" "}
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={link}>
              Book a call
            </a>
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-14 border-t border-slate-800">
        <h2 className={h2}>The weekly read</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          These threads come out of a weekly read on the energy transition&apos;s commercial signals. Each week:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-slate-300 leading-relaxed">
          <li><strong className="text-white">The signals:</strong> two or three developments from the week, read for what they mean commercially, not just what happened.</li>
          <li><strong className="text-white">The pushback:</strong> where people disagreed, and what that disagreement suggests.</li>
          <li><strong className="text-white">What to watch:</strong> the dated question each signal leaves open.</li>
        </ul>
        <p className="text-slate-400 text-sm mt-6">
          <a href="https://www.theinterconnect.energy/" target="_blank" rel="noopener noreferrer" className={link}>
            Get the weekly read
          </a>{" "}
          (opens theinterconnect.energy)
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-4 pb-16">
        <h2 className={h2}>Where it comes from</h2>
        <p className="text-slate-300 leading-relaxed">
          The Interconnect is built on our market-listening instrument: a 35,000+ professional audience, with our reads reaching 200,000+ LinkedIn members each quarter, read against continuously refreshed baselines. It reports attention, not demand. Figures are documented and available on request.
        </p>
      </section>
    </main>
  );
}
