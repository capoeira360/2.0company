import { motion } from "framer-motion";

export default function AboutContent() {
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
