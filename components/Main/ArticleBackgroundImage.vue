<script setup lang="ts">
const props = defineProps({
  img: { type: String, required: false },
});
</script>

<template>
  <div>
    <img :src="img" alt="article_cover" />
  </div>
</template>

<style scoped lang="scss"></style>
