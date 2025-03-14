<script setup lang="ts">
const props = defineProps(["title", "color"]);
</script>

<template>
  <button class="filter-button">
    {{ title.toUpperCase() }}
  </button>
</template>

<style scoped lang="scss">
.filter-button {
  padding: 12px 16px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: -2px 2px black;
  // testo
  font-family: "Raleway";
  font-weight: 700;
  font-size: 10px;
  background-color: white;

  @include for-tablet() {
    background-color: v-bind("props.color");
  }
}
</style>
