import { profile } from "@/lib/data";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 md:px-8 py-16 md:py-28 border-t border-line"
    >
      <Reveal>
        <Eyebrow>{"// contact"}</Eyebrow>
      </Reveal>
      <Reveal>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl leading-[1.15]">
          I&apos;m looking for a remote-friendly, product-focused team.
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-5 text-ink-muted max-w-lg leading-relaxed">
          Email is the easiest way to reach me. I usually get back to you within
          a day or two.
        </p>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download={profile.resumeFileName}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink border border-line px-5 py-2.5 rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Download résumé
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-10 flex items-center gap-5 font-mono text-xs text-ink-faint">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            github ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            linkedin ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
