import { useRef, useEffect } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import SimpleMenu from "../components/SimpleMenu/SimpleMenu";
// Neutral palette used for solid section backgrounds
const PALETTE = ["#C0CCC2", "#E8E8E8", "#FCF9ED", "#EBDFCC", "#D9CECC", "#A9A8AD"];
// Footer height used for coordinated reveal with the last section (~3 inches)
const FOOTER_HEIGHT = 288; // 3in ≈ 288px at 96dpi
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
        <Panel id="case-studies" index={3} total={5} bg={PALETTE[3]} scrollYProgress={scrollYProgress}>
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

function Panel({ id, index, total, bg, scrollYProgress, children }) {
  // Map global scroll progress to this section's segment
  const start = index / total;
  const end = (index + 1) / total;
  const segmentProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const isLast = index === total - 1;
  const scale = isLast ? 1 : useTransform(segmentProgress, [0, 1], [1, 0.92]);
  const rotate = isLast ? 0 : useTransform(segmentProgress, [0, 1], [0, -4]);
  const opacity = isLast ? 1 : useTransform(segmentProgress, [0, 1], [1, 0.96]);
  // Smooth lift of the last section; complete earlier before segment end
  const liftTarget = useTransform(segmentProgress, [0.45, 0.85], [0, -FOOTER_HEIGHT]);
  const liftY = useSpring(isLast ? liftTarget : useTransform(segmentProgress, [0, 1], [0, 0]), {
    stiffness: 180,
    damping: 24,
    mass: 0.8
  });

  return (
    <motion.section
      id={id}
      style={{
        scale,
        rotate,
        opacity,
        y: liftY,
        height: "100vh",
        position: "sticky",
        top: 0,
        background: bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        zIndex: isLast ? 2000 : 10
      }}
    >
      {children}
    </motion.section>
  );
}

function HeroContent() {
  return (
    <>
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
        onClick={() => {
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
    </>
  );
}

function AboutContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
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
    </div>
  );
}

function ServicesContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "2.25rem" }}>Our Services</h2>
      <p style={{ color: "#888", fontSize: "1.1rem", maxWidth: 650, textAlign: "center", marginTop: 10 }}>App development, cloud integration, UI/UX design, and more.</p>
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
            style={{ background: "#e9ecef", borderRadius: 12, padding: 16, boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 24 }}>{s.icon}</div>
            <h3 style={{ fontSize: "1.2rem", margin: "8px 0 4px" }}>{s.title}</h3>
            <p style={{ color: "#666", fontSize: ".95rem" }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CaseStudiesContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "2rem" }}>Case Studies</h2>
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
    </div>
  );
}

function ContactContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
      <h2 style={{ fontSize: "1.75rem" }}>Contact Us</h2>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gap: 12, width: "min(600px, 90vw)", marginTop: 12 }}>
        <input placeholder="Your name" style={{ padding: 12, borderRadius: 8, border: "1px solid #c8d6e5" }} />
        <input placeholder="Email" type="email" style={{ padding: 12, borderRadius: 8, border: "1px solid #c8d6e5" }} />
        <textarea placeholder="Message" rows={4} style={{ padding: 12, borderRadius: 8, border: "1px solid #c8d6e5" }} />
        <button type="submit" style={{
          background: "#2f3640",
          color: "#f5f6fa",
          border: "none",
          padding: "12px 20px",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: "1rem"
        }}>Send Message</button>
      </form>
    </div>
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