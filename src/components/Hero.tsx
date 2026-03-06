import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-slate-50 text-slate-900 py-32 md:py-48 px-4 md:px-8 text-center border-b border-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-serif text-slate-900 font-bold leading-tight mb-8">
          Strategic Advisor to Deep Tech, Energy & Industrial Leaders | <br className="hidden md:block" />
          <span className="text-navy-900">Bridging the Translation Gap to Unblock Enterprise Pipelines</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-700 max-w-3xl mb-12 leading-relaxed">
          Most capitalized deep-tech and energy companies don’t fail because their physics are flawed. They fail because B2B buying committees view 'new' as a financial risk.
        </p>
        <Link 
          href="#diagnostic-booking"
          className="bg-navy-900 text-white px-8 py-4 font-bold text-lg hover:bg-slate-800 transition-colors shadow-md transform hover:-translate-y-0.5"
        >
          Initiate a Pipeline Diagnostic
        </Link>
      </div>
    </section>
  );
}
