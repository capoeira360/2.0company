import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./CaseStudiesContent.module.css";
import HeroHorizontalPage from "../HeroHorizontalPage/HeroHorizontalPage";
import FinalOverlayPage from "../HeroHorizontalPage/FinalOverlayPage";

export default function CaseStudiesContent() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [finalOverlayOpen, setFinalOverlayOpen] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const close = () => { setOverlayOpen(false); setFinalOverlayOpen(false); };
    window.addEventListener('app:close-overlays', close);
    const open = (e) => { if (e?.detail?.section === 'portfolio') setOverlayOpen(true); };
    window.addEventListener('app:open-overlay', open);
    return () => { 
      window.removeEventListener('app:close-overlays', close);
      window.removeEventListener('app:open-overlay', open);
    };
  }, []);
  return (
    <div className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
      </header>

      {/* Case study cards */}
      <div className={styles.cards}>
        {[
          {
            category: "E-commerce Platform",
            title: "Tanzanian Handcraft Marketplace",
            desc:
              "An Etsy-like marketplace connecting Tanzanian artisans with global customers, featuring handcrafted art, traditional crafts, and unique cultural products with integrated payment systems and seller tools.",
            tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
            status: ["In Development", "Q2 2025 Launch", "Pre-launch"],
            features: [
              "Artisan Profiles",
              "Cultural Storytelling",
              "Multi-currency Support",
              "Mobile-first Design",
              "Seller Dashboard",
              "Global Shipping",
            ],
            icon: "🛍️",
          },
          {
            category: "Business Management",
            title: "SoloPro AI Management Platform",
            desc:
              "An AI-driven platform for solopreneurs and early-stage entrepreneurs, providing intelligent business management, automated workflows, and strategic insights without requiring additional staff.",
            tech: ["React", "Python", "OpenAI", "FastAPI", "PostgreSQL"],
            status: ["Beta Testing", "Q1 2025 Launch", "50+ Tools"],
            features: [
              "AI Task Automation",
              "Smart Scheduling",
              "Financial Insights",
              "Customer Management",
              "Content Generation",
              "Performance Analytics",
            ],
            icon: "🧠",
          },
        ].map((c, i) => (
          <motion.article
            key={c.title}
            className={styles.card}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className={styles.category}>{c.category}</div>
            <div className={styles.icon}>{c.icon}</div>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDesc}>{c.desc}</p>
            <div className={styles.metaRow}>
              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Tech Stack</div>
                <div className={styles.tags}>{c.tech.map((t) => (<span key={t} className={styles.tag}>{t}</span>))}</div>
              </div>
              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Status</div>
                <div className={styles.tags}>{c.status.map((s) => (<span key={s} className={styles.tag}>{s}</span>))}</div>
              </div>
            </div>
            <div className={styles.featuresWrap}>
              <div className={styles.metaLabel}>Key Features</div>
              <ul className={styles.list}>
                {c.features.map((f) => (
                  <li key={f}><span className={styles.check}>✓</span>{f}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Global overlay button handles trigger; removed local chevron */}

      <HeroHorizontalPage
        open={overlayOpen}
        onClose={() => { 
          setOverlayOpen(false); 
          setFinalOverlayOpen(false);
          if (typeof window !== 'undefined') window.dispatchEvent(new Event('app:close-overlays'));
        }}
        onNextOverlay={() => { setOverlayOpen(false); setFinalOverlayOpen(true); }}
        title="Portfolio Highlights"
        items={[
          { title: "Case A", desc: "E-commerce uplift.", icon: "🛍️" },
          { title: "Case B", desc: "Platform migration.", icon: "🧩" },
          { title: "Case C", desc: "AI assistant.", icon: "🤖" },
          { title: "Case D", desc: "Cloud scaling.", icon: "☁️" },
        ]}
      />
      <FinalOverlayPage
        open={finalOverlayOpen}
        onBack={() => { setFinalOverlayOpen(false); setOverlayOpen(true); }}
        title="Portfolio—More"
        items={[
          { title: "Benchmarks", desc: "Latency and throughput wins.", icon: "📈" },
          { title: "Security", desc: "Audits and compliance.", icon: "🛡️" },
          { title: "Ops", desc: "Monitoring and SRE.", icon: "🧰" },
          { title: "Next", desc: "Upcoming launches.", icon: "🚀" },
        ]}
      />
    </div>
  );
}
