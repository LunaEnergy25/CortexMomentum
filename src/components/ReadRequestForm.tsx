"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { sectorReadHref } from "@/lib/links";
import { readUtm } from "@/lib/utm";
import { SECTORS } from "@/lib/sectors";

/* On-site request for a one-page sector read. Three fields. UTM tags come
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
    const props = { source: from, sector: form.get("sector"), page: window.location.pathname, ...readUtm() };
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
      if (!res.ok) throw new Error(String(res.status));
      posthog.capture("read_request_submitted", props);
      setState("sent");
    } catch (err) {
      posthog.capture("read_request_failed", { ...props, error: String(err) });
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <p className="text-slate-200 leading-relaxed">
        Thanks. The read will reach you within two business days, written around your sector and any decision you named. No follow-up unless you reply.
      </p>
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
        <label htmlFor={`contact-${source}`} className={label}>Send it to</label>
        <input
          id={`contact-${source}`}
          name="contact"
          required
          minLength={3}
          maxLength={200}
          placeholder="Work email, or LinkedIn profile URL (sent by DM)"
          className={input}
        />
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`hp-${source}`}>Leave this empty</label>
        <input id={`hp-${source}`} name="hp_field" tabIndex={-1} autoComplete="new-password" />
      </div>
      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-block bg-white text-slate-950 px-6 py-3 font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 rounded-sm disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Send me the one-page read"}
      </button>
      {state === "error" && (
        <p className="text-sm text-slate-300">
          That didn&apos;t go through. Check the email or LinkedIn URL, or{" "}
          <a href={sectorReadHref(source, chosen || sector)} className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4">
            send the request by email
          </a>
          .
        </p>
      )}
    </form>
  );
}
