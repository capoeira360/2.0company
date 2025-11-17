"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Rotation removed per request; keep scale-only parallax

export default function Section({ id, full = false, children, bgClass = "bg-[#ffffff]", className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleMotion = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Background class is configurable; defaults to Lotion (#FDFDFD)
  // Remove special gradient for section 5; keep plain background like other sections

  return (
    <motion.section
      ref={ref}
      style={{ scale: full ? 1 : scaleMotion, rotate, transformStyle: "preserve-3d" }}
      className={`sticky top-0 h-screen flex items-center justify-center ${bgClass} ${className}`}
    >
      {children ? (
        children
      ) : (
        <h1 className="text-6xl font-bold">Section {id}</h1>
      )}
    </motion.section>
  );
}
