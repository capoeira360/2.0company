"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const lerp = (x, y, a) => x * (1 - a) + y * a;

export default function PaintReveal() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const lastPos = useRef({ x: null, y: null });
  const [size, setSize] = useState({ w: 800, h: 600 });
  const [gifBust, setGifBust] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const PAINT_IMAGE_URL = "/images/image-layer.jpg";

  useEffect(() => {
    const resize = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setSize({ w: Math.max(320, Math.floor(rect.width)), h: Math.max(240, Math.floor(rect.height)) });
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = size.w;
    canvas.height = size.h;
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "source-over";
    const img = new Image();
    img.src = `${PAINT_IMAGE_URL}?v=${Date.now()}`;
    img.onload = () => {
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, size.w, size.h);
      ctx.drawImage(img, 0, 0, size.w, size.h);
      ctx.restore();
      ctx.globalCompositeOperation = "destination-out";
    };
    img.onerror = () => {
      ctx.fillStyle = "#111317";
      ctx.fillRect(0, 0, size.w, size.h);
      ctx.globalCompositeOperation = "destination-out";
    };
  }, [size]);

  useEffect(() => {
    setGifBust(Date.now());
    const interval = setInterval(() => setGifBust(Date.now()), 9000);
    return () => clearInterval(interval);
  }, []);

  const draw = (x, y, r = 60) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  };

  const onPointerMove = (e) => {
    if (!interacting) return;
    const el = canvasRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const lp = lastPos.current;
    if (lp.x == null || lp.y == null) {
      lastPos.current = { x, y };
      draw(x, y);
      return;
    }
    const dx = Math.abs(x - lp.x);
    const dy = Math.abs(y - lp.y);
    const steps = Math.max(6, Math.floor(Math.sqrt(dx * dx + dy * dy) / 8));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const ix = lerp(lp.x, x, t);
      const iy = lerp(lp.y, y, t);
      draw(ix, iy, 56);
    }
    lastPos.current = { x, y };
  };

  const onPointerLeave = () => {
    lastPos.current = { x: null, y: null };
    setInteracting(false);
  };

  const onPointerDown = () => setInteracting(true);
  const onPointerUp = () => setInteracting(false);

  return (
    <section className={styles.section} id="paint-reveal">
      <div className="container">
        <div className={styles.card}>
          <div ref={containerRef} className={styles.stage} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
          <img src={`/images/abstract-background.gif?v=${gifBust}`} alt="Abstract background" className={styles.underlayImg} />
          <div className={styles.copy}>Modern interactions that feel alive.</div>
            <canvas ref={canvasRef} className={styles.canvas} />
          </div>
        </div>
      </div>
    </section>
  );
}
