import { motion } from "framer-motion";
import HorizontalSections from "../HorizontalSections/HorizontalSections";

export default function ServicesContent() {
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
      <HorizontalSections
        id="services-horizontal"
        title="Service Highlights"
        startAtRight
        items={[
          { title: "Realtime dashboards", desc: "Live metrics and alerts.", icon: "📊" },
          { title: "Payments integration", desc: "Stripe, PayPal, custom.", icon: "💳" },
          { title: "Internationalization", desc: "Translate and localize.", icon: "🌍" },
          { title: "Accessibility", desc: "Inclusive experiences.", icon: "♿" },
          { title: "Automation", desc: "CI/CD and workflows.", icon: "🤖" },
          { title: "Security", desc: "AuthN/Z and hardening.", icon: "🔐" },
          { title: "Testing", desc: "Unit, e2e, load.", icon: "✅" },
          { title: "Performance", desc: "Optimize and scale.", icon: "⚡" },
        ]}
      />
    </div>
  );
}