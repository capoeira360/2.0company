"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import Button from "./Button";
import styles from "./HeaderMenu.module.css";

const menuVariants = {
  open: {
    width: 480,
    height: 650,
    top: -25,
    right: -25,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: 100,
    height: 40,
    top: 0,
    right: 0,
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
};

export default function HeaderMenu() {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsActive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Move focus to first link when opening
  useEffect(() => {
    if (isActive && containerRef.current) {
      const firstLink = containerRef.current.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }
  }, [isActive]);

  return (
    <div className={styles.header}>
      <motion.div
        className={`${styles.menu} ${isActive ? styles.menuOpen : styles.menuClosed}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation menu"
        aria-hidden={!isActive}
        ref={containerRef}
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => setIsActive((v) => !v)}
        ariaExpanded={isActive}
        ariaControlsId="site-nav-menu"
      />
    </div>
  );
}