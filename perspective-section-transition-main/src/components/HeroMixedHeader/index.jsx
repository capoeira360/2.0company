"use client";
import React from "react";
import styles from "./style.module.css";

export default function HeroMixedHeader() {
  return (
    <div className={styles.wrapper}>
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