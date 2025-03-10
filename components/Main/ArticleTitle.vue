<script setup>
const props = defineProps({
  title: { type: String, required: true },
  id: { type: Number, required: true },
});
</script>

<template>
  <h1 :class="{ 'color-white': id === 1 }">{{ title }}</h1>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 700;
  font-size: 24px;
}

.color-white {
  color: white;
}

@media screen and (min-width: 769px) {
  h1 {
    font-size: 40px;
  }
}
</style>
