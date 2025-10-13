import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "2rem" }}>Portfolio</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, marginTop: 16, width: "min(900px, 90vw)" }}>
        {["A", "B", "C", "D", "E", "F"].map((logo, i) => (
          <motion.div key={logo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            style={{ background: "#e9ecef", height: 60, borderRadius: 10 }} />
        ))}
      </div>
      <motion.blockquote
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontStyle: "italic", fontSize: "1.1rem", color: "#555", maxWidth: 700, textAlign: "center", marginTop: 24 }}>
        "They delivered beyond expectations. Our product velocity doubled."
      </motion.blockquote>

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
