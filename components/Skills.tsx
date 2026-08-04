import { skillGroups } from "@/lib/data";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-24 border-t border-line"
    >
      <Reveal>
        <Eyebrow>{"// skills"}</Eyebrow>
      </Reveal>
      <Reveal>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-10 max-w-xl">
          What I reach for day to day
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 3) * 0.06}>
            <div>
              <h3 className="font-mono text-xs text-ink-faint mb-3 tracking-wide">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm border border-line bg-paper-raised rounded-md px-3 py-1.5 text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
