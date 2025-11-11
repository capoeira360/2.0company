"use client";
import Section from "@/components/Section";
import WorkSlider from "@/components/WorkSlider";
import Link from "next/link";

export default function Work() {
  return (
    <main className="relative h-[500vh]">
      {/* First section: mount the image slider */}
      <Section id={1} full>
        <div className="w-full px-4">
          <WorkSlider />
        </div>
      </Section>
      {/* Section 2: Web Design Service Card */}
      <Section id={2}>
        <div className="mx-auto w-[min(95vw,1496px)]">
          <div className="grid gap-8 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,48px)] min-h-[85vh]" style={{ backgroundColor: '#ffffff' }}>
            {/* Icon + Title */}
            <div className="flex items-center gap-4">
              {/* Simple monitor icon */}
              <svg className="shrink-0" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(96px,12vw,192px)', height: 'clamp(96px,12vw,192px)' }}>
                <rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="#111317" strokeWidth="2" />
                <rect x="9" y="18" width="6" height="2" rx="1" fill="#111317" />
              </svg>
              <h2 className="leading-tight text-[clamp(3rem,9vw,8rem)]">
                <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>Web</span>{' '}
                <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>Design</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-[#3a3d42]">
              “Crafting visually stunning, user-first websites.”
            </p>

            {/* Description */}
            <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-[#374151] max-w-none">
              Beautiful, responsive designs that convert visitors into customers. Tailored to your brand, optimized for all screens.
            </p>

            {/* Features */}
            <ul className="grid gap-3 text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)]">
              <li>• Custom, pixel-perfect layouts</li>
              <li>• Mobile-first, responsive design</li>
              <li>• UI/UX best practices</li>
              <li>• Fast loading & SEO optimized</li>
              <li>• Collaborative & revision-friendly</li>
            </ul>

            {/* Tech Stack badges */}
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex gap-8 text-[#3a3d42] text-[clamp(0.95rem,1.3vw,1.1rem)]">
                <span className="inline-flex items-center gap-2">
                  {/* Figma icon */}
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="5" r="3" fill="#0ea5e9"/><circle cx="12" cy="11" r="3" fill="#ef4444"/><circle cx="12" cy="17" r="3" fill="#10b981"/></svg>
                  Figma
                </span>
                <span>[XD]</span>
                <span>[CSS]</span>
                <span>[HTML5]</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <Link className="btn secondary text-[clamp(1rem,1.6vw,1.25rem)] px-[clamp(16px,2vw,28px)] py-[clamp(10px,1.4vw,16px)]" href="/work">See Portfolio</Link>
              <Link className="btn primary text-[clamp(1rem,1.6vw,1.25rem)] px-[clamp(16px,2vw,28px)] py-[clamp(10px,1.4vw,16px)]" href="/contact">Get Started</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: Mobile App Design Service Card */}
      <Section id={3}>
        <div className="mx-auto w-[min(95vw,1496px)]">
          <div className="grid gap-8 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,48px)] min-h-[85vh]" style={{ backgroundColor: '#ffffff' }}>
            {/* Icon + Title */}
            <div className="flex items-center gap-4">
              {/* Smartphone icon */}
              <svg className="shrink-0" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(96px,12vw,192px)', height: 'clamp(96px,12vw,192px)' }}>
                <rect x="6" y="2" width="12" height="20" rx="2" fill="none" stroke="#111317" strokeWidth="2" />
                <circle cx="12" cy="19" r="1" fill="#111317" />
              </svg>
              <h2 className="leading-tight whitespace-nowrap text-[clamp(3rem,9vw,8rem)]">
                <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>Mobile</span>{' '}
                <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>Apps</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-[#3a3d42]">
              “Intuitive, beautiful apps for every device.”
            </p>

            {/* Description */}
            <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-[#374151] max-w-none">
              We design engaging, seamless mobile experiences tailored to your users. From concept to prototype, our interfaces shine across iOS and Android.
            </p>

            {/* Features */}
            <ul className="grid gap-3 text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)]">
              <li>• Custom app UI/UX for iOS & Android</li>
              <li>• Interactive prototypes & user flows</li>
              <li>• Platform guidelines (Material, Human Interface)</li>
              <li>• Animated transitions & micro-interactions</li>
              <li>• Collaborative design process</li>
            </ul>

            {/* Tech Stack badges (match Section 2 count) */}
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex gap-8 text-[#3a3d42] text-[clamp(0.95rem,1.3vw,1.1rem)]">
                <span className="inline-flex items-center gap-2">
                  {/* Figma icon */}
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="5" r="3" fill="#0ea5e9"/><circle cx="12" cy="11" r="3" fill="#ef4444"/><circle cx="12" cy="17" r="3" fill="#10b981"/></svg>
                  Figma
                </span>
                <span>[Flutter]</span>
                <span>[Adobe XD]</span>
                <span>[React Native]</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <Link className="btn secondary text-[clamp(1rem,1.6vw,1.25rem)] px-[clamp(16px,2vw,28px)] py-[clamp(10px,1.4vw,16px)]" href="/work">See Portfolio</Link>
              <Link className="btn primary text-[clamp(1rem,1.6vw,1.25rem)] px-[clamp(16px,2vw,28px)] py-[clamp(10px,1.4vw,16px)]" href="/contact">Get Started</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: AI Systems Development Service Card */}
      <Section id={4}>
        <div className="mx-auto w-[min(95vw,1496px)]">
          <div className="grid gap-8 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,48px)] min-h-[85vh]" style={{ backgroundColor: '#ffffff' }}>
            {/* Icon + Title */}
            <div className="flex items-center gap-4">
              {/* Robot head icon */}
              <svg className="shrink-0" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(96px,12vw,192px)', height: 'clamp(96px,12vw,192px)' }}>
                <circle cx="12" cy="3" r="1" fill="#111317" />
                <path d="M12 6 V4" stroke="#111317" strokeWidth="2" />
                <rect x="5" y="6" width="14" height="12" rx="3" fill="none" stroke="#111317" strokeWidth="2" />
                <circle cx="9" cy="12" r="1.5" fill="#0ea5e9" />
                <circle cx="15" cy="12" r="1.5" fill="#0ea5e9" />
                <rect x="9" y="16" width="6" height="2" rx="1" fill="#111317" />
              </svg>
              <h2 className="leading-tight text-[clamp(3rem,9vw,8rem)]">
                <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>AI</span>{' '}
                <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>Systems</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-[#3a3d42]">
              “Intelligent solutions for tomorrow’s challenges.”
            </p>

            {/* Description */}
            <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-[#374151] max-w-none">
              We create smart, adaptive solutions powered by leading AI technologies. From automation to advanced analytics, we help you unlock new possibilities.
            </p>

            {/* Features */}
            <ul className="grid gap-3 text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)]">
              <li>• Custom AI-powered applications</li>
              <li>• Machine learning models &amp; training</li>
              <li>• Natural language processing (NLP)</li>
              <li>• Computer vision and image recognition</li>
              <li>• Automation and data analysis tools</li>
            </ul>

            {/* Tech Stack badges */}
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex gap-8 text-[#3a3d42] text-[clamp(0.95rem,1.3vw,1.1rem)]">
                <span>[Python]</span>
                <span>[TensorFlow]</span>
                <span>[OpenAI]</span>
                <span>[AWS]</span>
                <span>[GCP]</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <Link className="btn secondary text-[clamp(1rem,1.6vw,1.25rem)] px-[clamp(16px,2vw,28px)] py-[clamp(10px,1.4vw,16px)]" href="/work">Explore AI Projects</Link>
              <Link className="btn primary text-[clamp(1rem,1.6vw,1.25rem)] px-[clamp(16px,2vw,28px)] py-[clamp(10px,1.4vw,16px)]" href="/contact">Get a Consultation</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Performance & Accessibility */}
      <Section id={5}>
        <div className="w-full px-6 max-w-4xl mx-auto grid gap-6">
          <h2 className="leading-tight text-[clamp(2.4rem,8vw,6rem)]">
            <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>Performance</span>{' '}
            <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>&amp; Accessibility</span>
          </h2>
          <p className="text-[clamp(1rem,1.6vw,1.15rem)] text-[#3a3d42] max-w-3xl">
            Fast, inclusive experiences that serve everyone. We measure, diagnose, and improve Core Web Vitals while ensuring
            WCAG-aligned interactions, semantics, and focus management.
          </p>
          <ul className="grid gap-3 text-[#374151] text-[clamp(0.95rem,1.4vw,1.05rem)]">
            <li>Core Web Vitals audits and action plans</li>
            <li>Semantic structure, keyboard support, and focus flows</li>
            <li>Motion and reduced-motion strategies that respect preferences</li>
          </ul>
        </div>
      </Section>
    </main>
  );
}