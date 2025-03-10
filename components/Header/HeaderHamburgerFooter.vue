<script setup>
const props = defineProps({
  info: Array,
});
</script>

<template>
  <ul class="flex flex-column flex-row">
    <li v-for="{ id, label } in info" :key="id" class="text-center">
      <p>{{ label }}</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.flex-column {
  flex-direction: column;
}

ul {
  height: 100%;
}

li {
  padding: 65px 0;
  flex-basis: calc(100% / 6);
  align-content: stretch;
  border-bottom: 1px solid black;
  p {
    font-size: 14px;
    font-weight: 400;
  }
}

@media screen and (min-width: 970px) {
  .flex-row {
    flex-direction: row;
  }

  li {
    border-bottom: 0;
    border-right: 1px solid black;
  }
}
</style>
