<template>
  <div>
    <Header v-if="showHeaderFooter" />
    <slot />
    <Footer v-if="showHeaderFooter" />
    <Cookie />
    <LicenseCheckModal :isVisible="isLicenseModalVisible" @close="closeLicenseModal" />
    <button
        class="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        @click="openLicenseModal"
    >
      Проверить лицензию
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Cookie from '@/components/Cookie.vue';
import LicenseCheckModal from '@/components/LicenseCheckModal.vue';

const isLicenseModalVisible = ref(false);

const openLicenseModal = () => {
  isLicenseModalVisible.value = true;
};

const closeLicenseModal = () => {
  isLicenseModalVisible.value = false;
};

// Определяем текущий маршрут
const route = useRoute();

// Условие для отображения Header и Footer
const showHeaderFooter = computed(() => {
  return route.path !== '/auth'; // путь к странице авторизации
});
</script>

<style scoped>
/* Добавьте стили для футера, если необходимо */
</style>
