import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engagement Record | Cortex Momentum",
  description: "Selected commercial-intelligence engagements across energy, deep-tech, and industrials. Every figure scoped to its evidence and built to survive diligence.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
