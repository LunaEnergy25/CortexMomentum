"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

/* ────────────────────────────────────────────────────────────
   STEP 1: DATA ARCHITECTURE
   ──────────────────────────────────────────────────────────── */

interface CaseStudy {
  id: string;
  category: string;
  badge: string;
  client: string;
  metric: string;
  result: string;
  friction: string;
  pivot: string;
}

const caseStudiesData: CaseStudy[] = [
  /* ── FLAGSHIP DOSSIERS ── */
  {
    id: "elephantech",
    category: "Deep-Tech & Advanced Manufacturing",
    badge: "DEEP-TECH & ADVANCED MANUFACTURING",
    client: "Elephantech",
    metric: "60%",
    result: "60% higher executive engagement by neutralizing transition risk.",
    friction:
      "Your engineering is flawless, but the buyer\u2019s CFO is actively blocking the deal. Deep-tech startups attempt to sell \u201cenvironmental virtue\u201d or \u201cinnovation\u201d to procurement. To a CFO, unmitigated innovation equals transition risk.",
    pivot:
      "Engineered a Bifurcated Commercial Architecture. Shifted the executive narrative away from environmental impact, anchoring strictly to Volatility Hedging to protect their CAC payback period.",
  },
  {
    id: "earthgrid",
    category: "Energy & Gigawatt Infrastructure",
    badge: "ENERGY & GIGAWATT INFRASTRUCTURE",
    client: "EarthGrid",
    metric: "48 Hours",
    result: "From zero to 103 engaged decision-makers in 48 hours.",
    friction:
      "Your pilot was highly successful, but the enterprise rollout is trapped in committee purgatory. The internal Champion lacks the specialized vocabulary to defend premium pricing against legacy incumbents.",
    pivot:
      "Deployed the Champion Track. Armed the internal buyer with Lowest-Bidder Defense Dossiers and mapped the exact internal gatekeepers, validating the commercial architecture at unprecedented speed.",
  },
  {
    id: "analytica-advisors",
    category: "Private Equity & FOAK Capital",
    badge: "PRIVATE EQUITY & FOAK CAPITAL",
    client: "Analytica Advisors (Valley of Death)",
    metric: "Months to Days",
    result:
      "Compressed Time-to-Signal, engineering deal velocity where none previously existed.",
    friction:
      'A FOAK Private Credit fund offered a lower cost of capital, yet the market actively filtered out its term sheets. Standard diagnostics failed due to the B2B "Observer Effect" (market posturing).',
    pivot:
      'Tracked "Dark Funnel" intent to bypass sanitized data. Exposed opposing boardroom fears: Founders terrified of cap table dilution vs. PE Gatekeepers terrified of execution failure. Engineered a Dual-Payload Architecture: "Cap Table Protection" for Founders, and "Impedance Matching" for PE Gatekeepers.',
  },

  /* ── LEGACY CASE STUDIES ── */
  {
    id: "rng-energy",
    category: "Energy & Gigawatt Infrastructure",
    badge: "RENEWABLE NATURAL GAS",
    client: "RNG Energy Co.",
    metric: "5 Days",
    result:
      "Board-ready pivot strategy delivered in 5 days, unlocking a stalled $50M pipeline.",
    friction:
      "A $50M renewable natural gas company watched its core market implode as prices crashed. Investors imposed a spending freeze, and the board delivered an ultimatum: find a viable new business model in 45 days or face dissolution. The sales team relied on outdated market data, and enterprise procurement blocked deals because the ROI timeline misaligned with buyers\u2019 fiscal year requirements.",
    pivot:
      "Bypassing a prohibitive $120k, 3-month traditional consulting study, Cortex Momentum deployed a 5-day intelligence sprint. Mapped regulatory and compliance drivers across the sector and identified European Sustainable Aviation Fuel (SAF) regulations as a massive, immediate demand driver aligning perfectly with their existing capabilities.",
  },
  {
    id: "climatehive-earthgrid",
    category: "Energy & Gigawatt Infrastructure",
    badge: "PLASMA BORING MARKET VALIDATION",
    client: "Climate Hive x EarthGrid",
    metric: "103",
    result:
      "103 vetted decision-makers engaged with zero ad spend in 48 hours.",
    friction:
      'ClimateHive was leading a capital raise campaign for EarthGrid\u2019s plasma boring technology, generating strong initial financial interest. A critical "Investor Skepticism" gap emerged: VCs were listening, but end customers (Utilities and Developers) were missing from the conversation. Without industry experts to verify the physics, conservative investors viewed it as a high-risk "Science Project."',
    pivot:
      "Executed a 48-Hour Market Validation Sprint. Activated a proprietary network of Utility VPs and Regulators, inviting specific experts to a technical debate on physics versus economics. Generated 4,999 organic impressions, a 1:1 comment-to-like debate ratio, and direct dialogue with 103 decision-makers\u2014including a VP of Transmission who stepped out of a critical grid operator meeting to participate.",
  },
  {
    id: "cleantech-saas",
    category: "Deep-Tech & Advanced Manufacturing",
    badge: "CLEANTECH SAAS GTM",
    client: "Cleantech SaaS Startup",
    metric: "200+",
    result:
      "Analyzed over 200 project RFPs to achieve total GTM clarity before runway expired.",
    friction:
      "A pre-revenue, engineer-led cleantech SaaS startup had only six months of runway left to find its first real customers. Drowning in conflicting industry noise, the team was unable to separate signal from noise and had no idea what sales hooks would actually resonate.",
    pivot:
      "Deployed our intelligence platform to analyze 200+ project RFPs, mapped 15 competitor positioning strategies, and interviewed 12 potential buyers. Pinpointed Brownfield redevelopment projects as a lucrative niche and uncovered that the #1 driver for developers was deal velocity, not cost savings. Rebuilt messaging around Speed, Compliance, and Guarantees.",
  },
  {
    id: "texas-ercot",
    category: "Energy & Gigawatt Infrastructure",
    badge: "FOAK WIND PRICING",
    client: "Texas ERCOT Startup",
    metric: "$38\u2013$42",
    result:
      "Risk-adjusted price point of $38\u2013$42/MWh validated for the Texas ERCOT market.",
    friction:
      "A disruptive wind energy startup with breakthrough technology capable of building gigawatt-scale projects faster than legacy competitors. The CEO was consumed by a critical financing round and lacked the bandwidth to build a defined ICP or competitive pricing strategy for the 2027 Texas ERCOT market.",
    pivot:
      "Analyzed the complex energy market, evaluating hyperscaler, data center, and Department of Defense opportunities. Delivered a competitive, risk-adjusted price point and validated data centers as the primary target based on speed-to-deployment. Provided a repeatable market intelligence process for commercial readiness.",
  },
  {
    id: "deep-tech-investor",
    category: "Private Equity & FOAK Capital",
    badge: "TARGETED INVESTOR READINESS",
    client: "Deep-Tech Company",
    metric: "250 \u2192 25",
    result:
      "Cut investor outreach from 250 general VCs to 25 highly targeted family offices.",
    friction:
      'A deep-tech company was navigating the "Funding Gap" between Seed and Series A. Operating in a strategic void, they were preparing to pitch a generic, monolithic deck to 250+ scattered investors, risking alienation of conservative capital.',
    pivot:
      "Replaced inefficient outreach with a data-driven intelligence strategy. Analyzed recent funding announcements and mapped public statements of potential strategic investors. Cut the list to 25 highly targeted family offices with precisely aligned messaging for each target.",
  },
  {
    id: "solar-hardware",
    category: "Deep-Tech & Advanced Manufacturing",
    badge: "SOLAR HARDWARE MARGIN OPT",
    client: "Solar Hardware Mfg",
    metric: "~40%",
    result:
      "Achieved a sustainable ~40% profit margin through strategic price increase and geographic targeting.",
    friction:
      "A pioneering three-person solar hardware startup had no formal business background and no clear path to market. Sales efforts were scattered nationwide to early adopters, resulting in incredibly thin margins and no budget for customer acquisition.",
    pivot:
      "Analyzed the entire US market to pinpoint optimal geographic targeting based on income, EV adoption, and local incentives. Identified exactly 3 high-potential metro areas, their ideal first customer profile, and recommended a strategic price increase. Transformed their GTM from a scattered guessing game into a focused, self-funding growth engine.",
  },
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
                <h2 className="text-3xl font-serif font-semibold text-white leading-snug">
                  {cs.client}
                </h2>
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
              <div className="col-span-1 lg:col-span-8 space-y-8">
                <div>
                  <strong className="block font-serif text-xl mb-3 text-white border-b border-slate-800 pb-2 font-semibold">
                    Friction
                  </strong>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {cs.friction}
                  </p>
                </div>
                <div>
                  <strong className="block font-serif text-xl mb-3 text-white border-b border-slate-800 pb-2 font-semibold">
                    Pivot
                  </strong>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {cs.pivot}
                  </p>
                </div>
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
