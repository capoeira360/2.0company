"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Rotation removed per request; keep scale-only parallax

export default function Section({ id, full = false, children, bgClass = "bg-[#ffffff]", className = "" }) {
  const scrollTargetRef = useRef(null);
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      const w = window.innerWidth || 0;
      const h = window.innerHeight || 0;
      setIsSmall(w <= 440 && h <= 956);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start start", "end end"],
  });

  const scaleMotionLarge = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scaleMotionSmall = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Background class is configurable; defaults to Lotion (#FDFDFD)
  // Remove special gradient for section 5; keep plain background like other sections

  if (isSmall) {
    const isTiny = (typeof window !== "undefined") && (window.innerWidth <= 412 && window.innerHeight <= 915);
    const wrapperHeightVh = isTiny ? 96 : 98;
    const sectionHeightVh = isTiny ? 86 : 88;
    return (
      <div ref={scrollTargetRef} className="relative" style={{ height: `${wrapperHeightVh}vh` }}>
        <motion.section
          style={{ scale: full ? 1 : scaleMotionSmall, rotate, transformStyle: "preserve-3d" }}
          className={`sticky top-0 flex items-center justify-center ${bgClass} ${className}`}
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          style={{ height: `${sectionHeightVh}vh` }}
        >
          {children ? (
            children
          ) : (
            <h1 className="text-6xl font-bold">Section {id}</h1>
          )}
        </motion.section>
      </div>
    );
  }
  return (
    <motion.section
      ref={scrollTargetRef}
      style={{ scale: full ? 1 : scaleMotionLarge, rotate, transformStyle: "preserve-3d" }}
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
