<script setup lang="ts">
defineProps<{
  label: string;
  type: "small" | "large";
}>();
</script>

<template>
  <button class="button">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.button {
  background-color: red;
  padding: 16px 24px;

  &--small {
    padding: 8px 16px;
  }
}
</style>
