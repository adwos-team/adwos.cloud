<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('localhost:81/api/users');
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>
