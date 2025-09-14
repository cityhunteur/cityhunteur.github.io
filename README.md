# Personal Blog Archive

This site is built with [Astro 4](https://astro.build/) and a custom CSS stack. It showcases an archive list layout and a News page of full‑bleed hero sections inspired by iA's News feed while using my own content and neutral branding.

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Fonts

The project ships with two typeface options via [`@fontsource`](https://fontsource.org/):

- **Option B (default):** IBM Plex Sans (with optional IBM Plex Mono).
- **Option A:** iA Writer Quattro. To enable it, pass `font="ia"` to `BaseLayout` and retain the footer credit: “Typeface: iA Writer Quattro — © iA. Used under its license.”

Both fonts load with `font-display: swap` to limit layout shift.

## Project Structure

- `src/styles/` – design tokens and global styles
- `src/layouts/` – `BaseLayout` and `NewsLayout` wrappers
- `src/components/` – `PostRow` and `NewsSection` components
- `src/content/posts/` – markdown posts with frontmatter
- `src/content/news/` – news entries for the News page
- `src/pages/` – index, News index, and dynamic article routes

## License

MIT

