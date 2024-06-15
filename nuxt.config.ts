// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss"
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
  vite: {
    build: {
      rollupOptions: {
        external: ['clipboard'],
      },
    },
  },
  app: {
    head: {
      title: 'Adwos CMS | Система для запуска досок объявлений',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'На Адвос вы можете недорого купить или выгодно продать авто с пробегом или новую машину, квартиру и другую недвижимость, а также новую или б/у одежду, мебель' },
        { property: 'og:title', content: 'Адвос: недвижимость, транспорт, работа, услуги, вещи' },
        { property: 'og:description', content: 'На Адвос вы можете недорого купить или выгодно продать авто с пробегом или новую машину, квартиру и другую недвижимость, а также новую или б/у одежду, мебель' },
        { name: 'keywords', content: 'Adwos CMS, универсальная система, доска объявлений, маркетплейс услуг, онлайн аренда авто, сервис бронирования недвижимости, развитие бизнеса, стартап, готовая система, мобильное приложение Android iOS' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://adwos.org' },
        { property: 'og:image', content: '/path/to/logotest.jpeg' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          hid: 'ld+json',
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://front.adwos.org",
            "name": "Адвос: недвижимость, транспорт, работа, услуги, вещи",
            "description": "На Адвос вы можете недорого купить или выгодно продать авто с пробегом или новую машину, квартиру и другую недвижимость, а также новую или б/у одежду, мебель",
          })
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'ld+json': ['innerHTML']
      }
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
});
