"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { usePathname } from "next/navigation";
const links = [
  { href: "/#about", label: "about" },
  { href: "/#skills", label: "skills" },
  { href: "/#experience", label: "experience" },
  { href: "/#projects", label: "projects" },
  { href: "/interview", label: "interview" },
  { href: "/now", label: "now" },
  { href: "/#contact", label: "contact" },
];

export default function Nav({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on any resize back to desktop width.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Nav sits over the dark hero until the page scrolls (or on pages that
  // don't have a dark hero at all, via the `dark` prop being false).
  const overDark = dark && !scrolled && !menuOpen;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-paper/95 backdrop-blur-md border-b border-line"
          : dark
          ? "bg-hero border-b border-white/10"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display font-semibold text-sm tracking-tight ${
            overDark ? "text-white" : "text-ink"
          }`}
          onClick={(e) => {
    setMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }}
        >
          aniruth<span className="text-accent">.</span>me
        </Link>

        <ul
          className={`hidden md:flex items-center gap-7 font-mono text-xs ${
            overDark ? "text-hero-text-muted" : "text-ink-muted"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors ${
                  overDark ? "hover:text-white" : "hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className={`hidden md:flex items-center gap-2 font-mono text-xs rounded-full px-3.5 py-1.5 transition-colors ${
            overDark
              ? "border border-hero-line text-hero-text-muted hover:border-hero-accent hover:text-hero-accent"
              : "border border-line text-ink-muted hover:border-accent hover:text-accent"
          }`}
        >
          <span className="status-dot" />
          {profile.status.toLowerCase()}
        </Link>

        {/* Mobile: hamburger toggle instead of the hidden desktop link list */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`md:hidden flex items-center justify-center w-9 h-9 -mr-2 ${
            overDark ? "text-white" : "text-ink"
          }`}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                d="M0 1H18M0 7H18M0 13H18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-5">
          <ul className="flex flex-col gap-4 font-mono text-sm text-ink">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center gap-2 font-mono text-xs text-ink-muted border border-line rounded-full px-3.5 py-2 w-fit"
          >
            <span className="status-dot" />
            {profile.status.toLowerCase()}
          </Link>
        </div>
      )}
    </header>
  );
}
