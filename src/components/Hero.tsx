import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy-900 text-slate-50 py-32 px-4 md:px-8 text-center border-b border-navy-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
          Strategic Advisor to Deep Tech, Energy & Industrial Leaders | <br className="hidden md:block" />
          <span className="text-slate-300">Engineering Your Market to Match Your Product</span> | <br className="hidden md:block" />
          Bridging the Translation Gap to Unblock Enterprise Pipelines
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
          Most capitalized deep-tech and energy companies don’t fail because their physics are flawed. They fail because B2B buying committees view 'new' as a financial risk.
        </p>
        <Link 
          href="#diagnostic-booking"
          className="bg-slate-50 text-navy-900 px-8 py-4 font-bold text-lg hover:bg-slate-200 transition-colors shadow-md transform hover:-translate-y-0.5"
        >
          Initiate a Pipeline Diagnostic
        </Link>
      </div>
    </section>
  );
}
