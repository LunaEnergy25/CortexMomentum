import GlobalIntelligence from "@/components/GlobalIntelligence";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white py-20 md:py-28 lg:py-36 px-6 border-b border-slate-800 overflow-hidden text-center">
      {/* Ambient glow behind globe */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Globe sized up and positioned between implicitly nothing (top) and headline */}
        <div className="mb-6 md:mb-10 w-full max-w-lg lg:max-w-xl">
          <GlobalIntelligence />
        </div>

        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight mb-8">
          Your physics are flawless.<br className="hidden md:block"/> So why is the commercial pipeline stalling?
        </h1>

        <p className="text-slate-100 text-lg lg:text-2xl font-medium max-w-3xl leading-relaxed font-sans mb-12">
          Capitalized deep-tech companies don&apos;t fail because of engineering. They fail because enterprise buyers view &quot;new&quot; as a financial risk. We bridge the gap between brilliant technology and commercial readiness so your team can unblock 7-figure deals.
        </p>

        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-12 py-5 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-0.5 text-lg"
        >
          Initiate Pipeline Diagnostic
        </a>
      </div>
    </section>
  );
}
