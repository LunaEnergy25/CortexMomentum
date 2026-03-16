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
          Your physics are flawless.<br className="hidden md:block"/> But flawless physics do not survive enterprise procurement.
        </h1>

        <p className="text-slate-100 text-lg lg:text-2xl font-medium max-w-3xl leading-relaxed font-sans mb-12">
          We engineer Asymmetric Commercial Architectures to rescue live enterprise pipeline from Pilot Purgatory and radically compress your Time-to-Signal.
        </p>

        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-12 py-5 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-0.5 text-lg"
        >
          Initiate Pipeline Diagnostic
        </a>
        <p className="text-slate-400 text-sm mt-4 max-w-xl leading-relaxed">
          30 Minutes. Peer-to-peer. Mapping the gatekeepers blocking your stalled deals. No sales pitch.
        </p>
      </div>

      {/* Trust Bar */}
      <div className="relative z-10 mt-16 md:mt-20 max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm tracking-wide leading-relaxed">
          Intelligence infrastructure trusted by leaders in Advanced PCB Manufacturing, Renewable Natural Gas, and FOAK Private Credit.
        </p>
      </div>
    </section>
  );
}
