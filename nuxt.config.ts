// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Включение инструментов разработчика
  devtools: { enabled: true },

  // Импорт необходимых модулей Nuxt
  modules: [
    "@pinia/nuxt", // Управление состоянием с помощью Pinia
    "@nuxtjs/tailwindcss", // Интеграция Tailwind CSS
    "@nuxtjs/robots", // Генерация файла robots.txt
    "@nuxtjs/sitemap", // Генерация файла sitemap.xml
    "nuxt-schema-org", // Интеграция Schema.org
    "@nuxtjs/seo" // Расширенное SEO управление
  ],

  // Настройки TailwindCSS
  tailwindcss: {
    extend: {
      colors: {
        'primary': '#ff3e00', // Пример добавления пользовательского цвета
      },
      // Другие пользовательские расширения для TailwindCSS по мере необходимости
    }
  },

  // Настройка файла robots.txt
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Allow: '/'
  },

  // Конфигурация sitemap
  sitemap: {
    hostname: 'https://adwos.org',
    gzip: true,
    routes: ['/page1', '/page2']
  },

  // Настройки Schema.org
  schemaOrg: {
    canonicalHost: 'https://adwos.org',
  },

  // Глобальные SEO настройки
  seo: {
    title: 'Адвос: недвижимость, транспорт, работа, услуги, вещи',
    description: 'На Адвос вы можете недорого купить или выгодно продать авто с пробегом или новую машину, квартиру и другую недвижимость, а также новую или б/у одежду, мебель',
    openGraph: {
      type: 'website',
      url: 'https://front.adwos.org',
      title: 'Адвос: недвижимость, транспорт, работа, услуги, вещи',
      description: 'На Адвос вы можете недорого купить или выгодно продать авто с пробегом или новую машину, квартиру и другую недвижимость, а также новую или б/у одежду, мебель',
      image: '/path/to/logotest.jpeg',
      locale: 'ru_RU',
      imageWidth: '512',
      imageHeight: '512'
    }
  },

  // Настройки head для HTML
  app: {
    head: {
      siteUrl: 'https://example.com',
      title: 'Adwos CMS | Система для запуска досок объявлений',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Список других мета тегов
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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

  // Хуки для обработки серверных ошибок
  hooks: {
    'render:errorMiddleware': (app) => {
      app.use((err, req, res, next) => {
        res.statusCode = err.statusCode || 500;
        res.end(`Error: ${err.message}`);
      });
    }
  }
});
