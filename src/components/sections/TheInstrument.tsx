export default function TheInstrument() {
  return (
    <section id="instrument" className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight mb-10">
          How the read works
        </h2>

        <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">
          <p>
            We keep a market read running year-round across energy and deep-tech &mdash; tracking how a company&apos;s commercial thesis lands and where the pushback sits. Our reads come from a 35,000+ professional audience and reach 200,000+ LinkedIn members each quarter. We read reactions in aggregate &mdash; how a frame lands against its topic&apos;s own track record &mdash; never by named individual. No person-level data leaves the practice.
          </p>
          <p>
            Because it&apos;s been running for years, the baseline work is done. A new read is a comparison against that history, not a study assembled from zero. That&apos;s why the initial picture &mdash; which frames earn attention, and where the pushback sits, versus each topic&apos;s own track record &mdash; comes back faster than a from-scratch study. Deeper work, and demand-level confirmation, takes longer; we scope that explicitly at the start of every engagement.
          </p>
        </div>

        {/* Layer 1 / Layer 2 callout — the claims discipline made scannable */}
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="border border-slate-700 bg-slate-900/60 p-7 rounded-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">Layer 1 — Attention</p>
            <p className="text-white font-semibold text-lg mb-3">What the instrument measures</p>
            <p className="text-slate-300 leading-relaxed">
              Which commercial frames earn study, and by how much relative to their own baseline. Attention can move before demand does, but it isn&apos;t evidence of demand. Every figure is labeled as attention, not demand.
            </p>
          </div>
          <div className="border border-slate-700 bg-slate-900/60 p-7 rounded-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Layer 2 — Demand</p>
            <p className="text-white font-semibold text-lg mb-3">What requires peer interviews</p>
            <p className="text-slate-300 leading-relaxed">
              Confirming that attention converts to purchase intent requires direct interviews with the buyers themselves. We run those when the engagement warrants it. We never call Layer-1 attention a demand finding.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-10">
          <p className="text-base text-slate-400 leading-relaxed">
            What it does not do: name individuals, claim demand from attention alone, or manage your social accounts. We read the market&apos;s response to your commercial frame. We don&apos;t touch your LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
}
