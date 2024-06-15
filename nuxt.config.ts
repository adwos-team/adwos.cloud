// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  build: {
    rollupOptions: {
      external: ['@vueuse/head', 'clipboard']
    }
  },
  hooks: {
    'render:errorMiddleware': (app) => {
      app.use((err, req, res, next) => {
        res.statusCode = err.statusCode || 500;
        res.end(`Error: ${err.message}`);
      });
    }
  }
})
