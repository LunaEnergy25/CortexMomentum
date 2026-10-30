import Link from "next/link";
import Navbar from "@/components/Navbar";
import { formatAsOf } from "@/lib/threads";
import ReadRequestForm from "@/components/ReadRequestForm";
import { BOOKING_URL, decisionEmailHref } from "@/lib/links";

/* Shared reading layout for Interconnect thread pages and quarterly snapshots:
   byline + as-of date up top, prose body, then two closing asks: the
   low-commitment sector read first, a call second. */

const prose = [
  "text-lg text-slate-300 leading-relaxed",
  "[&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-serif [&_h2]:font-semibold [&_h2]:text-white [&_h2]:tracking-tight [&_h2]:mt-14 [&_h2]:mb-5",
  "[&_h3]:text-xl [&_h3]:font-serif [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-10 [&_h3]:mb-3",
  "[&_p]:mb-5",
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2",
  "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2",
  "[&_strong]:text-white [&_strong]:font-semibold",
  "[&_a]:text-cyan-300 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-cyan-200",
].join(" ");

const link = "text-cyan-300 hover:text-cyan-200 underline underline-offset-4";

export default function ReadLayout({
  eyebrow,
  title,
  dek,
  asOf,
  html,
  source,
  sector,
  backHref = "/interconnect",
  backLabel = "All threads",
}: {
  eyebrow: string;
  title: string;
  dek: string;
  asOf: string;
  html: string;
  source: string;
  sector?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <Link href={backHref} className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
          &larr; {backLabel}
        </Link>
        <p className="text-sm font-medium tracking-widest uppercase text-cyan-400 mt-8 mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight leading-tight mb-6">
          {title}
        </h1>
        {dek && <p className="text-xl text-slate-300 leading-relaxed mb-6">{dek}</p>}
        <p className="text-sm text-slate-400 border-b border-slate-800 pb-8 mb-4">
          Jamie Skaar, Cortex Momentum &middot; as of {formatAsOf(asOf)}
        </p>
        <div className={prose} dangerouslySetInnerHTML={{ __html: html }} />
        <div className="border-t border-slate-800 mt-14 pt-10 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-sm p-6">
            <p className="text-slate-200 leading-relaxed">
              Want this mapped to your market? I&apos;ll send a one-page read{sector ? ` on ${sector.toLowerCase()}` : ""}, written around the decision you&apos;re working through.
            </p>
            <div className="mt-6">
              <ReadRequestForm source={source} sector={sector} />
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            If you have a decision riding on this (a contract, a raise, a market entry) and it has a date, that&apos;s worth 30 minutes. I&apos;ll bring how I&apos;m reading it; you bring what you&apos;re seeing that I&apos;m not. If it isn&apos;t a fit, I&apos;ll say so.{" "}
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={link}>
              Book 30 minutes
            </a>{" "}
            or{" "}
            <a href={decisionEmailHref(source)} className={link}>
              email me the decision and its date
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
