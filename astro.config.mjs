// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://thefire888.github.io/blog-git/',
  base: '/blog-git/',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    base: '/blog-git/',
  }
});
