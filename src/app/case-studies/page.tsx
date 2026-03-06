import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep-Tech Case Studies | Cortex Momentum",
  description: "Explore our frameworks applied to capitalized deep-tech, energy, and industrial companies.",
};

const caseStudies = [
  {
    pillar: "Investor Readiness",
    client: "EarthGrid",
    challenge: "Needed to validate grid tech commercial viability within a 48 hour diligence window.",
    architecture: "Proprietary Signal Mapping to align engineering data with investor thesis requirements.",
    metric: "Validated in 48 Hours",
  },
  {
    pillar: "Investor Readiness",
    client: "Deep-Tech SaaS",
    challenge: "Overwhelming noise and lack of focus targeting 250 generalized VCs for the next round.",
    architecture: "Targeted Account Mapping narrowing the list to highly qualified deep-tech investors.",
    metric: "250-to-25 VCs",
  },
  {
    pillar: "Pipeline Velocity",
    client: "Elephantech",
    challenge: "Struggling to sell premium green materials purely on environmental benefits.",
    architecture: "Repositioned value proposition to emphasize supply chain resilience and cost parity.",
    metric: "Escaping the Green Premium Trap",
  },
  {
    pillar: "Pipeline Velocity",
    client: "RNG Energy Co.",
    challenge: "Pivot from legacy energy model to RNG required a complete go-to-market overhaul.",
    architecture: "New commercial architecture aligning the financial narrative with mid-market buyers.",
    metric: "$50M RNG Company Pivot",
  },
  {
    pillar: "Commercial Scaling",
    client: "Wind Project ERCOT",
    challenge: "Scaling sales operations and navigating complex energy regulations in Texas.",
    architecture: "Regulatory-compliant sales roadmap bypassing procurement friction.",
    metric: "Accelerated ERCOT Interconnection",
  },
  {
    pillar: "Commercial Scaling",
    client: "Solar Hardware Mfg",
    challenge: "Hardware commoditization shrinking margins against overseas competitors.",
    architecture: "Identified soft spots in competitor supply chains to position local reliability as premium edge.",
    metric: "Solar Hardware Soft Spots Identified",
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Enterprise Architecture In Action</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Review our empirical deployments across Capitalized Deep-Tech, Energy, and Industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <span className="text-sm font-bold tracking-wider uppercase text-slate-500 mb-4 inline-block">
                {caseStudy.pillar}
              </span>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">{caseStudy.client}</h3>
              
              <div className="mb-4">
                <strong className="block text-slate-800 mb-1">The Challenge</strong>
                <p className="text-slate-600">{caseStudy.challenge}</p>
              </div>

              <div className="mb-6 flex-grow">
                <strong className="block text-slate-800 mb-1">The Architecture</strong>
                <p className="text-slate-600">{caseStudy.architecture}</p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <strong className="block text-slate-900 uppercase text-xs tracking-wider mb-1">The Metric</strong>
                <span className="text-lg font-bold text-slate-900">{caseStudy.metric}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <Link 
              href="/#diagnostic-booking"
              className="inline-block bg-navy-900 text-white px-8 py-4 font-bold text-lg hover:bg-slate-800 transition-colors shadow-md border border-navy-800"
            >
              Initiate a Pipeline Diagnostic
            </Link>
        </div>
      </div>
    </div>
  );
}
