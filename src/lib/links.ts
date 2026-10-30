import { CONTACT_EMAIL } from "@/lib/legal";

export const BOOKING_URL = "https://calendar.app.google/3tM6Q9tF6JkDaW2x8";

// Email fallback for the on-site read request form (ReadRequestForm).
export function sectorReadHref(source: string, sector?: string): string {
  const subject = `One-page read${sector ? `: ${sector}` : ""}`;
  const body = "The decision it would feed, and roughly when:";
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
