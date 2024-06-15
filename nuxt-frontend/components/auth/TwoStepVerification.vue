<template>
  <div class="grow px-5">
    <div class="h-full min-h-screen sm:w-[448px] flex flex-col justify-center mx-auto space-y-5">
      <!-- Title -->
      <div>
        <h1 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
          2-Step Verification
        </h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
          We sent a verification code to your email.
        </p>
        <p class="text-sm text-gray-500 dark:text-neutral-500">
          Enter the code from the email in the field below.
        </p>
      </div>
      <!-- End Title -->

      <form @submit.prevent="verifyCode">
        <div class="space-y-2">
          <div class="flex gap-x-2" data-hs-pin-input="">
            <input v-for="(digit, index) in code" :key="index" v-model="code[index]" type="text" maxlength="1" class="py-2 px-3 block w-[48px] h-[48px] border-gray-200 text-center rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" @input="focusNext(index)">
          </div>

          <div class="pt-2">
            <button type="submit" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600">
              Verify my account
            </button>
          </div>
        </div>
      </form>

      <p class="text-sm text-gray-500 dark:text-neutral-500">
        Didn't receive an email?
        <a @click="resendCode" class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-500" href="#">
          Resend
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const code = ref(Array(6).fill(''));

const focusNext = (index) => {
  if (code.value[index].length === 1 && index < 5) {
    document.querySelectorAll('[data-hs-pin-input-item]')[index + 1].focus();
  }
};

const verifyCode = () => {
  // Логика проверки кода
};

const resendCode = () => {
  // Логика повторной отправки кода
};
</script>

<style scoped>
/* ваши стили */
</style>
