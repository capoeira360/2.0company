"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BouncyCardsFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="flex-1 leading-tight text-[clamp(2.6rem,7.5vw,5.2rem)]">
          <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.02em' }}>Grow faster</span>
          <br />
          <span style={{ fontFamily: 'var(--font-pfennig)', fontWeight: 700, fontStyle: 'italic', color: '#f36e4b', marginLeft: '-0.06em', whiteSpace: 'nowrap' }}>with our all in one solution</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4" imageUrl="/images/services/product-strategy-1.jpg" imageAlt="Product strategy">
          <CardTitle>Product Strategy</CardTitle>
          <div className="relative z-[20] mt-4 space-y-3">
            <p className="text-white" style={{ textShadow: "0 3px 16px rgba(0,0,0,0.45), 0 0 18px rgba(255,255,255,0.3)" }}>Define outcomes and a roadmap to ship value fast.</p>
            <div className="flex flex-wrap gap-2">
              <Tag>Discovery workshops</Tag>
              <Tag>Outcome‑driven roadmaps</Tag>
              <Tag>Prioritization frameworks</Tag>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-4 right-4 top-32 z-[12] translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]" />
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8" imageUrl="/images/services/system-design-2.jpg" imageAlt="Design systems">
          <CardTitle>Design Systems</CardTitle>
          <div className="relative z-[20] mt-4">
            <p className="text-white" style={{ textShadow: "0 3px 16px rgba(0,0,0,0.45), 0 0 18px rgba(255,255,255,0.3)" }}>Consistency with scalable components, tokens, and motion.</p>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-4 right-4 top-36 z-[12] translate-y-10 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex flex-wrap justify-center gap-2 text-white">
              <Tag>Design tokens</Tag>
              <Tag>Reusable components</Tag>
              <Tag>Accessibility & motion</Tag>
            </div>
          </div>
        </BounceCard>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8" imageUrl="/images/services/frontend-3.jpg" imageAlt="Frontend engineering">
          <CardTitle>Frontend Engineering</CardTitle>
          <div className="relative z-[20] mt-4">
            <p className="text-white" style={{ textShadow: "0 3px 16px rgba(0,0,0,0.45), 0 0 18px rgba(255,255,255,0.3)" }}>Modern, accessible interfaces with performance at the core.</p>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-4 right-4 top-36 z-[12] translate-y-10 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex flex-wrap justify-center gap-2 text-white">
              <Tag>Next.js · React · TypeScript</Tag>
              <Tag>Optimized rendering</Tag>
              <Tag>CI‑ready builds</Tag>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4" imageUrl="/images/services/performance-4.jpg" imageAlt="Performance and accessibility">
          <CardTitle>Performance & Accessibility</CardTitle>
          <div className="relative z-[20] mt-4">
            <p className="text-white" style={{ textShadow: "0 3px 16px rgba(0,0,0,0.45), 0 0 18px rgba(255,255,255,0.3)" }}>Fast, inclusive experiences that feel effortless.</p>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-4 right-4 top-36 z-[12] translate-y-10 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex flex-wrap justify-center gap-2 text-white">
              <Tag>Core Web Vitals</Tag>
              <Tag>WCAG‑aligned audits</Tag>
              <Tag>Focus & interactions</Tag>
            </div>
          </div>
        </BounceCard>
      </div>
    </section>
  );
}

function BounceCard({ className = "", imageUrl, imageAlt = "", children }) {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {imageUrl && (
        <img src={imageUrl} alt={imageAlt} className="absolute inset-0 z-0 h-full w-full object-cover" style={{ filter: "brightness(0.95) contrast(0.95)" }} />
      )}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 to-black/25" aria-hidden="true"></div>
      {children}
    </motion.div>
  );
}

function CardTitle({ children }) {
  return <h3 className="relative z-[20] mx-auto text-center text-3xl font-semibold text-white" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5), 0 0 24px rgba(255,255,255,0.35)" }}>{children}</h3>;
}

function Tag({ children }) {
  return (
    <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}
