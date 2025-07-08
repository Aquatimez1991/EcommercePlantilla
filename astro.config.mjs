import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://carpishop.com',
  title: 'CarpiShop',
  description: 'Tu tienda de ropa online',
  integrations: [tailwind()],
  image: {
    // Configuración de optimización de imágenes
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Formatos soportados
    formats: ['webp', 'avif', 'jpeg'],
    // Calidad por defecto
    quality: 80,
    // Tamaños por defecto para responsive
    densities: [1, 2],
  }
}); 