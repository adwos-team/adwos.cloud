<script setup lang="ts">
defineProps<{
  items: Array<{ text: string, to: string }>
}>();
</script>

<template>
  <ol class="flex items-center whitespace-nowrap mb-6">
    <li class="inline-flex items-center">
      <NuxtLink class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" to="/">
        Главная страница
      </NuxtLink>
      <svg class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </li>
    <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
      <NuxtLink v-if="index < items.length - 1" class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" :to="item.to">
        {{ item.text }}
        <svg class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </NuxtLink>
      <span v-else class="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
        {{ item.text }}
      </span>
    </li>
  </ol>
</template>

<style scoped>
</style>
