<template>
  <main class="flex flex-col justify-center pb-20 bg-white">
    <hero_sections_brand />
    <section_brand />
    <special_brend />
  </main>
</template>

<script setup lang="ts">
import Hero_sections_brand from "@/components/brand/hero_sections_brand.vue";
import Section_brand from "@/components/brand/section_brand.vue";
import special_brend from "@/components/brand/special_brend.vue";
</script>