"use client";
import { motion } from "framer-motion";

export default function CircleChevronButton({
  direction = "right", // 'left' | 'right'
  ariaLabel = "Navigate",
  onClick,
  size = 120,
  bgColor = "#000",
  chevronColor = "#fff",
  strokeWidth = 12,
  float = true,
  style,
  className
}) {
  const isLeft = direction === "left";
  const base = {
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: bgColor,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
    WebkitTapHighlightColor: "transparent",
  };
  const animateFloat = float ? {
    y: [0, -6, 0],
    scale: [1, 1.02, 1],
    boxShadow: [
      "0 10px 24px rgba(0,0,0,0.35)",
      "0 16px 32px rgba(0,0,0,0.40)",
      "0 10px 24px rgba(0,0,0,0.35)"
    ]
  } : {};
  const transition = float ? {
    y: { repeat: Infinity, repeatType: "loop", duration: 2.6, ease: "easeInOut" },
    scale: { repeat: Infinity, repeatType: "loop", duration: 2.6, ease: "easeInOut", times: [0, 0.5, 1] },
    boxShadow: { repeat: Infinity, repeatType: "loop", duration: 2.6, ease: "easeInOut" },
    backgroundColor: { duration: 0.45, ease: "easeInOut" }
  } : { backgroundColor: { duration: 0.45, ease: "easeInOut" } };

  // Animate the chevron subtly only when floating; otherwise keep static to avoid repaint flicker
  const chevronAnimate = float
    ? { stroke: chevronColor, x: [0, 2, 0], y: [0, -1, 0] }
    : { stroke: chevronColor };
  const chevronTransition = float
    ? {
        stroke: { duration: 0.45, ease: "easeInOut" },
        x: { repeat: Infinity, repeatType: "loop", duration: 2.4, ease: "easeInOut" },
        y: { repeat: Infinity, repeatType: "loop", duration: 2.4, ease: "easeInOut" }
      }
    : { stroke: { duration: 0.45, ease: "easeInOut" } };

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
      style={{ ...base, ...style }}
      animate={{ ...animateFloat, backgroundColor: bgColor }}
      transition={transition}
      whileHover={{ filter: "brightness(1.06)" }}
      whileTap={{ filter: "brightness(0.98)" }}
   >
      {/* Chevron shaped like '<' using two strokes; mirrored for right */}
      <motion.svg width={Math.round(size * 0.5)} height={Math.round(size * 0.5)} viewBox="0 0 100 100" aria-hidden>
        <motion.g
          transform={isLeft ? '' : "translate(100,0) scale(-1,1)"}
          animate={chevronAnimate}
          transition={chevronTransition}
        >
          <line x1="62" y1="24" x2="36" y2="50" strokeWidth={strokeWidth} strokeLinecap="square" />
          <line x1="36" y1="50" x2="62" y2="76" strokeWidth={strokeWidth} strokeLinecap="square" />
        </motion.g>
      </motion.svg>
    </motion.button>
  );
}