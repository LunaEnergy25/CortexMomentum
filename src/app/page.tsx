import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Shield, DollarSign, Users, Eye, Crosshair, Zap, ArrowRight, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      
      {/* COMPONENT 2: PROBLEM RECOGNITION */}
      <section className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">Trapped in &quot;Pilot Purgatory&quot;?</h2>
            <blockquote className="border-l-4 border-slate-500 pl-6 py-6 text-xl text-slate-100 font-serif bg-slate-900/30 rounded-sm">
              &quot;The biggest challenge is does the freaking thing work... The market really wants what we have if we can get it to work.&quot;
              <span className="text-base text-slate-400 font-sans mt-4 block font-medium tracking-wide">— Deep Tech COO</span>
            </blockquote>
          </div>
          <div className="lg:col-span-7 space-y-8 max-w-prose">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              You secured early funding and validated your MVP. But when your commercial team moves to close massive enterprise contracts, momentum dies.
            </p>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Attacking the enterprise market with a monolithic Seed-round pitch fails. Pitching technical superiority or &quot;Green Premiums&quot; doesn&apos;t work—enterprise procurement officers aren&apos;t paid to be educated; they are paid to mitigate corporate risk.
            </p>
            
            {/* Visual break — high contrast key insight card */}
            <div className="bg-slate-800/60 border-l-4 border-cyan-500/80 p-6 md:p-8 rounded-sm my-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <AlertTriangle className="w-20 h-20 text-cyan-400" />
              </div>
              <p className="text-xl text-white leading-relaxed relative z-10">
                To a legacy engineer, massive material reduction is a glaring risk to reliability. Selling innovation to a buyer incentivized to manage risk triggers their <strong className="text-cyan-300 font-semibold">Fear of F*cking Up (FOFU)</strong>.
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              The deal enters a defensive stall, leaving your team waiting on external decisions you cannot control.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 3: EMOTIONAL GAP */}
      <section className="bg-slate-900/40 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">The Cost of Delay</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 max-w-prose">
            <p className="text-xl text-white leading-relaxed font-medium">
              Every month an enterprise deal stalls, your startup bleeds runway. You raised your last round on potential; your next round demands hard proof of commercial revenue.
            </p>

            {/* Visual break — high threat callout */}
            <div className="bg-slate-900 border-l-4 border-slate-500 p-6 rounded-sm my-6 shadow-xl">
              <p className="text-xl text-slate-100 leading-relaxed">
                What happens to your next round if enterprise pilots remain trapped in legal and get pushed to next year&apos;s budget?
              </p>
            </div>

            <blockquote className="border-l-4 border-slate-500 pl-6 py-6 text-xl text-slate-100 font-serif bg-slate-900/30 rounded-sm shadow-lg">
              &quot;We&apos;re running dry, exhausted our self-funding resources. We are in this crunch phase where we don&apos;t have a steady 100k-200k every month.&quot;
              <span className="text-base text-slate-400 font-sans mt-4 block font-medium tracking-wide">— Clean Energy Founder</span>
            </blockquote>
            
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Time is your absolute enemy. Relying on founder-led sales or academic &quot;science project&quot; pitches erodes your capitalization. You cannot afford generalized marketing retainers that yield zero closed-won pilots. Every day spent guessing at messaging is a day subtracted from survival.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 4: THE BIFURCATED ARCHITECTURE */}
      <section id="architecture" className="relative bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">The Bifurcated Architecture</h2>
            <p className="text-xl text-cyan-50 leading-relaxed">
              Stop pitching your technology. Start pitching risk-mitigation. We align your solution directly with the buyer&apos;s internal compliance and financial priorities.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="group bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-sm transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-slate-800/80 flex items-center justify-center shrink-0 transition-colors mt-1 shadow-inner">
                  <Shield className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <span className="text-sm font-medium tracking-wide text-slate-400">Track A</span>
                  <h3 className="text-2xl font-semibold font-serif text-white mb-3 mt-1">The Skeptic</h3>
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed">Visual physics briefs neutralizing reliability fears are injected into the sales playbook, bypassing technical vetoes.</p>
                  <span className="inline-block mt-4 text-sm font-medium tracking-wide text-slate-300 border-t border-slate-800 pt-3 w-full">Target &rarr; Quality Engineer</span>
                </div>
              </div>
            </div>

            <div className="group bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-sm transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-slate-800/80 flex items-center justify-center shrink-0 transition-colors mt-1 shadow-inner">
                  <DollarSign className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <span className="text-sm font-medium tracking-wide text-slate-400">Track B</span>
                  <h3 className="text-2xl font-semibold font-serif text-white mb-3 mt-1">The Blocker</h3>
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed">ROI models and supply-chain volatility hedging sequences are drafted to satisfy procurement mandates.</p>
                  <span className="inline-block mt-4 text-sm font-medium tracking-wide text-slate-300 border-t border-slate-800 pt-3 w-full">Target &rarr; CFO / Procurement</span>
                </div>
              </div>
            </div>

            <div className="group bg-slate-900/80 border border-slate-800 p-6 md:p-8 rounded-sm transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-slate-800/80 flex items-center justify-center shrink-0 transition-colors mt-1 shadow-inner">
                  <Users className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <span className="text-sm font-medium tracking-wide text-slate-400">Track C</span>
                  <h3 className="text-2xl font-semibold font-serif text-white mb-3 mt-1">The Champion</h3>
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed">Internal briefing documents are provided to arm your advocates to win the &quot;Lowest Bidder&quot; argument behind closed doors.</p>
                  <span className="inline-block mt-4 text-sm font-medium tracking-wide text-slate-300 border-t border-slate-800 pt-3 w-full">Target &rarr; Internal Champion</span>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="flex items-start gap-4 pt-8 mt-4 border-t border-slate-800">
              <ArrowRight className="w-6 h-6 text-slate-400 mt-1 shrink-0" />
              <p className="text-xl text-white leading-relaxed font-medium max-w-prose">
                Stop arguing with mid-level engineers and start selling to the CFO. We ensure your champion is armed and your deal is positioned as a financial hedge, ready for approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 5: AUTHORITY */}
      <section className="bg-slate-900/40 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">Intelligence vs. Bloat</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 max-w-prose">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              If your goal is top-of-funnel brand awareness, traditional PR agencies work. But to unblock a $3M utility deal trapped in procurement, you don&apos;t need generalized headcount; you need surgical intelligence.
            </p>

            <div className="bg-slate-900 border-l-4 border-indigo-400/80 pl-6 py-6 rounded-sm shadow-xl">
              <p className="text-xl text-white leading-relaxed font-medium">
                We index engagement signals across the ecosystem to decode the exact psychological triggers of the gatekeepers blocking your deals.
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              You receive the commercial blueprint and executable assets injected directly into your CRM—without operational bloat.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 6: VALUE PROPOSITIONS */}
      <section id="services" className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-sm shadow-lg">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
                <Eye className="w-6 h-6 text-slate-300" />
                <h3 className="text-2xl font-semibold font-serif text-white">Live Pipeline Intelligence</h3>
              </div>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">We map the psychological and financial triggers of the specific enterprise buyers currently stalling your pipeline, protecting your CAC payback period.</p>
            </div>
            <div className="group bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-sm shadow-lg">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
                <Crosshair className="w-6 h-6 text-slate-300" />
                <h3 className="text-2xl font-semibold font-serif text-white">Targeted Asset Injection</h3>
              </div>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">Lean teams lack bandwidth. We fabricate the weapon for you: ready-to-deploy sales scripts, pitch decks, and procurement dossiers injected directly into your CRM.</p>
            </div>
          </div>
          {/* Centered bottom card */}
          <div className="flex justify-center mt-6">
            <div className="group bg-slate-900 border-t-2 border-slate-700 p-8 md:p-10 rounded-sm shadow-xl w-full md:max-w-3xl">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
                <Zap className="w-6 h-6 text-slate-300" />
                <h3 className="text-2xl font-semibold font-serif text-white">Accelerated Readiness</h3>
              </div>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">We compress Go-To-Market development into a 45-day sprint. We eliminate trial-and-error messaging, ensuring your team is fully equipped to close when budget windows open.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="relative bg-slate-900/40 py-20 md:py-28 px-6 border-y border-slate-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-900/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white font-semibold text-center leading-tight tracking-tight">Assess Your Readiness</h2>
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium">
            The translation gap is eroding your margins. Secure a definitive evaluation of your pipeline structure.
          </p>
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-900 px-10 py-5 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-1 text-lg mt-4"
          >
            Initiate Pipeline Diagnostic
          </a>
        </div>
      </section>

      {/* COMPONENT 7: HOW WE WORK */}
      <section className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-center leading-tight tracking-tight">The 45-Day Sprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            <div className="relative p-6 border-t border-slate-800 md:border-t-0 md:border-l pt-10 md:pl-10">
              <span className="absolute -top-4 -left-2 md:-top-12 md:-left-6 text-7xl md:text-8xl font-sans font-black text-white/5 tracking-tighter select-none z-0">01</span>
              <div className="relative z-10 space-y-6">
                <strong className="block text-2xl md:text-3xl font-semibold font-serif pb-4">The Diagnosis</strong>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-sans">We map specific engagement signals to decode the psychology of the gatekeepers blocking your deals.</p>
              </div>
            </div>
            <div className="relative p-6 border-t border-slate-800 md:border-t-0 md:border-l pt-10 md:pl-10">
              <span className="absolute -top-4 -left-2 md:-top-12 md:-left-6 text-7xl md:text-8xl font-sans font-black text-white/5 tracking-tighter select-none z-0">02</span>
              <div className="relative z-10 space-y-6">
                <strong className="block text-2xl md:text-3xl font-semibold font-serif pb-4">The Blueprint</strong>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-sans">We construct a Bifurcated GTM Matrix, segmenting your monolithic pitch into targeted, risk-mitigating tracks.</p>
              </div>
            </div>
            <div className="relative p-6 border-t border-slate-800 md:border-t-0 md:border-l pt-10 md:pl-10">
              <span className="absolute -top-4 -left-2 md:-top-12 md:-left-6 text-7xl md:text-8xl font-sans font-black text-white/5 tracking-tighter select-none z-0">03</span>
              <div className="relative z-10 space-y-6">
                <strong className="block text-2xl md:text-3xl font-semibold font-serif pb-4">The Injection</strong>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-sans">We load messaging assets directly into your CRM. You get the weapon; your sales team pulls the trigger.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW */}
      <section className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto align-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-semibold mb-6 leading-tight tracking-tight">Empirical Market Deployments</h2>
            <p className="text-xl text-slate-200 leading-relaxed">Observe how we reverse-engineered stalled enterprise pipelines for deep-tech leaders.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-slate-900 border border-slate-800 flex flex-col p-8 md:p-12 rounded-sm shadow-xl">
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-3 block">Pipeline Velocity</span>
              <h3 className="text-3xl font-serif font-semibold text-white mb-8">Elephantech</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-slate-500 p-6 mb-8 rounded-sm shadow-inner">
                <span className="block text-sm font-medium tracking-wide text-slate-400 mb-3">Impact at a Glance</span>
                <span className="block text-5xl md:text-6xl font-serif font-semibold text-white leading-none tracking-tighter">60%</span>
                <span className="block text-lg text-slate-300 mt-3">Higher executive engagement</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow text-white">
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">—</span>
                  <span className="text-lg md:text-xl leading-relaxed">Shifted narrative from &quot;Green Tech&quot; to &quot;Supply Chain Risk&quot;.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">—</span>
                  <span className="text-lg md:text-xl leading-relaxed">Bypassed technical vetoes masking as &quot;70% Material Reduction&quot;.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-1 self-start hover:border-white transition-colors uppercase tracking-widest text-sm mt-auto">
                Read full case study &rarr;
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 flex flex-col p-8 md:p-12 rounded-sm shadow-xl">
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-3 block">Market Validation</span>
              <h3 className="text-3xl font-serif font-semibold text-white mb-8">Climate Hive x EarthGrid</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-slate-500 p-6 mb-8 rounded-sm shadow-inner">
                <span className="block text-sm font-medium tracking-wide text-slate-400 mb-3">Impact at a Glance</span>
                <span className="block text-5xl md:text-6xl font-serif font-semibold text-white leading-none tracking-tighter">48 Hrs</span>
                <span className="block text-lg text-slate-300 mt-3">To reach 103 decision-makers</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow text-white">
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">—</span>
                  <span className="text-lg md:text-xl leading-relaxed">Shifted sales hook from &quot;Boring Cost&quot; to &quot;Permitting Speed&quot;.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">—</span>
                  <span className="text-lg md:text-xl leading-relaxed">Reframed &quot;Science Project&quot; into rapid-deployment infrastructure.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-1 self-start hover:border-white transition-colors uppercase tracking-widest text-sm mt-auto">
                Read full case study &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 9: RISK REVERSAL */}
      <section className="bg-slate-900/40 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">The Specialized Advantage</h2>
          </div>
          <div className="lg:col-span-7 max-w-prose">
            <div className="bg-slate-950 p-8 md:p-12 border border-slate-800 rounded-sm shadow-xl space-y-8">
              <p className="text-xl text-slate-100 leading-relaxed font-medium">
                Our engagement model is engineered for precision, speed-to-clarity, and capital efficiency. We provide a highly focused, 45-day architectural sprint.
              </p>
              <p className="text-xl text-slate-200 leading-relaxed">
                You receive the exact commercial narrative and executable sales assets you need, circumventing the prolonged onboarding, overhead, and friction of fractional executives or full-service agencies.
              </p>
              <p className="text-xl text-slate-100 leading-relaxed font-medium border-t border-slate-800 pt-6">
                We deliver the blueprint, arm your sales team, and equip you with a permanent system to unblock future deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 10: FINAL CTA */}
      <section id="diagnostic-booking" className="relative bg-slate-950 py-24 md:py-32 px-6 text-white overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-slate-800/20 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold leading-tight tracking-tight">Is your architecture burning runway?</h2>
          <p className="text-xl lg:text-2xl text-slate-100 leading-relaxed font-sans max-w-3xl mx-auto">
            In this 30-minute diagnostic, we will map where your 7-figure deals are stalling to determine if a bifurcated commercial strategy is required.
          </p>
          <div className="bg-slate-900/80 p-8 md:p-12 border border-slate-800 text-left mx-auto rounded-sm shadow-xl max-w-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-slate-600"></div>
            <ul className="space-y-6 pl-4">
              <li className="flex gap-5 items-start pb-6 border-b border-slate-800/80">
                <span className="text-slate-400 font-bold mt-1 text-xl">✓</span>
                <span className="text-xl md:text-2xl text-white font-semibold font-serif leading-relaxed">Are your deals trapped in Pilot Purgatory?</span>
              </li>
              <li className="flex gap-5 items-start pb-6 border-b border-slate-800/80">
                <span className="text-slate-400 font-bold mt-1 text-xl">✓</span>
                <span className="text-xl md:text-2xl text-white font-semibold font-serif leading-relaxed">Is procurement treating your technology like a standard commodity?</span>
              </li>
              <li className="flex gap-5 items-start">
                <span className="text-slate-400 font-bold mt-1 text-xl">✓</span>
                <span className="text-xl md:text-2xl text-white font-semibold font-serif leading-relaxed">Are you using the same pitch deck for engineers as the financial buyer?</span>
              </li>
            </ul>
          </div>
          <div className="pt-8">
             <a
               href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-white text-slate-950 px-12 py-6 font-semibold text-xl tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl w-full md:w-auto transform hover:-translate-y-1"
             >
               Initiate Pipeline Diagnostic
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
