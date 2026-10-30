import { NextResponse } from "next/server";

/* One-page read requests. Inserts into Supabase public.site_read_requests
   (RLS on, no policies) with the server-only service key. If the env vars
   are missing, returns 503 and the form falls back to a prefilled email. */

const LIMITS = { sector: 80, decision: 500, contact: 200, source: 80, page: 300, utm_source: 80, utm_content: 120 } as const;
type Field = keyof typeof LIMITS;

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const row = Object.fromEntries(
    (Object.keys(LIMITS) as Field[]).map((f) => [f, clean(body[f], LIMITS[f]) || null]),
  ) as Record<Field, string | null>;

  if (!row.sector || !row.contact || row.contact.length < 3) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const res = await fetch(`${url}/rest/v1/site_read_requests`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) return NextResponse.json({ ok: false, error: "store_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
