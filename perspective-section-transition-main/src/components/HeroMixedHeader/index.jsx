"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import styles from "./style.module.css";

export default function HeroMixedHeader() {
  const rootRef = useRef(null);
  const vantaInstance = useRef(null);

  const initVanta = useCallback(() => {
    try {
      if (typeof window !== "undefined" && window.VANTA && rootRef.current && !vantaInstance.current) {
        vantaInstance.current = window.VANTA.GLOBE({
          el: rootRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      }
    } catch (e) {
      // fail silently if scripts not yet loaded
    }
  }, []);

  useEffect(() => {
    initVanta();
    return () => {
      if (vantaInstance.current && typeof vantaInstance.current.destroy === "function") {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, [initVanta]);

  return (
    <div ref={rootRef} className={styles.wrapper}>
      {/* Load required scripts for Vanta Globe after hydration */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js" strategy="afterInteractive" onLoad={initVanta} />
      <div className="container">
        <h1 className={styles.mega}>
          <span className={styles.row}>
            <span className={styles.montalban}>We craft</span>
          </span>
          <span className={styles.row}>
            <span className={styles.artineAccent}>software</span>
            <span className={styles.montalbanDim}>&nbsp;that ships</span>
          </span>
        </h1>
        <p className={styles.sub}>
          Product strategy, design systems, and front‑end engineering — grounded in performance.
        </p>
      </div>
    </div>
  );
}