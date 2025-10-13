"use client";
import { useEffect, useMemo, useState } from "react";
import CircleChevronButton from "./CircleChevronButton";

export default function GlobalOverlayButton() {
  const [activeSection, setActiveSection] = useState(null);
  const [overlayActive, setOverlayActive] = useState(false);

  // Define per-section button colors (background + chevron)
  const theme = useMemo(() => ({
    home: { bg: "var(--accent-bg)", fg: "var(--accent-fg)" },
    about: { bg: "#34495E", fg: "#ECF0F1" },
    services: { bg: "#2C3E50", fg: "#ECF0F1" },
    portfolio: { bg: "#7D7F82", fg: "#ECF0F1" },
  }), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const order = ["home", "about", "services", "portfolio", "contact"];
    const getEl = (id) => document.getElementById(id);
    const threshold = 2; // px tolerance for sticky top

    const detectActive = () => {
      let current = order[0];
      for (const id of order) {
        const el = getEl(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Active sticky section is the LAST one whose top is at or above the viewport top
        if (rect.top <= threshold) current = id;
      }
      if (current && current !== activeSection) setActiveSection(current);
    };

    // Initialize and track on scroll/resize
    const t = setTimeout(detectActive, 50);
    window.addEventListener("scroll", detectActive, { passive: true });
    window.addEventListener("resize", detectActive);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", detectActive);
      window.removeEventListener("resize", detectActive);
    };
  }, [activeSection]);

  const intersectionRatioFor = (el) => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 0;
    const top = Math.max(0, rect.top);
    const bottom = Math.min(vh, rect.bottom);
    const visible = Math.max(0, bottom - top);
    return Math.min(1, Math.max(0, visible / Math.max(1, vh)));
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onOpen = () => setOverlayActive(true);
    const onClose = () => setOverlayActive(false);
    window.addEventListener("app:open-overlay", onOpen);
    window.addEventListener("app:close-overlays", onClose);
    return () => {
      window.removeEventListener("app:open-overlay", onOpen);
      window.removeEventListener("app:close-overlays", onClose);
    };
  }, []);

  const handleClick = () => {
    if (!activeSection || activeSection === "contact") return;
    try {
      window.dispatchEvent(
        new CustomEvent("app:open-overlay", { detail: { section: activeSection } })
      );
      // Hide button immediately while overlays are active
      setOverlayActive(true);
    } catch {}
  };

  if (!activeSection || activeSection === "contact" || overlayActive) return null;
  const { bg, fg } = theme[activeSection] || theme.home;
  const aria = `Open ${labelFor(activeSection)} highlights`;

  return (
    <CircleChevronButton
      ariaLabel={aria}
      direction="right"
      onClick={handleClick}
      size={56}
      bgColor={bg}
      chevronColor={fg}
      float
      style={{ position: "fixed", right: 0, top: "50%", transform: "translateY(-50%)", zIndex: 1200 }}
    />
  );
}

function labelFor(id) {
  switch (id) {
    case "home": return "Home";
    case "about": return "About";
    case "services": return "Services";
    case "portfolio": return "Portfolio";
    default: return "Section";
  }
}
