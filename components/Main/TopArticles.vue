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
      &:first-child {
        grid-column: span 12;
      }

      &:nth-child(2) {
        grid-column: span 7;
        grid-row: 2 / span 2;
      }

      &:nth-child(3) {
        grid-column: span 5;
        grid-row: 2 / 3;
      }

      &:nth-child(4) {
        grid-column: span 5;
      }
    }
  }
}
</style>
