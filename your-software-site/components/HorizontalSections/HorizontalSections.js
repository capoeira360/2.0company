"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import styles from "./HorizontalSections.module.css";

export default function HorizontalSections({ id = "horizontal-section", items = [], startAtRight = true, title = "More Content" }) {
  const containerRef = useRef(null);
  const [showIndicator, setShowIndicator] = useState(true);
  const arrowControls = useAnimationControls();
  const handleIndicatorActivate = (e) => {
    e.stopPropagation();
    const el = containerRef.current;
    if (!el) return;
    const first = el.firstElementChild;
    let gap = 16;
    if (typeof window !== "undefined") {
      const cs = window.getComputedStyle(el);
      const g = parseFloat(cs.gap || cs.columnGap || cs.rowGap || "16");
      if (!Number.isNaN(g)) gap = g;
    }
    const cardWidth = first ? first.getBoundingClientRect().width : el.clientWidth * 0.8;
    const step = cardWidth + gap;
    el.scrollBy({ left: -step, behavior: "smooth" });
  };

  useEffect(() => {
    // Optionally start scrolled to the rightmost card
    const el = containerRef.current;
    if (!el) return;
    const doInit = () => {
      if (startAtRight) {
        el.scrollLeft = el.scrollWidth;
      }
      // Start arrow nudge animation
      arrowControls.start({ x: [0, -8, 0], transition: { repeat: Infinity, repeatType: "loop", duration: 1.4, ease: "easeInOut" } });
    };
    // Slight delay to ensure layout computed
    const t = setTimeout(doInit, 50);
    const onScroll = () => {
      if (el.scrollLeft > 8 || el.scrollLeft < el.scrollWidth - el.clientWidth - 8) {
        setShowIndicator(false);
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      el.removeEventListener("scroll", onScroll);
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
      {showIndicator && (
        <motion.div
          className={styles.indicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleIndicatorActivate}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleIndicatorActivate(e); }}
          role="button"
          tabIndex={0}
          aria-label="Scroll left to view more"
        >
          <motion.span animate={arrowControls} aria-hidden>⬅︎</motion.span>
          <span className={styles.indicatorText}>Scroll left to view more</span>
        </motion.div>
      )}
    </section>
  );
}
