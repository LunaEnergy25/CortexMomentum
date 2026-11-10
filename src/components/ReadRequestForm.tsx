"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { BOOKING_URL, sectorReadHref } from "@/lib/links";
import { readUtm } from "@/lib/utm";
import { SECTORS, SECTOR_READS } from "@/lib/sectors";

/* On-site request for a one-page sector read. Three fields. The read (a
   static PDF per sector, public/reads) opens as soon as the form is sent,
   and still opens if the request fails to save. UTM tags come
   from the page URL, or from the landing page earlier in the same tab
   (lib/utm), so a DM link keeps its attribution if the visitor clicks around. */

const input =
  "w-full bg-slate-950 border border-slate-700 rounded-sm px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-slate-400";
const label = "block text-sm font-medium text-slate-300 mb-2";

export default function ReadRequestForm({ source, sector }: { source: string; sector?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [chosen, setChosen] = useState(sector && SECTORS.includes(sector) ? sector : "");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const from = new URLSearchParams(window.location.search).get("from") || source;
    const props = {
      source: from,
      sector: form.get("sector"),
      page: window.location.pathname,
      ...readUtm(),
    };
    setState("sending");
    try {
      const res = await fetch("/api/read-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: form.get("contact"),
          hp_field: form.get("hp_field"),
          ...props,
          decision: form.get("decision"),
        }),
      });
      if (!res.ok) {
        posthog.capture("read_request_failed", { ...props, status: res.status });
        setState("error");
        return;
      }
      posthog.capture("read_request_submitted", props);
      setState("sent");
    } catch {
      posthog.capture("read_request_failed", { ...props, status: "network" });
      setState("error");
    }
  }

  const readHref = SECTOR_READS[chosen] || SECTOR_READS["Deep-tech or other"];
  const readLink = (
    <a
      href={readHref}
      target="_blank"
      rel="noopener"
      onClick={() => posthog.capture("read_pdf_opened", { sector: chosen, page: window.location.pathname, ...readUtm() })}
      className="inline-block bg-white text-slate-950 px-6 py-3 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm"
    >
      Open your one-page read (PDF)
    </a>
  );

  if (state === "sent") {
    return (
      <div className="space-y-4 text-left">
        <p className="text-slate-200 leading-relaxed">Here&apos;s your read on {chosen || "your sector"}, as of the date on the page.</p>
        {readLink}
        {/* Same bridge as the PDFs (approved 2026-11-09); keep the two in sync. */}
        <p className="text-slate-300 leading-relaxed">
          <strong className="text-white">If this bears on a decision you&apos;re making.</strong> A 30-minute call is for one
          thing: you bring the decision and its date, and we&apos;ll tell you what this read changes about it, and what it
          can&apos;t tell you. If the honest answer is that you don&apos;t need us, we&apos;ll say so.{" "}
          <a href={BOOKING_URL} className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">Book a call</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 text-left">
      <div>
        <label htmlFor={`sector-${source}`} className={label}>Your sector</label>
        <select
          id={`sector-${source}`}
          name="sector"
          required
          value={chosen}
          onChange={(e) => setChosen(e.target.value)}
          className={input}
        >
          <option value="" disabled>Choose one</option>
          {SECTORS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`decision-${source}`} className={label}>
          What decision would it feed, and roughly when? <span className="text-slate-500 font-normal">(optional)</span>
        </label>
        <input id={`decision-${source}`} name="decision" maxLength={500} placeholder="e.g. offtake contract, Q2" className={input} />
      </div>
      <div>
        <label htmlFor={`contact-${source}`} className={label}>Where should we send the January scorecard?</label>
        <input
          id={`contact-${source}`}
          name="contact"
          required
          minLength={3}
          maxLength={200}
          placeholder="Work email, or LinkedIn profile URL"
          className={input}
        />
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`hp-${source}`}>Leave this empty</label>
        <input id={`hp-${source}`} name="hp_field" tabIndex={-1} autoComplete="new-password" />
      </div>
      <p className="text-sm text-slate-400">
        The read opens right away. In January we score these calls, hits and misses both, and send you that one update. Nothing else unless you write to us.{" "}
        <a href="/privacy" className="underline underline-offset-4 hover:text-slate-200">Privacy</a>
      </p>
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-block bg-white text-slate-950 px-6 py-3 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm disabled:opacity-60"
      >
        {state === "sending" ? "Opening…" : "Get the one-page read"}
      </button>
      {state === "error" && (
        <div className="space-y-3">
          <p className="text-sm text-slate-300">
            We couldn&apos;t save that (check the email or LinkedIn URL, or{" "}
            <a href={sectorReadHref(source, chosen || sector)} className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
              write to us
            </a>
            ). The read is yours either way:
          </p>
          {chosen && readLink}
        </div>
      )}
    </form>
  );
}
