import { NextResponse } from "next/server";

/* One-page read requests. Inserts into Supabase public.site_read_requests with
   the public anon key: that role may only INSERT into this table (no SELECT, no
   other tables). Duplicate same-day requests from one contact are absorbed by a
   unique index. If the env vars are missing, returns 503 and the form falls
   back to a prefilled email. */

const LIMITS = {
  sector: 80,
  decision: 500,
  contact: 200,
  source: 80,
  page: 300,
  utm_source: 80,
  utm_medium: 80,
  utm_campaign: 120,
  utm_content: 120,
} as const;
type Field = keyof typeof LIMITS;

const CONTACT = /^[^@\s]+@[^@\s]+\.[^@\s]+$|^(https?:\/\/)?([a-z]{2,3}\.)?linkedin\.com\//i;

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });

  if (Number(req.headers.get("content-length") ?? 0) > 8192) {
    return NextResponse.json({ ok: false, error: "too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }
  const data = body as Record<string, unknown>;

  // Honeypot: hidden from people and from autofill; only bots fill it.
  if (clean(data.hp_field, 200)) return NextResponse.json({ ok: true });

  const row = Object.fromEntries(
    (Object.keys(LIMITS) as Field[]).map((f) => [f, clean(data[f], LIMITS[f]) || null]),
  ) as Record<Field, string | null>;

  if (!row.sector || !row.contact || !CONTACT.test(row.contact)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  let res: Response;
  try {
    res = await fetch(`${url}/rest/v1/site_read_requests`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "store_failed" }, { status: 502 });
  }
  // 409 = same contact already asked today; the first request stands.
  if (!res.ok && res.status !== 409) {
    return NextResponse.json({ ok: false, error: "store_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
