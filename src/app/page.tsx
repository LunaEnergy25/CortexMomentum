import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Shield, DollarSign, Users, ArrowRight, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      
      {/* SECTION 2: PROBLEM RECOGNITION — The Series B Squeeze */}
      <section className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">The Series B Squeeze</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 max-w-prose">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              You do not have a product problem. You have a commercial alignment problem.
            </p>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Deep-tech and energy founders routinely walk into enterprise boardrooms selling &quot;innovation&quot; and &quot;disruption.&quot; But to a corporate buyer, disruption equals transition risk. Selling unmitigated innovation triggers the buyer&apos;s <strong className="text-cyan-300 font-semibold">Personal Career Risk (Fear of Failure)</strong>&mdash;and in the enterprise, that fear kills deals.
            </p>
            
            {/* Visual break — high contrast key insight card */}
            <div className="bg-slate-800/60 border-l-4 border-cyan-500/80 p-6 md:p-8 rounded-sm my-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <AlertTriangle className="w-20 h-20 text-cyan-400" />
              </div>
              <p className="text-xl text-white leading-relaxed relative z-10">
                A monolithic pitch deck will get you killed in committee. To survive procurement scrutiny, engineering brilliance must be translated into <strong className="text-cyan-300 font-semibold">risk-mitigated financial inevitability</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 3-TRACK COMMERCIAL ARCHITECTURE */}
      <section id="architecture" className="relative bg-slate-900/40 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">The 3-Track Commercial Architecture</h2>
            <p className="text-xl text-cyan-50 leading-relaxed">
              The monolithic pitch is dead. The 3-Track System deploys distinct psychological assets to navigate the enterprise buying matrix simultaneously.
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
                  <h3 className="text-2xl font-semibold font-serif text-white mb-3 mt-1">The Skeptic (Quality Engineers)</h3>
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed"><strong className="text-white">The Asset: Visual Physics Briefs.</strong> Raw, unassailable data they need to defend your tech to their superiors without risking their own reputation.</p>
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
                  <h3 className="text-2xl font-semibold font-serif text-white mb-3 mt-1">The Blocker (CFO / Procurement)</h3>
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed"><strong className="text-white">The Asset: Volatility Hedging Models.</strong> Pivoting the narrative from &quot;cool technology&quot; to protecting their CAC payback period and capping downside risk.</p>
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
                  <h3 className="text-2xl font-semibold font-serif text-white mb-3 mt-1">The Champion (VP of Innovation)</h3>
                  <p className="text-lg md:text-xl text-slate-200 leading-relaxed"><strong className="text-white">The Asset: Lowest-Bidder Defense Dossiers.</strong> Arming your internal champion with the exact executive-level financial arguments required to justify premium pricing over legacy incumbents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 45-DAY SIGNAL MAPPING SPRINT */}
      <section id="services" className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">The 45-Day Signal Mapping Sprint</h2>
            <p className="text-xl text-cyan-50 leading-relaxed">
              Strategy PDFs that gather dust are a liability. This is a 45-day commercial sprint to unblock your architecture and integrate ready-to-deploy assets directly into your CRM.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-8 max-w-prose">
            <div className="bg-slate-800/60 border-l-4 border-cyan-500/80 p-6 md:p-8 rounded-sm shadow-xl">
              <p className="text-xl text-white leading-relaxed font-medium">
                The biggest failure of GTM consulting is the execution gap. This architecture closes it by deploying:
              </p>
            </div>
            <ul className="space-y-6 text-lg md:text-xl text-slate-200 leading-relaxed">
              <li className="flex gap-4 items-start">
                <ArrowRight className="w-5 h-5 text-cyan-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Executive-to-Executive (E2E) Boardroom Briefings.</strong></span>
              </li>
              <li className="flex gap-4 items-start">
                <ArrowRight className="w-5 h-5 text-cyan-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Objection-handling battlecards</strong> built exclusively for procurement defense.</span>
              </li>
              <li className="flex gap-4 items-start">
                <ArrowRight className="w-5 h-5 text-cyan-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Narrative frameworks</strong> that bypass the middle-management freeze.</span>
              </li>
            </ul>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-xl text-white leading-relaxed font-medium">
                <strong>Outcome:</strong> Your commercial team is armed with a defensible financial architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA — Premium Checkpoint */}
      <section className="bg-slate-900/50 py-16 md:py-20 px-6 border-y border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white font-semibold leading-tight tracking-tight">Expedite the Architecture</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            For capitalized teams ready to bypass the execution gap immediately.
          </p>
          <a
            href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-900 px-10 py-5 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-1 text-lg mt-2"
          >
            Initiate Pipeline Diagnostic
          </a>
        </div>
      </section>

      {/* SECTION 5: OUR BOUNDARIES */}
      <section className="bg-slate-950 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 pr-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">Our Boundaries</h2>
          </div>
          <div className="lg:col-span-7 space-y-8 max-w-prose">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              This is a specialized intelligence framework, not a marketing retainer.
            </p>
            <div className="bg-slate-900 border-l-4 border-slate-500 p-6 rounded-sm my-6 shadow-xl">
              <p className="text-xl text-slate-100 leading-relaxed">
                Traditional PR is built for top-of-funnel brand awareness. This infrastructure exists strictly for <strong className="text-white">live pipeline deal rescue</strong>.
              </p>
            </div>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              This is not Fractional CRO work. The engagement is strictly scoped: drop in, unblock the commercial architecture, integrate the assets, and exit.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: CASE STUDIES — Declassified Impact */}
      <section className="bg-slate-900/40 py-20 md:py-28 px-6 border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-semibold mb-6 leading-tight tracking-tight">Declassified Impact</h2>
            <p className="text-xl text-slate-200 leading-relaxed">Observe how we reverse-engineered stalled enterprise pipelines for deep-tech leaders.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Card 1: Elephantech */}
            <div className="bg-slate-900 border border-slate-800 flex flex-col p-8 md:p-10 rounded-sm shadow-xl">
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-3 block">Pipeline Velocity</span>
              <h3 className="text-3xl font-serif font-semibold text-white mb-8">Elephantech</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-slate-500 p-6 mb-8 rounded-sm shadow-inner">
                <span className="block text-sm font-medium tracking-wide text-slate-400 mb-3">Impact at a Glance</span>
                <span className="block text-5xl md:text-6xl font-serif font-semibold text-white leading-none tracking-tighter">60%</span>
                <span className="block text-lg text-slate-300 mt-3">Higher executive engagement</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow text-white">
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Shifted narrative from &quot;Green Tech&quot; to &quot;Supply Chain Risk&quot;.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Bypassed technical vetoes masking as &quot;70% Material Reduction&quot;.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-1 self-start hover:border-white transition-colors uppercase tracking-widest text-sm mt-auto">
                Read full case study &rarr;
              </a>
            </div>

            {/* Card 2: Climate Hive x EarthGrid */}
            <div className="bg-slate-900 border border-slate-800 flex flex-col p-8 md:p-10 rounded-sm shadow-xl">
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-3 block">Market Validation</span>
              <h3 className="text-3xl font-serif font-semibold text-white mb-8">Climate Hive x EarthGrid</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-slate-500 p-6 mb-8 rounded-sm shadow-inner">
                <span className="block text-sm font-medium tracking-wide text-slate-400 mb-3">Impact at a Glance</span>
                <span className="block text-5xl md:text-6xl font-serif font-semibold text-white leading-none tracking-tighter">48 Hrs</span>
                <span className="block text-lg text-slate-300 mt-3">To reach 103 decision-makers</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow text-white">
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Shifted sales hook from &quot;Boring Cost&quot; to &quot;Permitting Speed&quot;.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Reframed &quot;Science Project&quot; into rapid-deployment infrastructure.</span>
                </li>
              </ul>
              
              <a href="/case-studies" className="text-white font-bold border-b-2 border-slate-600 pb-1 self-start hover:border-white transition-colors uppercase tracking-widest text-sm mt-auto">
                Read full case study &rarr;
              </a>
            </div>

            {/* Card 3: FOAK Private Credit Fund */}
            <div className="bg-slate-900 border border-slate-800 flex flex-col p-8 md:p-10 rounded-sm shadow-xl">
              <span className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-3 block">Deal Velocity</span>
              <h3 className="text-3xl font-serif font-semibold text-white mb-8">FOAK Private Credit Fund</h3>
              
              <div className="bg-slate-950 border border-slate-800 border-l-4 border-l-slate-500 p-6 mb-8 rounded-sm shadow-inner">
                <span className="block text-sm font-medium tracking-wide text-slate-400 mb-3">Impact at a Glance</span>
                <span className="block text-5xl md:text-6xl font-serif font-semibold text-white leading-none tracking-tighter">Months to Days</span>
                <span className="block text-lg text-slate-300 mt-3">Time-to-Signal compression</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow text-white">
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Bypassed the &quot;Observer Effect&quot; by tracking Dark Funnel intent to map opposing boardroom fears: Founders terrified of dilution vs. PE Gatekeepers terrified of execution failure.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-slate-500 font-bold mt-1 text-lg">&mdash;</span>
                  <span className="text-lg leading-relaxed">Engineered strict &quot;Impedance Matching,&quot; compressing Time-to-Signal and generating deal velocity where none previously existed.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA — Diagnostic Gate */}
      <section id="diagnostic-booking" className="relative bg-slate-950 py-24 md:py-32 px-6 text-white overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-slate-800/20 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold leading-tight tracking-tight">Unblock Your Enterprise Pipeline</h2>
          
          {/* Qualification Gate */}
          <div className="bg-slate-900/80 p-8 md:p-12 border-2 border-red-900/60 text-left mx-auto rounded-sm shadow-xl max-w-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-700/80"></div>
            <p className="text-xl text-white leading-relaxed font-medium mb-6">
              Exclusively for capitalized deep-tech and energy companies with live enterprise pipeline.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Do not initiate this diagnostic if you are pre-revenue, seeking top-of-funnel PR, or unwilling to alter your engineering narrative.
            </p>
          </div>

          <div className="pt-4 space-y-4">
             <a
               href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-white text-slate-950 px-12 py-6 font-semibold text-xl tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl w-full md:w-auto transform hover:-translate-y-1"
             >
               Initiate Pipeline Diagnostic
             </a>
             <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
               30 Minutes. Peer-to-peer. Mapping the specific gatekeepers blocking your stalled deals. No sales pitch.
             </p>
          </div>
        </div>
      </section>
    </main>
  );
}
