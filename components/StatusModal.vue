<template>
  <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
    <div class="bg-white rounded-lg shadow-lg w-full h-full max-w-full max-h-full">
      <div class="flex justify-between items-center p-4 border-b">
        <h3 class="text-lg font-semibold">Статус системы</h3>
        <button @click="closeModal" class="text-gray-600 hover:text-gray-900">
          &times;
        </button>
      </div>
      <div class="p-4 overflow-y-auto h-full">
        <iframe src="https://status.anonimno-help.ru/" class="w-full h-full" frameborder="0"></iframe>
      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t mt-auto">
        <button @click="closeModal" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

defineExpose({
  openModal,
  closeModal,
});
</script>

<style scoped>
/* Добавьте стили для модального окна, если необходимо */
</style>
