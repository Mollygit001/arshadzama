import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import tailwindcssAnimate from 'tailwindcss-animate';

export default defineConfig({
  plugins: [
    react(),
    tailwind({
      config: {
        darkMode: ['class'],
        content: [
          './pages/**/*.{ts,tsx,js,jsx}',
          './components/**/*.{ts,tsx,js,jsx}',
          './app/**/*.{ts,tsx,js,jsx}',
          './src/**/*.{ts,tsx,js,jsx}',
        ],
        theme: {
          container: {
            center: true,
            padding: '2rem',
            screens: {
              '2xl': '1400px',
            },
          },
          extend: {
            fontFamily: {
              display: ['"Archivo Black"', 'sans-serif'],
              sans: ['Inter', 'system-ui', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
              background: '#171717',
              foreground: '#FFFFFF',
              muted: '#404040',
              'muted-foreground': '#A3A3A3',
              primary: '#FFD60A',
              'primary-foreground': '#000000',
              secondary: '#4CC9F0',
              'secondary-foreground': '#000000',
              accent: '#F72585',
              'accent-foreground': '#FFFFFF',
              border: '#404040',
              ring: '#FFD60A',
              destructive: '#FF0000',
              'destructive-foreground': '#FFFFFF',
            },
            boxShadow: {
              brutal: '4px 4px 0px 0px #000000',
              'brutal-lg': '8px 8px 0px 0px #000000',
              'brutal-xl': '12px 12px 0px 0px #000000',
              'brutal-2xl': '16px 16px 0px 0px #000000',
            },
            borderRadius: {
              lg: '0.5rem',
              md: '0.4rem',
              sm: '0.25rem',
              none: '0',
            },
            keyframes: {
              'accordion-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' },
              },
              'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' },
              },
              'slide-up': {
                '0%': { transform: 'translateY(25px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
              'slide-down': {
                '0%': { transform: 'translateY(-25px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
              },
              'fade-in': {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              },
              bounce: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-8px)' },
              },
              'spin-slow': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            },
            animation: {
              'accordion-down': 'accordion-down 0.2s ease-out',
              'accordion-up': 'accordion-up 0.2s ease-out',
              'slide-up': 'slide-up 0.4s ease-out',
              'slide-down': 'slide-down 0.4s ease-out',
              'fade-in': 'fade-in 0.4s ease-out',
              bounce: 'bounce 2s ease-in-out infinite',
              float: 'float 3s ease-in-out infinite',
              'spin-slow': 'spin-slow 8s linear infinite',
            },
          },
        },
        plugins: [tailwindcssAnimate],
      },
    }),
  ],
});
