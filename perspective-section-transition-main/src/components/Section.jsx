"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Rotation removed per request; keep scale-only parallax

export default function Section({ id, full = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleMotion = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  const bg = id % 2 === 0 ? "bg-white" : "bg-[#FCFBF9]";
  const FOOTER_BG = "#CFCDC2"; // Pastel Gray
  const baseBgHex = id % 2 === 0 ? "#ffffff" : "#FCFBF9";
  const background = id === 5
    ? `linear-gradient(to bottom, ${baseBgHex} 0%, ${baseBgHex} 50%, ${FOOTER_BG} 50%, ${FOOTER_BG} 100%)`
    : undefined;

  return (
    <motion.section
      ref={ref}
      style={{ scale: full ? 1 : scaleMotion, rotate, transformStyle: "preserve-3d", background }}
      className={`sticky top-0 h-screen flex items-center justify-center ${bg}`}
    >
      <h1 className="text-6xl font-bold">Section {id}</h1>
    </motion.section>
  );
}