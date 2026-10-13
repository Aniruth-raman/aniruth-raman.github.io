import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { now, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "What I'm doing now",
  description: "What Aniruth is working on and thinking about right now.",
};

export default function NowPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 md:px-8 pt-16 md:pt-20 pb-24">
        <Reveal>
          <Eyebrow>{"// now"}</Eyebrow>
        </Reveal>

        <Reveal>
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            What {profile.shortName} is doing now
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-mono text-xs text-ink-faint">
            last updated: {now.lastUpdated.toLowerCase()}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <h2 className="font-mono text-xs text-ink-faint tracking-wide mb-5">
              main focus
            </h2>
            <ul className="space-y-4">
              {now.mainFocus.map((item, i) => (
                <li
                  key={i}
                  className="text-sm md:text-[15px] text-ink-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-ink-faint"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 pt-10 border-t border-line">
            <h2 className="font-mono text-xs text-ink-faint tracking-wide mb-5">
              on the back burner
            </h2>
            <ul className="space-y-4">
              {now.backBurner.map((item, i) => (
                <li
                  key={i}
                  className="text-sm md:text-[15px] text-ink-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-ink-faint"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-14 font-mono text-xs text-ink-faint">
            wondering how I&apos;d answer your interview questions? →{" "}
            <a href="/interview" className="text-accent hover:underline">
              /interview
            </a>
          </p>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
