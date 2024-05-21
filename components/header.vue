<template>
  <header class="border-b border-neutral-400 p-4 flex gap-4">
    <NuxtLink to="/" class="font-bold">
      <Logo class="w-20" />
    </NuxtLink>
    <nav class="flex gap-2 flex-wrap">
      <NuxtLink href="/" active-class="font-bold">Главная</NuxtLink>
      <NuxtLink to="/about" active-class="font-bold">Не главная</NuxtLink>
    </nav>
  </header>
</template>
