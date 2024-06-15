<template>
  <div v-if="isVisible"
       class="fixed top-0 left-0 z-[80] w-full h-full overflow-x-hidden overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div
        class="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md">
      <!-- Header -->
      <div class="py-3 px-4 flex justify-between items-center border-b">
        <h3 class="font-semibold text-gray-800">
          Проверка лицензионного ключа
        </h3>
        <button type="button"
                class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                @click="closeModal">
          <span class="sr-only">Закрыть</span>
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>
      <!-- End Header -->

      <form @submit.prevent="checkLicense">
        <!-- Body -->
        <div class="p-4 space-y-5">
          <div>
            <label for="license-key" class="sr-only">Лицензионный ключ</label>
            <input
                v-model="licenseKey"
                type="text"
                id="license-key"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Введите ваш домен site.ru"
            />
          </div>
        </div>
        <!-- End Body -->

        <!-- Footer -->
        <div class="p-4 flex justify-end gap-x-2">
          <div class="w-full flex justify-end items-center gap-x-2">
            <button
                type="button"
                class="py-2 px-3 inline-flex justify-center items-center text-start bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                @click="closeModal"
            >
              Отмена
            </button>

            <button
                type="submit"
                class="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500"
            >
              Проверить
            </button>
          </div>
        </div>
        <!-- End Footer -->
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  isVisible: Boolean
});

const emits = defineEmits(['close']);

const licenseKey = ref('');

const checkLicense = () => {
  // Логика проверки лицензионного ключа
  alert(`Проверка лицензионного ключа: ${licenseKey.value}`);
};

const closeModal = () => {
  emits('close');
};
</script>

<style scoped>
</style>
