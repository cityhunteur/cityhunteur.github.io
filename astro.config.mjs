import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cityhunteur.github.io',
  outDir: './dist', // Output directory for the build
  build: {
    assets: 'assets',
  },
  integrations: [sitemap()],
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },
  },
});
