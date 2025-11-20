export default function TermsPage() {
  return (
    <main className="terms-page">
      <section className="section">
        <div className="mx-auto my-[0.5in] w-[min(95vw,1496px)]">
          <div className="grid gap-6 rounded-3xl border border-black/10 bg-white shadow-xl ring-1 ring-black/5 p-[clamp(24px,3vw,48px)] text-[#111317]">
            <h1 className="leading-tight text-[clamp(2rem,6vw,3.4rem)]">Terms of Service</h1>
            <p className="opacity-80">Last updated: {new Date().getFullYear()}</p>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Acceptance of Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms of Service.
                If you do not agree, please discontinue use.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Changes to Terms</h2>
              <p>
                We may update these terms from time to time. Continued use after changes constitutes acceptance of the
                revised terms.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Use of Services</h2>
              <ul className="grid gap-2 list-disc pl-5">
                <li>Use services for lawful purposes only</li>
                <li>Do not engage in activities that disrupt site operation</li>
                <li>Provide accurate information when requested</li>
              </ul>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Intellectual Property</h2>
              <p>
                All content, trademarks, and design elements on the site are owned by or licensed to us and protected by
                applicable laws. You may not reproduce or distribute without permission.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Disclaimer</h2>
              <p>
                Services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error‑free
                operation.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages
                arising from your use of the site or services.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Governing Law</h2>
              <p>
                These terms are governed by the laws of the jurisdiction where we operate, without regard to conflict of laws
                principles.
              </p>
            </section>

            <section className="grid gap-3">
              <h2 className="text-[clamp(1.4rem,4.6vw,2rem)]">Contact</h2>
              <p>
                For questions regarding these Terms of Service, contact us at
                <span className="ml-2 font-medium">info@tapitsoftwares.tech</span>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
