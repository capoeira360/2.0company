"use client";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/";
  const elevate = pathname === "/" || pathname.startsWith("/about") || pathname.startsWith("/contact");

  return (
    <footer className={`site-footer ${elevate ? "elevated" : ""}`}>
      <div className="container">
        <small>© TAPit Studio. Crafted with design and code.</small>
      </div>
    </footer>
  );
}