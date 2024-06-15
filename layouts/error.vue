<template>
  <div class="error-page">
    <h1 v-if="error.statusCode">{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
import { useError } from '#app';

const error = useError();
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
</style>
