import { projects } from "@/lib/data";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-24 border-t border-line"
    >
      <Reveal>
        <Eyebrow>{"// projects"}</Eyebrow>
      </Reveal>
      <Reveal>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3 max-w-xl">
          Things I&apos;ve built for myself
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="text-ink-muted text-sm md:text-base max-w-xl mb-12">
          Small, single-purpose tools — the kind of thing I&apos;d otherwise
          do by hand every week.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col h-full border border-line bg-paper-raised rounded-xl p-5 hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="font-mono text-sm text-ink font-medium truncate">
                  {project.name}
                </h3>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-faint shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2fa84f]" />
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-ink-muted leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-ink-muted bg-accent-soft rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="mt-5 font-mono text-xs text-accent inline-flex items-center gap-1">
                view repo
                <span className="transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
