<template>
  <div class="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">Наши услуги</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(service, index) in services" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="service.image" :alt="service.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-semibold text-gray-800">{{ service.title }}</h2>
          <p class="mt-4 text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: 'Веб-разработка',
          description: 'Создание сайтов и веб-приложений любой сложности.',
          image: 'https://via.placeholder.com/300x200.png?text=Web+Development'
        },
        {
          title: 'Мобильная разработка',
          description: 'Разработка мобильных приложений для iOS и Android.',
          image: 'https://via.placeholder.com/300x200.png?text=Mobile+Development'
        },
        {
          title: 'SEO оптимизация',
          description: 'Повышение позиций сайта в поисковых системах.',
          image: 'https://via.placeholder.com/300x200.png?text=SEO+Optimization'
        }
        // Добавьте больше услуг по аналогии
      ]
    };
  }
};
</script>

<style scoped>
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
