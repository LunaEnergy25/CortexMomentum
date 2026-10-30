import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReadLayout from "@/components/ReadLayout";
import { getThread, getThreads } from "@/lib/threads";

export const dynamicParams = false;

export function generateStaticParams() {
  return getThreads().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const thread = getThread(slug);
  if (!thread) return {};
  return {
    title: `${thread.title} | The Interconnect`,
    description: thread.dek || thread.summary,
    alternates: { canonical: `https://cortexmomentum.com/interconnect/threads/${thread.slug}` },
  };
}

export default async function ThreadPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const thread = getThread(slug);
  if (!thread) notFound();
  return (
    <ReadLayout
      eyebrow={`The Interconnect · ${thread.sector}`}
      title={thread.title}
      dek={thread.dek}
      asOf={thread.asOf}
      html={thread.html}
      source={`thread-${thread.slug}`}
      sector={thread.sector}
    />
  );
}
