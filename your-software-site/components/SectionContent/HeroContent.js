import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroHorizontalPage from "../HeroHorizontalPage/HeroHorizontalPage";
import FinalOverlayPage from "../HeroHorizontalPage/FinalOverlayPage";

export default function HeroContent() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [finalOverlayOpen, setFinalOverlayOpen] = useState(false);
  // Close overlays when global event is dispatched (e.g., from menu navigation)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const close = () => { setOverlayOpen(false); setFinalOverlayOpen(false); };
    window.addEventListener('app:close-overlays', close);
    return () => { window.removeEventListener('app:close-overlays', close); };
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <h1 style={{ fontSize: "3rem", margin: 0, fontWeight: 700 }}>Welcome to Your Software Co.</h1>
      <p style={{ color: "#666", fontSize: "1.25rem", maxWidth: 480, textAlign: "center", marginTop: 16 }}>
        Beautiful, modern web solutions.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{
          marginTop: 24,
          background: "#2f3640",
          color: "#f5f6fa",
          border: "none",
          padding: "12px 20px",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: "1rem",
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
        }}
        onClick={(e) => {
          e.stopPropagation();
          const el = document.querySelector('#contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >Get Started</motion.button>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          marginTop: 28,
          width: 560,
          maxWidth: '90vw',
          height: 240,
          borderRadius: 16,
          background: 'linear-gradient(135deg, #dfe4ea 0%, #c8d6e5 100%)',
          boxShadow: '0 12px 30px rgba(47,54,64,0.15)'
        }}
        aria-label="Hero image placeholder"
      />
      {/* Right-side indicator (arc-only styling) */}
      <button
        aria-label="Open highlights"
        onClick={() => setOverlayOpen(true)}
        style={{
          position: "fixed",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          width: 64,
          height: "4in",
          background: "transparent",
          display: "grid",
          placeItems: "center",
          cursor: "pointer",
          border: "none",
          zIndex: 1000
        }}
      >
        <svg viewBox="0 0 52 160" aria-hidden style={{ height: '100%', width: 56 }} preserveAspectRatio="none">
          <path d="M50 12 C 30 40, 30 120, 50 148" fill="none" stroke="#ff3b30" strokeWidth="4" />
          <motion.path d="M38 20 C 22 46, 22 114, 38 140" fill="none" stroke="#ff3b30" strokeWidth="4" strokeDasharray="190" animate={{ strokeDashoffset: [0, 24, 0] }} transition={{ repeat: Infinity, repeatType: 'loop', duration: 2, ease: 'easeInOut' }} />
          <path d="M26 28 C 14 52, 14 108, 26 132" fill="none" stroke="#ff3b30" strokeWidth="4" />
        </svg>
      </button>
      <HeroHorizontalPage
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        onNextOverlay={() => { setOverlayOpen(false); setFinalOverlayOpen(true); }}
        title="Highlights"
        items={[
          { title: "What we build", desc: "Apps, platforms, systems.", icon: "🧩" },
          { title: "How we deliver", desc: "Fast, iterative, quality.", icon: "🚀" },
          { title: "Why us", desc: "Expert team, proven results.", icon: "🏅" },
          { title: "Get started", desc: "Discovery call today.", icon: "📞" },
        ]}
      />
      <FinalOverlayPage
        open={finalOverlayOpen}
        onBack={() => { setFinalOverlayOpen(false); setOverlayOpen(true); }}
        title="More Highlights"
        items={[
          { title: "Case studies", desc: "Selected wins.", icon: "🛍️" },
          { title: "Tooling", desc: "DX and CI/CD.", icon: "🛠️" },
          { title: "Security", desc: "Hardening & compliance.", icon: "🔐" },
          { title: "Performance", desc: "Scale with confidence.", icon: "⚡" },
        ]}
      />
    </div>
  );
}