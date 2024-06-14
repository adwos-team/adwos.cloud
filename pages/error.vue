<template>
  <div class="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-neutral-900 text-gray-800 dark:text-neutral-200">
    <h1 class="text-5xl font-bold mb-4">{{ error.statusCode }} - {{ error.message }}</h1>
    <p v-if="error.statusCode === 404" class="text-lg mb-8">Извините, но запрашиваемая вами страница не существует.</p>
    <NuxtLink to="/" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
      Вернуться на главную
    </NuxtLink>
  </div>
</template>

<script setup>
const error = useError()
</script>

<style scoped>
</style>
