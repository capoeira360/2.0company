import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroHorizontalPage from "../HeroHorizontalPage/HeroHorizontalPage";
import FinalOverlayPage from "../HeroHorizontalPage/FinalOverlayPage";
// HorizontalSections removed per request

export default function ServicesContent() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [finalOverlayOpen, setFinalOverlayOpen] = useState(false);
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
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "2.25rem", color: "var(--text)" }}>Our Services</h2>
      <p style={{ color: "var(--color-grey)", fontSize: "1.1rem", maxWidth: 650, textAlign: "center", marginTop: 10 }}>App development, cloud integration, UI/UX design, and more.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 24, width: "min(900px, 90vw)" }}>
        {[ 
          { title: "App Development", desc: "Modern web and mobile apps.", icon: "📱" },
          { title: "Cloud Integration", desc: "Scalable cloud-native systems.", icon: "☁️" },
          { title: "UI/UX Design", desc: "Beautiful user experiences.", icon: "🎨" },
          { title: "Consulting", desc: "Strategy and architecture.", icon: "🧠" }
        ].map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            style={{ background: "var(--color-ice)", borderRadius: 12, padding: 16, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 24 }}>{s.icon}</div>
            <h3 style={{ fontSize: "1.2rem", margin: "8px 0 4px" }}>{s.title}</h3>
            <p style={{ color: "var(--color-deep)", fontSize: ".95rem" }}>{s.desc}</p>
          </motion.div>
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
        title="Services Highlights"
        items={[
          { title: "Apps", desc: "Web and mobile.", icon: "📱" },
          { title: "Cloud", desc: "Scale and reliability.", icon: "☁️" },
          { title: "Design", desc: "UX/UI craft.", icon: "🎨" },
          { title: "Consulting", desc: "Architecture and strategy.", icon: "🧠" },
        ]}
      />
      <FinalOverlayPage
        open={finalOverlayOpen}
        onBack={() => { setFinalOverlayOpen(false); setOverlayOpen(true); }}
        title="Services—More"
        items={[
          { title: "Security", desc: "Hardening & compliance.", icon: "🔐" },
          { title: "Performance", desc: "Speed and scale.", icon: "⚡" },
          { title: "Automation", desc: "CI/CD pipelines.", icon: "🤖" },
          { title: "Support", desc: "Long-term partnership.", icon: "🤝" },
        ]}
      />
    </div>
  );
}
