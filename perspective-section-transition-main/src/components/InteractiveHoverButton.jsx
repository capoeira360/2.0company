"use client";

import Link from "next/link";

export default function InteractiveHoverButton({ text = "Start a project", href = "/contact", className = "", onClick }) {
  const Base = onClick ? "button" : Link;
  const baseProps = onClick
    ? { onClick }
    : { href };
  return (
    <Base
      {...baseProps}
      className={`group relative inline-flex items-center justify-center w-auto min-w-[10rem] cursor-pointer overflow-hidden rounded-full border border-[#269292] bg-white px-4 py-2 text-center font-medium text-[#269292] ${className}`}
    >
      <span className="relative z-[1] inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </div>
      <div className="absolute z-0 left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-[#269292] opacity-0 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-[#269292] group-hover:opacity-100"></div>
    </Base>
  );
}
