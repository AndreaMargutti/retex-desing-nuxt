<script setup>
/**
 * TODO:
 * - gestiamo questa logica con la composable
 * - lang `ts`
 */
const hamburger = ref(false);
const emit = defineEmits(["hamburgerToggle"]);

const toggleHamburger = () => {
  hamburger.value = !hamburger.value;
  emit("hamburgerToggle", hamburger.value);
};
</script>

<template>
  <div class="flex justify-between">
    <!-- hamburger meni -->
    <div class="searchbar-section">
      <IconsHamburger v-if="!hamburger" @click="toggleHamburger" />
      <IconsX v-else @click="toggleHamburger" />
    </div>
    <div class="flex-grow searchbar-section" />
    <!-- search -->
    <div class="searchbar-section">
      <IconsSearch />
    </div>
  </div>
  <div>
    <HeaderHamburger v-if="hamburger" />
  </div>
</template>

<style scoped lang="scss">
.searchbar-section {
  border: 1px solid black;
  border-top: 0;
  border-right: 0;
  padding: 16px;
}

@media screen and (min-width: 768px) {
  .searchbar-section {
    padding: 40px;
    border-top: 1px solid;
  }
}
</style>
