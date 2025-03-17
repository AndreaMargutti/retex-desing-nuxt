<script setup lang="ts">
const props = defineProps({
  articles: { type: Array, required: true },
});
</script>

<template>
  <div class="grid-container">
    <MainSingleArticle
      v-for="article in articles"
      :key="article.id"
      :singleArticle="article"
      :index="article.id"
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

  & > * {
    grid-column: span 12;

    @include for-tablet() {
      &:nth-child(n + 2):nth-child(-n + 5) {
        grid-column: span 3;
      }

      &:nth-child(n + 5) {
        grid-column: 1 / span 6;
      }

      &:last-child {
        grid-column: 7 / span 6;
        grid-row: 3 / 7;
      }
    }
  }
}
</style>
