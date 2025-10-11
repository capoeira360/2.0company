export default function ContactContent() {
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
