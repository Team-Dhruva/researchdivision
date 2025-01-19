import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import raw from 'vite-raw-plugin';

export default defineConfig({
  plugins: [
    sveltekit(),
    raw({
      fileRegex: /\.md$/,
    }),
  ],
});
