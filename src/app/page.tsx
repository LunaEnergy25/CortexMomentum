import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Shield, DollarSign, Users, Eye, Crosshair, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-300">
      <Navbar />
      <Hero />
      
      {/* COMPONENT 2: PROBLEM RECOGNITION — Asymmetric Editorial */}
      <section className="bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky heading + quote */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight tracking-tight">Are your 7-figure deals trapped in &quot;Pilot Purgatory&quot;?</h2>
            <blockquote className="border-l-2 border-white/20 pl-6 py-6 italic text-lg text-slate-300 font-serif bg-slate-900/30 rounded-sm">
              &quot;I think the biggest challenge is does the freaking thing work... The market really wants what we have if we can get it to work.&quot;
              <span className="text-sm text-slate-500 font-sans not-italic mt-4 block font-semibold">— Deep Tech COO</span>
            </blockquote>
          </div>

          {/* Right: Scrolling body text */}
          <div className="lg:col-span-8 space-y-6 max-w-prose">
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              You have secured your early funding. Your minimum viable product is validated. But when your lean commercial team moves to close massive enterprise contracts, the momentum dies.
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              You are attacking the enterprise market using a monolithic pitch based on your Seed-round deck. You are pitching technical superiority, 70% material reductions, and virtue-based &quot;Green Premiums.&quot; But enterprise procurement officers are not paid to be educated by startups; they are paid to mitigate corporate risk.
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              To a legacy Quality Engineer or Utility Operator, a massive material reduction is not an efficiency gain—it is a glaring risk to system reliability. When your lean sales team sells innovation and virtue to a buyer who is financially incentivized to manage risk, you trigger their <span className="font-semibold text-white">Fear of F*cking Up (FOFU)</span>. The deal enters a defensive stall in committee review, and your team is left throwing stones into the sea, waiting on external decisions you cannot control.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 3: EMOTIONAL GAP — Asymmetric Editorial */}
      <section className="bg-slate-900/50 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight tracking-tight">The &quot;Series B Squeeze&quot; and the Cost of Delay</h2>
          </div>

          {/* Right: Scrolling content */}
          <div className="lg:col-span-8 space-y-8 max-w-prose">
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Every month an enterprise deal sits in committee review, your startup bleeds precious runway. You raised your last round on the promise of your technology&apos;s potential; you must raise your next round on the hard proof of your commercial revenue and pipeline velocity. What happens to your next funding round if these enterprise pilots remain trapped in legal and get pushed to next year&apos;s fiscal budget?
            </p>
            <blockquote className="border-l-2 border-white/20 pl-6 py-6 italic text-lg text-slate-200 font-serif bg-slate-950/50 rounded-sm">
              &quot;We&apos;re running dry... exhausted our self-funding resources. We are in this crunch phase between we don&apos;t have yet steady 100k 200k every month.&quot;
              <span className="text-sm text-slate-500 font-sans not-italic mt-4 block font-semibold">— Clean Energy Founder</span>
            </blockquote>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Time is your absolute enemy. The longer you rely on manual, founder-led sales motions and academic &quot;science project&quot; pitches, the faster your <span className="font-semibold text-white">capitalization</span> erodes. You cannot afford to spend capital on generalized marketing retainers that generate LinkedIn impressions in an echo chamber, but yield zero closed-won utility pilots. Every day your team spends guessing at the right messaging is a day subtracted from your survival.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 4: THE BIFURCATED ARCHITECTURE — Asymmetric + Visual Cards */}
      <section id="architecture" className="relative bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-slate-700/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Sticky heading + intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight tracking-tight">The Bifurcated Commercial Architecture</h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              We stop pitching the base technology and start pitching risk-mitigation. By decoupling your engineering truth from your commercial narrative, we align your solution directly with the buyer&apos;s internal compliance mandates and financial priorities.
            </p>
          </div>

          {/* Right: 3-Track diagram cards + conclusion */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4">
              <div className="group bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-sm hover:border-slate-600 transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-700 transition-colors mt-1">
                    <Shield className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Track A</span>
                    <h3 className="text-xl font-bold font-serif text-white mb-2">The Skeptic</h3>
                    <p className="text-base text-slate-300 leading-relaxed">Visual physics briefs neutralizing reliability fears are injected into your Account Executive&apos;s playbook, effectively bypassing technical vetoes.</p>
                    <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-t border-slate-800 pt-3">Target → Quality Engineer</span>
                  </div>
                </div>
              </div>

              <div className="group bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-sm hover:border-slate-600 transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-700 transition-colors mt-1">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Track B</span>
                    <h3 className="text-xl font-bold font-serif text-white mb-2">The Blocker</h3>
                    <p className="text-base text-slate-300 leading-relaxed">ROI models and supply-chain volatility hedging sequences are drafted for your VP of Sales to satisfy procurement mandates.</p>
                    <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-t border-slate-800 pt-3">Target → CFO / Procurement</span>
                  </div>
                </div>
              </div>

              <div className="group bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-sm hover:border-slate-600 transition-all duration-500">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-sm bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-700 transition-colors mt-1">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Track C</span>
                    <h3 className="text-xl font-bold font-serif text-white mb-2">The Champion</h3>
                    <p className="text-base text-slate-300 leading-relaxed">Internal briefing documents are provided to arm your advocates to win the &quot;Lowest Bidder&quot; argument behind closed doors.</p>
                    <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 border-t border-slate-800 pt-3">Target → Internal Champion</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-prose mt-8">
              We establish absolute commercial readiness by arming your team to speak to every stakeholder simultaneously. You stop arguing with mid-level engineers and start selling directly to the CFO. While we cannot alter a utility&apos;s fixed budget calendar, we ensure that when their budget window officially opens, your champion is completely armed. Your deal is positioned as a financial hedge, ready for approval rather than months of defensive scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 5: AUTHORITY — Asymmetric */}
      <section className="bg-slate-900/50 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight tracking-tight">Strategic Intelligence vs. Agency Bloat</h2>
          </div>
          <div className="lg:col-span-8 space-y-6 max-w-prose">
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              If your goal is to write blog posts and generate top-of-funnel brand awareness, traditional PR and marketing agencies are built for that. But if your goal is to achieve the GTM clarity required to unblock a $3M utility deal currently stalled in procurement, you do not need generalized headcount; you need surgical intelligence.
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              We map the market architecture. We index attention and engagement signals across the digital ecosystem to decode the exact psychological triggers of the gatekeepers blocking your deals. We deliver the diagnosis, fabricate the bifurcated assets, and inject them directly into your CRM. You receive the commercial blueprint and the executable assets without the operational bloat.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT 6: VALUE PROPOSITIONS */}
      <section id="services" className="bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="group bg-slate-900 p-8 md:p-10 border border-slate-800 rounded-sm hover:border-slate-600 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-700">
                <Eye className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-bold font-serif text-white">Live Pipeline Intelligence</h3>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">We do not operate in the abstract or rely on generic, year-old market research. You give us the specific massive enterprise deals currently stalled in your pipeline. We map the exact psychological and financial triggers of those specific buyers to build your narrative and protect your CAC payback period.</p>
            </div>
            <div className="group bg-slate-900 p-8 md:p-10 border border-slate-800 rounded-sm hover:border-slate-600 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-700">
                <Crosshair className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-bold font-serif text-white">Targeted Asset Injection</h3>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">Lean deep-tech teams do not have the bandwidth to translate abstract strategy into high-converting sales copy. We fabricate the weapon for you. We deliver ready-to-deploy sales scripts, bifurcated pitch decks, and procurement-defense dossiers that plug directly into your existing sales enablement platform.</p>
            </div>
            <div className="group bg-slate-900 p-8 md:p-10 border border-slate-800 rounded-sm hover:border-slate-600 transition-all duration-500 md:col-span-2">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-700">
                <Zap className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-bold font-serif text-white">Accelerated Commercial Readiness</h3>
              </div>
              <p className="text-base text-slate-300 leading-relaxed max-w-prose">We compress your internal Go-To-Market development cycle into a 45-day intelligence sprint. By systematically eliminating the friction of trial-and-error messaging, we dramatically reduce your time-to-clarity. You achieve absolute commercial readiness faster, ensuring your team is fully equipped to close the moment the enterprise budget window opens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="relative bg-slate-900/50 py-24 md:py-32 px-6 border-b border-slate-800 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-slate-600/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-bold text-center leading-tight tracking-tight">Assess Your Commercial Readiness</h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            If your enterprise deals are facing unexplained friction, the translation gap is already eroding your margins. Secure a definitive evaluation of your pipeline structure.
          </p>
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-950 px-8 py-4 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            Initiate Pipeline Diagnostic
          </a>
        </div>
      </section>

      {/* COMPONENT 7: HOW WE WORK */}
      <section className="bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center leading-tight tracking-tight">The 45-Day Commercial Readiness Sprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="relative">
              <span className="absolute -top-10 -left-4 text-8xl md:text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">01</span>
              <div className="relative z-10 space-y-4">
                <strong className="block text-2xl font-bold font-serif border-b border-slate-700 pb-4">The Diagnosis</strong>
                <p className="text-base text-slate-300 leading-relaxed font-sans mt-4">We run proprietary attention and engagement signal mapping to decode the psychology of the specific gatekeepers blocking your stalled deals.</p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-10 -left-4 text-8xl md:text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">02</span>
              <div className="relative z-10 space-y-4">
                <strong className="block text-2xl font-bold font-serif border-b border-slate-700 pb-4">The Blueprint</strong>
                <p className="text-base text-slate-300 leading-relaxed font-sans mt-4">We build the Bifurcated GTM Matrix, segmenting your monolithic pitch into targeted, risk-mitigating tracks for the CFO, the Quality Engineer, and the Internal Champion.</p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -top-10 -left-4 text-8xl md:text-9xl font-sans font-black text-white/5 tracking-tighter select-none z-0">03</span>
              <div className="relative z-10 space-y-4">
                <strong className="block text-2xl font-bold font-serif border-b border-slate-700 pb-4">The Asset Injection</strong>
                <p className="text-base text-slate-300 leading-relaxed font-sans mt-4">We load the exact messaging assets directly into your CRM and enablement platforms. We give your commercial team the weapon; your VP of Sales pulls the trigger.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY PREVIEW — Metric Callouts */}
      <section className="bg-slate-950 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold mb-6 leading-tight tracking-tight">Empirical Market Deployments</h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">Observe how we reverse-engineered stalled enterprise pipelines for deep-tech leaders.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Elephantech */}
            <div className="bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-500 flex flex-col p-8 md:p-10 rounded-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">PIPELINE VELOCITY</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Elephantech</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-2 border-l-white p-6 mb-8 rounded-sm">
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Impact at a Glance</span>
                <span className="block text-4xl md:text-5xl font-serif font-bold text-white leading-none">60%</span>
                <span className="block text-sm text-slate-400 mt-2">Higher executive engagement</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow text-slate-300">
                <li className="flex gap-3 items-start">
                  <span className="text-white/40 font-bold mt-0.5 text-sm">—</span>
                  <span className="text-base leading-relaxed">Pipeline stalled due to monolithic pitch focused on &quot;70% Material Reduction&quot;.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-white/40 font-bold mt-0.5 text-sm">—</span>
                  <span className="text-base leading-relaxed">Shifted narrative from &quot;Green Tech&quot; to &quot;Supply Chain Risk&quot;.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-white/40 font-bold mt-0.5 text-sm">—</span>
                  <span className="text-base leading-relaxed">Generated 60% higher engagement from executive decision-makers.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-white font-bold border-b border-white/30 pb-1 self-start hover:border-white transition-colors uppercase tracking-wide text-xs">
                Read full case study &rarr;
              </a>
            </div>

            {/* Card 2: Climate Hive x EarthGrid */}
            <div className="bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-500 flex flex-col p-8 md:p-10 rounded-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">MARKET VALIDATION FOR PLASMA BORING</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Climate Hive x EarthGrid</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-2 border-l-white p-6 mb-8 rounded-sm">
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Impact at a Glance</span>
                <span className="block text-4xl md:text-5xl font-serif font-bold text-white leading-none">48 Hrs</span>
                <span className="block text-sm text-slate-400 mt-2">From zero to 103 decision-makers</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow text-slate-300">
                <li className="flex gap-3 items-start">
                  <span className="text-white/40 font-bold mt-0.5 text-sm">—</span>
                  <span className="text-base leading-relaxed">Conservative investors viewed technology as a high-risk &quot;Science Project&quot;.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-white/40 font-bold mt-0.5 text-sm">—</span>
                  <span className="text-base leading-relaxed">Initiated direct dialogue with 103 vetted decision-makers via 48-Hour sprint.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-white/40 font-bold mt-0.5 text-sm">—</span>
                  <span className="text-base leading-relaxed">Shifted sales hook from &quot;Boring Cost&quot; to &quot;Permitting Speed&quot;.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-white font-bold border-b border-white/30 pb-1 self-start hover:border-white transition-colors uppercase tracking-wide text-xs">
                Read full case study &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 9: RISK REVERSAL */}
      <section className="bg-slate-900/50 py-24 md:py-32 px-6 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight tracking-tight">The Specialized Intelligence Advantage</h2>
          </div>
          <div className="lg:col-span-8 max-w-prose">
            <div className="bg-slate-950 p-8 md:p-10 border border-slate-800 rounded-sm space-y-6">
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Our engagement model is engineered entirely around precision, speed-to-clarity, and capital efficiency. By operating exclusively as a specialized intelligence asset, we provide you with a highly focused, 45-day architectural sprint.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                This structure ensures you receive the exact commercial narrative and executable sales assets you need, entirely avoiding the prolonged onboarding, overhead, and operational friction associated with hiring fractional executives or full-service agencies.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                We deliver the blueprint, arm your existing sales team, and equip you with a permanent, scalable system to unblock future deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPONENT 10: FINAL CTA */}
      <section id="diagnostic-booking" className="relative bg-slate-950 py-24 md:py-32 px-6 text-white overflow-hidden">
        {/* Ambient glow behind CTA */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-slate-700/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold leading-tight tracking-tight">Is your commercial architecture burning your runway?</h2>
          <p className="text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            Let&apos;s examine your current pipeline. In this 30-minute diagnostic, we will map exactly where your 7-figure deals are stalling and determine if a bifurcated commercial strategy is required to achieve absolute commercial readiness.
          </p>
          <div className="bg-slate-900 p-8 md:p-10 border border-slate-800 text-left mx-auto rounded-sm">
            <ul className="space-y-5">
              <li className="flex gap-4 items-start pb-5 border-b border-slate-800">
                <span className="text-white font-bold mt-1 text-lg">✓</span>
                <span className="text-lg text-slate-200 font-medium font-serif leading-relaxed">Are your deals trapped in <span className="text-white font-semibold">Pilot Purgatory</span>?</span>
              </li>
              <li className="flex gap-4 items-start pb-5 border-b border-slate-800">
                <span className="text-white font-bold mt-1 text-lg">✓</span>
                <span className="text-lg text-slate-200 font-medium font-serif leading-relaxed">Is procurement treating your breakthrough technology like a standard commodity?</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-white font-bold mt-1 text-lg">✓</span>
                <span className="text-lg text-slate-200 font-medium font-serif leading-relaxed">Are you currently using the same core pitch deck for the engineering team as you are for the financial buyer?</span>
              </li>
            </ul>
          </div>
          <div className="pt-4">
             <a
               href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-white text-slate-950 px-10 py-5 font-bold text-lg tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-2xl w-full md:w-auto transform hover:-translate-y-0.5"
             >
               Initiate Pipeline Diagnostic
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
