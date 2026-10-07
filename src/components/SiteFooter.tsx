import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400">
      &copy; {new Date().getFullYear()} Cortex Momentum &middot;{" "}
      <Link href="/interconnect" className="hover:text-slate-300 transition-colors">The Interconnect</Link>
      {" "}&middot;{" "}
      <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
    </footer>
  );
}
