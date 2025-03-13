<script setup lang="ts">
const props = defineProps({
  info: { type: Array, required: true }
});
</script>

<template>
  <ul class="d-flex hamburger-footer">
    <li v-for="{ id, label } in info" :key="id" class="hamburger-footer__item text-center">
      <p class="hamburger-footer__text">{{ label }}</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">

.hamburger-footer {
  flex-direction: column;
  height: 100%;

  @include for-tablet() {
    flex-direction: row;
  }

  &__item {
  padding: 65px 0;
  flex-basis: calc(100% / 6);
  align-content: stretch;
  border-bottom: 1px solid black;

    @include for-desktop () {
      border-bottom: 0;
      border-right: 1px solid black;
    }
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
