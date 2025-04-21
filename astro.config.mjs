import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cityhunteur.github.io',
  outDir: './dist', // Output directory for the build
  build: {
    assets: 'assets',
  },
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },
  },
});
