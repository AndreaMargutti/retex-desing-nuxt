<script setup lang="ts">
const props = defineProps({
  articles: { type: Array, required: true },
});
</script>

<template>
  <div class="grid-container grid-middle">
    <MainSingleArticle
      :singleArticle="article"
      :index="article.id"
      v-for="article in articles"
      :key="article.id"
    />
  </div>
</template>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: 100%;

  @include for-tablet() {
    grid-template-columns: repeat(12, 1fr);
  }
}

.grid-middle {
  & > * {
    grid-column: span 12;
    @include for-tablet() {
      &:nth-child(-n + 4) {
        grid-column: span 4;
      }

      &:last-child {
        grid-column: span 8;
      }
    }
  }
}
</style>
