<template>
  <div>
    <Header />
    <slot />
    <Footer />
    <cookie />
    <LicenseCheckModal />
    <button
        class="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        data-hs-overlay="#license-check-modal"
    >
      Проверить ключ
    </button>
  </div>
</template>



<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Cookie from '~/components/Cookie.vue'
import LicenseCheckModal from '@/components/LicenseCheckModal.vue';
</script>

<style scoped>
</style>
