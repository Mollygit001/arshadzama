import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import tailwindcssAnimate from 'tailwindcss-animate';

export default defineConfig({
  plugins: [
    react(),
    tailwind({
      config: {
        plugins: [tailwindcssAnimate],
      },
    }),
  ],
});
