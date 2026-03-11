import GlobalIntelligence from "@/components/GlobalIntelligence";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white py-20 md:py-32 lg:py-40 px-6 border-b border-slate-800 overflow-hidden">
      {/* Ambient glow behind globe area */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-slate-700/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: H1 + CTA commanding the left column */}
        <div className="space-y-8 lg:pr-8">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight">
            Your physics are flawless. So why is the commercial pipeline stalling in procurement?
          </h1>
          <p className="text-slate-300 text-lg lg:text-xl max-w-lg leading-relaxed font-sans">
            Capitalized deep-tech and energy companies don&apos;t fail because of their engineering. They fail because enterprise buying committees view &quot;new&quot; as a financial risk. We bridge the translation gap between brilliant technology and commercial readiness, shortening your internal GTM development cycles so your team is fully armed to unblock 7-figure enterprise deals.
          </p>
          <div>
            <a
              href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-950 px-8 py-4 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Initiate Pipeline Diagnostic
            </a>
          </div>
        </div>

        {/* RIGHT: 3D Globe bleeding off the right edge */}
        <div className="hidden lg:flex justify-end items-center -mr-16 xl:-mr-24">
          <div className="w-[500px] xl:w-[600px] opacity-70">
            <GlobalIntelligence />
          </div>
        </div>
      </div>
    </section>
  );
}
