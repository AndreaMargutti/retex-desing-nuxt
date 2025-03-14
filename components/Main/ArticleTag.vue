<script setup lang="ts">
const props = defineProps({
  tag: { type: Object, required: true },
});
</script>

<template>
  <button class="tag" :style="{ 'background-color': tag.color }">
    <p class="tag__text">{{ tag.label.toLocaleUpperCase() }}</p>
  </button>
</template>

<style scoped lang="scss">
.tag {
  color: black;
  padding: 0.25rem 0.75rem;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: -2px 2px black;

  &__text {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 0.6rem;
  }
}
</style>
