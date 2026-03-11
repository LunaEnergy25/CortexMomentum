import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-slate-300 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src="/logo.png" alt="Cortex Momentum" width={220} height={60} className="object-contain" priority />
        </Link>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
        <Link href="/#services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
        <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">Deep-Tech Case Studies</Link>
        <Link href="/#architecture" className="text-slate-300 hover:text-white transition-colors">The Architecture</Link>
        <a
          href="https://calendar.app.google/3tM6Q9tF6JkDaW2x8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-950 px-5 py-2 hover:bg-slate-200 transition-all duration-300 font-semibold tracking-wide rounded-sm"
        >
          Initiate Diagnostic
        </a>
      </div>
    </nav>
  );
}
