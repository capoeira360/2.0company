"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isWork = pathname?.startsWith("/work");

  return (
    <header className="sticky top-0 z-50 bg-[#FDFDFD] border-b">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">TAPit</Link>
        <nav aria-label="Primary" className="flex gap-6">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <Link href="/work" aria-current={isWork ? "page" : undefined} className={`hover:text-sky-600 ${isWork ? "text-sky-600" : ""}`}>Work</Link>
          <Link href="/about" className="hover:text-sky-600">About</Link>
          <Link href="/contact" className="hover:text-sky-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}