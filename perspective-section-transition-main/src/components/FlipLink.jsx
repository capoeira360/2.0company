"use client";

import Link from "next/link";

function Letters({ text }) {
  return (
    <>
      <div className="flex">
        {text.split("").map((letter, i) => (
          <span
            key={`top-${i}`}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {text.split("").map((letter, i) => (
          <span
            key={`bottom-${i}`}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </>
  );
}

export function FlipLink({ children, href, onClick, className = "", style }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-block overflow-hidden whitespace-nowrap ${className}`}
      style={{ lineHeight: 1, ...style }}
    >
      <Letters text={children} />
    </Link>
  );
}

export function FlipAnchor({ children, href, onClick, className = "", style }) {
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
      className={`group relative inline-block overflow-hidden whitespace-nowrap ${className}`}
      style={{ lineHeight: 1, ...style }}
    >
      <Letters text={children} />
    </a>
  );
}

export default FlipLink;
