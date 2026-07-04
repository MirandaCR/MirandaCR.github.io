# cristianmiranda.dev — MirandaCR.github.io

Interactive CV / portfolio site for Cristian Miranda (AI Engineer — Applied GenAI, Algorithmic Trading & DeFi). Bilingual (EN/ES), dark "Palenight" theme, built with Next.js and deployed as a static export on GitHub Pages.

## Stack

- Next.js (App Router) with `output: 'export'` — static export, no server runtime.
- Tailwind CSS v4 (theme tokens defined in `app/globals.css`).
- Client-side EN/ES toggle via `context/LanguageContext.tsx` + `data/i18n.ts`.
- Featured projects fetched live from the public GitHub REST API (`lib/github.ts`), not hardcoded.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (static export)

```bash
npm run build
npx serve out
```

`npm run build` writes the static site directly to `out/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it via GitHub Pages (Pages source must be set to **GitHub Actions** in the repo settings — Settings → Pages → Build and deployment → Source).

## Content

Real content (experience, education, skills, focus areas) lives in `data/*.ts`. Copy for the hero/about sections is adapted from Cristian's own LinkedIn extract — see `data/focusAreas.ts` for notes on what still needs review before publishing.
