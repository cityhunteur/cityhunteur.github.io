# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` – routes (`index.astro`, `[slug].astro`, `404.astro`)
- `src/layouts/` – shared shells (e.g., `BaseLayout.astro`)
- `src/components/` – UI parts (e.g., `PostRow.astro`)
- `src/styles/` – `tokens.css` and `global.css` design system
- `src/content/` – collections config + posts (`posts/*.md`)
- `public/` – static assets (icons, images, `manifest.json`, `robots.txt`)
- `.github/workflows/` – CI (Lighthouse/PageSpeed gate)
- TS alias: import with `@/...` (from `tsconfig.json`).

## Build, Test, and Development Commands
- `npm install` – install dependencies
- `npm run dev` – dev server at `http://localhost:4321`
- `npm run build` – production build to `dist/` (validates content schemas)
- `npm run preview` – serve the built site locally
- Optional (matches CI): `bun install`, `bun run build`

## Coding Style & Naming Conventions
- Indentation: 2 spaces. Keep components small and focused.
- Idiomatic JS/TS: prefer `const`, avoid `any`, narrow types, use unions/enums, and add explicit return types on exported functions.
- Components: PascalCase in `src/components/` (e.g., `PostRow.astro`).
- Pages: follow Astro routing; avoid deep nesting.
- Styles: use tokens from `src/styles/tokens.css`; minimize inline styles.
- Imports: prefer `@/` alias for local modules.

## Testing & QA
- Always test changes before pushing.
- Content frontmatter required: `title`, `date` (YYYY-MM-DD), `category`, `cover`; optional `coverAlt`.
- Run `npm run build && npm run preview` and click through pages; check image alts and links.
- Optional local Lighthouse: `serve -s dist -l 8080 & lighthouse http://localhost:8080 --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo`.

## Conventional Commits (Enforced)
- Format: `<type>(<scope>): <subject>`; types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`.
- Examples: `feat(components): add PostRow cta`, `fix(pages): correct slug link`.
- Common scopes: `components`, `pages`, `styles`, `content`, `config`.

## Pull Requests via GitHub CLI
- Authenticate once: `gh auth login`.
- Typical flow: `git checkout -b feat/archive-row && git push -u origin HEAD && gh pr create --fill --base main`.
- Attach: link issues (`Fixes #123`) and add screenshots for UI changes (desktop + mobile).
- Monitor CI: `gh run watch` until Lighthouse checks pass (≥ 0.99 all categories).

## Security & Configuration Tips
- Site URL lives in `astro.config.mjs` (`site`). Update on domain changes.
- No secrets in repo; commit only public assets to `public/`.
- Optimize images in `public/img/` to keep performance high.
# Repository Guidelines

## Project Structure
- `src/pages/` – routes (`index.astro`, `[slug].astro`, `404.astro`)
- `src/layouts/` – shared wrappers (`BaseLayout.astro`)
- `src/components/` – UI parts (`PostRow.astro`)
- `src/styles/` – tokens and globals (`tokens.css`, `global.css`)
- `src/content/` – content collections + posts (`posts/*.md`)
- `public/` – static assets (icons, images, `manifest.json`, `robots.txt`)
- `.github/workflows/` – CICD: lint, test, build, Lighthouse, deploy

## Build, Test, Develop
- `npm install` – install dependencies (Node 20)
- `npm run dev` – start dev server at `http://localhost:4321`
- `npm run build` – production build to `dist/` (validates content schema)
- `npm run preview` – serve the built site locally
- Optional local audit: `serve -s dist -l 8080 & npx lighthouse http://localhost:8080 --chrome-flags="--headless" --only-categories=performance,accessibility,best-practices,seo`

## Coding Style & Naming
- 2‑space indentation; small, focused components.
- Idiomatic JS/TS: prefer `const`, avoid `any`, narrow types, explicit returns for exports.
- Components: PascalCase (`src/components/PostRow.astro`); pages follow Astro routing.
- Styles: use `src/styles/tokens.css`; minimize inline styles. Use `@/` alias for local imports.

## Testing Guidelines
- Always test before pushing: `npm run build && npm run preview`, click through pages and check images/links.
- Content frontmatter required: `title`, `date` (YYYY‑MM‑DD), `category`, `cover`; optional `coverAlt`.
- CI Lighthouse thresholds are enforced (category‑specific, ≥0.90 by default).

## Commits & Pull Requests
- Conventional Commits required: `<type>(<scope>): <subject>` (`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`).
- Examples: `feat(content): restore reading list`, `fix(pages): 404 uses BaseLayout`.
- Use GitHub CLI: `gh auth login`, then `git checkout -b feat/my-change && git push -u origin HEAD && gh pr create --fill --base main`.
- PRs include description, rationale, linked issues, and screenshots for UI changes (desktop + mobile).

## Security & Configuration
- Update `astro.config.mjs` `site` when the domain changes.
- Do not commit secrets; place only public assets in `public/`.
- Optimize `public/img/` assets to keep Lighthouse performance high.
