"use client";
import styles from "./style.module.scss";
import { links, footerLinks } from "./data";
import { FlipLink, FlipAnchor } from "@/components/FlipLink";

export default function Nav({ onNavigate }) {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <FlipLink href={href} onClick={onNavigate}>{title}</FlipLink>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <FlipAnchor key={`f_${i}`} href={href} onClick={onNavigate}>{title}</FlipAnchor>
          );
        })}
      </div>
    </div>
  );
}
