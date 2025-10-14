import { useEffect, useState } from "react";
import HeroHorizontalPage from "../HeroHorizontalPage/HeroHorizontalPage";
import FinalOverlayPage from "../HeroHorizontalPage/FinalOverlayPage";
import styles from "./ServicesContent.module.css";
import ServicesProcessOverlayContent from "../HeroHorizontalPage/ServicesProcessOverlayContent";

export default function ServicesContent() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [finalOverlayOpen, setFinalOverlayOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const close = () => { setOverlayOpen(false); setFinalOverlayOpen(false); };
    window.addEventListener('app:close-overlays', close);
    const open = (e) => { if (e?.detail?.section === 'services') setOverlayOpen(true); };
    window.addEventListener('app:open-overlay', open);
    return () => { 
      window.removeEventListener('app:close-overlays', close);
      window.removeEventListener('app:open-overlay', open);
    };
  }, []);

  // CSS keyframes handle the marquee; we just toggle play state via class.

  const CARDS = [
    { icon: "🌐", title: "Web Development", desc: "Custom web applications built with modern technologies for optimal performance and user experience.", features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions"], tech: ["React", "Next.js", "Vue.js"] },
    { icon: "📱", title: "Mobile Development", desc: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.", features: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization"], tech: ["React Native", "Flutter", "Swift"] },
    { icon: "🧠", title: "AI & Machine Learning", desc: "Intelligent solutions powered by artificial intelligence to automate processes and enhance decision-making.", features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics"], tech: ["TensorFlow", "PyTorch", "OpenAI"] },
    { icon: "🧩", title: "Custom Software", desc: "Tailored software solutions designed to meet your specific business requirements and workflows.", features: ["Enterprise Applications", "System Integration", "Legacy System Modernization"], tech: ["Java", "C#", ".NET"] },
    { icon: "🎨", title: "UI/UX Design", desc: "User-centered design solutions that create intuitive and engaging digital experiences.", features: ["User Research", "Wireframing & Prototyping", "Visual Design"], tech: ["Figma", "Adobe XD", "Sketch"] },
    { icon: "🗄️", title: "Cloud Solutions", desc: "Scalable cloud infrastructure and services to power your digital transformation.", features: ["Cloud Migration", "DevOps & CI/CD", "Microservices Architecture"], tech: ["AWS", "Azure", "Google Cloud"] },
    { icon: "🧾", title: "Domain & Hosting", desc: "Comprehensive domain registration and reliable hosting solutions for your web presence.", features: ["Domain Registration", "SSL Certificates", "24/7 Server Monitoring"], tech: ["cPanel", "CloudFlare", "Let's Encrypt"] },
  ];

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.subtitle}>From concept to deployment, we provide comprehensive solutions tailored to your business needs.</p>
      </header>
      <div className={styles.marqueeWrap}>
        <button
          className={styles.scrollBtn}
          aria-label={isScrolling ? "Pause services scroll" : "Start services scroll"}
          onClick={() => setIsScrolling((s) => !s)}
        >
          {isScrolling ? "Pause" : "Scroll"}
        </button>

        <div className={styles.marquee}>
          <div className={`${styles.track} ${isScrolling ? styles.running : styles.paused}`}>
          <div className={styles.pass}>
            {CARDS.map((c, i) => (
              <article key={`a-${c.title}-${i}`} className={styles.card}>
                <div className={styles.icon}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
                <div className={styles.sectionLabel}><span className={styles.dot} /> KEY FEATURES</div>
                <ul className={styles.list}>
                  {c.features.map((f) => (
                    <li key={f}><span className={styles.check}>✓</span>{f}</li>
                  ))}
                </ul>
                <div className={styles.sectionLabel} style={{ marginTop: 16 }}><span className={styles.dot} /> TECHNOLOGIES</div>
                <div className={styles.tags}>
                  {c.tech.map((t) => (<span key={t} className={styles.tag}>{t}</span>))}
                  <button className={styles.moreBtn}>+2 more</button>
                </div>
                <a href="#contact" className={styles.learnLink}>Learn More →</a>
              </article>
            ))}
          </div>
            <div className={styles.pass}>
              {CARDS.map((c, i) => (
                <article key={`b-${c.title}-${i}`} className={styles.card}>
                <div className={styles.icon}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
                <div className={styles.sectionLabel}><span className={styles.dot} /> KEY FEATURES</div>
                <ul className={styles.list}>
                  {c.features.map((f) => (
                    <li key={f}><span className={styles.check}>✓</span>{f}</li>
                  ))}
                </ul>
                <div className={styles.sectionLabel} style={{ marginTop: 16 }}><span className={styles.dot} /> TECHNOLOGIES</div>
                <div className={styles.tags}>
                  {c.tech.map((t) => (<span key={t} className={styles.tag}>{t}</span>))}
                  <button className={styles.moreBtn}>+2 more</button>
                </div>
                <a href="#contact" className={styles.learnLink}>Learn More →</a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <HeroHorizontalPage
        open={overlayOpen}
        onClose={() => { 
          setOverlayOpen(false); 
          setFinalOverlayOpen(false);
          if (typeof window !== 'undefined') window.dispatchEvent(new Event('app:close-overlays'));
        }}
        onNextOverlay={() => { setOverlayOpen(false); setFinalOverlayOpen(true); }}
        title="Our Process"
        items={[]}
        customContent={<ServicesProcessOverlayContent />}
      />
      <FinalOverlayPage
        open={finalOverlayOpen}
        onBack={() => { setFinalOverlayOpen(false); setOverlayOpen(true); }}
        title="Deep Dive"
        items={[{ title: "Case Studies", desc: "Selected wins.", icon: "📚" }]}
      />
    </section>
  );
}