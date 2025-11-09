export const metadata = {
  title: "TAPit — Contact",
};

export default function ContactPage() {
  return (
    <main className="elevate-footer">
      <section className="section contact">
        <div className="container">
          <h2>Contact</h2>
          <p>Have a project in mind? Let’s collaborate. We respond within 24 hours.</p>
          <a href="mailto:hello@tapit.studio" className="btn primary">hello@tapit.studio</a>
        </div>
      </section>

      {/* Page-level footer removed; global Footer renders from layout */}
    </main>
  );
}