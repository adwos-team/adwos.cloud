<template>
  <div class="grow px-5">
    <div class="h-full min-h-screen sm:w-[448px] flex flex-col justify-center mx-auto space-y-5">
      <div>
        <h1 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
          Verify your email
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
          We've sent a link to your email address: <span class="font-semibold text-gray-800 dark:text-neutral-200">{{ email }}</span>
        </p>
        <p class="text-sm text-gray-500 dark:text-neutral-500">
          Please follow the link inside to continue.
        </p>
      </div>
      <form @submit.prevent="$emit('continue')">
        <button type="submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600">
          Continue
        </button>
      </form>
      <p class="text-sm text-gray-500 dark:text-neutral-500 mt-4">
        Didn't receive an email?
        <a @click="resendEmailVerification" class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-500" href="#">
          Resend
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const resendEmailVerification = () => {
  // Логика повторной отправки верификационного письма
};
</script>

<style scoped>
/* ваши стили */
</style>
