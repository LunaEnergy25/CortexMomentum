import GlobalIntelligence from "@/components/GlobalIntelligence";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white py-20 md:py-28 lg:py-36 px-6 border-b border-slate-800 overflow-hidden text-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-6 md:mb-10 w-full max-w-lg lg:max-w-xl">
          <GlobalIntelligence />
        </div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight mb-10">
          Your physics are flawless.<br className="hidden md:block" /> But the room where capital moves and deals close doesn&apos;t run on physics.
        </h1>

        {/* Proof stat bar — quality / velocity / precision */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-slate-700 mb-12 w-full max-w-2xl">
          <div className="flex-1 flex flex-col items-center px-4">
            <span className="text-3xl md:text-4xl font-serif text-white font-semibold">~60%</span>
            <span className="text-xs text-slate-400 tracking-widest uppercase mt-2">more executive-seat attention</span>
          </div>
          <div className="flex-1 flex flex-col items-center px-4">
            <span className="text-3xl md:text-4xl font-serif text-white font-semibold">Months&nbsp;&rarr;&nbsp;Days</span>
            <span className="text-xs text-slate-400 tracking-widest uppercase mt-2">time-to-first-signal</span>
          </div>
          <div className="flex-1 flex flex-col items-center px-4">
            <span className="text-3xl md:text-4xl font-serif text-white font-semibold">~5 Years</span>
            <span className="text-xs text-slate-400 tracking-widest uppercase mt-2">standing instrument, running continuously</span>
          </div>
        </div>

        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-12 py-5 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-0.5 text-lg"
        >
          Request a Diagnostic
        </a>
        <p className="text-slate-400 text-sm mt-4 max-w-xl leading-relaxed">
          30 minutes. Peer-to-peer. No pitch.
        </p>
        <p className="text-slate-400 text-sm mt-3 max-w-xl leading-relaxed">
          Not at a live decision yet? Read the weekly market signal &mdash;{" "}
          <a href="https://www.theinterconnect.energy/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">The Interconnect</a>.
        </p>
      </div>

      <div className="relative z-10 mt-16 md:mt-20 max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm tracking-wide leading-relaxed">
          Intelligence infrastructure trusted by leaders in Advanced PCB Manufacturing, Renewable Natural Gas, and FOAK Private Credit.
        </p>
      </div>
    </section>
  );
}
