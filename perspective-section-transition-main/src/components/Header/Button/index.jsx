"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Button({ isActive, toggleMenu }) {
  const transition = { duration: 0.3, ease: [0.76, 0, 0.24, 1] };

  const topLineVariants = {
    closed: { rotate: 0, y: -3 },
    open: { rotate: 45, y: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 3 },
    open: { rotate: -45, y: 0 },
  };

  return (
    <motion.button
      type="button"
      aria-label={isActive ? "Close menu" : "Open menu"}
      aria-expanded={isActive}
      className={styles.button}
      onClick={toggleMenu}
      style={{ backgroundColor: "transparent" }}
    >
      <div className={styles.icon}>
        <motion.span
          className={styles.line}
          variants={topLineVariants}
          animate={isActive ? "open" : "closed"}
          transition={transition}
          style={{ backgroundColor: "#000" }}
        />
        <motion.span
          className={styles.line}
          variants={bottomLineVariants}
          animate={isActive ? "open" : "closed"}
          transition={transition}
          style={{ backgroundColor: "#000" }}
        />
      </div>
    </motion.button>
  );
}
