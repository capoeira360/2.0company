import Link from "next/link";

export const metadata = {
  title: "TAPit — Software Product Studio",
  description:
    "TAPit builds premium software products with clarity, performance, and modern interactions.",
};

export default function HomePage() {
  return (
    <main className="elevate-footer">
      {/* Hero */}
      <section className="section home-hero" id="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 className="headline">We build premium software products</h1>
            <p className="sub">
              Clear, fast, and modern experiences. Image placeholder below — we’ll drop your hero later.
            </p>
            <div className="hero-cta">
              <Link href="/work" className="btn primary">View Projects</Link>
              <Link href="/about" className="btn ghost">About Us</Link>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-image" aria-label="Hero image placeholder"></div>
          </div>
        </div>
      </section>

      {/* Infinity logo slider */}
      <section className="section infinity" id="infinity">
        <div className="container">
          <h2>Our Loop of Innovation</h2>
        </div>
        <div className="infinity-track" aria-hidden="true">
          <div className="infinity-run">
            <svg className="infinity-logo" viewBox="0 0 160 80" width="160" height="80">
              <path d="M40,40 C20,10 10,10 10,40 C10,70 30,70 50,40 C70,10 90,10 110,40 C130,70 150,70 150,40 C150,10 140,10 120,40 C100,70 80,70 60,40 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
            <svg className="infinity-logo" viewBox="0 0 160 80" width="160" height="80">
              <path d="M40,40 C20,10 10,10 10,40 C10,70 30,70 50,40 C70,10 90,10 110,40 C130,70 150,70 150,40 C150,10 140,10 120,40 C100,70 80,70 60,40 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
            <svg className="infinity-logo" viewBox="0 0 160 80" width="160" height="80">
              <path d="M40,40 C20,10 10,10 10,40 C10,70 30,70 50,40 C70,10 90,10 110,40 C130,70 150,70 150,40 C150,10 140,10 120,40 C100,70 80,70 60,40 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
            <svg className="infinity-logo" viewBox="0 0 160 80" width="160" height="80">
              <path d="M40,40 C20,10 10,10 10,40 C10,70 30,70 50,40 C70,10 90,10 110,40 C130,70 150,70 150,40 C150,10 140,10 120,40 C100,70 80,70 60,40 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services" id="services">
        <div className="container">
          <h2>Services</h2>
          <div className="services-grid">
            <article className="service-card">
              <h3>Product Strategy</h3>
              <p>Define goals, outcomes, and the roadmap to ship value fast.</p>
            </article>
            <article className="service-card">
              <h3>Design Systems</h3>
              <p>Consistency through scalable components, tokens, and clear motion.</p>
            </article>
            <article className="service-card">
              <h3>Frontend Engineering</h3>
              <p>Modern, accessible interfaces with performance at the core.</p>
            </article>
            <article className="service-card">
              <h3>Performance & Accessibility</h3>
              <p>Fast, inclusive experiences that feel effortless for everyone.</p>
            </article>
            <article className="service-card">
              <h3>Prototyping & Testing</h3>
              <p>Validate ideas quickly with interactive, production‑ready prototypes.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Footer banner removed to avoid duplicate footer; global Footer handles site copyright */}
    </main>
  );
}