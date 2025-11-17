"use client";
import { useEffect, useState, useRef } from "react";
import DissolvePreview from "./DissolvePreview";
import CrossfadePreview from "./CrossfadePreview";
import styles from "./style.module.css";

const techs = [
  { name: "Next.js", image: "/next.svg", width: 220, height: 110 },
  { name: "Vercel", image: "/vercel.svg", width: 220, height: 110 },
  { name: "React", image: "/images/slider/img1.jpg" },
  { name: "TailwindCSS", image: "/images/slider/img2.jpg" },
  { name: "Node.js", image: "/images/slider/img3.jpg" },
  { name: "TypeScript", image: "/images/slider/img4.jpg" },
];

export default function TechHover() {
  const [hovered, setHovered] = useState(null);
  const [current, setCurrent] = useState(techs[0]);
  const [supportsSvg, setSupportsSvg] = useState(false);
  useEffect(() => {
    try {
      const svgNS = "http://www.w3.org/2000/svg";
      const t = document.createElementNS(svgNS, "feTurbulence");
      const ua = (navigator.userAgent || "").toLowerCase();
      const isComet = ua.includes("comet");
      setSupportsSvg(!isComet && typeof t.baseFrequency !== "undefined");
    } catch {
      setSupportsSvg(false);
    }
  }, []);
  const onEnter = (t) => {
    setHovered(t);
    setCurrent(t);
  };
  return (
    <div className={styles.wrap}>
      <div>
        <h2 className={styles.title}>Technologies</h2>
        <div className={styles.list}>
          {techs.map((t) => (
            <button
              key={t.name}
              type="button"
              className={`${styles.item} ${hovered && hovered.name !== t.name ? styles.dim : ""}`}
              onMouseEnter={() => onEnter(t)}
              onPointerEnter={() => onEnter(t)}
              onPointerDown={() => onEnter(t)}
              onClick={() => onEnter(t)}
              onFocus={() => onEnter(t)}
              onMouseLeave={() => setHovered(null)}
              onBlur={() => setHovered(null)}
              aria-current={hovered?.name === t.name ? "true" : undefined}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.preview}>
        {hovered ? (
          supportsSvg ? (
            <DissolvePreview key={`${current.image}|${hovered.image}`} currentSrc={current.image} nextSrc={hovered.image} />
          ) : (
            <CrossfadePreview key={`${current.image}|${hovered.image}`} currentSrc={current.image} nextSrc={hovered.image} durationMs={1200} />
          )
        ) : current ? (
          supportsSvg ? (
            <DissolvePreview key={`${current.image}|${current.image}`} currentSrc={current.image} nextSrc={current.image} />
          ) : (
            <CrossfadePreview key={`${current.image}|${current.image}`} currentSrc={current.image} nextSrc={current.image} durationMs={1200} />
          )
        ) : (
          <span className={styles.placeholder}>Hover to preview</span>
        )}
      </div>
    </div>
  );
}
