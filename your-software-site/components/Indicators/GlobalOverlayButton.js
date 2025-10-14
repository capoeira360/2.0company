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
      const vw = window.innerWidth || 0;
      const vh = window.innerHeight || 0;
      // Sample left of the floating button to avoid hitting it
      const sampleX = Math.max(0, vw - 120);
      const sampleY = Math.max(0, Math.min(vh - 1, vh / 2));

      // Primary: use elementFromPoint to detect which sticky panel is on top at the button's location
      let node = document.elementFromPoint(sampleX, sampleY);
      const ids = new Set(order);
      while (node) {
        if (node.id && ids.has(node.id)) {
          if (node.id !== activeSection) setActiveSection(node.id);
          return;
        }
        node = node.parentElement;
      }

      // Fallback: choose the visible section whose center is closest to viewport center
      const vpCenter = vh / 2;
      let best = order[0];
      let bestDist = Infinity;
      for (const id of order) {
        const el = getEl(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = Math.max(0, rect.top);
        const bottom = Math.min(vh, rect.bottom);
        const visible = Math.max(0, bottom - top);
        // Require a minimum visible area to consider a section active
        if (visible <= vh * 0.2) continue;
        const center = (rect.top + rect.bottom) / 2;
        const dist = Math.abs(center - vpCenter);
        if (dist < bestDist) { bestDist = dist; best = id; }
      }
      if (bestDist === Infinity) {
        for (const id of order) {
          const el = getEl(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) best = id;
        }
      }
      if (best && best !== activeSection) setActiveSection(best);
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

  // Determine the section currently under the button area (or best fallback)
  const computeCurrentSection = () => {
    if (typeof window === 'undefined') return null;
    const order = ["home", "about", "services", "portfolio", "contact"];
    const getEl = (id) => document.getElementById(id);
    const threshold = 2;
    const vw = window.innerWidth || 0;
    const vh = window.innerHeight || 0;
    const sampleX = Math.max(0, vw - 120);
    const sampleY = Math.max(0, Math.min(vh - 1, vh / 2));
    let node = document.elementFromPoint(sampleX, sampleY);
    const ids = new Set(order);
    while (node) {
      if (node.id && ids.has(node.id)) return node.id;
      node = node.parentElement;
    }
    const vpCenter = vh / 2;
    let best = order[0];
    let bestDist = Infinity;
    for (const id of order) {
      const el = getEl(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const top = Math.max(0, rect.top);
      const bottom = Math.min(vh, rect.bottom);
      const visible = Math.max(0, bottom - top);
      if (visible <= vh * 0.2) continue;
      const center = (rect.top + rect.bottom) / 2;
      const dist = Math.abs(center - vpCenter);
      if (dist < bestDist) { bestDist = dist; best = id; }
    }
    if (bestDist === Infinity) {
      for (const id of order) {
        const el = getEl(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) best = id;
      }
    }
    return best;
  };

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
    const id = computeCurrentSection();
    if (!id || id === "contact") return;
    try {
      window.dispatchEvent(
        new CustomEvent("app:open-overlay", { detail: { section: id } })
      );
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
      float={false}
      style={{ position: "fixed", right: 0, top: "50%", transform: "translateY(-50%)", zIndex: 6000 }}
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