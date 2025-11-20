"use client";
import { useEffect } from "react";

export default function DevLogFilter() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    const origError = console.error;
    const origWarn = console.warn;
    console.error = (...args) => {
      const msg = args?.[0]?.toString?.() || "";
      if (msg.includes("net::ERR_ABORTED") || msg.includes("fetchServerResponse")) return;
      origError(...args);
    };
    console.warn = (...args) => {
      const msg = args?.[0]?.toString?.() || "";
      if (msg.includes("net::ERR_ABORTED") || msg.includes("fetchServerResponse")) return;
      origWarn(...args);
    };
    return () => {
      console.error = origError;
      console.warn = origWarn;
    };
  }, []);
  return null;
}

