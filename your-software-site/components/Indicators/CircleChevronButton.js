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
    background: bgColor,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
    WebkitTapHighlightColor: "transparent",
  };
  const animateProps = float ? {
    y: [0, -2, 0],
    boxShadow: [
      "0 10px 24px rgba(0,0,0,0.35)",
      "0 14px 28px rgba(0,0,0,0.40)",
      "0 10px 24px rgba(0,0,0,0.35)"
    ],
    transition: { repeat: Infinity, repeatType: "loop", duration: 3.2, ease: "easeInOut" }
  } : undefined;

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
      style={{ ...base, ...style }}
      animate={animateProps}
      whileHover={{ filter: "brightness(1.06)" }}
      whileTap={{ filter: "brightness(0.98)" }}
   >
      {/* Chevron shaped like '<' using two strokes; mirrored for right */}
      <svg width={Math.round(size * 0.5)} height={Math.round(size * 0.5)} viewBox="0 0 100 100" aria-hidden>
        <g transform={isLeft ? '' : "translate(100,0) scale(-1,1)"}>
          <line x1="62" y1="24" x2="36" y2="50" stroke={chevronColor} strokeWidth={strokeWidth} strokeLinecap="square" />
          <line x1="36" y1="50" x2="62" y2="76" stroke={chevronColor} strokeWidth={strokeWidth} strokeLinecap="square" />
        </g>
      </svg>
    </motion.button>
  );
}
