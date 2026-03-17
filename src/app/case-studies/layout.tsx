import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic Index | Cortex Momentum",
  description: "Declassified enterprise architecture deployments across deep-tech, energy, and private equity sectors.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
