export const metadata = {
  title: "TAPit — Contact",
};

export default function ContactPage() {
  return (
    <main className="relative bg-[#FDFDFD]">
      <section className="py-[clamp(24px,4vw,48px)]">
        <div className="mx-auto w-[min(94vw,1600px)] grid gap-[clamp(32px,4vw,64px)]">
          <header className="grid gap-2">
            <h2 className="leading-tight text-[clamp(2.2rem,7vw,4rem)]">contact us</h2>
            <div className="h-[2px] w-full bg-black/25"></div>
            <p className="text-[#374151] text-[clamp(1rem,1.6vw,1.15rem)]">Have a project in mind? Let’s collaborate. We respond within 24 hours.</p>
          </header>

          {/* Submission form (lined, non-interactive) – headers left, content right */}
          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)]">
            <div>
              <h3 className="text-[clamp(1.4rem,3.5vw,2rem)]">share your mind</h3>
            </div>
            <div className="grid gap-[clamp(20px,3vw,32px)] md:pl-[320px] md:ml-0">
              <div className="grid gap-3">
                <label className="text-[#3a3d42]">Name</label>
                <div className="h-[28px] border-b border-black/20"></div>
              </div>
              <div className="grid gap-3">
                <label className="text-[#3a3d42]">Email</label>
                <div className="h-[28px] border-b border-black/20"></div>
              </div>
              <div className="grid gap-3">
                <label className="text-[#3a3d42]">Subject</label>
                <div className="h-[28px] border-b border-black/20"></div>
              </div>
              <div className="grid gap-3">
                <label className="text-[#3a3d42]">Message</label>
                <div className="h-[96px] border-b border-black/20"></div>
              </div>
              <p className="text-[#6b7280] text-[clamp(0.9rem,1.4vw,1rem)]">Tip: Email <a href="mailto:hello@tapit.studio" className="underline">hello@tapit.studio</a> — replies within 24h.</p>
            </div>
          </div>

          {/* Address – headers left, content right */}
          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)]">
            <div>
              <h3 className="text-[clamp(1.2rem,3vw,1.6rem)]">Address</h3>
            </div>
            <div className="md:pl-[320px] md:ml-0 grid gap-[clamp(16px,2.5vw,28px)]">
              <address className="not-italic text-[#374151] text-[clamp(1rem,1.6vw,1.15rem)] grid gap-[clamp(6px,1.2vw,12px)]">
                <div>TAPit Studio</div>
                <div>123 Market Street</div>
                <div>San Francisco, CA 94103</div>
                <div>United States</div>
              </address>
            </div>
          </div>

          {/* Location – headers left, content right */}
          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)]">
            <div>
              <h3 className="text-[clamp(1.2rem,3vw,1.6rem)]">Location</h3>
            </div>
            <div className="md:pl-[320px] md:ml-0 grid gap-[clamp(20px,3vw,32px)]">
              <p className="text-[#374151] text-[clamp(1rem,1.6vw,1.15rem)]">San Francisco, CA</p>
              <div className="mt-2 h-[140px] rounded-xl bg-[#EEEEE8] border border-black/10 grid place-items-center text-[#6b7280] text-sm">Map placeholder</div>
            </div>
          </div>

          {/* Work Hours – headers left, content right */}
          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)]">
            <div>
              <h3 className="text-[clamp(1.2rem,3vw,1.6rem)]">Work Hours</h3>
            </div>
            <div className="md:pl-[320px] md:ml-0 grid gap-[clamp(16px,2.5vw,28px)]">
              <ul className="text-[#374151] text-[clamp(1rem,1.6vw,1.15rem)] grid gap-[clamp(10px,1.8vw,18px)]">
                <li>Mon–Fri: 9:00am – 6:00pm PT</li>
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