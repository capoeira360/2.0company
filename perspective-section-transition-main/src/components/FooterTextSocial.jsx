import { footerLinks } from "./Header/Nav/data";
import { FlipAnchor } from "@/components/FlipLink";

export default function FooterTextSocial() {
  return (
    <div className="new-footer-social-text" aria-label="Social media links (text-only)">
      {footerLinks.map(({ title, href }) => (
        <FlipAnchor key={title} href={href}>{title}</FlipAnchor>
      ))}
    </div>
  );
}
