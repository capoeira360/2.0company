"use client";
import { motion } from "framer-motion";
import styles from "./ServicesOverlayContent.module.css";

export default function ServicesOverlayContent() {
  const cards = [
    {
      icon: "<>",
      title: "Web Design & Development",
      desc: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      items: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Modern UI/UX"
      ]
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android.",
      items: [
        "Native iOS/Android",
        "Cross-Platform",
        "App Store Optimization",
        "Push Notifications"
      ]
    },
    {
      icon: "⚙️",
      title: "AI Systems & Integration",
      desc: "Intelligent solutions powered by machine learning and AI to automate processes and enhance decision-making.",
      items: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ]
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.sub}>
          From concept to deployment, we provide comprehensive solutions tailored to your business needs.
        </p>
      </div>
      <div className={styles.grid}>
        {cards.map((c, i) => (
          <motion.article key={c.title} className={styles.card} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <div className={styles.icon}>{c.icon}</div>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDesc}>{c.desc}</p>
            <ul className={styles.list}>
              {c.items.map((it) => (
                <li key={it}><span className={styles.check}>✓</span> {it}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

