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
  padding: 0.7rem 1rem;
  border: 1px solid black;
  border-radius: 0.25px;
  box-shadow: -2px 2px black;
  // testo
  font-family: "Raleway";
  font-weight: 700;
  font-size: 0.6rem;
  background-color: white;

  @include for-tablet() {
    background-color: v-bind("props.color");
  }
}
</style>
