<template>
  <main class="flex flex-col justify-center pb-20 bg-white">
    <Hero_sections_brand />
    <Section_brand />
    <Special_brend />
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import Hero_sections_brand from "@/components/brand/hero_sections_brand.vue";
import Section_brand from "@/components/brand/section_brand.vue";
import Special_brend from "@/components/brand/special_brend.vue";

// Установка метатегов и SEO для страницы
useHead({
  title: '🥳 Бренд и логотипы | Система для запуска досок объявлений',
  meta: [
    { property: 'og:title', content: '️Бренд и логотипы | Система для запуска досок объявлений' },
    { property: 'og:description', content: 'Бренд и логотипы | Универсальная система для создания досок объявлений, маркетплейсов услуг и товаров, автопорталов с онлайн арендой авто, сервисов бронирования и продажи недвижимости. Идеальное решение для развития бизнеса или стартапа. Запустите свой проект с Adwos CMS!' },
    { name: 'keywords', content: 'Бренд и логотипы, Adwos CMS, универсальная система, создание досок объявлений, маркетплейсы услуг, маркетплейсы товаров, автопорталы с онлайн арендой авто, сервисы бронирования недвижимости, сервисы продажи недвижимости, развитие бизнеса, стартап, запуск проекта' },
    { property: 'og:image', content: '/path/to/your/image.jpg' },
    { property: 'og:url', content: 'https://adwos.org/brand' },
    { property: 'og:site_name', content: 'Adwos CMS' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@your_twitter_handle' },
    { name: 'twitter:creator', content: '@your_twitter_handle' }
  ]
});
</script>
