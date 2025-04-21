# Pravin Goomannee's Personal Blog

This is my personal blog site built with Astro and Tailwind CSS.

## Local Development

To run this site locally:

1. Clone the repository

   ```bash
   git clone https://github.com/cityhunteur/cityhunteur.github.io.git
   cd cityhunteur.github.io
   ```

2. Install dependencies

   ```bash
   bun install
   ```

3. Start the development server

   ```bash
   bun run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## Building for Production

To build the site for production:

```bash
bun run build
```

This will generate static files in the `dist/` directory, which can be deployed to GitHub Pages.

## Project Structure

- `src/pages/`: Contains all the page templates
- `src/layouts/`: Reusable layout components
- `src/content/`: Blog posts and other content
- `src/styles/`: Global CSS and Tailwind configuration
- `public/`: Static assets like images and fonts
- `dist/`: Build output directory for GitHub Pages

## Deployment

This site is configured to deploy to GitHub Pages from the `dist/` directory on the `main` branch. After pushing changes to the main branch, the site will be automatically updated.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
