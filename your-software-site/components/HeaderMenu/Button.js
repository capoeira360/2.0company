"use client";
import { motion } from "framer-motion";
import styles from "./Button.module.css";

export default function Button({ isActive, toggleMenu, ariaExpanded, ariaControlsId }) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <ToggleButton
            label="Menu"
            onClick={toggleMenu}
            ariaExpanded={ariaExpanded}
            ariaControlsId={ariaControlsId}
          />
        </div>
        <div className={styles.el}>
          <ToggleButton
            label="Close"
            onClick={toggleMenu}
            ariaExpanded={ariaExpanded}
            ariaControlsId={ariaControlsId}
          />
        </div>
      </motion.div>
    </div>
  );
}

function ToggleButton({ label, onClick, ariaExpanded, ariaControlsId }) {
  return (
    <button
      type="button"
      className={styles.perspectiveText}
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControlsId}
    >
      <p>{label}</p>
      <p>{label}</p>
    </button>
  );
}