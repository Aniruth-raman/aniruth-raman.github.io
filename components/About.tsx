import { about } from "@/lib/data";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-24">
      <Reveal>
        <Eyebrow>{"// about"}</Eyebrow>
      </Reveal>
      <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-16">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight md:sticky md:top-24">
            A bit about how I got here
          </h2>
        </Reveal>
        <div className="space-y-5 max-w-2xl">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-ink-muted leading-relaxed text-[15px] md:text-base">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
