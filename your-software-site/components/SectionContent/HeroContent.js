import { motion } from "framer-motion";

export default function HeroContent() {
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
    </>
  );
}
