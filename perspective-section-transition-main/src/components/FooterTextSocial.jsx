import { footerLinks } from "./Header/Nav/data";

export default function FooterTextSocial() {
  return (
    <div className="new-footer-social-text" aria-label="Social media links (text-only)">
      {footerLinks.map(({ title, href }) => (
        <a key={title} href={href} target="_blank" rel="noreferrer">{title}</a>
      ))}
    </div>
  );
}