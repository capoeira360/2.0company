export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <section className="section">
        <div className="mx-auto my-[0.5in] w-[min(95vw,1496px)]">
          <div className="grid gap-6 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,48px)] text-[#111317]">
            <h1 className="leading-tight text-[clamp(2rem,6vw,3.4rem)]">Privacy Policy</h1>
            <p className="opacity-80">Last updated: {new Date().getFullYear()}</p>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Overview</h2>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                visit our website and use our services. By accessing or using our site, you acknowledge this policy.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Information We Collect</h2>
              <ul className="grid gap-2 list-disc pl-5">
                <li>Contact information such as name, email address, and phone number</li>
                <li>Professional details provided via forms or inquiries</li>
                <li>Usage data including pages visited, time on page, and device information</li>
                <li>Cookies and similar technologies for analytics and performance</li>
              </ul>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">How We Use Information</h2>
              <ul className="grid gap-2 list-disc pl-5">
                <li>To respond to inquiries and provide requested services</li>
                <li>To personalize content and improve site performance</li>
                <li>To communicate updates, offers, and important notices</li>
                <li>To comply with legal obligations and enforce policies</li>
              </ul>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Cookies</h2>
              <p>
                We use cookies to remember preferences and analyze traffic. You can control cookies through your
                browser settings. Disabling cookies may impact certain features.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Data Retention</h2>
              <p>
                We retain information only as long as necessary for the purposes outlined in this policy, unless a longer
                retention period is required or permitted by law.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Your Rights</h2>
              <ul className="grid gap-2 list-disc pl-5">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request details on how your data is processed</li>
              </ul>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Contact</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at
                <span className="ml-2 font-medium">info@tapitsoftwares.tech</span>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
