"use client";
import { useState } from "react";
import { sendSubmission } from "@/lib/emailClient";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");


  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Honeypot: if company is filled, treat as bot
    if ((formData.get("company") || "").toString().trim().length > 0) {
      setStatus("idle");
      return;
    }

    const params = {
      form_type: "Contact",
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      subject: formData.get("subject") || "",
      message: formData.get("message") || "",
    };

    try {
      await sendSubmission(params);
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError("Submission failed. Please try again later.");
      setStatus("idle");
    }
  };

  return (
    <form className="grid gap-[clamp(20px,3vw,32px)] md:pl-[320px] md:ml-0 section-content" onSubmit={onSubmit}>
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
      <div className="grid gap-2">
        <button type="submit" disabled={status === "sending"} aria-busy={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-white bg-[#269292] shadow-sm transition-transform duration-150 active:scale-95 disabled:opacity-60">
          {status === "sending" ? (
            <span className="inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><circle cx="12" cy="12" r="10" stroke="currentColor" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
              <span>Sending...</span>
            </span>
          ) : (
            <span>Send</span>
          )}
        </button>
        {status === "sent" && (
          <p className="text-[#0f5132] bg-[#d1e7dd] border border-[#badbcc] rounded-md px-3 py-2 text-[clamp(0.95rem,1.5vw,1.05rem)]">Thanks for reaching out — we’ll get back to you shortly.</p>
        )}
        {error && (
          <p className="text-[#842029] bg-[#f8d7da] border border-[#f5c2c7] rounded-md px-3 py-2 text-[clamp(0.95rem,1.5vw,1.05rem)]">{error}</p>
        )}
      </div>
      <p className="text-[#6b7280] text-[clamp(0.9rem,1.4vw,1rem)]">Tip: Email <a href="mailto:info@tapitsoftwares.tech" className="underline">info@tapitsoftwares.tech</a> — replies within 24h.</p>
    </form>
  );
}
