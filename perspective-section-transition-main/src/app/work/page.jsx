"use client";
import Section from "@/components/Section";
import WorkSlider from "@/components/WorkSlider";
import Link from "next/link";

export default function Work() {
  return (
  <main className="relative h-[500vh] bg-[#EEEEE8]">
      {/* First section: mount the image slider */}
      <Section id={1} full bgClass="bg-[#EEEEE8]">
        <div className="w-full px-4">
          <WorkSlider />
        </div>
      </Section>
      {/* Section 2: Web Design Service Card */}
      <Section id={2} bgClass="bg-[#EEEEE8]">
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
      <Section id={3} bgClass="bg-[#EEEEE8]">
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
      <Section id={4} bgClass="bg-[#EEEEE8]">
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

      {/* Section 5 */}
      <Section id={5} bgClass="bg-[#EEEEE8]">

        
        <div className="mx-auto w-[min(95vw,1496px)]">
          <div className="grid gap-8 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,48px)] min-h-[85vh]" style={{ backgroundColor: '#ffffff' }}>
            <div className="flex items-center gap-4">
              <svg className="shrink-0" viewBox="0 0 64 64" aria-hidden="true" style={{ width: 'clamp(96px,12vw,192px)', height: 'clamp(96px,12vw,192px)' }}>
                <path d="M20 36c0-6.627 5.373-12 12-12 5.024 0 9.34 3.09 10.965 7.429C44.31 31.152 46.045 31 47.82 31 53.465 31 58 35.477 58 41s-4.535 10-10.18 10H22.5C16.701 51 12 46.299 12 40.5 12 34.701 16.701 30 22.5 30c.867 0 1.716.09 2.535.263A11.936 11.936 0 0 1 32 24c-6.627 0-12 5.373-12 12z" fill="#0ea5e9" opacity="0.25" />
                <rect x="12" y="18" width="40" height="10" rx="2" fill="none" stroke="#111317" strokeWidth="2" />
                <rect x="12" y="32" width="40" height="10" rx="2" fill="none" stroke="#111317" strokeWidth="2" />
                <circle cx="52" cy="23" r="1.5" fill="#0ea5e9" />
                <circle cx="52" cy="37" r="1.5" fill="#0ea5e9" />
              </svg>
              <h2 className="leading-tight text-[clamp(2.4rem,7vw,6rem)]">
                <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em', textTransform: 'lowercase' }}>domain</span>
                <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>/hosting</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-[#3a3d42]">Your website’s home on the internet.</p>

            {/* Description */}
            <p className="text-[clamp(1.1rem,2vw,1.35rem)] text-[#374151] max-w-none">
              Simple, reliable, and secure hosting with your custom domain—everything managed from one dashboard.
            </p>

            {/* Features */}
            <ul className="grid gap-3 text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)]">
              <li>• Custom Domain Registration</li>
              <li>• Blazing-Fast Web Hosting</li>
              <li>• Free SSL Protection</li>
              <li>• Simple, All-in-One Dashboard</li>
              <li>• 24/7 Expert Support</li>
            </ul>

            {/* Pricing blurb */}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              <Link className="btn primary text-[clamp(1rem,1.6vw,1.25rem)] px-[clamp(16px,2vw,28px)] py-[clamp(10px,1.4vw,16px)]" href="/contact">Get Started</Link>
              <Link className="btn secondary text-[clamp(1rem,1.6vw,1.25rem)] px-[clamp(16px,2vw,28px)] py-[clamp(10px,1.4vw,16px)]" href="/work#plans">See Plans</Link>
            </div>

            {/* Tagline + Badge */}
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex gap-8 text-[#3a3d42] text-[clamp(0.95rem,1.3vw,1.1rem)]">
                <span>Perfect for websites, blogs, startups, and businesses.</span>
              </div>
              <span className="inline-flex items-center gap-2 text-[#111317] text-[clamp(0.95rem,1.3vw,1.1rem)] font-semibold bg-[#E0E5DE] px-3 py-2 rounded-md">
                {/* Badge icon */}
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z" fill="#0ea5e9"/></svg>
                99.9% Uptime Guarantee
              </span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
