"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./HeroHorizontalPage.module.css";
import HorizontalSections from "../HorizontalSections/HorizontalSections";

export default function HeroHorizontalPage({ open, onClose, onNextOverlay, title = "Highlights", items = [] }) {
  const containerRef = useRef(null);
  const [containerEl, setContainerEl] = useState(null);
  const pageStep = () => {
    const el = containerEl;
    if (!el) return 0;
    return Math.max(0, el.clientWidth - 64);
  };
  const handleRight = () => {
    const el = containerEl;
    if (!el) return;
    const atEnd = el.scrollLeft >= (el.scrollWidth - el.clientWidth - 8);
    if (atEnd) {
      onNextOverlay?.();
      return;
    }
    el.scrollBy({ left: -pageStep(), behavior: "smooth" });
  };
  const handleLeft = () => {
    // Immediately close the overlay when tapping the left arc
    onClose?.();
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
        >
          <motion.div className={styles.panel}>
            <div className={styles.content}>
              <HorizontalSections id="hero-overlay-horizontal" title={title} startAtRight items={items} hideIndicator onReady={setContainerEl} />
            </div>
            {/* Right arc indicator */}
            <button
              aria-label="Next"
              onClick={handleRight}
              style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", width: 64, height: "4in", display: "grid", placeItems: "center", background: "transparent", border: "none", cursor: "pointer" }}
            >
              <svg viewBox="0 0 52 160" aria-hidden style={{ height: '100%', width: 56 }} preserveAspectRatio="none">
                <path d="M50 12 C 30 40, 30 120, 50 148" fill="none" stroke="#ff3b30" strokeWidth="4" />
                <motion.path d="M38 20 C 22 46, 22 114, 38 140" fill="none" stroke="#ff3b30" strokeWidth="4" strokeDasharray="190" animate={{ strokeDashoffset: [0, 24, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 2, ease: 'easeInOut' }} />
                <path d="M26 28 C 14 52, 14 108, 26 132" fill="none" stroke="#ff3b30" strokeWidth="4" />
              </svg>
            </button>
            {/* Left arc indicator */}
            <button
              aria-label="Previous"
              onClick={handleLeft}
              style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%) scaleX(-1)", width: 64, height: "4in", display: "grid", placeItems: "center", background: "transparent", border: "none", cursor: "pointer" }}
            >
              <svg viewBox="0 0 52 160" aria-hidden style={{ height: '100%', width: 56 }} preserveAspectRatio="none">
                <path d="M50 12 C 30 40, 30 120, 50 148" fill="none" stroke="#ff3b30" strokeWidth="4" />
                <motion.path d="M38 20 C 22 46, 22 114, 38 140" fill="none" stroke="#ff3b30" strokeWidth="4" strokeDasharray="190" animate={{ strokeDashoffset: [0, 24, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 2, ease: 'easeInOut' }} />
                <path d="M26 28 C 14 52, 14 108, 26 132" fill="none" stroke="#ff3b30" strokeWidth="4" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}