"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

export default function CrossfadePreview({ currentSrc, nextSrc, durationMs = 8000 }) {
  const [showNext, setShowNext] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    setShowNext(false);
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    // Start fade
    const start = setTimeout(() => setShowNext(true), 10);
    // Commit new image after fade completes
    timer.current = setTimeout(() => {
      setShowNext(false);
    }, durationMs + 20);
    return () => {
      clearTimeout(start);
      if (timer.current) clearTimeout(timer.current);
      timer.current = null;
    };
  }, [currentSrc, nextSrc, durationMs]);

  return (
    <div className={styles.fadeWrap}>
      <img src={currentSrc} alt="Current technology" className={`${styles.layer} ${!showNext ? styles.show : ""}`} />
      <img src={nextSrc} alt="Next technology" className={`${styles.layer} ${showNext ? styles.show : ""}`} style={{ transitionDuration: `${durationMs}ms` }} />
    </div>
  );
}
