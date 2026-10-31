"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative hero-glow">
      <div className="mx-auto max-w-5xl px-6 md:px-8 pt-16 md:pt-24 pb-28 md:pb-36">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs text-hero-text-muted mb-6 flex items-center gap-2"
            >
              <span className="status-dot" />
              {profile.status} · {profile.location}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display text-[2.15rem] leading-[1.12] sm:text-5xl sm:leading-[1.1] md:text-[3.4rem] md:leading-[1.08] font-semibold tracking-tight text-white max-w-3xl"
            >
              I build backend systems that banks trust to move money correctly.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-6 text-hero-text-muted text-base md:text-lg max-w-xl leading-relaxed"
            >
              I&apos;m {profile.shortName}, a {profile.role.toLowerCase()} with{" "}
              {profile.yearsExperience} years in {profile.focus.toLowerCase()} —
              Java, Spring Boot, Kafka, and the Kubernetes clusters they run on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-hero text-sm font-medium px-5 py-2.5 rounded-full hover:bg-hero-accent hover:text-white transition-colors"
              >
                Get in touch
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download={profile.resumeFileName}
                aria-label="Download résumé (opens in a new tab)"
                className="inline-flex items-center gap-2 text-sm font-medium text-white border border-hero-line px-5 py-2.5 rounded-full hover:border-hero-accent hover:text-hero-accent transition-colors"
              >
                Download résumé
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-8 flex items-center gap-5 font-mono text-xs text-hero-text-muted"
            >
              <a
                href={profile.github}
                className="hover:text-hero-accent transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                github ↗
              </a>
              <a
                href={profile.linkedin}
                className="hover:text-hero-accent transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                linkedin ↗
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-hero-accent transition-colors"
              >
                email ↗
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="justify-self-center md:justify-self-end shrink-0"
          >
            <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-hero-line bg-hero-raised">
              <Image
                src="/profile.jpg"
                alt={profile.name}
                fill
                sizes="208px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fade from the dark hero into the light paper background below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 hero-fade pointer-events-none" />
    </section>
  );
}
