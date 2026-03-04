import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-navy-900 border-b border-navy-800 text-slate-50 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="font-serif text-xl font-bold tracking-wide">
        <Link href="/">C. Arch</Link>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        <Link href="/#services" className="hover:text-slate-300 transition-colors">Services</Link>
        <Link href="/case-studies" className="hover:text-slate-300 transition-colors">Deep-Tech Case Studies</Link>
        <Link href="/#architecture" className="hover:text-slate-300 transition-colors">The Architecture</Link>
        <Link 
          href="/#intake-form"
          className="bg-slate-50 text-navy-900 px-5 py-2 hover:bg-slate-200 transition-colors font-semibold shadow-sm"
        >
          Initiate Diagnostic
        </Link>
      </div>
    </nav>
  );
}
