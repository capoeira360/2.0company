"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./SimpleMenu.module.css";
import { useRouter } from "next/router";

const LINKS = [
  { title: "Home", path: "/" },
  { title: "About", path: "/#about" },
  { title: "Services", path: "/#services" },
  { title: "Portfolio", path: "/#portfolio" },
  { title: "Contact", path: "/#contact" },
];

export default function SimpleMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const perspective = {
    initial: { opacity: 0, rotateX: 90, translateY: 60, translateX: -10 },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }),
    exit: { opacity: 0, translateY: 10, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
  };

  const handleNav = (path) => {
    try {
      if (typeof window !== 'undefined') {
        // Signal overlays to close before navigation
        window.dispatchEvent(new Event('app:close-overlays'));
        // Normalize Home to section target
        if (path === '/' || path === '/#home') {
          path = '/#home';
          const el = document.getElementById('home');
          if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
        }
      }
    } catch {}
    router.push(path);
    setOpen(false);
  };

  return (
    <>
      <motion.button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="simple-menu-panel"
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className={styles.toggleSlider}
          animate={{ y: open ? "-100%" : "0%" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <span className={styles.toggleLabel}>Menu</span>
          <span className={styles.toggleLabel}>Close</span>
        </motion.div>
      </motion.button>

      <div
        id="simple-menu-panel"
        className={`${styles.panel} ${open ? styles.open : styles.closed}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <AnimatePresence>
          {open && (
            <motion.nav className={styles.nav} aria-label="Site sections" initial={false}>
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.path}
                  className={styles.link}
                  onClick={() => handleNav(l.path)}
                  variants={perspective}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  whileHover={{ x: 4 }}
                >
                  {l.title}
                </motion.button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}