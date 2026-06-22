import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FAQ | Cortex Momentum",
  description: "Straight answers on what Cortex Momentum is and isn't: data, independence, why a days-long first read isn't shallow, retainers, and cost.",
};

const faqs = [
  {
    q: "Are you selling data from your LinkedIn audience?",
    a: "No. We never sell data, lists, or person-level information — it never leaves the practice. The audience is a measurement sensor we read, not an asset we rent out. You receive the aggregate, segment-level read; nothing about any individual.",
  },
  {
    q: "Isn't a read that comes back in days just shallow?",
    a: "The first read is fast because the measurement system has already been running for years — the slow part of a normal study (assembling an audience and gathering enough reactions to mean anything) is already done. A first read is the initial segment-level attention picture. Deeper work, and demand-level interview work, takes longer, and we scope that explicitly.",
  },
  {
    q: "How is this different from content marketing or a social agency?",
    a: "We don't run your channels, post on your behalf, produce top-of-funnel content, or manage your LinkedIn. We measure how the market responds to a commercial frame and hand you the read. It's an intelligence practice, not a marketing one.",
  },
  {
    q: "Do you measure demand, or just attention?",
    a: "Attention only — which frames earn study, from which seats, against each topic's multi-year baseline. That's a leading indicator, not proof anyone will buy. Confirming demand is a separate step done through direct peer interviews. We never report attention as if it were demand.",
  },
  {
    q: "If you also work with operating companies, is the diligence read really independent?",
    a: "For diligence engagements we disclose and wall off any prior or concurrent operating-company work touching the target or its direct competitors. The commercial read is delivered independent of any go-to-market engagement.",
  },
  {
    q: "What does it cost?",
    a: "Engagements range from a rapid Layer-1 signal scan to a standing intelligence retainer, scoped to the decision in front of you. We share scope and a range on a short call — there's no pricing menu because the work is scoped to the question.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto px-6 py-24 mt-20">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight mb-14">Straight answers</h1>
        <dl className="space-y-12">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-slate-800 pb-12">
              <dt className="text-xl md:text-2xl font-serif text-white font-semibold mb-4">{f.q}</dt>
              <dd className="text-lg text-slate-200 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12">
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-10 py-4 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
          >
            Request a Diagnostic
          </a>
        </div>
      </div>
    </main>
  );
}
