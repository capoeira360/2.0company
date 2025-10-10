"use client";
import { useState } from "react";
import styles from "./SimpleMenu.module.css";

const LINKS = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Services", id: "services" },
  { title: "Case Studies", id: "case-studies" },
  { title: "Contact", id: "contact" },
];

export default function SimpleMenu() {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="simple-menu-panel"
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        id="simple-menu-panel"
        className={`${styles.panel} ${open ? styles.open : styles.closed}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <nav className={styles.nav} aria-label="Site sections">
          {LINKS.map((l) => (
            <button key={l.id} className={styles.link} onClick={() => handleNav(l.id)}>
              {l.title}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}