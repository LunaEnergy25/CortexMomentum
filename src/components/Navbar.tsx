import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-200 text-slate-900 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src="/logo.png" alt="Cortex Momentum" width={220} height={60} className="object-contain" priority />
        </Link>
      </div>
      <div className="hidden md:flex gap-8 items-center text-sm font-medium">
        <Link href="/#services" className="hover:text-slate-600 transition-colors">Services</Link>
        <Link href="/case-studies" className="hover:text-slate-300 transition-colors">Deep-Tech Case Studies</Link>
        <Link href="/#architecture" className="hover:text-slate-300 transition-colors">The Architecture</Link>
        <Link 
          href="/#diagnostic-booking"
          className="bg-slate-50 text-navy-900 px-5 py-2 hover:bg-slate-200 transition-colors font-semibold shadow-sm"
        >
          Initiate Diagnostic
        </Link>
      </div>
    </nav>
  );
}
