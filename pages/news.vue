<template>
  <section class="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
    <div class="flex flex-col justify-center pt-2 mt-10 max-w-full w-[1200px]">
      <div class="relative overflow-hidden before:absolute before:top-1/2 before:start-1/2 before:bg-[url('../svg/component/hyperdrive.svg')] before:bg-no-repeat before:bg-center before:w-full before:h-96 before:-z-[1] before:transform before:-translate-y-1/2 before:-translate-x-1/2 dark:before:bg-[url('../svg/component-dark/hyperdrive.svg')]">
        <div class="max-w-3xl mx-auto relative text-center px-4 sm:px-6 lg:px-8 py-10 md:py-24">
          <div class="inline-block bg-gradient-to-tl from-blue-600 via-transparent to-purple-400 p-px rounded-xl mb-3">
            <div class="bg-white rounded-xl py-1.5 px-3 text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:bg-neutral-900">
            <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-purple-400 text-transparent">
              185+
            </span>
            </div>
          </div>

          <h1 class="text-3xl font-bold md:text-4xl lg:text-5xl lg:leading-tight dark:text-white">Starter Pages &amp; Examples</h1>
          <p class="mt-4 md:text-lg text-gray-600 dark:text-neutral-400">Kick-start your project effortlessly with Preline UI's wide range of examples, using pre-built UI parts, custom components and layouts using Tailwind CSS.</p>
        </div>
      </div>
      <div class="max-w-2xl mx-auto text-center pt-20 pb-6 lg:pb-16">
        <h2 class="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">Новости</h2>
        <p class="mt-4 md:text-lg text-gray-600 dark:text-neutral-400">Читайте полезные новости Adwos CMS. Здесь вы сможете следить за развитием продукта.</p>
      </div>
      <!-- Card Blog -->
      <news_card />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import News_card from "~/components/news/news_card.vue";

export default defineComponent({
  name: 'NewsSection',
  components: {News_card},
});
</script>