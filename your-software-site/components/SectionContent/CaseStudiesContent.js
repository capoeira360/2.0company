import { motion } from "framer-motion";
import HorizontalSections from "../HorizontalSections/HorizontalSections";

export default function CaseStudiesContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
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
      <HorizontalSections
        id="portfolio-horizontal"
        title="Selected Work"
        startAtRight
        items={[
          { title: "E-commerce revamp", desc: "+22% conversion.", icon: "🛍️" },
          { title: "Fintech onboarding", desc: "KYC flows.", icon: "🏦" },
          { title: "Analytics suite", desc: "Signals and cohorts.", icon: "📈" },
          { title: "Design system", desc: "Cross-platform UI.", icon: "📚" },
          { title: "Mobile replatform", desc: "Native + web.", icon: "📲" },
          { title: "Search relevance", desc: "Better ranking.", icon: "🔎" },
        ]}
      />
    </div>
  );
}