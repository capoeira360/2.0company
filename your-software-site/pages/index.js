import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useSpring, motion, useMotionValue } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import SimpleMenu from "../components/SimpleMenu/SimpleMenu";
import { useRouter } from "next/router";
import HeroContent from "../components/SectionContent/HeroContent";
import AboutContent from "../components/SectionContent/AboutContent";
import ServicesContent from "../components/SectionContent/ServicesContent";
import CaseStudiesContent from "../components/SectionContent/CaseStudiesContent";
import ContactContent from "../components/SectionContent/ContactContent";
// Sleek Grey and Blue Black Elegance palette for section backgrounds
const PALETTE = ["#F0F8FF", "#BDC3C7", "#7D7F82", "#34495E", "#2C3E50"];
// Footer height used for coordinated reveal with the last section (~3 inches)
const FOOTER_HEIGHT = 288; // 3in ≈ 288px at 96dpi
// Max rotation angle in degrees
const ROTATE_DEG = 12;
// SideMenu removed

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Support deep links like /#contact: on initial load, scroll to hash target.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // Delay to allow layout and Lenis to initialize
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, []);

  return (
    <>
      <SimpleMenu />
      <main ref={container} style={{ marginLeft: "0", paddingBottom: 0, position: "relative" }}>
        <Panel id="home" index={0} total={5} bg={PALETTE[0]} scrollYProgress={scrollYProgress}>
          <HeroContent />
        </Panel>
        <Panel id="about" index={1} total={5} bg={PALETTE[1]} scrollYProgress={scrollYProgress}>
          <AboutContent />
        </Panel>
        <Panel id="services" index={2} total={5} bg={PALETTE[2]} scrollYProgress={scrollYProgress}>
          <ServicesContent />
        </Panel>
        <Panel id="portfolio" index={3} total={5} bg={PALETTE[3]} scrollYProgress={scrollYProgress}>
          <CaseStudiesContent />
        </Panel>
        <Panel id="contact" index={4} total={5} bg={PALETTE[4]} scrollYProgress={scrollYProgress}>
          <ContactContent />
        </Panel>
        <SiteFooter scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
}

function Panel({ id, index, total, bg, scrollYProgress, children, route }) {
  const router = useRouter();
  const downRef = useRef({ x: 0, y: 0, t: 0 });
  const sectionRef = useRef(null);
  const atTop = useMotionValue(0);
  const [rotationStart, setRotationStart] = useState(0.85);
  // Map global scroll progress to this section's segment
  const start = index / total;
  const end = (index + 1) / total;
  const segmentProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const isLast = index === total - 1;
  // Shrink the section behind when the next section is ~halfway through
  const nextStart = (index + 1) / total;
  const nextEnd = (index + 2) / total;
  const nextProgress = useTransform(scrollYProgress, [nextStart, nextEnd], [0, 1]);
  const scale = useTransform(nextProgress, (p) => {
    // No shrink for the last panel
    if (index === total - 1) return 1;
    const shrinkStart = 0.45; // "almost half" threshold
    if (p <= shrinkStart) return 1;
    const t = Math.min(1, (p - shrinkStart) / (1 - shrinkStart));
    return 1 - 0.06 * t; // shrink up to ~6%
  });
  // Compute dynamic rotation start based on 3 inches (~288px) from bottom
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const vh = window.innerHeight || 800;
      const candidate = 1 - (FOOTER_HEIGHT / vh);
      const clamped = Math.max(0.5, Math.min(0.95, candidate));
      setRotationStart(clamped);
    }
  }, []);
  // Track when this section has reached the top of the viewport
  useEffect(() => {
    const check = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      atTop.set(rect && rect.top <= 0 ? 1 : 0);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, [atTop]);
  const delayedRotateIds = new Set(["about", "services", "portfolio"]);
  const easeInOut = (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    // smoothstep: ease both in and out to remove abruptness
    return t * t * (3 - 2 * t);
  };
  const rotateRaw = useTransform([segmentProgress, atTop], ([p, at]) => {
    if (index === total - 1) return 0;
    if (delayedRotateIds.has(id)) {
      if (at < 1) return 0; // only rotate once section is at top
      if (p <= rotationStart) return 0;
      const t = (p - rotationStart) / (1 - rotationStart);
      return -ROTATE_DEG * easeInOut(t);
    }
    return -ROTATE_DEG * easeInOut(p);
  });
  // Softer, more damped spring for smoother feel
  const rotate = useSpring(rotateRaw, { stiffness: 90, damping: 32, mass: 1.0, restDelta: 0.001, restSpeed: 0.001 });
  // Keep panels fully opaque to ensure solid backgrounds
  const opacity = 1;
  // Smooth lift of the last section; complete earlier before segment end
  const liftTarget = useTransform(segmentProgress, [0.45, 0.85], [0, -FOOTER_HEIGHT]);
  const liftY = useSpring(isLast ? liftTarget : useTransform(segmentProgress, [0, 1], [0, 0]), {
    stiffness: 180,
    damping: 24,
    mass: 0.8
  });

  const handleNavigate = (e) => {
    if (e && e.target && typeof e.target.closest === 'function') {
      const interactive = e.target.closest('a, button, input, textarea, select, label');
      if (interactive) return;
    }
    if (route) router.push(route);
  };

  const handlePointerDown = (e) => {
    downRef.current = { x: e.clientX ?? 0, y: e.clientY ?? 0, t: Date.now() };
  };

  const handlePointerUp = (e) => {
    const { x, y, t } = downRef.current;
    const dx = (e.clientX ?? 0) - x;
    const dy = (e.clientY ?? 0) - y;
    const dt = Date.now() - t;
    // Treat as tap if quick and minimal movement, even during inertial scroll
    const moved = Math.hypot(dx, dy);
    if (dt < 350 && moved < 16) handleNavigate(e);
  };

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      layoutId={`panel-${id}`}
      onPointerDown={route ? handlePointerDown : undefined}
      onPointerUp={route ? handlePointerUp : undefined}
      onClick={route ? handleNavigate : undefined}
      onTap={route ? handleNavigate : undefined}
      onKeyDown={route ? (e) => { if (e.key === 'Enter') handleNavigate(e); } : undefined}
      role={route ? 'button' : undefined}
      tabIndex={route ? 0 : undefined}
      style={{
        scale,
        rotate,
        opacity,
        y: liftY,
        height: "100vh",
        position: "sticky",
        top: 0,
        background: bg,
        color: new Set(["#34495E", "#2C3E50"]).has(bg) ? "#ECF0F1" : "#2C3E50",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        zIndex: isLast ? 2000 : 10,
        cursor: route ? "pointer" : "default",
        touchAction: "manipulation"
      }}
    >
      {children}
    </motion.section>
  );
}


function SiteFooter({ scrollYProgress }) {
  // Footer raises smoothly as we near the end of the last section
  const start = 4 / 5; // last section start
  const end = 1.0;     // last section end
  const segmentProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  // Footer raises sooner and completes before the last section ends
  const raiseTarget = useTransform(segmentProgress, [0.45, 0.85], [FOOTER_HEIGHT, 0]);
  const footerY = useSpring(raiseTarget, { stiffness: 180, damping: 24, mass: 0.9 });

  return (
    <motion.footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#2f3640",
        textAlign: "center",
        padding: "24px 0 12px",
        color: "#ffffff",
        height: FOOTER_HEIGHT,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 1500,
        y: footerY
      }}
      aria-label="Site footer"
    >
      <strong>Contact us:</strong> hello@yourcompany.com<br />
      <span>© 2025 Your Company • All rights reserved</span>
    </motion.footer>
  );
}