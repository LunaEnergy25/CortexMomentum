import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-navy-900 text-white py-32 md:py-48 px-4 md:px-8 text-center border-b border-navy-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-10 tracking-tight">
          Your physics are flawless. So why is the commercial pipeline stalling in procurement?
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mb-14 leading-relaxed font-sans">
          Capitalized deep-tech and energy companies don’t fail because of their engineering. They fail because enterprise buying committees view &quot;new&quot; as a financial risk. We bridge the translation gap between brilliant technology and commercial readiness, shortening your internal GTM development cycles so your team is fully armed to unblock 7-figure enterprise deals.
        </p>
        <Link 
          href="#diagnostic-booking"
          className="bg-white text-navy-900 px-10 py-5 font-bold text-lg hover:bg-slate-200 transition-colors shadow-xl transform hover:-translate-y-0.5"
        >
          Initiate Pipeline Diagnostic
        </Link>
      </div>
    </section>
  );
}
