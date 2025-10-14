"use client";
import { motion } from "framer-motion";
import styles from "./Nav.module.css";
import { useRouter } from "next/router";

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "Portfolio", href: "/#portfolio" },
  { title: "Contact", href: "/#contact" },
];

const footerLinks = [
  { title: "Twitter", href: "https://twitter.com" },
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "Instagram", href: "https://instagram.com" },
  { title: "GitHub", href: "https://github.com" },
];

const perspective = {
  initial: { opacity: 0, rotateX: 90, translateY: 80, translateX: -20 },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: { opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
};

const slideIn = {
  initial: { opacity: 0, y: 20 },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.75 + i * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function Nav() {
  const router = useRouter();
  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className={styles.nav} id="site-nav-menu">
      <div className={styles.body}>
        {links.map((link, i) => (
          <div key={`b_${i}`} className={styles.linkContainer}>
            <motion.div custom={i} variants={perspective} initial="initial" animate="enter" exit="exit">
              <a href={link.href} onClick={(e) => handleClick(e, link.href)}>{link.title}</a>
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => (
          <motion.a
            key={`f_${i}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={slideIn}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {link.title}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}