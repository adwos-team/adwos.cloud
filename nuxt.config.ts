import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/features',
        '/faq',
        '/job',
        '/legal/agreement',
        '/legal/beta',
        '/legal/cookie',
        '/legal/promotion-terms',
        '/legal/offer',
        '/legal/privacy',
        '/news',
        '/partnership',
        '/stack',
        '/support',
        '/updates',
        '/test-home',
        '/cookie'
      ]
    }
  }
})
