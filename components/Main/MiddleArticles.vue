<script setup lang="ts">
const props = defineProps({
  articles: { type: Array, required: true },
});
</script>

<template>
  <ul>
    <li v-for="article in articles" :key="article.id">
      {{ article.title }}
    </li>
  </ul>
</template>
