import { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Deep-Tech Case Studies | Cortex Momentum",
  description: "Explore our frameworks applied to capitalized deep-tech, energy, and industrial companies.",
};

const caseStudies = [
  {
    pillar: "Advanced PCB Manufacturing",
    client: "Elephantech",
    context: "Elephantech developed a revolutionary additive manufacturing process. They successfully secured early capital based on the brilliance of their physics and aggressively pursued the enterprise market to scale operations.",
    problem: "The commercial pipeline stalled. The sales team utilized a monolithic pitch focused on a \"70% Material Reduction\" and \"Sustainability.\" Enterprise procurement—incentivized by cost reduction and supply chain stability rather than carbon reduction—blocked the technology as an unnecessary \"Green Premium\" expense. Simultaneously, Quality Engineers viewed the drastic reduction in copper not as an efficiency gain, but as a severe risk to system reliability, assuming less copper equated to weaker traces.",
    approach: "Cortex Momentum deployed a Strategic GTM Architecture sprint. Bypassing the monolithic pitch, we built a 3-Track Bifurcated system. Recognizing that B2B buyers don't buy \"Better\"—they buy \"Safer,\" we moved \"Sustainability\" from the primary hook to a secondary validator. The new commercial engine was built around \"Silver Volatility Hedging\" for financial buyers, positioning the printed copper innovation as the only safe harbor against supply chain chaos.",
    outcome: "The narrative shift from \"Green Tech\" to \"Supply Chain Risk\" generated 60% higher engagement from executive decision-makers. Internal GTM friction was eliminated, allowing the team to achieve commercial readiness significantly faster.",
    impact: "We replaced \"Sales Breath\" with problem awareness. By diagnosing real risk and positioning the solution as the safest path forward, the buyer sold it internally. Fear of F*cking Up (FOFU) was successfully neutralized.",
    quote: "Deep Tech doesn't fail because the technology is bad. It fails because the narrative asks buyers to take a risk on 'New,' rather than positioning 'New' as the only way to eliminate risk."
  },
  {
    pillar: "$50M RNG Company Pivot",
    client: "RNG Energy Co.",
    context: "A renewable natural gas (RNG) company watched its core market implode as prices crashed. Investors imposed a spending freeze, and the board delivered an ultimatum: find a viable new business model in 45 days or face dissolution.",
    problem: "The sales team utilized outdated market data. Enterprise procurement blocked deals because the ROI timeline of the RNG offering misaligned with the buyers' fiscal year requirements. They were drowning in complex variables and legacy consulting reports that were too slow to execute.",
    approach: "Bypassing a prohibitive $120k, 3-month traditional consulting study, Cortex Momentum deployed a 5-day intelligence sprint, mapping regulatory and compliance drivers across the sector.",
    outcome: "We delivered a board-ready pivot strategy in just 5 days. We identified the European Sustainable Aviation Fuel (SAF) regulations as a massive, immediate demand driver aligning perfectly with their existing capabilities.",
    impact: "By aligning their output with the buyer's strict internal compliance mandates, we established immediate commercial readiness, unlocking a stalled $50M pipeline.",
    quote: ""
  },
  {
    pillar: "Market Validation for Plasma Boring",
    client: "Climate Hive x EarthGrid",
    context: "ClimateHive, a premier strategic agency, was leading a highly visible capital raise campaign for EarthGrid's proprietary plasma boring technology, generating strong initial financial interest from VCs.",
    problem: "A critical \"Investor Skepticism\" gap emerged. VCs were listening, but the actual end customers (Utilities and Developers) were missing from the conversation. Without industry experts present to verify the complex electrical physics, conservative investors viewed the technology as a high-risk \"Science Project.\"",
    approach: "ClimateHive deployed Cortex Momentum to execute a 48-Hour Market Validation Sprint. Activating a proprietary network of Utility VPs and Regulators, we invited specific experts to a technical debate on physics versus economics, extracting exact market objections (e.g., Reactive Power issues).",
    outcome: "In 48 hours, the sprint generated 4,999 organic impressions with zero ad spend and achieved a 1:1 comment-to-like debate ratio. Direct dialogue was initiated with 103 vetted decision-makers, including a VP of Transmission who stepped out of a critical grid operator meeting to participate.",
    impact: "The campaign acted as a live market stress-test, proving to investors that the technology was highly relevant to grid operators. The intelligence gathered allowed EarthGrid to achieve immediate GTM clarity, shifting their sales hook from \"Boring Cost\" to \"Permitting Speed.\"",
    quote: "I wanted to reach industry folks... You have a captured audience and authoritative voice that I thought would give us that extra bump. It did for sure. — Kevin Drolet, Founder, ClimateHive"
  },
  {
    pillar: "Pre-Revenue Cleantech SaaS Go-To-Market",
    client: "Cleantech SaaS Startup",
    context: "A pre-revenue, engineer-led cleantech SaaS startup developed a highly promising MVP for microgrid developers.",
    problem: "The startup had only six months of runway left to find its first real customers. Drowning in conflicting industry noise, they were unable to separate signal from noise, and did not know what sales hooks would actually resonate.",
    approach: "Cortex Momentum deployed our intelligence platform to analyze their target market. We analyzed over 200 project RFPs to identify timing patterns, mapped 15 competitor positioning strategies, and interviewed 12 potential buyers.",
    outcome: "We achieved total GTM clarity, pinpointing Brownfield redevelopment projects as a highly lucrative niche. We uncovered that the #1 driver for these developers was deal velocity, not cost savings.",
    impact: "We rebuilt their messaging architecture entirely around Speed, Compliance, and Guarantees, creating a clear path to shift from ineffective cold outreach to a high-converting inbound approach, establishing commercial readiness well before runway expired.",
    quote: ""
  },
  {
    pillar: "Pricing First-of-its-Kind Wind Project",
    client: "Texas ERCOT Startup",
    context: "A disruptive wind energy startup developed a breakthrough technology capable of building gigawatt-scale projects faster than legacy competitors.",
    problem: "The CEO was consumed by a critical financing round and lacked the bandwidth to build a defined ICP. They needed a highly competitive, data-backed price point for the 2027 Texas ERCOT market, but lacked the GTM clarity to execute it.",
    approach: "Cortex Momentum analyzed the complex energy market, evaluating hyperscaler, data center, and Department of Defense market opportunities.",
    outcome: "We delivered a highly competitive, risk-adjusted price point of $38-$42/MWh for the Texas ERCOT market, validating data centers as the primary target market based on \"speed-to-deployment.\"",
    impact: "We formulated a risk-adjusted pricing strategy and provided a repeatable market intelligence process, achieving total commercial readiness for their upcoming hires.",
    quote: ""
  },
  {
    pillar: "Targeted Investor Readiness (250 to 25 VCs)",
    client: "Deep-Tech Company",
    context: "A deep-tech company was navigating the difficult \"Funding Gap\" between Seed and Series A funding.",
    problem: "Operating in a strategic void, they were preparing to pitch a generic, monolithic deck to a scattered list of over 250+ investors, risking alienation of conservative capital.",
    approach: "We replaced their inefficient outreach with a data-driven intelligence strategy, analyzing recent funding announcements and mapping public statements of potential strategic investors.",
    outcome: "We successfully cut their outreach list from 250 general VCs down to 25 highly targeted family offices whose profiles perfectly matched their sector.",
    impact: "By developing precisely aligned messaging for each target, we delivered a data-driven playbook, massively accelerating their path to commercial readiness and capitalization.",
    quote: ""
  },
  {
    pillar: "Solar Hardware Startup Margin Optimization",
    client: "Solar Hardware Mfg",
    context: "A pioneering three-person solar hardware startup had no formal business background and no clear path to market.",
    problem: "Their sales efforts were scattered nationwide to early adopters, resulting in incredibly thin margins and no budget for customer acquisition.",
    approach: "Cortex Momentum analyzed the entire US market to pinpoint optimal geographic targeting based on income, EV adoption, and local incentives.",
    outcome: "We pinpointed exactly 3 high-potential metro areas. We identified their ideal first customer profile and recommended a strategic price increase that achieved a sustainable ~40% profit margin.",
    impact: "We transformed their GTM from a scattered guessing game into a highly focused, self-funding growth engine.",
    quote: ""
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-24 mt-20">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Enterprise Architecture In Action</h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Review our empirical deployments across Capitalized Deep-Tech, Energy, and Industrial sectors.
          </p>
        </div>

        <div className="space-y-32">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 border-t border-slate-800 pt-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-500 mb-4 inline-block">
                  Case Study 0{index + 1}
                </span>
                <h2 className="text-3xl font-serif font-bold text-white mb-6 leading-snug">{caseStudy.client}</h2>
                <div className="bg-slate-900 p-6 border border-slate-800 shadow-xl text-base rounded-sm">
                  <strong className="block text-slate-400 mb-2 uppercase tracking-wide text-xs">Context</strong>
                  <p className="text-slate-200 leading-relaxed font-medium">{caseStudy.context}</p>
                </div>
              </div>
              
              <div className="lg:col-span-8 space-y-8 text-lg text-slate-200 leading-relaxed font-medium">
                <div>
                  <strong className="block font-serif text-2xl mb-4 text-white border-b border-slate-800 pb-2">Problem</strong>
                  <p>{caseStudy.problem}</p>
                </div>

                <div>
                  <strong className="block font-serif text-2xl mb-4 text-white border-b border-slate-800 pb-2">Approach</strong>
                  <p>{caseStudy.approach}</p>
                </div>

                <div>
                  <strong className="block font-serif text-2xl mb-4 text-white border-b border-slate-800 pb-2">Outcome</strong>
                  <p>{caseStudy.outcome}</p>
                </div>

                <div className="bg-slate-900/50 p-8 border-l-4 border-l-indigo-500 border-y border-r border-slate-800 shadow-2xl relative rounded-sm">
                  <strong className="block font-serif text-2xl mb-4 text-white">Strategic Impact</strong>
                  <p className="text-slate-100">{caseStudy.impact}</p>
                </div>

                {caseStudy.quote && (
                  <blockquote className="italic font-serif text-xl text-white border-l-4 border-cyan-500 pl-6 mt-12 bg-slate-900 py-8 px-6 border-y border-r border-slate-800 rounded-sm shadow-xl">
                    &quot;{caseStudy.quote}&quot;
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center pb-24">
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
    </div>
  );
}
