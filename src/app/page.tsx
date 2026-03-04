import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreePathsServices from "@/components/sections/ThreePathsServices";
import DiagnosticBookingCTA from "@/components/sections/DiagnosticBookingCTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      
      {/* The "Translation Gap" Section */}
      <section id="architecture" className="bg-white py-24 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-serif">
             <p>
              You raised your Series A on the brilliance of your technology. But when lean sales teams take an academic, monolithic pitch to massive enterprise buying committees, it feels like throwing stones in the sea.
             </p>
             <p>
              I call this the <strong className="text-navy-900 font-bold">Translation Gap</strong>. The result is Pilot Purgatory.
             </p>
             <p className="pt-4 font-sans text-navy-900 font-medium border-t border-slate-200">
               I cannot change a massive enterprise's annual budget calendar. But I can compress your avoidable internal consensus-building friction to 30-90 days.
             </p>
          </div>
          <div className="bg-slate-50 p-8 border-l-4 border-navy-900 shadow-sm space-y-6 text-slate-800">
            <h3 className="text-2xl font-serif text-navy-900 font-bold mb-4">The Symptoms of Pilot Purgatory</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-navy-900 font-bold">•</span>
                <span>Procurement officers block your innovation as an unproven CAPEX risk.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-navy-900 font-bold">•</span>
                <span>Quality Engineers view breakthrough efficiency gains as a reliability risk.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-navy-900 font-bold">•</span>
                <span>Your superior technology loses to the safe, legacy status quo.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ThreePathsServices />

      <div className="bg-slate-200 border-t border-slate-300 mt-auto py-12 px-4">
        <DiagnosticBookingCTA />
      </div>
    </main>
  );
}
