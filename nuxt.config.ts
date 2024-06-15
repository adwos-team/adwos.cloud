export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",

    // Remove the "@nuxtjs/seo" module
  ],
  // The rest of your configuration...
});
