<script setup lang="ts">
const { status, changeStatus } = useHamburger();
</script>

<template>
  <div class="d-flex justify-between">
    <!-- hamburger meni -->
    <div class="searchbar-section">
      <IconsHamburger v-if="status" @click="changeStatus" />
      <IconsX v-else @click="changeStatus" />
    </div>
    <div class="flex-grow searchbar-section" />
    <!-- search -->
    <div class="searchbar-section">
      <IconsSearch />
    </div>
  </div>
  <HeaderHamburger v-if="!status" />
</template>

<style scoped lang="scss">
.searchbar-section {
  border: 1px solid black;
  border-top: 0;
  border-right: 0;
  padding: 16px;

  @include for-tablet() {
    padding: 40px;
    border-top: 1px solid;
  }
}
</style>
