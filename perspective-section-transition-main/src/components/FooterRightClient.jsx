"use client";
import Link from "next/link";

export default function FooterRightClient() {
  return (
    <>
      <nav className="footer-nav" aria-label="Footer navigation">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="footer-divider" aria-hidden="true" />
      <div className="footer-contact" aria-label="Contact information">
        <address className="footer-contact-details">
          <a href="mailto:hello@tapit.studio">hello@tapit.studio</a>
          <a href="tel:+11234567890">+1 123 456 7890</a>
        </address>
        <div className="footer-social" aria-label="Social media links">
          <a className="icon-link" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.87-2.36 8.5 8.5 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.23 3.86A12.03 12.03 0 0 1 3.1 4.8a4.23 4.23 0 0 0 1.31 5.66c-.67-.02-1.31-.2-1.86-.5v.05a4.25 4.25 0 0 0 3.4 4.16c-.59.16-1.22.19-1.83.07a4.25 4.25 0 0 0 3.97 2.95A8.51 8.51 0 0 1 2 19.54a12.02 12.02 0 0 0 6.51 1.91c7.82 0 12.1-6.48 12.1-12.1v-.55c.83-.6 1.55-1.34 2.12-2.19z"/></svg>
          </a>
          <a className="icon-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-1 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 1-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0 2.2c-3.1 0-3.4 0-4.6.1-1 .1-1.5.2-1.9.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3.9-.4 1.9-.1 1.2-.1 1.5-.1 4.6s0 3.4.1 4.6c.1 1 .2 1.5.4 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2.9.3 1.9.4 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c1-.1 1.5-.2 1.9-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-.9.4-1.9.1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-1-.2-1.5-.4-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-.9-.3-1.9-.4-1.2-.1-1.5-.1-4.6-.1zm0 2.7a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6zm0 2.2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zm5.5-3.2a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1z"/></svg>
          </a>
          <a className="icon-link" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5A2.5 2.5 0 0 1 0 3.5 2.5 2.5 0 0 1 2.48 1c1.38 0 2.5 1.12 2.5 2.5zM.5 8.99h4.96V24H.5V8.99zM8.98 8.99h4.75v2.04h.07c.66-1.25 2.29-2.57 4.72-2.57 5.05 0 5.98 3.33 5.98 7.66V24h-4.96v-6.6c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V24H8.98V8.99z"/></svg>
          </a>
        </div>
      </div>
    </>
  );
}