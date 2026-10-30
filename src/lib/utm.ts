/* Campaign tags from the landing URL, kept in sessionStorage for the current
   tab only (cleared when it closes; not an identifier), so a read request made
   after a few clicks still carries the DM tag it arrived with. */

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
type Utm = Partial<Record<(typeof KEYS)[number], string>>;
const STORE = "cm_utm";

export function captureUtm(search: string): void {
  const params = new URLSearchParams(search);
  const found: Utm = {};
  for (const k of KEYS) {
    const v = params.get(k);
    if (v) found[k] = v.slice(0, 120);
  }
  if (!Object.keys(found).length) return;
  try {
    sessionStorage.setItem(STORE, JSON.stringify(found));
  } catch {
    // storage blocked: attribution falls back to the current URL only
  }
}

export function readUtm(): Utm {
  captureUtm(window.location.search);
  try {
    return JSON.parse(sessionStorage.getItem(STORE) || "{}") as Utm;
  } catch {
    return {};
  }
}
