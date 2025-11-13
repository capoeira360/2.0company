"use client";
import { useEffect, useRef } from "react";

export default function DissolvePreview({ currentSrc, nextSrc }) {
  const fid = useRef(`turbulent-dissolve-${Math.random().toString(36).slice(2)}`);
  const funcAId = useRef(`funcA-${Math.random().toString(36).slice(2)}`);
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id={fid.current} filterUnits="userSpaceOnUse" x="0" y="0" width="800" height="600">
          <feTurbulence type="fractalNoise" baseFrequency=".012" />
          <feColorMatrix type="luminanceToAlpha" />
          <feComponentTransfer>
            <feFuncA id={funcAId.current} type="linear" slope="0" />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 1" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="1" />
          <feComposite operator="in" in="SourceGraphic" result="overlay" />
          <feImage href={nextSrc} xlinkHref={nextSrc} width="800" height="600" result="underlay" />
          <feComposite operator="over" in="overlay" in2="underlay" />
        </filter>
      </defs>
      <image filter={`url(#${fid.current})`} width="800" height="600" href={currentSrc} xlinkHref={currentSrc} />
      {
        /* Drive the slope change over time for browsers that don't support SMIL */
      }
      <ScriptRunner targetId={funcAId.current} />
    </svg>
  );
}

function ScriptRunner({ targetId }) {
  const prevId = useRef(null);
  useEffect(() => {
    if (prevId.current === targetId) return;
    prevId.current = targetId;
    const el = document.getElementById(targetId);
    if (!el) return;
    const keyframes = [0,0,0,0,0,0.5,1,1.5,2,2,2,2,2,2,1.5,1,0.5,0];
    const stepMs = 8000 / (keyframes.length - 1);
    let i = 0;
    let alive = true;
    const tick = () => {
      if (!alive) return;
      const v = keyframes[i];
      el.setAttribute("slope", String(v));
      i++;
      if (i < keyframes.length) setTimeout(tick, stepMs);
    };
    tick();
    return () => { alive = false; };
  }, [targetId]);
  return null;
}
