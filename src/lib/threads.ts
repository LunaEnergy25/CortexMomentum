import fs from "fs";
import path from "path";

/* Markdown content for The Interconnect thread pages and quarterly snapshots.
   Files live in src/content/{threads,quarterly}/<slug>.md with a simple
   key: value frontmatter block. Rendering supports the subset the pages use:
   ## / ### headings, paragraphs, - and 1. lists, **bold**, *italic*, [links](url). */

export interface Entry {
  slug: string;
  title: string;
  dek: string;
  sector: string;
  asOf: string;
  summary: string;
  order: number;
  html: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^"(.*)"$/, "$1");
  }
  return { meta, body: match[2] };
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function inline(s: string): string {
  // Links become placeholders first so emphasis rules can't touch their URLs.
  const links: string[] = [];
  let out = escapeHtml(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, text, url) => {
    if (!/^(https?:\/\/|mailto:|\/|#)/.test(url)) return text;
    const external = /^https?:\/\//.test(url);
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    links.push(`<a href="${url}"${attrs}>${text}</a>`);
    return `\u0000${links.length - 1}\u0000`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
  return out.replace(/\u0000(\d+)\u0000/g, (_m, i) => links[Number(i)]);
}

export function renderMarkdown(md: string): string {
  const lines = md.split(/\r?\n/);
  const html: string[] = [];
  let para: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;

  const flushPara = () => {
    if (para.length) html.push(`<p>${inline(para.join(" "))}</p>`);
    para = [];
  };
  const flushList = () => {
    if (list) html.push(`<${list.type}>${list.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${list.type}>`);
    list = null;
  };

  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      flushPara();
      flushList();
      continue;
    }
    const h = t.match(/^(#{2,3})\s+(.*)$/);
    const ul = t.match(/^[-*]\s+(.*)$/);
    const ol = t.match(/^\d+\.\s+(.*)$/);
    if (h) {
      flushPara();
      flushList();
      const level = h[1].length;
      html.push(`<h${level}>${inline(h[2])}</h${level}>`);
    } else if (ul || ol) {
      flushPara();
      const type = ul ? "ul" : "ol";
      if (list && list.type !== type) flushList();
      if (!list) list = { type, items: [] };
      list.items.push((ul || ol)![1]);
    } else if (list && /^\s{2,}/.test(line)) {
      list.items[list.items.length - 1] += " " + t;
    } else {
      flushList();
      para.push(t);
    }
  }
  flushPara();
  flushList();
  return html.join("\n");
}

function load(kind: "threads" | "quarterly"): Entry[] {
  const dir = path.join(CONTENT_ROOT, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        slug: meta.slug || f.replace(/\.md$/, ""),
        title: meta.title || "",
        dek: meta.dek || "",
        sector: meta.sector || "",
        asOf: meta.asOf || "",
        summary: meta.summary || "",
        order: Number(meta.order || 99),
        html: renderMarkdown(body),
      };
    })
    .sort((a, b) => a.order - b.order);
}

export const getThreads = () => load("threads");
export const getThread = (slug: string) => getThreads().find((t) => t.slug === slug);
export const getQuarterlies = () => load("quarterly");
export const getQuarterly = (slug: string) => getQuarterlies().find((q) => q.slug === slug);

export function formatAsOf(asOf: string): string {
  const m = asOf.match(/^(\d{4})-(\d{2})$/);
  if (!m) return asOf;
  const month = new Date(Number(m[1]), Number(m[2]) - 1, 1).toLocaleString("en-US", { month: "long" });
  return `${month} ${m[1]}`;
}
