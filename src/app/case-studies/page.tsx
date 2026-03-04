import Navbar from "@/components/Navbar";
import CaseStudyPillar from "@/components/sections/CaseStudyPillar";

export default function CaseStudies() {
  const caseStudies = [
    {
      pillar: "Investor Readiness & Capital De-Risking",
      cases: [
        {
          company: "EarthGrid",
          headline: "Solving the 'Investor Skepticism' Gap: Validating Complex Grid Tech in 48 Hours.",
          friction: "Investors demanded commercial validation from guarded Utility operators before deploying capital.",
          architecture: "Deployed a 48-Hour Market Validation Sprint using proprietary asymmetric signal mapping to initiate a peer-to-peer technical debate on grid physics.",
          outcome: "Extracted exact due-diligence objections, proving 'Permitting Speed' was the critical commercial unlock. Initiated dialogue with 103 vetted decision-makers."
        },
        {
          company: "Series A Target List",
          headline: "How We Cut a 250-Investor List by 90% to Target the 25 Most Likely to Fund.",
          friction: "Founders were wasting 6+ months pitching misaligned generalist funds instead of deep-tech specialists.",
          architecture: "Mapped fund thesis mandates against precise technology maturity and exact Capex constraints.",
          outcome: "Reduced outreach volume by 90% while doubling successful partner meetings, leading to an oversubscribed round."
        }
      ]
    },
    {
      pillar: "Pipeline Velocity & Deal Rescue",
      cases: [
        {
          company: "Elephantech - FLAGSHIP",
          headline: "Escaping the 'Green Premium' Trap: Unblocking a Stalled Deep-Tech Pipeline.",
          friction: "Quality Engineers viewed '70% Material Reduction' as a reliability risk. Procurement blocked the 'Green Premium'.",
          architecture: "Deployed a Bifurcated GTM Architecture. Armed the Champion with a 'Silver Volatility Index' and a 'Visual Physics Brief'.",
          outcome: "Compressed consensus cycle, elevated entry point to VP/Director, achieved 2.4x deal size increase."
        },
        {
          company: "$50M RNG Company",
          headline: "The 45-Day Ultimatum: Pivoting a $50M Energy Model After a Market Collapse.",
          friction: "Regulatory shifts destroyed the primary revenue assumption mid-deal, freezing a critical joint venture.",
          architecture: "Rapid intervention to map secondary revenue streams and formulate a de-risked contingency architecture for the buying committee.",
          outcome: "Saved the joint venture within 45 days, locking in alternative off-take agreements to satisfy credit committees."
        }
      ]
    },
    {
      pillar: "Commercial Scaling & Pricing Strategy",
      cases: [
        {
          company: "Wind Project ERCOT",
          headline: "Strategic Pricing for Gigawatt Scale: Answering a Billion-Dollar Question.",
          friction: "Uncertainty around interconnection queue friction and curtailment risks stalled pricing model finalizing.",
          architecture: "Developed a dynamic pricing model mapped to specific nodal volatility risks and specific interconnection milestones.",
          outcome: "Secured anchor PPA with premium pricing based on transparent, tiered risk reduction."
        },
        {
          company: "Solar Hardware",
          headline: "Margin Expansion via Geographic 'Soft Spots': Achieving 40% Margin.",
          friction: "Commoditization from Tier 1 imports destroyed margins in legacy utility markets.",
          architecture: "Identified middle-market EPCs in specific geographic 'soft spots' where local compliance and speed outweighed slight hardware premiums.",
          outcome: "Achieved sustained 40% gross margins by avoiding direct price wars via systemic strategic positioning."
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />
      
      <div className="bg-navy-900 text-slate-50 py-24 px-4 text-center border-b border-navy-800 mb-24">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Deep-Tech Case Studies</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Architecting consensus for complex technical sales. 
          De-risking capital for deep technology.
        </p>
      </div>

      <div className="flex-grow">
        {caseStudies.map((pillarData, idx) => (
          <CaseStudyPillar key={idx} title={pillarData.pillar}>
            {pillarData.cases.map((study, studyIdx) => (
              <div key={studyIdx} className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm font-bold text-navy-900 mb-2 uppercase tracking-wide">
                  {study.company}
                </div>
                <h3 className="text-2xl font-serif text-slate-900 font-bold mb-6">
                  {study.headline}
                </h3>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <strong className="text-slate-900 block mb-1 font-serif text-sm uppercase tracking-wider">The Friction:</strong>
                    <p>{study.friction}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <strong className="text-navy-900 block mb-1 font-serif text-sm uppercase tracking-wider">The Architecture:</strong>
                    <p>{study.architecture}</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <strong className="text-emerald-800 block mb-1 font-serif text-sm uppercase tracking-wider">The Outcome:</strong>
                    <p className="font-semibold text-slate-800">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </CaseStudyPillar>
        ))}
      </div>
    </main>
  );
}
