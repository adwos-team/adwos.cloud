<template>
  <news_titile />
  <news_card />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import News_card from "~/components/news/news_card.vue";
import News_titile from "~/components/news/news_titile.vue";

export default defineComponent({
  name: 'NewsSection',
  components: {News_titile, News_card},
});
</script>