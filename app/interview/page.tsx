import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { interview, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interviewing Aniruth",
  description:
    "Answers to questions that matter, so hiring managers don't have to guess how I think.",
};

function slugify(question: string) {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function InterviewPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 md:px-8 pt-16 md:pt-20 pb-24">
        <Reveal>
          <Eyebrow>{"// interview"}</Eyebrow>
        </Reveal>

        <Reveal>
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Interviewing {profile.shortName}
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-ink-muted leading-relaxed max-w-xl">
            A set of questions I&apos;ve answered up front, so a hiring
            manager or interviewer can get a real sense of how I think before
            we&apos;re even in a room together. It saves us both time.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="font-mono text-xs text-ink-faint mt-6">
            last updated: august 2026
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <nav className="mt-10 mb-14 border border-line rounded-xl p-5 bg-paper-raised">
            <p className="font-mono text-xs text-ink-faint mb-3">questions</p>
            <ol className="space-y-1.5">
              {interview.map((qa) => (
                <li key={qa.question}>
                  <a
                    href={`#${slugify(qa.question)}`}
                    className="text-sm text-ink hover:text-accent transition-colors"
                  >
                    {qa.question}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <div className="space-y-12">
          {interview.map((qa, i) => (
            <Reveal key={qa.question} delay={Math.min(i * 0.04, 0.2)}>
              <div
                id={slugify(qa.question)}
                className="scroll-mt-24 pb-12 border-b border-line last:border-b-0"
              >
                <h2 className="font-display text-lg md:text-xl font-semibold text-ink mb-3">
                  {qa.question}
                </h2>
                <div className="space-y-3">
                  {qa.answer.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm md:text-[15px] text-ink-muted leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-4 font-mono text-xs text-ink-faint">
            more on what I&apos;m doing right now →{" "}
            <a href="/now" className="text-accent hover:underline">
              /now
            </a>
          </p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
