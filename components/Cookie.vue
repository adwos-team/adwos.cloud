<script setup lang="ts">
import { useCookieStore } from '~/stores/cookieStore';
import { onMounted } from 'vue';

const cookieStore = useCookieStore();

onMounted(() => {
  cookieStore.checkCookieBannerStatus();
});
</script>

<template>
  <div v-if="cookieStore.isCookieBannerVisible" id="cookies-simple-with-icon-and-dismiss-button" class="fixed bottom-0 end-0 z-[60] sm:max-w-sm w-full mx-auto p-6">
    <!-- Card -->
    <div class="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
      <div class="flex gap-x-4">
        <img src="/images/cookie.svg" class="flex-shrink-0 w-8 h-auto" alt="cookie">
        <p class="text-sm text-gray-800">
          Просматривая этот сайт, <br> вы принимаете нашу<a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="#">политику использования файлов cookie</a>
        </p>

        <div>
          <button @click="cookieStore.hideCookieBanner" type="button" class="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
            <span class="sr-only">Dismiss</span>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>