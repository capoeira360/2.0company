export const metadata = { title: "TAPit — Submission" };

import SubmissionForm from "./SubmissionForm";

export default function SubmissionPage() {
  return (
    <main className="relative bg-[#ffffff]">
      <section className="py-[clamp(24px,4vw,48px)]">
        <div className="mx-auto w-[min(94vw,1600px)] grid gap-[clamp(32px,4vw,64px)]">
          <header className="grid gap-2">
            <h2 className="leading-tight text-[clamp(2.2rem,7vw,4rem)]">submission</h2>
            <div className="h-[2px] w-full bg-black/25"></div>
            <p className="text-[#111317] text-[clamp(1rem,1.6vw,1.15rem)]">Send us your enquiry or items summary.</p>
          </header>

          <div className="grid md:grid-cols-[200px_1fr] items-start gap-[clamp(28px,5vw,52px)] md:gap-[clamp(140px,12vw,280px)]">
            <div>
              <h3 className="text-[clamp(1.4rem,3.5vw,2rem)]">details</h3>
            </div>
            <SubmissionForm />
          </div>
        </div>
      </section>
    </main>
  );
}

