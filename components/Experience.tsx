import { education, experience } from "@/lib/data";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-24 border-t border-line"
    >
      <Reveal>
        <Eyebrow>{"// experience"}</Eyebrow>
      </Reveal>
      <Reveal>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-12 max-w-xl">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <div className="relative">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line hidden sm:block" />
        <ol className="space-y-10">
          {experience.map((role, i) => (
            <Reveal key={role.role + role.org} delay={i * 0.05}>
              <li className="relative sm:pl-10">
                <span
                  className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 hidden sm:block ${
                    role.current
                      ? "bg-accent border-accent"
                      : "bg-paper border-ink-faint"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {role.role}
                    <span className="text-ink-muted font-sans font-normal">
                      {" "}
                      · {role.org}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-ink-faint whitespace-nowrap">
                    {role.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-ink-faint mt-1">
                  {role.location}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {role.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-ink-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ink-faint"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14 pt-10 border-t border-line">
          <h3 className="font-mono text-xs text-ink-faint mb-5 tracking-wide">
            education
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {education.map((ed) => (
              <div key={ed.degree}>
                <p className="text-sm font-medium text-ink">{ed.degree}</p>
                <p className="text-sm text-ink-muted">{ed.org}</p>
                {ed.period && (
                  <p className="font-mono text-xs text-ink-faint mt-0.5">
                    {ed.period}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
