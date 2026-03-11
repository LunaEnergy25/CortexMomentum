import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Cortex Momentum Logo"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
          <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-white group-hover:text-slate-300 transition-colors">
            Cortex Momentum
          </span>
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
