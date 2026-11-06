import { ImageResponse } from "next/og";

// Link-preview card (LinkedIn, email, chat) for every page.
export const alt = "Cortex Momentum: commercial intelligence for energy and deep-tech deals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#020617",
          color: "#f8fafc",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, color: "#94a3b8", fontFamily: "sans-serif" }}>CORTEX MOMENTUM</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.15, fontWeight: 700 }}>Your deal has a date.</div>
          <div style={{ fontSize: 34, lineHeight: 1.35, color: "#cbd5e1", marginTop: 24, fontFamily: "sans-serif" }}>
            Commercial reads on storage, solar, firm power, large loads and deep-tech.
          </div>
        </div>
        <div style={{ width: 120, height: 6, background: "#22d3ee" }} />
      </div>
    ),
    size,
  );
}
