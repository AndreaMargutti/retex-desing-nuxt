<script setup lang="ts">
const { status } = useHamburger();
</script>

<template>
  <div :class="{ 'no-scroll': !status }">
    <NuxtPage />
  </div>
</template>

<style>
.no-scroll {
  height: 100vh;
  overflow: hidden;
}
</style>
