<script setup>
const props = defineProps({
  tag: { type: Object, required: true },
});
</script>

<template>
  <button :style="{ 'background-color': tag.color }">
    <p>{{ tag.label.toLocaleUpperCase() }}</p>
  </button>
</template>

<style scoped lang="scss">
button {
  color: black;
  padding: 4px 12px;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: -2px 2px black;

  p {
    font-family: "Raleway";
    font-weight: 700;
    font-size: 10px;
  }
}
</style>
