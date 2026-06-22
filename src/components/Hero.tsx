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
          In the deals we see, the ones that stall rarely fail on the technology. They stall in committee &mdash; on internal misalignment the deal team never saw, where every seat reads a different risk. We surface and de-risk that misalignment before the committee meets.
        </p>

        <p className="text-slate-300 text-base lg:text-lg max-w-2xl leading-relaxed mb-12 border-t border-slate-800 pt-6">
          How we see it: for ~5 years we&apos;ve run one always-on measurement system reading how senior energy and deep-tech buyers actually respond to a commercial pitch &mdash; including the majority who study it in silence and never show up in normal metrics. We call it a standing instrument.{" "}
          <a href="#instrument" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">See how it works &darr;</a>
        </p>

        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-950 px-12 py-5 font-bold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm shadow-xl transform hover:-translate-y-0.5 text-lg"
        >
          Request a Pipeline Diagnostic
        </a>
        <p className="text-slate-400 text-sm mt-4 max-w-xl leading-relaxed">
          30 minutes. Peer-to-peer. Mapping the specific dynamics stalling your deal. No pitch.
        </p>
        <p className="text-slate-400 text-sm mt-3 max-w-xl leading-relaxed">
          Or read the weekly market signal &mdash;{" "}
          <a href="https://www.theinterconnect.energy/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">The Interconnect</a>.
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
