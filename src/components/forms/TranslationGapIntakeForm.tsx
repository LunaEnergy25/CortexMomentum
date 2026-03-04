"use client";

import { useState } from "react";

export default function TranslationGapIntakeForm({ id }: { id?: string }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        fundingStage: "",
        estimatedValue: "",
        samePitchDeck: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        alert("Diagnostic requested successfully.");
    };

    return (
        <form id={id} onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-slate-50 p-8 border border-slate-200 shadow-sm">
            <div className="mb-8">
                <h3 className="text-2xl font-serif text-navy-900 mb-2 font-bold">Request Pipeline Diagnostic</h3>
                <p className="text-slate-600">Pinpoint friction in your enterprise sales cycle.</p>
            </div>

            <input
                type="text"
                placeholder="Name"
                required
                className="border-b border-slate-300 bg-transparent rounded-none focus:ring-0 focus:outline-none focus:border-navy-900 w-full mb-6 py-2 transition-colors placeholder-slate-400 text-navy-900"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
                type="email"
                placeholder="Corporate Email"
                required
                className="border-b border-slate-300 bg-transparent rounded-none focus:ring-0 focus:outline-none focus:border-navy-900 w-full mb-6 py-2 transition-colors placeholder-slate-400 text-navy-900"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <select
                required
                className="border-b border-slate-300 bg-transparent rounded-none focus:ring-0 focus:outline-none focus:border-navy-900 w-full mb-6 py-2 transition-colors text-slate-800"
                value={formData.fundingStage}
                onChange={(e) => setFormData({ ...formData, fundingStage: e.target.value })}
            >
                <option value="" disabled>Funding Stage</option>
                <option value="Seed">Seed</option>
                <option value="Series A">Series A</option>
                <option value="Series B">Series B</option>
                <option value="PE-Backed">PE-Backed</option>
                <option value="Public">Public</option>
            </select>

            <input
                type="number"
                placeholder="Estimated Value of Stalled Enterprise Pipeline ($)"
                required
                min="0"
                className="border-b border-slate-300 bg-transparent rounded-none focus:ring-0 focus:outline-none focus:border-navy-900 w-full mb-6 py-2 transition-colors placeholder-slate-400 text-navy-900"
                value={formData.estimatedValue}
                onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
            />

            <div className="mb-8">
                <p className="text-sm text-slate-700 mb-4 font-medium">Are you using the same core pitch deck for engineering as you are for financial buyers?</p>
                <div className="flex gap-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="radio"
                            name="samePitchDeck"
                            value="Yes"
                            required
                            className="w-4 h-4 text-navy-900 border-slate-300 focus:ring-navy-900"
                            onChange={(e) => setFormData({ ...formData, samePitchDeck: e.target.value })}
                        />
                        <span className="text-slate-700 group-hover:text-navy-900 transition-colors">Yes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="radio"
                            name="samePitchDeck"
                            value="No"
                            required
                            className="w-4 h-4 text-navy-900 border-slate-300 focus:ring-navy-900"
                            onChange={(e) => setFormData({ ...formData, samePitchDeck: e.target.value })}
                        />
                        <span className="text-slate-700 group-hover:text-navy-900 transition-colors">No</span>
                    </label>
                </div>
            </div>

            <button type="submit" className="bg-navy-900 text-white px-8 py-4 font-semibold hover:bg-slate-800 w-full transition-colors mt-2">
                Request Pipeline Diagnostic
            </button>
        </form>
    );
}
