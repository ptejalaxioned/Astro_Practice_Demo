import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://github.com/Astro_Project_Demo.git',
  base: 'https://github.com/ptejalaxioned/Astro_Project_Demo.git',
  integrations: [react(), vue()],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname, // This sets up the alias
      },
    },
  },
});
