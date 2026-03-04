export default function DiagnosticBookingCTA() {
  return (
    <section id="diagnostic-booking" className="max-w-4xl mx-auto my-24 bg-navy-900 text-slate-50 p-8 md:p-12 shadow-xl border border-navy-800">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Initiate a Pipeline Diagnostic</h2>
        <p className="text-lg text-slate-200 mb-8">
          This 30-minute diagnostic is strictly for the commercial leaders of capitalized deep-tech, energy, and industrial companies.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-left max-w-2xl mx-auto mb-10 text-slate-100">
        <div>✓ You have secured Seed, Series A, or Series B funding.</div>
        <div>✓ You have 7-figure enterprise deals currently stalled in procurement or engineering review.</div>
        <div>✓ You are ready to replace your monolithic pitch with a bifurcated commercial architecture.</div>
      </div>

      <div className="text-center">
        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-navy-900 px-10 py-4 font-semibold hover:bg-slate-200 transition-colors text-center w-full md:w-auto"
        >
          Access Booking Calendar
        </a>
      </div>
    </section>
  );
}
