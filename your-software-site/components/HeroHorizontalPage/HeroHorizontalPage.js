"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./HeroHorizontalPage.module.css";
import HorizontalSections from "../HorizontalSections/HorizontalSections";
import CircleChevronButton from "../Indicators/CircleChevronButton";

export default function HeroHorizontalPage({ open, onClose, onNextOverlay, title = "Highlights", items = [], customContent = null }) {
  const containerRef = useRef(null);
  const [containerEl, setContainerEl] = useState(null);
  const pageStep = () => {
    const el = containerEl;
    if (!el) return 0;
    return Math.max(0, el.clientWidth - 64);
  };
  const handleRight = () => {
    const el = containerEl;
    // If no container (e.g., customContent provided), go straight to next overlay
    if (!el) {
      onNextOverlay?.();
      return;
    }
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
              {customContent 
                ? customContent 
                : <HorizontalSections id="hero-overlay-horizontal" title={title} startAtRight items={items} hideIndicator onReady={setContainerEl} />}
            </div>
            {/* Right circular chevron button indicator */}
            <CircleChevronButton
              ariaLabel="Next"
              direction="right"
              onClick={handleRight}
              size={48}
              style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}
            />
            {/* Left circular chevron button indicator */}
            <CircleChevronButton
              ariaLabel="Previous"
              direction="left"
              onClick={handleLeft}
              size={48}
              style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}