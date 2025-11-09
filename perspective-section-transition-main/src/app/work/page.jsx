"use client";
import Section from "@/components/Section";

export default function Work() {
  return (
    <main className="relative h-[500vh]">
      <Section id={1} full />
      <Section id={2} />
      <Section id={3} />
      <Section id={4} />
      <Section id={5} full />
    </main>
  );
}