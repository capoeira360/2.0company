"use client";

import { useEffect, useState } from "react";
import { sendSubmission } from "@/lib/emailClient";

export default function ProjectFormModal({ open, onClose }) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!open) setStatus(null);
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    if ((formData.get("company") || "").toString().trim()) { setStatus(null); return; }
    const params = {
      form_type: "Work",
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      subject: formData.get("subject") || "",
      message: formData.get("message") || "",
    };
    await sendSubmission(params);
    setStatus("success");
    if (form && typeof form.reset === "function") {
      form.reset();
    }
  };

  const handleClose = () => {
    setStatus(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-black/50">
      <div className="relative w-[min(92vw,720px)] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
        <button onClick={handleClose} aria-label="Close" className="absolute right-4 top-4 rounded-md border border-black/10 bg-white px-2 py-1 text-sm">Close</button>
        <div className="grid gap-6 p-6">
          <h3 className="font-semibold text-[clamp(1.1rem,5.5vw,1.6rem)]">Start a project</h3>
          {status === "success" && (
            <p className="text-[#0f5132] bg-[#d1e7dd] border border-[#badbcc] rounded-md px-3 py-2 text-sm">Thanks — we’ll get back to you shortly.</p>
          )}
          {status === "error" && (
            <p className="text-[#842029] bg-[#f8d7da] border border-[#f5c2c7] rounded-md px-3 py-2 text-sm">Submission failed. Please try again.</p>
          )}
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-2">
              <label htmlFor="name" className="text-[#111317]">Name</label>
              <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" className="h-10 w-full rounded-md border border-black/20 px-3 outline-none" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-[#111317]">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className="h-10 w-full rounded-md border border-black/20 px-3 outline-none" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="subject" className="text-[#111317]">Subject</label>
              <input id="subject" name="subject" type="text" maxLength={200} autoComplete="off" className="h-10 w-full rounded-md border border-black/20 px-3 outline-none" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-[#111317]">Message</label>
              <textarea id="message" name="message" required maxLength={5000} className="min-h-[120px] w-full rounded-md border border-black/20 p-3 outline-none resize-y" />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" disabled={status === "sending"} aria-busy={status === "sending"}
                className="group relative inline-flex items-center justify-center w-auto min-w-[8rem] overflow-hidden rounded-full border border-[#269292] bg-white px-4 py-2 text-center font-medium text-[#269292] transition-transform duration-150 active:scale-95 disabled:opacity-60">
                {status === "sending" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><circle cx="12" cy="12" r="10" stroke="currentColor" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <>
                    <span className="relative z-[1] inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">Send</span>
                    <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                      <span>Send</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                    </div>
                    <div className="absolute z-0 left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-[#269292] opacity-0 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#269292] group-hover:opacity-100"></div>
                  </>
                )}
              </button>
              <button type="button" onClick={handleClose} className="rounded-full border border-black/20 px-3 py-1.5 text-xs sm:text-sm whitespace-nowrap">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
