import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      
      {/* COMPONENT 2: PROBLEM RECOGNITION */}
      <section className="bg-slate-50 py-32 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 font-bold leading-tight">Are your 7-figure deals trapped in &quot;<span className="font-semibold text-navy-900">Pilot Purgatory</span>&quot;?</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
              You have secured your early funding. Your minimum viable product is validated. But when your lean commercial team moves to close massive enterprise contracts, the momentum dies. You are attacking the enterprise market using a monolithic pitch based on your Seed-round deck. You are pitching technical superiority, 70% material reductions, and virtue-based &quot;Green Premiums.&quot; But enterprise procurement officers are not paid to be educated by startups; they are paid to mitigate corporate risk.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
              To a legacy Quality Engineer or Utility Operator, a massive material reduction is not an efficiency gain—it is a glaring risk to system reliability. When your lean sales team sells innovation and virtue to a buyer who is financially incentivized to manage risk, you trigger their <span className="font-medium text-navy-900">Fear of F*cking Up (FOFU)</span>. The deal enters a defensive stall in committee review, and your team is left throwing stones into the sea, waiting on external decisions you cannot control.
            </p>
          </div>
          <div className="sticky top-32">
            <blockquote className="border-l-8 border-navy-900 pl-8 py-10 italic text-2xl text-slate-800 font-serif bg-white shadow-sm">
              &quot;I think the biggest challenge is does the freaking thing work... The market really wants what we have if we can get it to work.&quot; <br/><span className="text-lg text-slate-500 font-sans not-italic mt-6 block font-semibold">— Deep Tech COO</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* COMPONENT 3: EMOTIONAL GAP */}
      <section className="bg-navy-900 py-32 px-4 border-b border-navy-800 text-center text-slate-50">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight">The &quot;Series B Squeeze&quot; and the Cost of Delay</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Every month an enterprise deal sits in committee review, your startup bleeds precious runway. You raised your last round on the promise of your technology&apos;s potential; you must raise your next round on the hard proof of your commercial revenue and pipeline velocity. What happens to your next funding round if these enterprise pilots remain trapped in legal and get pushed to next year&apos;s fiscal budget?
          </p>
          <blockquote className="border-l-4 border-slate-400 pl-8 py-8 my-10 italic text-2xl text-white font-serif text-left bg-slate-800/50 shadow-md">
            &quot;We&apos;re running dry... exhausted our self-funding resources. We are in this crunch phase between we don&apos;t have yet steady 100k 200k every month.&quot; <br/><span className="text-lg text-slate-400 font-sans not-italic mt-4 block font-semibold">— Clean Energy Founder</span>
          </blockquote>
          <p className="text-xl text-slate-300 leading-relaxed">
            Time is your absolute enemy. The longer you rely on manual, founder-led sales motions and academic &quot;science project&quot; pitches, the faster your <span className="font-semibold text-white">capitalization</span> erodes. You cannot afford to spend capital on generalized marketing retainers that generate LinkedIn impressions in an echo chamber, but yield zero closed-won utility pilots. Every day your team spends guessing at the right messaging is a day subtracted from your survival.
          </p>
        </div>
      </section>

      {/* COMPONENT 4: FUTURE PACING */}
      <section id="architecture" className="bg-white py-32 px-4 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 font-bold leading-tight">The Bifurcated Commercial Architecture</h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            We stop pitching the base technology and start pitching risk-mitigation. By decoupling your engineering truth from your commercial narrative, we align your solution directly with the buyer&apos;s internal compliance mandates and financial priorities. We establish absolute commercial readiness by arming your team to speak to every stakeholder simultaneously.
          </p>
          <ul className="space-y-6 my-12">
            <li className="flex gap-6 bg-slate-50 p-8 border border-slate-200 shadow-sm">
              <span className="text-navy-900 font-bold text-2xl mt-1">•</span>
              <p className="text-lg text-slate-700 leading-relaxed"><strong className="text-navy-900 font-bold font-serif text-2xl block mb-2">Track A (The Skeptic):</strong> Visual physics briefs neutralizing reliability fears are injected into your Account Executive&apos;s playbook, effectively bypassing technical vetoes.</p>
            </li>
            <li className="flex gap-6 bg-slate-50 p-8 border border-slate-200 shadow-sm">
              <span className="text-navy-900 font-bold text-2xl mt-1">•</span>
              <p className="text-lg text-slate-700 leading-relaxed"><strong className="text-navy-900 font-bold font-serif text-2xl block mb-2">Track B (The Blocker):</strong> ROI models and supply-chain volatility hedging sequences are drafted for your VP of Sales to satisfy procurement mandates.</p>
            </li>
            <li className="flex gap-6 bg-slate-50 p-8 border border-slate-200 shadow-sm">
              <span className="text-navy-900 font-bold text-2xl mt-1">•</span>
              <p className="text-lg text-slate-700 leading-relaxed"><strong className="text-navy-900 font-bold font-serif text-2xl block mb-2">Track C (The Champion):</strong> Internal briefing documents are provided to arm your advocates to win the &quot;Lowest Bidder&quot; argument behind closed doors.</p>
            </li>
          </ul>
          <p className="text-xl text-slate-700 leading-relaxed">
            You stop arguing with mid-level engineers and start selling directly to the CFO. While we cannot alter a utility&apos;s fixed budget calendar, we ensure that when their budget window officially opens, your champion is completely armed. Your deal is positioned as a financial hedge, ready for approval rather than months of defensive scrutiny.
          </p>
        </div>
      </section>

      {/* COMPONENT 5: AUTHORITY */}
      <section className="bg-slate-50 py-32 px-4 border-b border-slate-200">
        <div className="max-w-3xl mx-auto space-y-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 font-bold leading-tight">Strategic Intelligence vs. Agency Bloat</h2>
          <p className="text-xl text-slate-700 leading-relaxed text-left">
            If your goal is to write blog posts and generate top-of-funnel brand awareness, traditional PR and marketing agencies are built for that. But if your goal is to achieve the GTM clarity required to unblock a $3M utility deal currently stalled in procurement, you do not need generalized headcount; you need surgical intelligence.
          </p>
          <p className="text-xl text-slate-700 leading-relaxed text-left">
            We map the market architecture. We index attention and engagement signals across the digital ecosystem to decode the exact psychological triggers of the gatekeepers blocking your deals. We deliver the diagnosis, fabricate the bifurcated assets, and inject them directly into your CRM. You receive the commercial blueprint and the executable assets without the operational bloat.
          </p>
        </div>
      </section>

      {/* COMPONENT 6: VALUE PROPOSITIONS */}
      <section id="services" className="bg-white py-32 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-bold font-serif text-navy-900 mb-6 pb-4 border-b border-slate-100">Live Pipeline Intelligence</h3>
            <p className="text-lg text-slate-700 leading-relaxed">We do not operate in the abstract or rely on generic, year-old market research. You give us the specific massive enterprise deals currently stalled in your pipeline. We map the exact psychological and financial triggers of those specific buyers to build your narrative and protect your CAC payback period.</p>
          </div>
          <div className="bg-white p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-bold font-serif text-navy-900 mb-6 pb-4 border-b border-slate-100">Targeted Asset Injection</h3>
            <p className="text-lg text-slate-700 leading-relaxed">Lean deep-tech teams do not have the bandwidth to translate abstract strategy into high-converting sales copy. We fabricate the weapon for you. We deliver ready-to-deploy sales scripts, bifurcated pitch decks, and procurement-defense dossiers that plug directly into your existing sales enablement platform.</p>
          </div>
          <div className="bg-white p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
            <h3 className="text-3xl font-bold font-serif text-navy-900 mb-6 pb-4 border-b border-slate-100">Accelerated Commercial Readiness</h3>
            <p className="text-lg text-slate-700 leading-relaxed">We compress your internal Go-To-Market development cycle into a 45-day intelligence sprint. By systematically eliminating the friction of trial-and-error messaging, we dramatically reduce your time-to-clarity. You achieve absolute commercial readiness faster, ensuring your team is fully equipped to close the moment the enterprise budget window opens.</p>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="bg-slate-100 py-32 px-4 border-b border-slate-200 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 font-bold text-center leading-tight">Assess Your Commercial Readiness</h2>
          <p className="text-xl text-slate-700 leading-relaxed pb-4 font-medium">
            If your enterprise deals are facing unexplained friction, the translation gap is already eroding your margins. Secure a definitive evaluation of your pipeline structure.
          </p>
          <a
            href="#diagnostic-booking"
            className="inline-block bg-navy-900 text-white px-10 py-5 font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl transform hover:-translate-y-0.5"
          >
            Initiate Pipeline Diagnostic
          </a>
        </div>
      </section>

      {/* COMPONENT 7: HOW WE WORK */}
      <section className="bg-navy-900 py-32 px-4 border-b border-navy-800 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-24">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-center leading-tight">The 45-Day Commercial Readiness Sprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="relative">
              <span className="absolute -top-12 -left-6 text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">01</span>
              <div className="relative z-10 space-y-4">
                <strong className="block text-3xl font-bold font-serif border-b border-slate-700 pb-4">The Diagnosis</strong>
                <p className="text-lg text-slate-300 leading-relaxed font-sans mt-6">We run proprietary attention and engagement signal mapping to decode the psychology of the specific gatekeepers blocking your stalled deals.</p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-12 -left-6 text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">02</span>
              <div className="relative z-10 space-y-4">
                <strong className="block text-3xl font-bold font-serif border-b border-slate-700 pb-4">The Blueprint</strong>
                <p className="text-lg text-slate-300 leading-relaxed font-sans mt-6">We build the Bifurcated GTM Matrix, segmenting your monolithic pitch into targeted, risk-mitigating tracks for the CFO, the Quality Engineer, and the Internal Champion.</p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-12 -left-6 text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">03</span>
              <div className="relative z-10 space-y-4">
                <strong className="block text-3xl font-bold font-serif border-b border-slate-700 pb-4">The Asset Injection</strong>
                <p className="text-lg text-slate-300 leading-relaxed font-sans mt-6">We load the exact messaging assets directly into your CRM and enablement platforms. We give your commercial team the weapon; your VP of Sales pulls the trigger.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      <section className="bg-slate-50 py-32 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 font-bold mb-6 leading-tight">Empirical Market Deployments</h2>
            <p className="text-xl text-slate-700 leading-relaxed">Observe how we reverse-engineered stalled enterprise pipelines for deep-tech leaders.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1: Elephantech */}
            <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col p-10 md:p-12">
              <span className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4 inline-block">PIPELINE VELOCITY</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8">Elephantech</h3>
              
              <div className="bg-slate-50 border-l-4 border-navy-900 p-6 mb-8">
                <strong className="block text-navy-900 uppercase tracking-wide text-xs mb-1">The Metric</strong>
                <span className="text-2xl font-serif font-bold text-slate-800">Escaping the Green Premium Trap</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow text-slate-700">
                <li className="flex gap-4">
                  <span className="text-navy-900 font-bold mt-1 text-lg">•</span>
                  <span className="text-lg leading-relaxed">Pipeline stalled due to monolithic pitch focused on &quot;70% Material Reduction&quot;.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-navy-900 font-bold mt-1 text-lg">•</span>
                  <span className="text-lg leading-relaxed">Shifted narrative from &quot;Green Tech&quot; to &quot;Supply Chain Risk&quot;.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-navy-900 font-bold mt-1 text-lg">•</span>
                  <span className="text-lg leading-relaxed">Generated 60% higher engagement from executive decision-makers.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-navy-900 font-bold border-b-2 border-navy-900 pb-1 self-start hover:text-slate-600 hover:border-slate-600 transition-colors uppercase tracking-wide text-sm">
                Read full case study &rarr;
              </a>
            </div>

            {/* Card 2: Climate Hive x EarthGrid */}
            <div className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col p-10 md:p-12">
              <span className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4 inline-block">MARKET VALIDATION FOR PLASMA BORING</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8">Climate Hive x EarthGrid</h3>
              
              <div className="bg-slate-50 border-l-4 border-navy-900 p-6 mb-8">
                <strong className="block text-navy-900 uppercase tracking-wide text-xs mb-1">The Metric</strong>
                <span className="text-2xl font-serif font-bold text-slate-800">Validated in 48 Hours</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow text-slate-700">
                <li className="flex gap-4">
                  <span className="text-navy-900 font-bold mt-1 text-lg">•</span>
                  <span className="text-lg leading-relaxed">Conservative investors viewed technology as a high-risk &quot;Science Project&quot;.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-navy-900 font-bold mt-1 text-lg">•</span>
                  <span className="text-lg leading-relaxed">Initiated direct dialogue with 103 vetted decision-makers via 48-Hour sprint.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-navy-900 font-bold mt-1 text-lg">•</span>
                  <span className="text-lg leading-relaxed">Shifted sales hook from &quot;Boring Cost&quot; to &quot;Permitting Speed&quot;.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-navy-900 font-bold border-b-2 border-navy-900 pb-1 self-start hover:text-slate-600 hover:border-slate-600 transition-colors uppercase tracking-wide text-sm">
                Read full case study &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 9: RISK REVERSAL */}
      <section className="bg-white py-32 px-4 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif text-navy-900 font-bold text-center leading-tight">The Specialized Intelligence Advantage</h2>
          <div className="bg-slate-50 p-10 md:p-16 border border-slate-200 shadow-sm text-center">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              Our engagement model is engineered entirely around precision, speed-to-clarity, and capital efficiency. By operating exclusively as a specialized intelligence asset, we provide you with a highly focused, 45-day architectural sprint. This structure ensures you receive the exact commercial narrative and executable sales assets you need, entirely avoiding the prolonged onboarding, overhead, and operational friction associated with hiring fractional executives or full-service agencies. We deliver the blueprint, arm your existing sales team, and equip you with a permanent, scalable system to unblock future deals.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 10: FINAL CTA */}
      <section id="diagnostic-booking" className="bg-slate-900 py-32 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight">Is your commercial architecture burning your runway?</h2>
          <p className="text-2xl text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
            Let&apos;s examine your current pipeline. In this 30-minute diagnostic, we will map exactly where your 7-figure deals are stalling and determine if a bifurcated commercial strategy is required to achieve absolute commercial readiness.
          </p>
          <div className="bg-slate-800 p-10 md:p-14 border border-slate-700 text-left mx-auto my-12 shadow-2xl">
            <ul className="space-y-8">
              <li className="flex gap-6 items-start pb-6 border-b border-slate-700">
                <span className="text-white font-bold mt-1 text-2xl">✓</span>
                <span className="text-xl md:text-2xl text-slate-100 font-medium font-serif leading-relaxed">Are your deals trapped in <span className="text-white font-semibold">Pilot Purgatory</span>?</span>
              </li>
              <li className="flex gap-6 items-start pb-6 border-b border-slate-700">
                <span className="text-white font-bold mt-1 text-2xl">✓</span>
                <span className="text-xl md:text-2xl text-slate-100 font-medium font-serif leading-relaxed">Is procurement treating your breakthrough technology like a standard commodity?</span>
              </li>
              <li className="flex gap-6 items-start">
                <span className="text-white font-bold mt-1 text-2xl">✓</span>
                <span className="text-xl md:text-2xl text-slate-100 font-medium font-serif leading-relaxed">Are you currently using the same core pitch deck for the engineering team as you are for the financial buyer?</span>
              </li>
            </ul>
          </div>
          <div className="pt-8 text-center">
             <a
               href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-white text-navy-900 px-12 py-6 font-bold text-xl hover:bg-slate-200 transition-colors shadow-2xl w-full md:w-auto transform hover:-translate-y-0.5"
             >
               Initiate Pipeline Diagnostic
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
