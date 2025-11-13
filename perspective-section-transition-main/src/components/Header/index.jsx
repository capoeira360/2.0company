"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import styles from "./style.module.scss";
import Nav from "./Nav";

const menuVariants = {
  open: {
    width: "768px",
    height: "794px",
    top: "-25px",
    right: "-25px",
    backgroundColor: "#c9fd74",
    boxShadow: "0 20px 60px rgba(17,19,23,0.15)",
    opacity: 1,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none",
    opacity: 0,
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  // Auto-close the menu on route change so it never overlays inputs
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <AnimatePresence>
          {isActive && <Nav onNavigate={() => setIsActive(false)} />}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </div>
  );
}