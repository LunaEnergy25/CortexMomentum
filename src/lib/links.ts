import { CONTACT_EMAIL } from "@/lib/legal";

export const BOOKING_URL = "https://calendar.app.google/3tM6Q9tF6JkDaW2x8";

// Set to the published survey form URL (Tally / Google Forms). While empty,
// the sector-read ask falls back to a prefilled email.
export const SURVEY_URL: string = "";

export function sectorReadHref(source: string, sector?: string): string {
  if (SURVEY_URL) {
    const sep = SURVEY_URL.includes("?") ? "&" : "?";
    return `${SURVEY_URL}${sep}utm_source=site&utm_content=${encodeURIComponent(source)}`;
  }
  const subject = `One-page read${sector ? `: ${sector}` : ""}`;
  const body = "The decision it would feed, and roughly when:";
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function decisionEmailHref(source: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Decision and date (${source})`)}`;
}
