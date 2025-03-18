<script setup lang="ts">
const props = defineProps({
  articles: { type: Array, require: true },
  layout: { type: String, required: false },
});
</script>

<template>
  <div class="grid-container">
    <MainSingleArticle
      v-for="article in articles"
      :key="article.id"
      :singleArticle="article"
      :index="article.id"
      :class="[
        { 'grid-top': layout === 'top' },
        { 'grid-middle': layout === 'middle' },
        { 'grid-bottom': layout === 'bottom' },
      ]"
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

  .grid-top {
    grid-column: span 12;

    &:first-child {
      min-height: 20rem;
      display: flex;
      align-items: end;
    }

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

  // middle-section

  .grid-middle {
    & > * {
      grid-column: span 12;
    }

    @include for-tablet() {
      &:nth-child(-n + 4) {
        grid-column: span 4;
      }

      &:last-child {
        grid-column: span 8;
      }
    }
  }

  // bottom-section

  .grid-bottom {
    grid-column: span 12;

    @include for-tablet() {
      &:first-child {
        grid-column: span 12;
      }

      &:nth-child(n + 2):nth-child(-n + 5) {
        grid-column: span 3;
      }

      &:nth-child(n + 6):nth-child(-n + 9) {
        grid-column: span 6;
      }

      &:last-child {
        grid-column: 7 / span 6;
        grid-row: 3 / 7;
      }
    }
  }
}
</style>
