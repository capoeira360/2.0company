export const metadata = {
  title: "TAPit — Contact",
};

export default function ContactPage({ searchParams }) {
  return (
    <main className="relative bg-[#ffffff] contact-page">
      <section className="py-[clamp(24px,4vw,48px)]">
        <div className="mx-auto w-[min(94vw,1600px)] grid gap-[clamp(32px,4vw,64px)]">
          <header className="grid gap-2 contact-header">
            <h2 className="leading-tight text-[clamp(2.2rem,7vw,4rem)]">contact us</h2>
            <div className="h-[2px] w-full bg-black/25"></div>
            <p className="text-[#111317] text-[clamp(1rem,1.6vw,1.15rem)]">Have a project in mind? Let’s collaborate. We respond within 24 hours.</p>
            {searchParams?.submitted === "1" && (
              <p className="text-[#0f5132] bg-[#d1e7dd] border border-[#badbcc] rounded-md px-3 py-2 text-[clamp(0.95rem,1.5vw,1.05rem)]">Thanks for reaching out — we’ll get back to you shortly.</p>
            )}
            {searchParams?.submitted === "0" && (
              <p className="text-[#842029] bg-[#f8d7da] border border-[#f5c2c7] rounded-md px-3 py-2 text-[clamp(0.95rem,1.5vw,1.05rem)]">Please fill in your name, email, and message.</p>
            )}
          </header>

          {/* Submission form (lined, non-interactive) – responsive order */}
          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)] section-grid">
            <div>
              <h3 className="text-[clamp(1.4rem,3.5vw,2rem)]">share your mind</h3>
            </div>
            <form className="grid gap-[clamp(20px,3vw,32px)] md:pl-[320px] md:ml-0 section-content" method="POST" action="/api/contact">
              {/* Honeypot field (bots may fill; humans won't see) */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-3">
                <label htmlFor="name" className="text-[#111317]">Name</label>
                <div className="border-b border-black/20">
                  <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className="h-[28px] w-full bg-transparent outline-none" />
                </div>
              </div>
              <div className="grid gap-3">
                <label htmlFor="email" className="text-[#111317]">Email</label>
                <div className="border-b border-black/20">
                  <input id="email" name="email" type="email" required autoComplete="email" className="h-[28px] w-full bg-transparent outline-none" />
                </div>
              </div>
              <div className="grid gap-3">
                <label htmlFor="subject" className="text-[#111317]">Subject</label>
                <div className="border-b border-black/20">
                  <input id="subject" name="subject" type="text" maxLength={200} autoComplete="off" className="h-[28px] w-full bg-transparent outline-none" />
                </div>
              </div>
              <div className="grid gap-3">
                <label htmlFor="message" className="text-[#111317]">Message</label>
                <div className="border-b border-black/20">
                  <textarea id="message" name="message" required maxLength={5000} className="w-full h-[96px] bg-transparent outline-none resize-none" />
                </div>
              </div>
              <div>
                <button type="submit" className="inline-flex items-center gap-2 text-[#111] underline">Send</button>
              </div>
              <p className="text-[#6b7280] text-[clamp(0.9rem,1.4vw,1rem)]">Tip: Email <a href="mailto:info@tapitsoftwares.tech" className="underline">info@tapitsoftwares.tech</a> — replies within 24h.</p>
            </form>
          </div>

          {/* Address – responsive order */}
          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)] section-grid">
            <div>
              <h3 className="text-[clamp(1.2rem,3vw,1.6rem)]">Address</h3>
            </div>
            <div className="md:pl-[320px] md:ml-0 grid gap-[clamp(16px,2.5vw,28px)] section-content">
              <address className="not-italic text-[#111317] text-[clamp(1rem,1.6vw,1.15rem)] grid gap-[clamp(6px,1.2vw,12px)]">
                <div>TAPit Softwares</div>
                <div>P.O Box 6057</div>
                <div>Sanawari, Arusha</div>
                <div>Tanzania</div>
              </address>
            </div>
          </div>

          {/* Location – responsive order */}
          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)] section-grid">
            <div>
              <h3 className="text-[clamp(1.2rem,3vw,1.6rem)]">Location</h3>
            </div>
            <div className="md:pl-[320px] md:ml-0 grid gap-[clamp(20px,3vw,32px)] section-content">
              <p className="text-[#111317] text-[clamp(1rem,1.6vw,1.15rem)]">Sanawari, Arusha, Tanzania</p>
              <div className="mt-2 h-[140px] rounded-xl bg-[#ffffff] border border-black/10 grid place-items-center text-[#6b7280] text-sm">Map placeholder</div>
            </div>
          </div>

          {/* Work Hours – responsive order */}
          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)] section-grid">
            <div>
              <h3 className="text-[clamp(1.2rem,3vw,1.6rem)]">Work Hours</h3>
            </div>
            <div className="md:pl-[320px] md:ml-0 grid gap-[clamp(16px,2.5vw,28px)] section-content">
              <ul className="text-[#111317] text-[clamp(1rem,1.6vw,1.15rem)] grid gap-[clamp(10px,1.8vw,18px)]">
                <li>Mon–Fri: 9:00am – 5:00pm EAT</li>
                <li>Sat: By appointment</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer renders from layout */}
    </main>
  );
}
