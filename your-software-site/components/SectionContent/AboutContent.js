import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroHorizontalPage from "../HeroHorizontalPage/HeroHorizontalPage";
import FinalOverlayPage from "../HeroHorizontalPage/FinalOverlayPage";

export default function AboutContent() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [finalOverlayOpen, setFinalOverlayOpen] = useState(false);
  // Close overlays when global event is dispatched (e.g., from menu navigation)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const close = () => { setOverlayOpen(false); setFinalOverlayOpen(false); };
    window.addEventListener('app:close-overlays', close);
    const open = (e) => { if (e?.detail?.section === 'about') setOverlayOpen(true); };
    window.addEventListener('app:open-overlay', open);
    return () => { 
      window.removeEventListener('app:close-overlays', close);
      window.removeEventListener('app:open-overlay', open);
    };
  }, []);
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: 20 }}>About Us</h2>
      <p style={{ color: "#666", maxWidth: 700, textAlign: "center" }}>We are a team of designers and engineers focused on delivering elegant solutions.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginTop: 24, width: "min(900px, 90vw)" }}>
        {["Alex", "Jordan", "Taylor", "Sam"].map((name, i) => (
          <motion.div key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            style={{ background: "#e9ecef", borderRadius: 12, padding: 16, textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#dfe4ea", margin: "0 auto 8px" }} />
            <strong style={{ fontSize: "1rem" }}>{name}</strong>
            <div style={{ color: "#888", fontSize: ".9rem" }}>Engineer</div>
          </motion.div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 28, width: "min(900px, 90vw)" }}>
        {["Quality", "Transparency", "Innovation"].map((value, i) => (
          <motion.div key={value}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            style={{ background: "#e9ecef", borderRadius: 12, padding: 16, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.1rem", margin: 0 }}>{value}</h3>
            <p style={{ color: "#666", fontSize: ".95rem", marginTop: 8 }}>We prioritize {value.toLowerCase()} in every project.</p>
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
        title="About Highlights"
        items={[
          { title: "Team", desc: "Designers and engineers.", icon: "👥" },
          { title: "Values", desc: "Quality, transparency, innovation.", icon: "💎" },
          { title: "Culture", desc: "Curiosity and craft.", icon: "🧭" },
          { title: "Careers", desc: "Join the crew.", icon: "📣" },
        ]}
      />
      <FinalOverlayPage
        open={finalOverlayOpen}
        onBack={() => { setFinalOverlayOpen(false); setOverlayOpen(true); }}
        title="About—More"
        items={[
          { title: "Process", desc: "Discovery → build → iterate.", icon: "🔄" },
          { title: "Toolkit", desc: "React, Node, Cloud.", icon: "🛠️" },
          { title: "Community", desc: "Open source contributions.", icon: "🌐" },
          { title: "Contact", desc: "Reach out anytime.", icon: "✉️" },
        ]}
      />
    </div>
  );
}
