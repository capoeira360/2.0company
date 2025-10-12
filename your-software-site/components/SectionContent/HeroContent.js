import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroHorizontalPage from "../HeroHorizontalPage/HeroHorizontalPage";
import FinalOverlayPage from "../HeroHorizontalPage/FinalOverlayPage";
import CircleChevronButton from "../Indicators/CircleChevronButton";
import styles from "./HeroContent.module.css";

export default function HeroContent() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [finalOverlayOpen, setFinalOverlayOpen] = useState(false);
  // Close overlays when global event is dispatched (e.g., from menu navigation)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const close = () => { setOverlayOpen(false); setFinalOverlayOpen(false); };
    window.addEventListener('app:close-overlays', close);
    return () => { window.removeEventListener('app:close-overlays', close); };
  }, []);
  return (
    <section className={styles.heroSection}>
      {/* Typography-led hero content */}
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          <span className={`${styles.line} ${styles.top}`}>SOFTWARE</span>
          <span className={`${styles.line} ${styles.bottom}`}>INNOVATION</span>
          <span className={styles.ampersand}>&</span>
        </h1>
        <p className={styles.subcopy}>
          We design and build modern software—apps, platforms, and automation—
          delivering scalable, secure solutions for ambitious teams.
        </p>
        <div className={styles.actionRow}>
          <motion.button
            className={styles.discoverBtn}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation();
              const el = document.querySelector('#about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >Discover</motion.button>
          <div className={styles.miniNav}>
            <span>Attract</span>
            <span>Engage</span>
            <span>Convert</span>
            <span>Delight</span>
          </div>
        </div>
      </div>

      {/* Right-side circular chevron button indicator */}
      <CircleChevronButton
        ariaLabel="Open highlights"
        direction="right"
        onClick={() => setOverlayOpen(true)}
        size={48}
        style={{ position: "fixed", right: 0, top: "50%", transform: "translateY(-50%)", zIndex: 1000 }}
      />
      <HeroHorizontalPage
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        onNextOverlay={() => { setOverlayOpen(false); setFinalOverlayOpen(true); }}
        title="Highlights"
        items={[
          { title: "What we build", desc: "Apps, platforms, systems.", icon: "🧩" },
          { title: "How we deliver", desc: "Fast, iterative, quality.", icon: "🚀" },
          { title: "Why us", desc: "Expert team, proven results.", icon: "🏅" },
          { title: "Get started", desc: "Discovery call today.", icon: "📞" },
        ]}
      />
      <FinalOverlayPage
        open={finalOverlayOpen}
        onBack={() => { setFinalOverlayOpen(false); setOverlayOpen(true); }}
        title="More Highlights"
        items={[
          { title: "Case studies", desc: "Selected wins.", icon: "🛍️" },
          { title: "Tooling", desc: "DX and CI/CD.", icon: "🛠️" },
          { title: "Security", desc: "Hardening & compliance.", icon: "🔐" },
          { title: "Performance", desc: "Scale with confidence.", icon: "⚡" },
        ]}
      />
    </section>
  );
}
