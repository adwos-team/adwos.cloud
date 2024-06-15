<template>
  <div class="auth-form-container">
    <h1 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
      Сбросить пароль
    </h1>
    <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
      Введите адрес электронной почты, связанный с вашей учетной записью. Мы вышлем вам код для сброса пароля.
    </p>
    <br>
    <form @submit.prevent="sendResetEmail">
      <div class="space-y-5">
        <div>
          <label for="reset-email" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Электронная почта
          </label>
          <input type="email" id="reset-email" v-model="email" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="you@adwos.org" required>
        </div>
        <button type="submit" class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500">
          Отправить письмо
        </button>
      </div>
    </form>
    <p class="text-sm text-gray-500 dark:text-neutral-500 mt-4">
      Вы не забыли свой пароль?
      <a @click="$emit('toggleResetPassword')" class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-500" href="#">
        Войти
      </a>
    </p>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const email = ref('');

const sendResetEmail = () => {
  // Логика отправки email для сброса пароля
  $emit('verifyEmail');
};
</script>

<style scoped>
.auth-form-container {
  min-width: 100%;
}
</style>
