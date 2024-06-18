<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    <div class="w-full max-w-lg mx-auto">
      <div class="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 space-y-6">
        <h1 class="text-2xl font-bold">Регистрация</h1>
        <form>
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Имя</label>
              <input id="name" name="name" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
              <input id="password" name="password" type="password" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            </div>
            <div>
              <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Подтвердите пароль</label>
              <input id="password_confirmation" name="password_confirmation" type="password" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            </div>
            <div class="flex items-center">
              <input id="terms" name="terms" type="checkbox" required class="h-4 w-4 text-blue-600 border-gray-300 rounded">
              <label for="terms" class="ml-2 block text-sm text-gray-900">Я принимаю <a href="#" class="text-blue-600 hover:underline">условия использования</a></label>
            </div>
            <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Зарегистрироваться</button>
          </div>
        </form>
        <p class="text-sm text-gray-500">
          Уже есть аккаунт?
          <a href="#" class="text-blue-600 hover:underline">Войти</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
</script>
