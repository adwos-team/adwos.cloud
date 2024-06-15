<template>
  <div>
    <h1 class="text-xl sm:text-2xl font-semibold text-gray-800">
      Войдите в свою учетную запись Adwos
    </h1>
    <br>
    <form @submit.prevent="login">
      <div class="space-y-5">
        <div>
          <label for="login-email" class="block mb-2 text-sm font-medium text-gray-800">
            Электронная почта
          </label>
          <input type="email" id="login-email" v-model="email" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="example@adwos.org" required>
        </div>
        <div>
          <div class="flex justify-between items-center mb-2">
            <label for="login-password" class="block text-sm font-medium text-gray-800">
              Пароль
            </label>
            <a @click="$emit('toggleResetPassword')" class="inline-flex items-center gap-x-1.5 text-xs text-gray-600 hover:text-gray-700 decoration-2 hover:underline focus:outline-none focus:underline" href="#">
              Я забыл свой пароль
            </a>
          </div>
          <div class="relative">
            <input id="login-password" type="password" v-model="password" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="********" required>
            <button type="button" data-hs-toggle-password='{"target": "#login-password"}' class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600">
              <svg class="flex-shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path class="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path class="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
        <button type="submit" class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Войти
        </button>
      </div>
    </form>
    <p class="text-sm text-gray-500 mt-4">
      Нет аккаунта на Адвос?
      <a @click="$emit('toggleRegistration')" class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline">
        Зарегистрироваться
      </a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
  // Логика входа пользователя
};
</script>

<style scoped>
/* ваши стили */
</style>
