import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroHorizontalPage from "../HeroHorizontalPage/HeroHorizontalPage";
import FinalOverlayPage from "../HeroHorizontalPage/FinalOverlayPage";
import AboutOverlayContent from "../HeroHorizontalPage/AboutOverlayContent";

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
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 4vw, 24px)" }}>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1.1fr 1fr", 
        gap: "clamp(20px, 4vw, 28px)", 
        width: "min(1100px, 92vw)", 
        alignItems: "center" 
      }}>
        {/* Add responsive breakpoint */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }
        `}</style>
        {/* Left: Mission copy */}
        <div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.2rem)", margin: 0, fontFamily: "var(--heading-font)", fontWeight: 700 }}>
            <span style={{ color: "var(--color-deep)", opacity: 0.9 }}>Our </span>
            <span style={{ color: "#c79211" }}>Mission</span>
          </h2>
          <div style={{ marginTop: 16, color: "var(--color-deep)", fontSize: "clamp(0.95rem, 2.2vw, 1.02rem)", lineHeight: 1.6, maxWidth: 620 }}>
            <p>
              At Tapit, we believe technology should empower businesses to reach their full potential. Our mission is to bridge the gap between innovative ideas and practical solutions, creating digital experiences that drive meaningful growth.
            </p>
            <p>
              We're committed to delivering excellence in every project, fostering long-term partnerships, and contributing to the digital transformation of businesses worldwide.
            </p>
          </div>
        </div>
        {/* Right: Image card */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: "#f7f9fb", borderRadius: 18, boxShadow: "0 24px 64px rgba(0,0,0,0.12)", overflow: "hidden" }}>
          <Image 
            src="/turned-gray-laptop-computer.jpg"
            alt="Mission — modern digital solutions"
            width={880}
            height={520}
            style={{ display: "block", objectFit: "cover" }}
            priority
          />
        </motion.div>
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
        items={[]}
        customContent={<AboutOverlayContent />}
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