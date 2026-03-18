"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

/* ────────────────────────────────────────────────────────────
   STEP 1: DATA ARCHITECTURE
   ──────────────────────────────────────────────────────────── */

interface CaseStudy {
  id: number;
  category: string;
  badge: string;
  metric: string;
  result: string;
  content: React.ReactNode;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    category: 'Private Equity & Capital',
    badge: 'PRIVATE EQUITY & FOAK CAPITAL',
    metric: 'Months to Days',
    result: 'Compressed Time-to-Signal, engineering deal velocity where none previously existed.',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p><strong className="text-white">The Friction:</strong> A FOAK Private Credit fund offered a lower cost of capital, yet the market actively filtered out its term sheets. Standard diagnostics failed to uncover why due to the B2B &quot;Observer Effect&quot;&mdash;developers posture rather than reveal their true bottlenecks to capital providers.</p>
        <p><strong className="text-white">The Architecture:</strong> We deployed comparative analytics to track &quot;Dark Funnel&quot; intent, bypassing sanitized market data. The root cause was exposed: the market was frozen between opposing boardroom fears. Founders were terrified of cap table dilution, while PE Gatekeepers were terrified of execution failure.</p>
        <p><strong className="text-white">The Impact:</strong> We engineered a Dual-Payload Architecture. The facility was repositioned as &quot;Cap Table Protection&quot; for Founders, and strict &quot;Impedance Matching&quot; for PE Gatekeepers. This neutralized the specific fears blocking the deal, compressing Time-to-Signal from months to days.</p>
      </div>
    )
  },
  {
    id: 2,
    category: 'Deep-Tech & Manufacturing',
    badge: 'DEEP-TECH & ADVANCED MANUFACTURING',
    metric: '60%',
    result: '60% higher executive engagement by neutralizing transition risk.',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p><strong className="text-white">The Friction:</strong> Elephantech secured early capital based on flawless physics, but the enterprise pipeline stalled. The sales team relied on a monolithic pitch focused on &quot;Sustainability.&quot; Enterprise procurement&mdash;incentivized by supply chain stability&mdash;blocked the technology as an unnecessary &quot;Green Premium.&quot; Simultaneously, Quality Engineers viewed the drastic reduction in copper as a severe risk to system reliability.</p>
        <p><strong className="text-white">The Architecture:</strong> Cortex Momentum deployed a Strategic GTM sprint. Bypassing the monolithic pitch, we built a 3-Track Bifurcated system. Recognizing that B2B buyers don&apos;t buy &quot;Better&quot;&mdash;they buy &quot;Safer,&quot; we moved &quot;Sustainability&quot; to a secondary validator. The commercial engine was anchored entirely to &quot;Silver Volatility Hedging,&quot; positioning the innovation as a safe harbor against supply chain chaos.</p>
        <p><strong className="text-white">The Impact:</strong> The narrative shift from &quot;Green Tech&quot; to strict &quot;Supply Chain Risk&quot; generated 60% higher engagement from executives. By diagnosing actual operational risk, the buyer sold it internally, successfully neutralizing personal career risk and achieving rapid commercial readiness.</p>
      </div>
    )
  },
  {
    id: 3,
    category: 'Energy & Infrastructure',
    badge: 'PLASMA BORING MARKET VALIDATION',
    metric: '48 Hours',
    result: 'From zero to 103 engaged decision-makers in 48 hours.',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p><strong className="text-white">The Friction:</strong> ClimateHive was leading a highly visible capital raise for EarthGrid&apos;s proprietary plasma boring technology. A critical &quot;Investor Skepticism&quot; gap emerged: VCs were listening, but end customers (Utilities and Developers) were missing. Without industry experts present to verify the complex electrical physics, conservative investors viewed the technology as a high-risk &quot;Science Project.&quot;</p>
        <p><strong className="text-white">The Architecture:</strong> We executed a 48-Hour Market Validation Sprint. Activating a proprietary network of Utility VPs and Regulators, we engineered a technical debate on physics versus economics, bypassing standard PR to extract exact market objections.</p>
        <p><strong className="text-white">The Impact:</strong> In 48 hours, the intelligence sprint generated 4,999 organic impressions with a 1:1 comment-to-like debate ratio. Direct dialogue was initiated with 103 vetted decision-makers. This live stress-test proved absolute relevance to grid operators, shifting their sales hook from &quot;Boring Cost&quot; to &quot;Permitting Speed.&quot;</p>
      </div>
    )
  },
  {
    id: 4,
    category: 'Energy & Infrastructure',
    badge: 'RENEWABLE NATURAL GAS',
    metric: '5 Days',
    result: 'Board-ready pivot strategy delivered in 5 days, unlocking a stalled $50M pipeline.',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p><strong className="text-white">The Friction:</strong> A renewable natural gas (RNG) company watched its core market implode as prices crashed. Investors imposed a spending freeze, and the board delivered an ultimatum: find a viable new business model in 45 days. The sales team relied on outdated market data, while enterprise procurement blocked deals because the ROI timeline misaligned with buyers&apos; requirements.</p>
        <p><strong className="text-white">The Architecture:</strong> Bypassing a prohibitive $120k, 3-month consulting study, Cortex Momentum deployed a 5-day intelligence sprint. We mapped regulatory and compliance drivers across the sector to uncover hidden, high-velocity demand.</p>
        <p><strong className="text-white">The Impact:</strong> We delivered a board-ready pivot strategy in 5 days, identifying European Sustainable Aviation Fuel (SAF) regulations as a massive, immediate demand driver. By aligning output with strict internal compliance mandates, we established immediate commercial readiness and unlocked a stalled $50M pipeline.</p>
      </div>
    )
  },
  {
    id: 5,
    category: 'Cleantech & SaaS',
    badge: 'CLEANTECH SAAS GTM',
    metric: '200+',
    result: 'Analyzed over 200 project RFPs to achieve total GTM clarity before runway expired.',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p><strong className="text-white">The Friction:</strong> A pre-revenue, engineer-led cleantech SaaS startup developed a promising MVP for microgrid developers but had only six months of runway remaining. Drowning in industry noise, they were unable to separate signal from noise and lacked the commercial hooks that actually resonate with enterprise buyers.</p>
        <p><strong className="text-white">The Architecture:</strong> We deployed our intelligence platform to analyze their target market. We processed over 200 project RFPs to identify timing patterns, mapped 15 competitor positioning strategies, and interviewed 12 potential buyers.</p>
        <p><strong className="text-white">The Impact:</strong> We pinpointed Brownfield redevelopment projects as a highly lucrative niche. Uncovering that the #1 driver for these developers was deal velocity, not cost savings, we rebuilt their messaging architecture entirely around Speed, Compliance, and Guarantees.</p>
      </div>
    )
  },
  {
    id: 6,
    category: 'Energy & Infrastructure',
    badge: 'FOAK WIND PRICING',
    metric: '$38\u2013$42',
    result: 'Risk-adjusted price point of $38\u2013$42/MWh validated for the Texas ERCOT market.',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p><strong className="text-white">The Friction:</strong> A disruptive wind energy startup developed technology to build gigawatt-scale projects faster than legacy competitors. The CEO was consumed by financing rounds and lacked the bandwidth to build a data-backed price point for the 2027 Texas ERCOT market.</p>
        <p><strong className="text-white">The Architecture:</strong> Cortex Momentum analyzed the complex energy market, specifically evaluating hyperscaler, data center, and Department of Defense market opportunities to map the path of least commercial resistance.</p>
        <p><strong className="text-white">The Impact:</strong> We delivered a competitive, risk-adjusted price point of $38\u2013$42/MWh, validating data centers as the primary target based on &quot;speed-to-deployment.&quot; This achieved total commercial readiness for their upcoming hires.</p>
      </div>
    )
  },
  {
    id: 7,
    category: 'Private Equity & Capital',
    badge: 'TARGETED INVESTOR READINESS',
    metric: '250 \u2192 25',
    result: 'Cut investor outreach from 250 general VCs to 25 highly targeted family offices.',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p><strong className="text-white">The Friction:</strong> A deep-tech company was navigating the &quot;Funding Gap&quot; between Seed and Series A. Operating in a strategic void, they were preparing to pitch a generic, monolithic deck to over 250+ investors, risking alienation of conservative capital.</p>
        <p><strong className="text-white">The Architecture:</strong> We replaced inefficient outreach with a data-driven intelligence strategy, mapping public statements of potential strategic investors to explicitly filter out misaligned capital.</p>
        <p><strong className="text-white">The Impact:</strong> We cut their outreach list from 250 general VCs down to 25 highly targeted family offices. By developing precisely aligned messaging for each target, we delivered a playbook that massively accelerated their path to capitalization.</p>
      </div>
    )
  },
  {
    id: 8,
    category: 'Deep-Tech & Manufacturing',
    badge: 'SOLAR HARDWARE MARGIN OPTIMIZATION',
    metric: '~40%',
    result: 'Achieved a sustainable ~40% profit margin through strategic targeting.',
    content: (
      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
        <p><strong className="text-white">The Friction:</strong> A pioneering solar hardware startup had no formal commercial background and no clear path to market. Sales efforts were scattered nationwide to early adopters, resulting in thin margins, high friction, and no budget for customer acquisition.</p>
        <p><strong className="text-white">The Architecture:</strong> Cortex Momentum analyzed the entire US market to pinpoint optimal geographic targeting based on income brackets, EV adoption rates, and local compliance incentives.</p>
        <p><strong className="text-white">The Impact:</strong> We pinpointed exactly 3 high-potential metro areas. By identifying their ideal first customer profile and recommending a strategic price increase, we transformed their GTM into a focused, self-funding growth engine with a sustainable ~40% profit margin.</p>
      </div>
    )
  }
];

/* ────────────────────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────────────────────── */

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  /* Derive unique categories for the filter bar */
  const categories = [
    "All",
    ...Array.from(new Set(caseStudiesData.map((cs) => cs.category))),
  ];

  /* Filter */
  const filtered =
    activeCategory === "All"
      ? caseStudiesData
      : caseStudiesData.filter((cs) => cs.category === activeCategory);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24 mt-20">
        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-6 tracking-tight">
            Diagnostic Index
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Declassified enterprise architecture deployments across deep-tech,
            energy, and private equity sectors.
          </p>
        </div>

        {/* ── STEP 2: FILTER BAR ── */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium tracking-wide uppercase pb-2 transition-colors duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "text-white border-b border-white"
                  : "text-slate-500 hover:text-slate-300 border-b border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── STEP 3: DOSSIER STACK ── */}
        <div className="space-y-0">
          {filtered.map((cs) => (
            <div
              key={cs.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-slate-800/50 mb-16"
            >
              {/* Left Column — Metrics / Badge */}
              <div className="col-span-1 lg:col-span-4 space-y-6">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-slate-400 border border-slate-700 px-3 py-1.5 rounded-sm">
                  {cs.badge}
                </span>
                <div>
                  <span className="block text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
                    {cs.metric}
                  </span>
                  <p className="text-slate-300 text-base mt-3 leading-relaxed">
                    {cs.result}
                  </p>
                </div>
              </div>

              {/* Right Column — Narrative */}
              <div className="col-span-1 lg:col-span-8">
                {cs.content}
              </div>
            </div>
          ))}
        </div>

        {/* ── STEP 4: DIAGNOSTIC GATE FOOTER CTA ── */}
        <div className="mt-16 text-center space-y-10 pb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-white font-semibold leading-tight tracking-tight">
            Unblock Your Enterprise Pipeline
          </h2>

          <div className="bg-slate-900/80 p-8 md:p-12 border-2 border-red-900/60 text-left mx-auto rounded-sm shadow-xl max-w-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-700/80"></div>
            <p className="text-xl text-white leading-relaxed font-medium mb-4">
              Exclusively for capitalized deep-tech and energy companies with
              live enterprise pipeline.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Do not initiate this diagnostic if you are pre-revenue or seeking
              top-of-funnel PR.
            </p>
          </div>

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
    </div>
  );
}
