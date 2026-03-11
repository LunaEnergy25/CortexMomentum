import GlobalIntelligence from "@/components/GlobalIntelligence";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white py-20 md:py-28 lg:py-36 px-6 border-b border-slate-800 overflow-hidden text-center">
      {/* Ambient glow behind globe */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Globe centered above headline */}
        <div className="mb-10 w-full max-w-sm">
          <GlobalIntelligence />
        </div>

        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight mb-8">
          Your physics are flawless. So why is the commercial pipeline stalling in procurement?
        </h1>

        <p className="text-slate-200 text-lg lg:text-xl max-w-2xl leading-relaxed font-sans mb-12">
          Capitalized deep-tech and energy companies don&apos;t fail because of their engineering. They fail because enterprise buying committees view &quot;new&quot; as a financial risk. We bridge the translation gap between brilliant technology and commercial readiness, shortening your internal GTM development cycles so your team is fully armed to unblock 7-figure enterprise deals.
        </p>

        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-10 py-4 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-0.5 text-lg"
        >
          Initiate Pipeline Diagnostic
        </a>
      </div>
    </section>
  );
}
