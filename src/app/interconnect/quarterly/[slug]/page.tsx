import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReadLayout from "@/components/ReadLayout";
import { getQuarterlies, getQuarterly } from "@/lib/threads";

export const dynamicParams = false;

export function generateStaticParams() {
  return getQuarterlies().map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const q = getQuarterly(slug);
  if (!q) return {};
  return {
    title: `${q.title} | The Interconnect`,
    description: q.dek || q.summary,
    alternates: { canonical: `/interconnect/quarterly/${q.slug}` },
    openGraph: { title: q.title, description: q.dek || q.summary, type: "article", url: `/interconnect/quarterly/${q.slug}`, siteName: "Cortex Momentum", images: ["/opengraph-image"] },
  };
}

export default async function QuarterlyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const q = getQuarterly(slug);
  if (!q) notFound();
  return (
    <ReadLayout
      eyebrow="The Interconnect · Snapshot"
      title={q.title}
      dek={q.dek}
      asOf={q.asOf}
      html={q.html}
      source={`snapshot-${q.slug}`}
    />
  );
}
