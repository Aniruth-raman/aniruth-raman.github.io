# aniruth.me

Personal portfolio. Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion, exported as a static site and deployed to GitHub Pages.

## Editing content

Almost everything you'll want to change — name, bio, skills, experience, projects, links, interview answers, and the `/now` page — lives in one file:

```
lib/data.ts
```

No need to touch component code for text edits.

## Pages

- `/` — main portfolio (hero, about, skills, experience, projects, contact)
- `/interview` — pre-answered questions for hiring managers (content: `interview` in `lib/data.ts`)
- `/now` — snapshot of current focus (content: `now` in `lib/data.ts`, includes a `lastUpdated` field — update it whenever you revise the page)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

This produces a static export in `out/` (configured via `output: "export"` in `next.config.ts`), which is what GitHub Pages serves.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys `out/` automatically on every push to `main` using GitHub's official Pages Actions.

One-time setup in your GitHub repo:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

### Custom domain (aniruth.me)

`public/CNAME` already contains `aniruth.me` and is copied into the export automatically, so GitHub Pages will keep using your custom domain. Make sure your DNS still points at GitHub Pages (same setup as your current site).

`public/.nojekyll` is included so GitHub Pages serves the `_next/` asset folder correctly (Jekyll ignores underscore-prefixed folders by default).

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- Framer Motion (scroll-reveal + hero entrance only — kept deliberately light)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/meta)
