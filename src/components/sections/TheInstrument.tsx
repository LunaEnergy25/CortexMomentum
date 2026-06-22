import Link from "next/link";

/*
 * Figures use floor framing — no date stamped, numbers are growing continuously.
 * 30,000+ network / 200,000+ trailing-90-day reach / ~4.7:1 silent-reactor ratio.
 */

export default function TheInstrument() {
  return (
    <section id="instrument" className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight mb-6">
          We don&apos;t assemble a view from scratch for you. We read your market against a measurement system we&apos;ve already run for years &mdash; and we show our work.
        </h2>
        <p className="text-sm tracking-wide text-slate-400 mb-14">
          Built and run by Jamie Skaar over roughly five years.{" "}
          <Link href="/about" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">About the operator &rarr;</Link>
        </p>

        <div className="space-y-14 text-lg md:text-xl text-slate-200 leading-relaxed">
          {/* What we measure */}
          <div className="space-y-5">
            <h3 className="text-xl font-serif text-white font-semibold">What we measure &mdash; before the shorthand.</h3>
            <p>
              When a senior operator sees a company&apos;s commercial pitch on LinkedIn, the platform records what they do around it: who viewed it, who returned to look again, who lingered, who reacted, who commented. For about five years we&apos;ve captured those signals continuously across a real energy and deep-tech audience, and we compare every new pitch against that history.
            </p>
            <p>
              We call that running record <strong className="text-white">the instrument.</strong> Two words are doing two jobs. <em>Instrument</em>, because it measures the same thing the same way every time &mdash; that&apos;s the rigor. <em>Standing</em>, because it&apos;s already built and calibrated &mdash; that&apos;s the speed: a new read is a comparison against years of baseline, not a study assembled from zero.
            </p>
            <p>
              The thing we read it against is a <strong className="text-white">commercial frame</strong> &mdash; the specific way a company positions why it matters to buyers (a thesis, a value claim, a positioning angle), expressed as a message the audience can react to. The frame is the testable unit. Everything below is about which frames earn attention, and from whom.
            </p>
          </div>

          {/* The signal almost no one else can see */}
          <div className="space-y-5">
            <h3 className="text-xl font-serif text-white font-semibold">The signal almost no one else can see.</h3>
            <p>
              Most senior people who evaluate a commercial pitch never comment, like, or reply. Reacting in public signals interest to competitors and peers, so they stay silent &mdash; they read, judge, and move on. In normal engagement metrics they are invisible, yet they are often the people who sit on the buying committee and decide.
            </p>
            <p>
              We call them <strong className="text-white">silent reactors.</strong> They aren&apos;t inferred by mind-reading: their engagement is observable in non-public platform signals &mdash; profile views after a post, repeat views, dwell and saves, reach without any visible reaction. The public commenters are the visible tip; the silent reactors are the larger group that standard measurement misses.
            </p>
            <div className="bg-slate-900/70 border-l-4 border-cyan-500/70 p-6 md:p-7 rounded-sm">
              <p>
                Once you can see both groups, you can count them. Across years of our own reads, for every senior person who reacts in public, roughly <strong className="text-white">4.7 study the same frame in silence</strong> <span className="text-slate-400 text-base">(practice baseline)</span>. It&apos;s a rate averaged over many posts over years &mdash; which is what lets it carry a decimal at all &mdash; and it means roughly four-fifths of the real attention a frame earns never shows up in the metrics you&apos;d normally look at. That hidden-to-visible ratio is hard to get anywhere else, because almost no one is measuring the silence.
              </p>
            </div>
          </div>

          {/* How we read it */}
          <div className="space-y-5">
            <h3 className="text-xl font-serif text-white font-semibold">How we read it &mdash; at the group level, against each topic&apos;s own history.</h3>
            <p>
              We never read individuals. We group reactions into broad buckets &mdash; how senior someone is (VP+ vs. manager) and what sector they sit in (storage, hydrogen, grid) &mdash; and report only at that group level: <em>&ldquo;senior storage operators leaned in,&rdquo;</em> never a name. This is the privacy guardrail and the validity claim at once. No person-level data ever leaves the practice.
            </p>
            <p>
              And we never read a reaction in isolation. A frame about grid storage naturally draws different attention than one about carbon credits, so for each topic we&apos;ve measured what normal attention looks like over several years. We compare each new frame against that normal level &mdash; its <em>per-topic baseline</em> &mdash; so the signal is the <strong className="text-white">deviation from normal</strong>, not the raw count. A frame isn&apos;t &ldquo;hot&rdquo; in the abstract; it&apos;s hot or cold relative to its own track record.
            </p>
          </div>

          {/* Attention is not demand */}
          <div className="space-y-5">
            <h3 className="text-xl font-serif text-white font-semibold">Attention is not demand &mdash; and we hold the line.</h3>
            <p>
              Before a market buys, it pays attention. Which frames earn that attention, and from which buyer seats, is observable months before it shows up as pipeline or demand. That early attention is the only thing this instrument measures.
            </p>
            <p>
              We call that <strong className="text-white">Layer 1: attention</strong> &mdash; did a frame earn study, from which segments, versus its own baseline. It is a leading indicator, not proof that anyone wants to buy. Confirming demand is a separate step &mdash; <strong className="text-white">Layer 2: direct peer interviews</strong> &mdash; and we never report attention as if it were demand. So when we say <em>attention only, at the segment level, never an identity or intent read,</em> that&apos;s not hedging. It&apos;s the discipline.
            </p>
          </div>

          {/* A sensor is only as good as what it can see */}
          <div className="space-y-5">
            <h3 className="text-xl font-serif text-white font-semibold">A measurement is only as good as what it can see.</h3>
            <p>These two numbers describe how wide the instrument&apos;s view is &mdash; its sample size &mdash; not an audience we sell, rent, or run.</p>
            <ul className="space-y-3 list-none">
              <li className="flex gap-4"><span className="text-cyan-400 mt-1">&mdash;</span><span>It observes a standing network of <strong className="text-white">30,000+ energy and deep-tech operators</strong> &mdash; the people whose reactions it can read directly.</span></li>
              <li className="flex gap-4"><span className="text-cyan-400 mt-1">&mdash;</span><span>Its frames reach <strong className="text-white">200,000+ relevant members</strong> over any rolling 90-day window &mdash; how far a read can actually observe as frames circulate.</span></li>
            </ul>
            <p>
              Both describe the instrument&apos;s field of view. Because we <em>measure</em> rather than broadcast, this is a sensor we read &mdash; not a list we sell, and not your social accounts we manage. We don&apos;t touch your LinkedIn; we read the market&apos;s response to your frame.
            </p>
          </div>

          {/* Why fast */}
          <div className="space-y-5">
            <h3 className="text-xl font-serif text-white font-semibold">Why the first read takes days, not weeks.</h3>
            <p>
              A normal market study starts cold: weeks to assemble an audience, post test frames, and gather enough reactions to mean anything. That setup is most of the first few weeks. Ours has already been running for years, so that work is done. That&apos;s why <strong className="text-white">the first read &mdash; the initial segment-level attention picture &mdash; comes back in days.</strong> Deeper work, and demand-level (Layer 2) work, takes longer; we scope that explicitly.
            </p>
          </div>

          {/* Reads / does not / verify */}
          <div className="grid md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
              <h4 className="text-white font-semibold mb-3">What it reads</h4>
              <p className="text-base text-slate-300 leading-relaxed">Which frames earn attention, from which segments, against each topic&apos;s multi-year baseline, plus the silent-reactor ratio &mdash; attention only, aggregate, never identity or intent.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
              <h4 className="text-white font-semibold mb-3">What it does not do</h4>
              <p className="text-base text-slate-300 leading-relaxed">Name individuals, claim demand or price or intent, or manage your accounts.</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-sm">
              <h4 className="text-white font-semibold mb-3">How you verify it</h4>
              <p className="text-base text-slate-300 leading-relaxed">A live demo read, a screen-share of the platform analytics behind it, and a methodology note &mdash; with platform-attestable figures and proprietary figures labeled separately.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
