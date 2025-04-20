import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://cityhunteur.github.io',
  outDir: './docs', // GitHub Pages requires the output to be in the docs folder
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    assets: 'assets',
  },
});
