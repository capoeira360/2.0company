import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const form = await req.formData();
    const honeypot = (form.get("company") || "").toString().trim();
    const name = (form.get("name") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const subject = (form.get("subject") || "").toString().trim();
    const message = (form.get("message") || "").toString().trim();

    // Honeypot: if filled, treat as successful to avoid feedback loops
    if (honeypot) {
      return NextResponse.redirect(new URL("/contact?submitted=1", req.url), 303);
    }

    // Stronger validation
    const emailRe = /^\S+@\S+\.\S+$/;
    const isEmailValid = emailRe.test(email);
    const isNameValid = name.length > 0 && name.length <= 120;
    const isSubjectValid = subject.length <= 200; // optional
    const isMessageValid = message.length >= 1 && message.length <= 5000;

    if (!isEmailValid || !isNameValid || !isMessageValid || !isSubjectValid) {
      return NextResponse.redirect(new URL("/contact?submitted=0", req.url), 303);
    }

    // In a real implementation, send email or persist to a database here.
    // For now, log to server console.
    console.log("[Contact] Incoming message:", { name, email, subject, message });

    return NextResponse.redirect(new URL("/contact?submitted=1", req.url), 303);
  } catch (err) {
    console.error("[Contact] Error handling submission:", err);
    return NextResponse.redirect(new URL("/contact?submitted=0", req.url), 303);
  }
}