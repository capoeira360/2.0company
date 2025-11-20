import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_o04jyun";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_3yb9jze"; // single shared template
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "bFkr7rqjEc1AiAeKF";

let emailjsInitialized = false;

export async function sendSubmission(payload) {
  // Initialize EmailJS once with the public key
  if (!emailjsInitialized) {
    try {
      emailjs.init(PUBLIC_KEY);
      emailjsInitialized = true;
    } catch (e) {
      // ignore init errors; send will still try with publicKey
    }
  }

  // All submissions use a single template and destination; fallbacks ensure runtime sends even if envs are not set
  const params = {
    form_type: payload.form_type || "Submission",
    name: payload.name || "",
    email: payload.email || "",
    phone: payload.phone || "",
    subject: payload.subject || "",
    message: payload.message || "",
    items_summary: payload.items_summary || "",
    timestamp: payload.timestamp || new Date().toISOString(),
    site_url: payload.site_url || (typeof window !== "undefined" ? window.location.origin : ""),
    to_email: "info@tapitsoftwares.tech",
  };
  try {
    const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
    return { ok: true, res };
  } catch (error) {
    return { ok: false, error };
  }
}
