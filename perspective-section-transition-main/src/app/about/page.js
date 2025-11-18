export const metadata = {
  title: "TAPit — About",
};

export default function AboutPage() {
  return (
    <main className="about-page elevate-footer relative" style={{ backgroundColor: '#ffffff' }}>
      <div className="absolute inset-0 bg-white" aria-hidden="true"></div>
      {/* Page Header */}
      <section className="section" style={{ marginBottom: '0.5in', paddingBottom: 0, backgroundColor: '#ffffff' }}>
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
            paddingRight: 0
          }}
        >
          <h1 className="leading-tight text-[clamp(2.6rem,8vw,5.5rem)]" style={{ marginLeft: '0.2in' }}>
            <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.04em' }}>about</span>
          </h1>
          {/* Match Contact header divider */}
          <div className="h-[2px] bg-black/25" style={{ width: 'calc(100% - 1in)', marginLeft: '0.2in' }}></div>
        </div>
      </section>
      <section className="section" style={{ marginTop: 0, paddingTop: 0, backgroundColor: '#ffffff' }}>
        <div
          className="container"
          style={{
            maxWidth: 'none',
            width: 'calc(100vw - 0.6in)',
            margin: '0 auto',
            paddingLeft: 'clamp(12px,2.2vw,20px)',
            paddingRight: 0
          }}
        >
          <div className="grid gap-6 lg:grid-cols-2 items-start about-first-grid">
            {/* Mission card */}
        <div className="relative grid gap-6 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)] text-center mt-[0.35in] overflow-hidden mission-card" style={{ maxWidth: 'min(620px, 44vw)', margin: '0 auto' }}>
            <img src="/images/our-mission.jpg" alt="Our Mission" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <div className="relative z-20 grid gap-0 p-[clamp(16px,2vw,24px)] bg-black/40 rounded-2xl">
              <h2 className="leading-tight text-[clamp(2.4rem,7vw,5rem)] text-[#f3f4f6]" style={{ textShadow: "0 3px 12px rgba(0,0,0,0.45), 0 0 14px rgba(255,255,255,0.28)" }}>
                  <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.01em' }}>Our</span><span style={{ fontFamily: 'var(--font-playfair)', color: '#fa6602', fontWeight: 600, fontStyle: 'italic', marginLeft: '-0.02em', fontSize: '1.12em', letterSpacing: '.01em' }}>Mission</span>
                </h2>
                <p className="text-[#f3f4f6] text-[clamp(1.15rem,2vw,1.35rem)] text-center" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4), 0 0 12px rgba(255,255,255,0.25)" }}>
                  To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their customers.
                </p>
              </div>
            </div>

            {/* Our Story */}
            <div className="grid gap-1 our-story">
              <h2 className="leading-tight text-[clamp(2rem,6vw,4rem)]">
                <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.01em' }}>Our</span><span style={{ fontFamily: 'var(--font-playfair)', color: '#fa6602', fontWeight: 600, fontStyle: 'italic', marginLeft: '-0.02em', fontSize: '1.12em', letterSpacing: '.01em' }}>Story</span>
              </h2>
              <p className="text-[#006F73] text-[clamp(1.15rem,2vw,1.35rem)] text-center">
                We are a passionate team of innovators stepping boldly into the future of technology. As a young software startup, we are excited about the endless possibilities that the new era of artificial intelligence offers. Though we are new to the business, our vision is clear—to harness AI and creative technology to simplify everyday tasks and empower businesses and individuals alike.
              </p>
              <p className="text-[#006F73] text-[clamp(1.15rem,2vw,1.35rem)] text-center">
                Our goal is to transform complex processes into seamless experiences, making technology more accessible, efficient, and impactful.
              </p>
              <p className="text-[#006F73] text-[clamp(1.15rem,2vw,1.35rem)] text-center">
                We believe in innovation that serves a purpose—helping people focus less on tedious tasks and more on what truly matters. With a commitment to quality, creativity, and cutting-edge AI, we are on a mission to redefine how software supports life and work in the digital age.
              </p>
              <p className="text-[#006F73] text-[clamp(1.15rem,2vw,1.35rem)] text-center">
                Join us on this exciting journey as we pioneer new ways to simplify the world through smart technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div
            className="relative grid gap-1 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,36px)] team-card overflow-hidden"
          >
            <img src="/images/our-team.jpg" alt="Our Team" className="absolute inset-0 z-0 h-full w-full object-cover" />
            <div className="relative z-20 grid gap-3 p-[clamp(16px,2vw,24px)] bg-black/40 rounded-2xl team-content">
              <div className="flex items-center gap-4 team-header">
                {/* Team icon */}
                <svg className="shrink-0" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(72px,10vw,128px)', height: 'clamp(72px,10vw,128px)' }}>
                  <circle cx="8" cy="8" r="3" fill="none" stroke="#111317" strokeWidth="2" />
                  <circle cx="16" cy="7" r="2.5" fill="none" stroke="#111317" strokeWidth="2" />
                  <path d="M4 16c0-2.5 2.5-4.5 5.5-4.5S15 13.5 15 16" fill="none" stroke="#111317" strokeWidth="2" />
                  <path d="M12 16c0-2.2 2-4 4.5-4s4.5 1.8 4.5 4" fill="none" stroke="#111317" strokeWidth="2" />
                </svg>
                <h2 className="leading-tight text-[clamp(2rem,6vw,4rem)] text-[#f3f4f6]" style={{ textShadow: '0 3px 12px rgba(0,0,0,0.45), 0 0 14px rgba(255,255,255,0.28)' }}>
                  <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.01em' }}>Our</span><span style={{ fontFamily: 'var(--font-playfair)', color: '#fa6602', fontWeight: 600, fontStyle: 'italic', marginLeft: '-0.12em', fontSize: '1.12em', letterSpacing: '.01em' }}>Team</span>
                </h2>
              </div>
              <p className="text-[#f3f4f6] text-[clamp(1.15rem,2vw,1.35rem)]" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4), 0 0 12px rgba(255,255,255,0.25)' }}>
                At Tapit, our passion fuels everything we do. We are a dedicated team driven by the belief that technology should empower businesses to unlock their full potential. United by a shared mission, we bridge the gap between bold, innovative ideas and practical, effective solutions. Together, we create digital experiences that inspire growth and lasting impact.
              </p>
              <p className="text-[#f3f4f6] text-[clamp(1.15rem,2vw,1.35rem)]" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4), 0 0 12px rgba(255,255,255,0.25)' }}>
                Our commitment goes beyond projects — it’s about excellence, collaboration, and building strong, long-term partnerships. At Tapit, we don’t just contribute to digital transformation; we live and breathe it, helping businesses worldwide thrive in a connected future.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Values cards section (replaces CTA contents) */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div
          className="container"
          style={{
            width: 'min(1600px, calc(98vw - 1in))',
            margin: '0 auto',
            paddingLeft: 'clamp(12px,2.2vw,20px)',
            paddingRight: 0
          }}
        >
          <h2 className="leading-tight text-[clamp(2rem,6vw,4rem)]">
            <span style={{ fontFamily: 'var(--font-montalban)', letterSpacing: '.01em' }}>Our</span><span style={{ fontFamily: 'var(--font-playfair)', color: '#fa6602', fontWeight: 600, fontStyle: 'italic', marginLeft: '-0.12em', fontSize: '1.12em', letterSpacing: '.01em' }}>Values</span>
          </h2>
          <div
            className="grid gap-6 items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 values-grid"
            style={{ marginTop: 0 }}
          >
            {/* Innovation */}
        <div className="grid gap-3 h-full rounded-3xl border border-black/10 bg-[#a9c5a0] text-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)' }}>
                {/* Lightbulb icon to reflect innovation */}
                <path d="M12 3a7 7 0 0 0-7 7c0 3 1.9 5.6 4.5 6.7V18a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1.3C17.1 15.6 19 13 19 10a7 7 0 0 0-7-7z" fill="none" stroke="#111317" strokeWidth="2" />
                <path d="M9 21h6M9 18h6" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 11l2 2 2-2" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-[clamp(1.2rem,2vw,1.5rem)]">Innovation</h3>
              <p className="text-white text-[clamp(1.05rem,1.8vw,1.25rem)]">We push boundaries and embrace cutting-edge technologies to deliver groundbreaking solutions...</p>
            </div>

            {/* Passion */}
        <div className="grid gap-3 h-full rounded-3xl border border-black/10 bg-[#417584] text-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)' }}>
                {/* Heart icon to reflect passion */}
                <path d="M12 21s-6.5-4.2-9.2-7C1 12.2 1 9.4 3 7.6a4.8 4.8 0 0 1 6.8.2L12 9l2.2-1.2a4.8 4.8 0 0 1 6.8-.2c2 1.8 2 4.6 0 6.4-2.7 2.8-9 7-9 7z" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-[clamp(1.2rem,2vw,1.5rem)]">Passion</h3>
              <p className="text-white text-[clamp(1.05rem,1.8vw,1.25rem)]">We&#39;re passionate about what we do and committed to exceeding client expectations...</p>
            </div>

            {/* Collaboration */}
        <div className="grid gap-3 h-full rounded-3xl border border-black/10 bg-[#f06a6a] text-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)' }}>
                <circle cx="8" cy="8" r="3" fill="none" stroke="#111317" strokeWidth="2" />
                <circle cx="16" cy="7" r="2.5" fill="none" stroke="#111317" strokeWidth="2" />
                <path d="M4 16c0-2.5 2.5-4.5 5.5-4.5S15 13.5 15 16" fill="none" stroke="#111317" strokeWidth="2" />
                <path d="M12 16c0-2.2 2-4 4.5-4s4.5 1.8 4.5 4" fill="none" stroke="#111317" strokeWidth="2" />
              </svg>
              <h3 className="text-[clamp(1.2rem,2vw,1.5rem)]">Collaboration</h3>
              <p className="text-white text-[clamp(1.05rem,1.8vw,1.25rem)]">We believe in the power of teamwork and close partnership with our clients..</p>
            </div>

            {/* Excellence */}
        <div className="grid gap-3 h-full rounded-3xl border border-black/10 bg-[#e76a35] text-white shadow-xl ring-1 ring-black/5 p-[clamp(20px,2.5vw,28px)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(40px,5vw,56px)', height: 'clamp(40px,5vw,56px)' }}>
                {/* Trophy icon to reflect excellence */}
                <path d="M6 5h12v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V5z" fill="none" stroke="#111317" strokeWidth="2" />
                <path d="M6 7H4a3 3 0 0 0 3 3" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 7h2a3 3 0 0 1-3 3" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 11v5" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 20h6" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 18h4" fill="none" stroke="#111317" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="text-[clamp(1.2rem,2vw,1.5rem)]">Excellence</h3>
              <p className="text-white text-[clamp(1.05rem,1.8vw,1.25rem)]">We strive for perfection in every project, delivering quality that stands the test of time..</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page-level footer removed; global Footer renders from layout */}
    </main>
  );
}
