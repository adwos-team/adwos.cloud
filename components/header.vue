<template>
  <header class="fixed top-0 w-full z-50 bg-white shadow-md">
    <div class="flex flex-col justify-center items-start px-16 w-full text-sm text-black shadow-sm bg-white bg-opacity-0 max-md:px-5 max-md:max-w-full">
      <nav class="flex gap-5 justify-between px-6 py-5 max-w-full w-[527px] max-md:flex-wrap max-md:pr-5" aria-label="Main Navigation">
        <NuxtLink to="/" class="flex gap-1.5 whitespace-nowrap">
          <img loading="lazy" src="/images/svg/logo-16x16.svg" alt="" class="shrink-0 w-4 aspect-square" />
          <span class="my-auto">Adwos CMS</span>
        </NuxtLink>
        <NuxtLink to="/platform" class="flex gap-1.5 justify-center self-start whitespace-nowrap">
          <span class="grow">Платформа</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e1f9ac93d5bfc0917e590f027bdbac4854705e9ddfba5f7fec0e04f7a773641?apiKey=f092707241b642e585b4eb40b45858e9&" alt="" class="shrink-0 w-3.5 aspect-square" />
        </NuxtLink>
        <NuxtLink to="/pricing" class="justify-center self-start whitespace-nowrap">Тарифы</NuxtLink>
        <NuxtLink to="/create-site" class="justify-center my-auto">Создать сайт</NuxtLink>
        <button @click="toggleMenu" class="md:hidden text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
      <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md w-full">
        <div class="container mx-auto p-4 space-y-2">
          <NuxtLink to="/" class="block text-gray-700 hover:text-blue-600">Главная</NuxtLink>
          <NuxtLink to="/platform" class="block text-gray-700 hover:text-blue-600">Платформа</NuxtLink>
          <NuxtLink to="/pricing" class="block text-gray-700 hover:text-blue-600">Тарифы</NuxtLink>
          <NuxtLink to="/create-site" class="block text-gray-700 hover:text-blue-600">Создать сайт</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
header {
  transition: top 0.3s;
}
</style>
