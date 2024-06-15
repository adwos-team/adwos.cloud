// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  sourcemap: false,
  devtools: { enabled: false },
  site: {
    url: 'Адвос',
    name: "Адвос: недвижимость, транспорт, работа, услуги, вещи",
    description: "На Адвос вы можете недорого купить или выгодно продать авто с пробегом или новую машину, квартиру и другую недвижимость, а также новую или б/у одежду, мебель",
  },
  // ssr: true,
  colorMode: {
    preference: "light",
    classSuffix: "",
    storageKey: "adwos_theme_selected",
  },
  modules: [
    "@pinia/nuxt",
  ],
  shadcn: {
    prefix: "jet",
    componentDir: "./components/ui",
  },
  sanctum: {
    baseUrl: process.env.BACKEND_URL, // Laravel API
    endpoints: {
      user: "/api/v1/user",
      login: "/api/v1/auth/login",
      logout: "/api/v1/auth/logout",
    },
    redirect: {
      onLogin: "/", // Custom route after successful login
      onAuthOnly: "/login",
    },
  },
  pwa: {
    manifest: {
      name: "Adwos CMS",
      lang: "ru",
      start_url: "localhost",
    },
    minify: true,
    registerType: "autoUpdate",
    injectRegister: "inline",
    includeAssets: [
      "robots.txt",
      "*.svg",
      "*.png",
      "*.jpg",
      "*.webp",
      "*.jpeg",
      "*.css",
      "*.js",
    ],
  },
  app: {
    head: {
      title: "Adwos CMS | Система для запуска досок объявлений",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'На Адвос вы можете недорого купить или выгодно продать авто с пробегом или новую машину, квартиру и другую недвижимость, а также новую или б/у одежду, мебель' },
        // Open Graph
        { property: 'og:title', content: 'Адвос: недвижимость, транспорт, работа, услуги, вещи' },
        { property: 'og:description', content: 'На Адвос вы можете недорого купить или выгодно продать авто с пробегом или новую машину, квартиру и другую недвижимость, а также новую или б/у одежду, мебель' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://front.adwos.org' },
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
    },
  },
  css: ["@/assets/scss/app.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/colors.scss";`,
        },
      },
    },
    optimizeDeps: {
      include: ["pusher-js"],
    },
  },
  pinia: {
    //@ts-ignore
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  imports: {
    dirs: ["stores", "http", "types", "helpers"],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.API_URL,
      pusherAppKey: process.env.PUSHER_APP_KEY,
      backendURL: process.env.BACKEND_URL,
    },
  },
});