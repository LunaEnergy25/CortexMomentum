export default function ThreePathsServices() {
    const paths = [
        {
            title: "Pipeline Diagnostic",
            body: "Audit of stalled enterprise deals to pinpoint where your pitch causes friction with procurement or engineering."
        },
        {
            title: "45-Day Deal Rescue Sprint",
            body: "Targeted intervention to map gatekeepers blocking your pipeline and inject specific assets needed to force consensus."
        },
        {
            title: "Commercial Architecture Advisory",
            body: "Ongoing market mapping, regulatory translation, and GTM strategy for executive teams scaling complex revenue."
        }
    ];

    return (
        <section id="services" className="bg-slate-50 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-24 px-4">
                {paths.map((path, idx) => (
                    <div key={idx} className="p-8 border-t-4 border-navy-900 bg-white shadow-sm flex flex-col hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-serif text-navy-900 mb-4 font-bold">{path.title}</h3>
                        <p className="text-slate-600 leading-relaxed flex-grow">{path.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
