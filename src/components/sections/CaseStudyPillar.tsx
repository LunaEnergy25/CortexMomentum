import { ReactNode } from "react";

interface CaseStudyPillarProps {
    title: string;
    children: ReactNode;
}

export default function CaseStudyPillar({ title, children }: CaseStudyPillarProps) {
    return (
        <section className="mb-32 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-serif text-navy-900 mb-8 border-b border-slate-200 pb-4">
                {title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {children}
            </div>
        </section>
    );
}
