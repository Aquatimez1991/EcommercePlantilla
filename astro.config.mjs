import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://carpishop.com',
  title: 'CarpiShop',
  description: 'Tu tienda de ropa online',
  integrations: [tailwind()],
}); 