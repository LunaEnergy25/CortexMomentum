import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About the Operator | Cortex Momentum",
  description: "Cortex Momentum is built and run by Jamie Skaar — fifteen years operating in energy, and a standing market-intelligence instrument behind every read.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-24 mt-20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-16">
          <Image
            src="/headshot.jpeg"
            alt="Jamie Skaar"
            width={120}
            height={120}
            className="w-28 h-28 rounded-sm object-cover border border-slate-700 shrink-0"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-3">Jamie Skaar</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Founder &amp; Principal, Cortex Momentum. The operator behind the standing instrument.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
          <p>
            Most seven-figure deals in energy and deep-tech don&apos;t stall on the technology. They stall in a buying committee, where the financial, reliability, and supply-chain framing hasn&apos;t been engineered for the specific people in the room &mdash; and where the champion meets objections nobody briefed them on. My work is unblocking that consensus cycle so the deal closes inside the budget window it was tracked against, not the one after.
          </p>
          <p>
            Fifteen years operating inside the space made the pattern legible. I was the first commercial hire at the residential-solar operator that scaled to $2.2B in revenue and is now Lumio, and I&apos;ve founded three operating companies in energy and adjacent hardware since. The same structure that gates a residential deal at small dollar values gates an enterprise deal at seven figures &mdash; only the dollar amount changes. Cortex Momentum is what got built once that pattern was clear enough to systematize.
          </p>
          <p>
            What makes the practice different from a sharp advisor with an opinion is the measurement system behind it. For roughly five years I&apos;ve run a standing instrument &mdash; a continuously-calibrated read of how senior energy and deep-tech buyers actually respond to a commercial pitch, including the majority who study it in silence and never appear in normal metrics.{" "}
            <Link href="/methodology" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Here&apos;s exactly how it works &rarr;</Link>
          </p>
          <p>
            It measures attention, not demand. I won&apos;t tell you what a market will buy off a reaction &mdash; that takes peer interviews. What the instrument tells you, and I&apos;ll show the working, is which positioning earns the room&apos;s attention and which dies on contact. Every figure is scoped to its evidence and built to survive diligence.
          </p>
          <p>
            This is intelligence, not marketing. I don&apos;t run your channels, sell you data, or hand over lists &mdash; person-level data never leaves the practice; you receive the aggregate read. I also publish{" "}
            <a href="https://www.theinterconnect.energy/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">The Interconnect</a>, a weekly market signal drawn from the same instrument.
          </p>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-10 text-center">
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
          >
            Request a Diagnostic
          </a>
          <p className="text-slate-400 text-sm mt-4">30 minutes. Peer-to-peer. No pitch.</p>
        </div>
      </div>
    </main>
  );
}
