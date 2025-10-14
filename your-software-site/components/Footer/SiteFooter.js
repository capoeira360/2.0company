"use client";
import { motion, useTransform, useSpring } from "framer-motion";
import styles from "./SiteFooter.module.css";

const FOOTER_HEIGHT = 288;

export default function SiteFooter({ scrollYProgress }) {
  const start = 4 / 5; // last section start
  const end = 1.0;     // last section end
  const segmentProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const raiseTarget = useTransform(segmentProgress, [0.45, 0.85], [FOOTER_HEIGHT, 0]);
  const footerY = useSpring(raiseTarget, { stiffness: 180, damping: 24, mass: 0.9 });

  return (
    <motion.footer
      className={styles.footer}
      style={{ height: FOOTER_HEIGHT, y: footerY }}
      aria-label="Site footer"
    >
      <div className={styles.content}>
        <div className={styles.grid}>
          {/* Brand & Contact */}
          <div className={styles.brand}>
            <div className={styles.logo}>TAPit</div>
            <div className={styles.tagline}>
              Transforming ideas into cutting-edge digital solutions for modern businesses worldwide.
            </div>
            <div className={styles.contact}>
              <div className={styles.contactRow}>
                <span>✉️</span>
                <a className={styles.contactLink} href="mailto:info@tapitsoftwares.tech">info@tapitsoftwares.tech</a>
              </div>
              <div className={styles.contactRow}>
                <span>📞</span>
                <a className={styles.contactLink} href="tel:+255740577877" style={{color: '#ffffff', fontSize: '16px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontWeight: '400'}}>+255 740 577 877</a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <div className={styles.listTitle}>Our Services</div>
            <ul className={styles.list} aria-label="Services">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">AI Solutions</a></li>
              <li><a href="#services">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className={styles.listTitle}>Company</div>
            <ul className={styles.list} aria-label="Company">
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <div className={styles.listTitle}>Connect With Us</div>
            <div className={styles.social} aria-label="Social links">
              <a className={styles.socialLink} href="https://twitter.com" aria-label="Twitter">𝕏</a>
              <a className={styles.socialLink} href="https://linkedin.com" aria-label="LinkedIn">in</a>
              <a className={styles.socialLink} href="https://instagram.com" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <span style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontWeight: '400'}}>© 2025 Software Company</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </motion.footer>
  );
}