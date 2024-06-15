<template>
  <div>
    <h1 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
      Создайте свою учетную запись Адвос
    </h1>
    <br>
    <form @submit.prevent="register">
      <div class="space-y-5">
        <div>
          <label for="company-name" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Название компании
          </label>
          <input type="text" id="company-name" v-model="companyName" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="ООО Адвос" required>
        </div>

        <div>
          <label for="full-name" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Фамилия и имя
          </label>
          <input type="text" id="full-name" v-model="fullName" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="Иванов Иван" required>
        </div>

        <div>
          <label for="register-email" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Электронная почта
          </label>
          <input type="email" id="register-email" v-model="email" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="you@email.com" required>
        </div>

        <div class="space-y-3">
          <div>
            <label for="register-password" class="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
              Пароль
            </label>
            <div class="relative">
              <input :type="passwordType" id="register-password" v-model="password" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="********" required>
              <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
                <svg v-if="isPasswordVisible" class="flex-shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <svg v-else class="flex-shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                  <line x1="2" x2="22" y1="2" y2="22"></line>
                </svg>
              </button>
            </div>
          </div>

          <div class="relative">
            <input :type="passwordType" id="register-confirm-password" v-model="confirmPassword" class="py-2.5 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600" placeholder="********" required>
            <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
              <svg v-if="isPasswordVisible" class="flex-shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <svg v-else class="flex-shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line x1="2" x2="22" y1="2" y2="22"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex space-x-2">
          <input type="checkbox" class="shrink-0 border-gray-200 size-3.5 mt-[3px] rounded text-blue-600 focus:ring-offset-0 dark:bg-neutral-800 dark:checked:bg-blue-500 dark:border-neutral-700" id="accept-terms" v-model="acceptTerms" required>
          <label for="accept-terms" class="text-sm text-gray-800 ms-1.5 dark:text-neutral-200">
            Согласие на обработку
            <NuxtLink class="inline-flex items-center gap-x-1.5 font-medium text-blue-600 hover:text-blue-700 decoration-2 hover:underline dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600" to="#">
              персональных данных
            </NuxtLink>
          </label>
        </div>

        <button type="submit" class="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600">
          Далее →
        </button>
      </div>
    </form>

    <p class="text-sm text-gray-500 dark:text-neutral-500 mt-4">
      Уже есть профиль?
      <a @click="$emit('toggleRegistration')" class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-500" href="#">
        Войти
      </a>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const email = ref('');
const fullName = ref('');
const password = ref('');
const confirmPassword = ref('');
const companyName = ref('');
const acceptTerms = ref(false);
const isPasswordVisible = ref(false);

const passwordType = computed(() => (isPasswordVisible.value ? 'text' : 'password'));

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const register = async () => {
  try {
    const payload = {
      companyName: companyName.value,
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
      acceptTerms: acceptTerms.value,
    };

    console.log('Sending payload:', payload);

    const response = await fetch('http://localhost:81/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData.errors || errorData.message);
      return;
    }

    const data = await response.json();
    console.log('User registered successfully', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<style scoped>
/* ваши стили */
</style>
