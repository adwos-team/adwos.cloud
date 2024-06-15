import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    // Добавьте ваши настройки TailwindCSS здесь, если необходимо
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
