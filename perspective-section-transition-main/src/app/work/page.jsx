"use client";
import Section from "@/components/Section";
import WorkSlider from "@/components/WorkSlider";

export default function Work() {
  return (
    <main className="relative h-[500vh]">
      {/* First section: mount the image slider */}
      <Section id={1} full>
        <div className="w-full px-4">
          <WorkSlider />
        </div>
      </Section>
      <Section id={2} />
      <Section id={3} />
      <Section id={4} />
      <Section id={5} full />
    </main>
  );
}