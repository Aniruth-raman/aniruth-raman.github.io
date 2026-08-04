import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 md:px-8 py-8 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-ink-faint">
          built with Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
