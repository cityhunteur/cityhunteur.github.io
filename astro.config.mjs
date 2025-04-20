import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://cityhunteur.github.io',
  outDir: './dist', // Output directory for the build
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    assets: 'assets',
  },
});
