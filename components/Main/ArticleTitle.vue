<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  id: { type: Number, required: true },
  img: { type: String, required: false },
});
</script>

<template>
  <h2
    :class="[{ 'color-white': id === 1 }, { 'no-image': img === '' }]"
    class="title"
  >
    {{ title }}
  </h2>
</template>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 2rem;

  @include for-tablet() {
    font-size: 2.5rem;
    color: white;
  }
}

.no-image {
  color: black;
}

.color-white {
  color: white;
}
</style>
