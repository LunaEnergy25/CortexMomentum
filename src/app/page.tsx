import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Shield, DollarSign, Users, Eye, Crosshair, Zap, ArrowRight, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      
      {/* COMPONENT 2: PROBLEM RECOGNITION */}
      <section className="bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 pr-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight tracking-tight">Trapped in &quot;Pilot Purgatory&quot;?</h2>
            <blockquote className="border-l-4 border-slate-400 pl-8 py-8 italic text-2xl text-white font-serif bg-slate-900/40 rounded-sm">
              &quot;The biggest challenge is does the freaking thing work... The market really wants what we have if we can get it to work.&quot;
              <span className="text-base text-slate-300 font-sans not-italic mt-6 block font-bold uppercase tracking-widest">— Deep Tech COO</span>
            </blockquote>
          </div>
          <div className="lg:col-span-7 space-y-10 max-w-prose">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              You secured early funding and validated your MVP. But when your commercial team moves to close massive enterprise contracts, momentum dies.
            </p>
            <p className="text-xl text-slate-100 leading-relaxed">
              Attacking the enterprise market with a monolithic Seed-round pitch fails. Pitching technical superiority or &quot;Green Premiums&quot; doesn&apos;t work—enterprise procurement officers aren&apos;t paid to be educated; they are paid to mitigate corporate risk.
            </p>
            
            {/* Visual break — high contrast key insight card */}
            <div className="bg-slate-800/80 border-l-4 border-cyan-500 p-8 md:p-10 rounded-sm my-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle className="w-24 h-24 text-cyan-400" />
              </div>
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold relative z-10">
                To a legacy engineer, massive material reduction is a glaring risk to reliability. Selling innovation to a buyer incentivized to manage risk triggers their <span className="text-cyan-400">Fear of F*cking Up (FOFU)</span>.
              </p>
            </div>
            
            <p className="text-xl text-slate-100 leading-relaxed">
              The deal enters a defensive stall, leaving your team waiting on external decisions you cannot control.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 3: EMOTIONAL GAP */}
      <section className="bg-slate-900/40 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight tracking-tight">The Cost of Delay</h2>
          </div>
          <div className="lg:col-span-7 space-y-10 max-w-prose">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              Every month an enterprise deal stalls, your startup bleeds runway. You raised your last round on potential; your next round demands hard proof of commercial revenue.
            </p>

            {/* Visual break — high threat callout */}
            <div className="bg-red-950/40 border-l-8 border-red-600 p-8 rounded-sm my-8 shadow-2xl">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold">
                What happens to your next round if enterprise pilots remain trapped in legal and get pushed to next year&apos;s budget?
              </p>
            </div>

            <blockquote className="border-l-4 border-slate-400 pl-8 py-8 italic text-2xl text-white font-serif bg-slate-950/50 rounded-sm shadow-xl">
              &quot;We&apos;re running dry, exhausted our self-funding resources. We are in this crunch phase where we don&apos;t have a steady 100k-200k every month.&quot;
              <span className="text-base text-slate-300 font-sans not-italic mt-6 block font-bold uppercase tracking-widest">— Clean Energy Founder</span>
            </blockquote>
            
            <p className="text-xl text-slate-100 leading-relaxed">
              Time is your absolute enemy. Relying on founder-led sales or academic &quot;science project&quot; pitches erodes your capitalization. You cannot afford generalized marketing retainers that yield zero closed-won pilots. Every day spent guessing at messaging is a day subtracted from survival.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 4: THE BIFURCATED ARCHITECTURE */}
      <section id="architecture" className="relative bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 pr-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight tracking-tight">The Bifurcated Architecture</h2>
            <p className="text-xl md:text-2xl text-cyan-50 leading-relaxed font-medium">
              Stop pitching your technology. Start pitching risk-mitigation. We align your solution directly with the buyer&apos;s internal compliance and financial priorities.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="group bg-slate-900 border-2 border-slate-800 p-8 md:p-10 rounded-sm hover:border-cyan-600/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-900/20">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-950 transition-colors mt-1 shadow-inner">
                  <Shield className="w-7 h-7 text-white group-hover:text-cyan-400" />
                </div>
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-cyan-500 transition-colors">Track A</span>
                  <h3 className="text-3xl font-bold font-serif text-white mb-4 mt-1">The Skeptic</h3>
                  <p className="text-xl text-slate-100 leading-relaxed">Visual physics briefs neutralizing reliability fears are injected into the sales playbook, bypassing technical vetoes.</p>
                  <span className="inline-block mt-6 text-sm font-bold uppercase tracking-widest text-white border-t border-slate-700 pt-4 w-full">Target → Quality Engineer</span>
                </div>
              </div>
            </div>

            <div className="group bg-slate-900 border-2 border-slate-800 p-8 md:p-10 rounded-sm hover:border-cyan-600/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-900/20">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-950 transition-colors mt-1 shadow-inner">
                  <DollarSign className="w-7 h-7 text-white group-hover:text-cyan-400" />
                </div>
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-cyan-500 transition-colors">Track B</span>
                  <h3 className="text-3xl font-bold font-serif text-white mb-4 mt-1">The Blocker</h3>
                  <p className="text-xl text-slate-100 leading-relaxed">ROI models and supply-chain volatility hedging sequences are drafted to satisfy procurement mandates.</p>
                  <span className="inline-block mt-6 text-sm font-bold uppercase tracking-widest text-white border-t border-slate-700 pt-4 w-full">Target → CFO / Procurement</span>
                </div>
              </div>
            </div>

            <div className="group bg-slate-900 border-2 border-slate-800 p-8 md:p-10 rounded-sm hover:border-cyan-600/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-cyan-900/20">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-cyan-950 transition-colors mt-1 shadow-inner">
                  <Users className="w-7 h-7 text-white group-hover:text-cyan-400" />
                </div>
                <div>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-cyan-500 transition-colors">Track C</span>
                  <h3 className="text-3xl font-bold font-serif text-white mb-4 mt-1">The Champion</h3>
                  <p className="text-xl text-slate-100 leading-relaxed">Internal briefing documents are provided to arm your advocates to win the &quot;Lowest Bidder&quot; argument behind closed doors.</p>
                  <span className="inline-block mt-6 text-sm font-bold uppercase tracking-widest text-white border-t border-slate-700 pt-4 w-full">Target → Internal Champion</span>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="flex items-start gap-5 pt-10 mt-6 border-t border-slate-800">
              <ArrowRight className="w-8 h-8 text-cyan-400 mt-1 shrink-0" />
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold max-w-prose">
                Stop arguing with mid-level engineers and start selling to the CFO. We ensure your champion is armed and your deal is positioned as a financial hedge, ready for approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 5: AUTHORITY */}
      <section className="bg-slate-900/40 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight tracking-tight">Intelligence vs. Bloat</h2>
          </div>
          <div className="lg:col-span-7 space-y-10 max-w-prose">
            <p className="text-xl text-slate-100 leading-relaxed">
              If your goal is top-of-funnel brand awareness, traditional PR agencies work. But to unblock a $3M utility deal trapped in procurement, you don&apos;t need generalized headcount; you need surgical intelligence.
            </p>

            <div className="bg-slate-950 border-l-8 border-indigo-500 pl-8 py-8 rounded-sm shadow-2xl">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold">
                We index engagement signals across the ecosystem to decode the exact psychological triggers of the gatekeepers blocking your deals.
              </p>
            </div>

            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              You receive the commercial blueprint and executable assets injected directly into your CRM—without operational bloat.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 6: VALUE PROPOSITIONS */}
      <section id="services" className="bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="group bg-slate-900 p-10 md:p-12 border border-slate-800 rounded-sm hover:border-slate-600 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="flex items-center gap-5 mb-8 pb-6 border-b border-slate-700">
                <Eye className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold font-serif text-white">Live Pipeline Intelligence</h3>
              </div>
              <p className="text-xl text-slate-100 leading-relaxed">We map the psychological and financial triggers of the specific enterprise buyers currently stalling your pipeline, protecting your CAC payback period.</p>
            </div>
            <div className="group bg-slate-900 p-10 md:p-12 border border-slate-800 rounded-sm hover:border-slate-600 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <div className="flex items-center gap-5 mb-8 pb-6 border-b border-slate-700">
                <Crosshair className="w-8 h-8 text-white" />
                <h3 className="text-3xl font-bold font-serif text-white">Targeted Asset Injection</h3>
              </div>
              <p className="text-xl text-slate-100 leading-relaxed">Lean teams lack bandwidth. We fabricate the weapon for you: ready-to-deploy sales scripts, pitch decks, and procurement dossiers injected directly into your CRM.</p>
            </div>
          </div>
          {/* Centered bottom card */}
          <div className="flex justify-center mt-8">
            <div className="group bg-slate-800/80 p-10 md:p-12 border-2 border-indigo-900/50 rounded-sm hover:border-indigo-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] w-full md:max-w-3xl">
              <div className="flex items-center gap-5 mb-8 pb-6 border-b border-slate-700">
                <Zap className="w-8 h-8 text-indigo-400" />
                <h3 className="text-3xl font-bold font-serif text-white">Accelerated Readiness</h3>
              </div>
              <p className="text-xl text-slate-100 leading-relaxed">We compress Go-To-Market development into a 45-day sprint. We eliminate trial-and-error messaging, ensuring your team is fully equipped to close when budget windows open.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="relative bg-slate-900/40 py-24 md:py-32 px-6 border-y border-slate-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold text-center leading-tight tracking-tight">Assess Your Readiness</h2>
          <p className="text-2xl text-white leading-relaxed font-bold">
            The translation gap is eroding your margins. Secure a definitive evaluation of your pipeline structure.
          </p>
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-14 py-6 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-2xl transform hover:-translate-y-1 text-xl mt-6"
          >
            Initiate Pipeline Diagnostic
          </a>
        </div>
      </section>

      {/* COMPONENT 7: HOW WE WORK */}
      <section className="bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-center leading-tight tracking-tight">The 45-Day Sprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <div className="relative p-8 border-t border-slate-800 md:border-t-0 md:border-l pt-12 md:pl-12">
              <span className="absolute -top-4 -left-2 md:-top-16 md:-left-8 text-8xl md:text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">01</span>
              <div className="relative z-10 space-y-8">
                <strong className="block text-3xl md:text-4xl font-bold font-serif pb-4">The Diagnosis</strong>
                <p className="text-xl text-slate-100 leading-relaxed font-sans font-medium">We map specific engagement signals to decode the psychology of the gatekeepers blocking your deals.</p>
              </div>
            </div>
            <div className="relative p-8 border-t border-slate-800 md:border-t-0 md:border-l pt-12 md:pl-12">
              <span className="absolute -top-4 -left-2 md:-top-16 md:-left-8 text-8xl md:text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">02</span>
              <div className="relative z-10 space-y-8">
                <strong className="block text-3xl md:text-4xl font-bold font-serif pb-4">The Blueprint</strong>
                <p className="text-xl text-slate-100 leading-relaxed font-sans font-medium">We construct a Bifurcated GTM Matrix, segmenting your monolithic pitch into targeted, risk-mitigating tracks.</p>
              </div>
            </div>
            <div className="relative p-8 border-t border-slate-800 md:border-t-0 md:border-l pt-12 md:pl-12">
              <span className="absolute -top-4 -left-2 md:-top-16 md:-left-8 text-8xl md:text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">03</span>
              <div className="relative z-10 space-y-8">
                <strong className="block text-3xl md:text-4xl font-bold font-serif pb-4">The Injection</strong>
                <p className="text-xl text-slate-100 leading-relaxed font-sans font-medium">We load messaging assets directly into your CRM. You get the weapon; your sales team pulls the trigger.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      <section className="bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-3xl mx-auto align-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-bold mb-8 leading-tight tracking-tight">Empirical Market Deployments</h2>
            <p className="text-xl md:text-2xl text-slate-100 leading-relaxed">Observe how we reverse-engineered stalled enterprise pipelines for deep-tech leaders.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
            <div className="bg-slate-900 border border-slate-800 hover:border-cyan-900/50 transition-all duration-500 flex flex-col p-10 md:p-14 rounded-sm shadow-2xl">
              <span className="text-base font-bold tracking-widest uppercase text-cyan-400 mb-4">PIPELINE VELOCITY</span>
              <h3 className="text-4xl font-serif font-bold text-white mb-10">Elephantech</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-8 border-l-cyan-500 p-8 mb-10 rounded-sm shadow-inner">
                <span className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Impact at a Glance</span>
                <span className="block text-6xl md:text-7xl font-serif font-bold text-white leading-none tracking-tighter">60%</span>
                <span className="block text-xl text-slate-100 mt-4 font-bold">Higher executive engagement</span>
              </div>
              
              <ul className="space-y-6 mb-10 flex-grow text-white">
                <li className="flex gap-5 items-start">
                  <span className="text-cyan-500 font-bold mt-1 text-xl">—</span>
                  <span className="text-xl leading-relaxed font-medium">Shifted narrative from &quot;Green Tech&quot; to &quot;Supply Chain Risk&quot;.</span>
                </li>
                <li className="flex gap-5 items-start">
                  <span className="text-cyan-500 font-bold mt-1 text-xl">—</span>
                  <span className="text-xl leading-relaxed font-medium">Bypassed technical vetoes masking as &quot;70% Material Reduction&quot;.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-2 self-start hover:border-white transition-colors uppercase tracking-widest text-base mt-auto">
                Read full case study &rarr;
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 hover:border-indigo-900/50 transition-all duration-500 flex flex-col p-10 md:p-14 rounded-sm shadow-2xl">
              <span className="text-base font-bold tracking-widest uppercase text-indigo-400 mb-4">MARKET VALIDATION</span>
              <h3 className="text-4xl font-serif font-bold text-white mb-10">Climate Hive x EarthGrid</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-8 border-l-indigo-500 p-8 mb-10 rounded-sm shadow-inner">
                <span className="block text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Impact at a Glance</span>
                <span className="block text-6xl md:text-7xl font-serif font-bold text-white leading-none tracking-tighter">48 Hrs</span>
                <span className="block text-xl text-slate-100 mt-4 font-bold">To reach 103 decision-makers</span>
              </div>
              
              <ul className="space-y-6 mb-10 flex-grow text-white">
                <li className="flex gap-5 items-start">
                  <span className="text-indigo-500 font-bold mt-1 text-xl">—</span>
                  <span className="text-xl leading-relaxed font-medium">Shifted sales hook from &quot;Boring Cost&quot; to &quot;Permitting Speed&quot;.</span>
                </li>
                <li className="flex gap-5 items-start">
                  <span className="text-indigo-500 font-bold mt-1 text-xl">—</span>
                  <span className="text-xl leading-relaxed font-medium">Reframed &quot;Science Project&quot; into rapid-deployment infrastructure.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-2 self-start hover:border-white transition-colors uppercase tracking-widest text-base mt-auto">
                Read full case study &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 9: RISK REVERSAL */}
      <section className="bg-slate-900/40 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight tracking-tight">The Specialized Advantage</h2>
          </div>
          <div className="lg:col-span-7 max-w-prose">
            <div className="bg-slate-950 p-10 md:p-14 border border-slate-800 rounded-sm shadow-2xl space-y-10">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold">
                Our engagement model is engineered for precision, speed-to-clarity, and capital efficiency. We provide a highly focused, 45-day architectural sprint.
              </p>
              <p className="text-xl text-slate-100 leading-relaxed font-medium">
                You receive the exact commercial narrative and executable sales assets you need, circumventing the prolonged onboarding, overhead, and friction of fractional executives or full-service agencies.
              </p>
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold border-t border-slate-800 pt-8">
                We deliver the blueprint, arm your sales team, and equip you with a permanent system to unblock future deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 10: FINAL CTA */}
      <section id="diagnostic-booking" className="relative bg-slate-950 py-24 md:py-32 px-6 text-white overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-14">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight tracking-tight">Is your architecture burning runway?</h2>
          <p className="text-2xl lg:text-3xl text-white leading-relaxed font-sans max-w-4xl mx-auto font-medium">
            In this 30-minute diagnostic, we will map where your 7-figure deals are stalling to determine if a bifurcated commercial strategy is required.
          </p>
          <div className="bg-slate-900 p-10 md:p-14 border border-slate-800 text-left mx-auto rounded-sm shadow-2xl max-w-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
            <ul className="space-y-8 pl-4">
              <li className="flex gap-6 items-start pb-8 border-b border-slate-800">
                <span className="text-cyan-400 font-bold mt-1 text-2xl">✓</span>
                <span className="text-2xl text-white font-bold font-serif leading-relaxed">Are your deals trapped in <span className="text-cyan-400">Pilot Purgatory</span>?</span>
              </li>
              <li className="flex gap-6 items-start pb-8 border-b border-slate-800">
                <span className="text-cyan-400 font-bold mt-1 text-2xl">✓</span>
                <span className="text-2xl text-white font-bold font-serif leading-relaxed">Is procurement treating your technology like a standard commodity?</span>
              </li>
              <li className="flex gap-6 items-start">
                <span className="text-cyan-400 font-bold mt-1 text-2xl">✓</span>
                <span className="text-2xl text-white font-bold font-serif leading-relaxed">Are you using the same pitch deck for engineers as the financial buyer?</span>
              </li>
            </ul>
          </div>
          <div className="pt-10">
             <a
               href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-white text-slate-950 px-14 py-8 font-bold text-2xl tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-2xl w-full md:w-auto transform hover:-translate-y-1"
             >
               Initiate Pipeline Diagnostic
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
