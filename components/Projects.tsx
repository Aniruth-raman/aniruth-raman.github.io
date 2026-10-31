import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

function Status({ status }: { status: Project["status"] }) {
  return (
    <span className="flex items-center gap-1.5 font-mono text-[10px] text-ink-faint shrink-0">
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "shipped" ? "bg-[#2fa84f]" : "bg-amber"
        }`}
      />
      {status}
    </span>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <span
          key={tech}
          className="font-mono text-[10px] text-ink-muted bg-accent-soft rounded px-2 py-1"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

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
          Things I&apos;ve built
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="text-ink-muted text-sm md:text-base max-w-xl mb-12">
          Tools I built for problems I kept running into.
        </p>
      </Reveal>

      {featured && (
        <Reveal>
          <a
            href={featured.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${featured.name} repository (opens in a new tab)`}
            className="group block border border-line bg-paper-raised rounded-xl p-6 md:p-8 mb-5 hover:border-accent transition-colors"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="font-mono text-base text-ink font-medium">
                {featured.name}
              </h3>
              <Status status={featured.status} />
            </div>

            <p className="text-base text-ink-muted leading-relaxed max-w-2xl">
              {featured.description}
            </p>

            {featured.highlights && (
              <ul className="mt-5 grid sm:grid-cols-3 gap-4">
                {featured.highlights.map((point) => (
                  <li
                    key={point}
                    className="text-xs text-ink-muted leading-relaxed border-l border-line pl-3"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <Stack items={featured.stack} />
              <span className="font-mono text-xs text-accent inline-flex items-center gap-1">
                view repo
                <span className="transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </span>
            </div>
          </a>
        </Reveal>
      )}

      <div className="grid md:grid-cols-3 gap-5">
        {rest.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} repository (opens in a new tab)`}
              className="group flex flex-col h-full border border-line bg-paper-raised rounded-xl p-5 hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="font-mono text-sm text-ink font-medium truncate">
                  {project.name}
                </h3>
                <Status status={project.status} />
              </div>

              <p className="text-sm text-ink-muted leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-5">
                <Stack items={project.stack} />
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
