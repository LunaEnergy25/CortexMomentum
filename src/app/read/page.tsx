import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ReadRequestForm from "@/components/ReadRequestForm";

export const metadata: Metadata = {
  title: "A one-page read on your sector | Cortex Momentum",
  description:
    "Tell us your sector and the decision in front of you. We'll send a one-page read on what's moving in your market and where the skepticism sits, written around that decision.",
  alternates: { canonical: "/read" },
  openGraph: { title: "A one-page read on your sector", url: "/read", siteName: "Cortex Momentum", images: ["/opengraph-image"] },
};

export default function ReadPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <Navbar />
      <div className="max-w-xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight leading-tight mb-6">
          A one-page read on your sector
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-10">
          Three questions, under a minute. We&apos;ll send a one-page read on what&apos;s moving in your market (rules, capital, offtake), where the skepticism sits, and what it means for the decision you name.
        </p>
        <div className="bg-slate-900/60 border border-slate-800 rounded-sm p-6 md:p-8">
          <ReadRequestForm source="read-page" />
        </div>
        <p className="text-slate-400 text-sm mt-8">
          Want to see the work first?{" "}
          <Link href="/interconnect" className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
            Read the energy threads we&apos;re tracking &rarr;
          </Link>
        </p>
      </div>
    </main>
  );
}
