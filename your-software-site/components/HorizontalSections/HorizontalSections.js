"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import styles from "./HorizontalSections.module.css";

export default function HorizontalSections({ id = "horizontal-section", items = [], startAtRight = true, title = "More Content", onReady, hideIndicator = false }) {
  const containerRef = useRef(null);
  const [showIndicator, setShowIndicator] = useState(true);
  const arrowControls = useAnimationControls();
  // Animate the middle arc subtly to suggest motion
  useEffect(() => {
    arrowControls.start({
      strokeDasharray: 190,
      strokeDashoffset: [0, 24, 0],
      transition: { repeat: Infinity, repeatType: 'loop', duration: 2, ease: 'easeInOut' }
    });
  }, [arrowControls]);
  const handleIndicatorActivate = (e) => {
    e.stopPropagation();
    const el = containerRef.current;
    if (!el) return;
    // Slide by roughly a page width so the next horizontal section comes fully into view
    const pageStep = Math.max(0, el.clientWidth - 64);
    el.scrollBy({ left: -pageStep, behavior: "smooth" });
  };

  useEffect(() => {
    // Optionally start scrolled to the rightmost card
    const el = containerRef.current;
    if (!el) return;
    if (typeof onReady === "function") {
      onReady(el);
    }
    const doInit = () => {
      if (startAtRight) {
        // start exactly at the right edge without suppressing indicator
        el.scrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
      }
      // Start arrow nudge animation
      arrowControls.start({ x: [0, -8, 0], transition: { repeat: Infinity, repeatType: "loop", duration: 1.4, ease: "easeInOut" } });
    };
    // Slight delay to ensure layout computed
    const t = setTimeout(doInit, 50);
    return () => {
      clearTimeout(t);
    };
  }, [startAtRight, arrowControls]);

  return (
    <section id={id} aria-label={title} className={styles.wrapper}>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
      <div className={styles.container} ref={containerRef}>
        {items.map((it, i) => (
          <motion.div key={i} className={styles.card} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            {it.icon && <div style={{ fontSize: 24, marginBottom: 8 }}>{it.icon}</div>}
            <h3 className={styles.title}>{it.title}</h3>
            {it.desc && <p className={styles.desc}>{it.desc}</p>}
          </motion.div>
        ))}
      </div>
      {(!hideIndicator && showIndicator) && (
        <motion.div
          className={styles.arcIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ filter: `brightness(var(--indicator-hover-brightness))` }}
          role="button"
          tabIndex={0}
          aria-label="Reveal next section"
          onClick={handleIndicatorActivate}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleIndicatorActivate(e); }}
        >
          <motion.svg width="52" height="160" viewBox="0 0 52 160" aria-hidden
            style={{ filter: 'drop-shadow(0 0 6px rgba(0,0,0,0.25))' }}
            // Removed vertical bobbing to prevent perceived downward movement near cursor
            animate={{}} transition={{}}
          >
          <defs>
            <linearGradient id="horizontalArcGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--indicator-start)" />
              <stop offset="100%" stopColor="var(--indicator-end)" />
            </linearGradient>
          </defs>
            <motion.path d="M50 12 C 30 40, 30 120, 50 148" fill="none" stroke="url(#horizontalArcGradient)" strokeWidth="4" opacity={0.9} />
            <motion.path d="M38 20 C 22 46, 22 114, 38 140" fill="none" stroke="url(#horizontalArcGradient)" strokeWidth="4" animate={arrowControls} />
            <motion.path d="M26 28 C 14 52, 14 108, 26 132" fill="none" stroke="url(#horizontalArcGradient)" strokeWidth="4" opacity={0.9} />
          </motion.svg>
        </motion.div>
      )}
    </section>
  );
}
