import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { CONTACT_EMAIL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "The Interconnect | Cortex Momentum",
  description:
    "A weekly read on which energy-market narratives are earning attention, from which seats, and where the friction sits.",
};

const h2 = "text-2xl md:text-3xl font-serif font-semibold text-white tracking-tight mb-4";

export default function InterconnectPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-tight mb-6">
          The Interconnect
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed mb-10">
          A weekly read on the energy transition&apos;s commercial signals: which narratives are gaining traction, from which seats, and where the friction is building.
        </p>
        <a
          href="https://www.theinterconnect.energy/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
        >
          Subscribe &rarr;
        </a>
      </div>

      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className={h2}>What you get each week</h2>
        <ul className="list-disc pl-6 space-y-3 text-slate-300 leading-relaxed">
          <li><strong className="text-white">The signals:</strong> two or three developments from the week, read for what they mean commercially, not just what happened.</li>
          <li><strong className="text-white">Who&apos;s paying attention:</strong> which professional seats are following each story (developers, utilities, investors, corporate strategy). Read at the level of the audience, never individuals.</li>
          <li><strong className="text-white">The friction:</strong> where the pushback and skepticism sat, and what it suggests to watch next.</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className={h2}>Where it comes from</h2>
        <p className="text-slate-300 leading-relaxed">
          The Interconnect is built on Cortex Momentum&apos;s market-listening instrument. The instrument is a 30,000+ professional audience reaching 200,000+ members each quarter, read against continuously refreshed baselines. It reports attention, not demand. Figures are documented and available on request.
        </p>
      </section>

      <section className="bg-slate-950 py-16 px-6 border-t border-slate-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className={h2}>Weighing a decision in this market?</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            If you&apos;re weighing an entry, an investment or a positioning decision, we can put together a short read on how the market is currently reading your category: who&apos;s listening, which frames land, and where the skepticism sits. It&apos;s sharper when we know what decision it feeds.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Market%20read`}
            className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
          >
            Tell us what you&apos;re working on &rarr;
          </a>
          <p className="text-slate-400 text-sm mt-6">
            or{" "}
            <a
              href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
            >
              book a time
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
