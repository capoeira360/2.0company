export const metadata = {
  title: "TAPit — About",
};

export default function AboutPage() {
  return (
    <main className="elevate-footer">
      {/* Page Header */}
      <section className="section" style={{ marginBottom: '0.5in', paddingBottom: 0 }}>
        <div
          className="container"
          style={{
            maxWidth: 'none',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            paddingLeft: 'clamp(8px,2vw,12px)',
            paddingRight: 'clamp(8px,2vw,12px)'
          }}
        >
          <h1 className="leading-tight text-[clamp(2.6rem,8vw,5.5rem)]">
            <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>about</span>
          </h1>
          {/* Thin underline extending beyond header text */}
          <div
            style={{
              marginTop: 'clamp(6px,1.2vw,12px)',
              height: '1px',
              backgroundColor: 'rgba(14,165,233,0.65)',
              borderRadius: '9999px',
              width: 'clamp(240px,40vw,720px)'
            }}
          />
        </div>
      </section>
      <section className="section" style={{ marginTop: 0, paddingTop: 0 }}>
        <div
          className="container"
          style={{
            maxWidth: 'none',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            paddingLeft: 'clamp(8px,2vw,12px)',
            paddingRight: 'clamp(8px,2vw,12px)'
          }}
        >
          <div className="grid gap-10 md:grid-cols-2 items-start">
            {/* Mission card */}
            <div className="grid gap-6 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,36px)] text-center mt-[2in]">
              <h2 className="leading-tight text-[clamp(2.4rem,7vw,5rem)]">
                <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>Our</span>{' '}
                <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>Mission</span>
              </h2>
              <p className="text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)] text-center">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their customers.
              </p>
            </div>

            {/* Our Story */}
            <div className="grid gap-6">
              <h2 className="leading-tight text-[clamp(2rem,6vw,4rem)]">
                <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>Our</span>{' '}
                <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>Story</span>
              </h2>
              <p className="text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)] text-center">
                We are a passionate team of innovators stepping boldly into the future of technology. As a young software startup, we are excited about the endless possibilities that the new era of artificial intelligence offers. Though we are new to the business, our vision is clear—to harness AI and creative technology to simplify everyday tasks and empower businesses and individuals alike.
              </p>
              <p className="text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)] text-center">
                Our goal is to transform complex processes into seamless experiences, making technology more accessible, efficient, and impactful.
              </p>
              <p className="text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)] text-center">
                We believe in innovation that serves a purpose—helping people focus less on tedious tasks and more on what truly matters. With a commitment to quality, creativity, and cutting-edge AI, we are on a mission to redefine how software supports life and work in the digital age.
              </p>
              <p className="text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)] text-center">
                Join us on this exciting journey as we pioneer new ways to simplify the world through smart technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="grid gap-6 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,36px)]"
            style={{ width: 'calc(100% + 2in)', marginLeft: '-1in', marginRight: '-1in' }}
          >
            <div className="flex items-center gap-4">
              {/* Team icon */}
              <svg className="shrink-0" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(72px,10vw,128px)', height: 'clamp(72px,10vw,128px)' }}>
                <circle cx="8" cy="8" r="3" fill="none" stroke="#111317" strokeWidth="2" />
                <circle cx="16" cy="7" r="2.5" fill="none" stroke="#111317" strokeWidth="2" />
                <path d="M4 16c0-2.5 2.5-4.5 5.5-4.5S15 13.5 15 16" fill="none" stroke="#111317" strokeWidth="2" />
                <path d="M12 16c0-2.2 2-4 4.5-4s4.5 1.8 4.5 4" fill="none" stroke="#111317" strokeWidth="2" />
              </svg>
              <h2 className="leading-tight text-[clamp(2rem,6vw,4rem)]">
                <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>Our</span>{' '}
                <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>Team</span>
              </h2>
            </div>
            <p className="text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)]">
              At Tapit, our passion fuels everything we do. We are a dedicated team driven by the belief that technology should empower businesses to unlock their full potential. United by a shared mission, we bridge the gap between bold, innovative ideas and practical, effective solutions. Together, we create digital experiences that inspire growth and lasting impact.
            </p>
            <p className="text-[#374151] text-[clamp(1.05rem,1.8vw,1.25rem)]">
              Our commitment goes beyond projects — it’s about excellence, collaboration, and building strong, long-term partnerships. At Tapit, we don’t just contribute to digital transformation; we live and breathe it, helping businesses worldwide thrive in a connected future.
            </p>
          </div>
        </div>
      </section>


      {/* Values cards section (replaces CTA contents) */}
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: 'none',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            paddingLeft: 'clamp(16px,4vw,48px)',
            paddingRight: 'clamp(16px,4vw,48px)'
          }}
        >
          <h2 className="leading-tight text-[clamp(2rem,6vw,4rem)]">
            <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>Our</span>{' '}
            <span style={{ fontFamily: 'var(--font-artine)', color: '#0ea5e9' }}>Values</span>
          </h2>
          <div
            className="grid gap-6 items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            style={{ marginTop: 12 }}
          >
            {/* Craft & Clarity */}
            <div className="grid gap-3 h-full rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)' }}>
                <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 2z" fill="none" stroke="#111317" strokeWidth="2" />
              </svg>
              <h3 className="text-[clamp(1.2rem,2vw,1.5rem)]">Craft & Clarity</h3>
              <p className="text-[#374151] text-[clamp(0.95rem,1.4vw,1.1rem)]">Design and engineering aligned to ship premium, clear experiences.</p>
            </div>

            {/* Performance by Default */}
            <div className="grid gap-3 h-full rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)' }}>
                <path d="M4 13h10M4 6h16M4 20h7" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="text-[clamp(1.2rem,2vw,1.5rem)]">Performance by Default</h3>
              <p className="text-[#374151] text-[clamp(0.95rem,1.4vw,1.1rem)]">Fast loads, smooth interactions, and measurable improvements baked in.</p>
            </div>

            {/* Human-Centered Motion */}
            <div className="grid gap-3 h-full rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)' }}>
                <path d="M12 21c-4.97-3.5-8-6.5-8-10a5 5 0 0 1 9-2 5 5 0 0 1 9 2c0 3.5-3.03 6.5-8 10z" fill="none" stroke="#111317" strokeWidth="2" />
              </svg>
              <h3 className="text-[clamp(1.2rem,2vw,1.5rem)]">Human‑Centered Motion</h3>
              <p className="text-[#374151] text-[clamp(0.95rem,1.4vw,1.1rem)]">Motion guides attention and improves flow without distraction.</p>
            </div>

            {/* Reliability */}
            <div className="grid gap-3 h-full rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)' }}>
                <path d="M4 14l6 6L20 6" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-[clamp(1.2rem,2vw,1.5rem)]">Reliability</h3>
              <p className="text-[#374151] text-[clamp(0.95rem,1.4vw,1.1rem)]">Maintainable systems with predictable behavior and strong foundations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page-level footer removed; global Footer renders from layout */}
    </main>
  );
}