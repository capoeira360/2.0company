"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./HeroHorizontalPage.module.css";
import HorizontalSections from "../HorizontalSections/HorizontalSections";
import CircleChevronButton from "../Indicators/CircleChevronButton";

export default function FinalOverlayPage({ open, onBack, title = "Deep Dive", items = [], customContent = null }) {
  const [containerEl, setContainerEl] = useState(null);
  const pageStep = () => Math.max(0, (containerEl?.clientWidth || 0) - 64);
  const handleRight = () => {
    const el = containerEl;
    if (!el) return;
    el.scrollBy({ left: -pageStep(), behavior: "smooth" });
  };
  const handleLeft = () => {
    // Always go back to previous overlay immediately
    onBack?.();
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
              {customContent ? (
                customContent
              ) : (
                <HorizontalSections
                  id="hero-final-horizontal"
                  title={title}
                  startAtRight
                  items={items}
                  hideIndicator
                  onReady={setContainerEl}
                />
              )}
            </div>
            {/* Right circular chevron button indicator */}
            <CircleChevronButton
              ariaLabel="Next"
              direction="right"
              onClick={handleRight}
              size={48}
              float={false}
              style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}
            />
            {/* Left circular chevron button indicator */}
            <CircleChevronButton
              ariaLabel="Back"
              direction="left"
              onClick={handleLeft}
              size={48}
              float={false}
              style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}