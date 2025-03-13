<script setup lang="ts">
const topics = [
  { id: 1, title: "Tutti i temi", color: "null" },
  { id: 2, title: "Ambiente", color: "#E2F1E8" },
  { id: 3, title: "Economia", color: "#FFFFFF" },
  { id: 4, title: "Mondo", color: "#F1DADA" },
  { id: 5, title: "Non Profit", color: "#FFFFFF" },
  { id: 6, title: "Politica", color: "#F1F1E2" },
  { id: 7, title: "Società", color: "#FFFFFF" },
  { id: 8, title: "Welfare", color: "#FFFFFF" },
];

const { status } = useHamburger();
</script>

<template>
  <div :class="{ container: !status }">
    <div class="d-flex topHeader--padding-top topHeader--flex padding-page">
      <HeaderCta />
    </div>
    <HeaderSearchBar />
  </div>
  <HeaderFilter :topics="topics" />
</template>

<style scoped lang="scss">

.container{
  @include for-desktop() {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
}

.topHeader--padding-top {
  padding-top: 44px;

  @include for-tablet() {
    padding-top: 0;
  }
}

.topHeader--flex {
  @include for-tablet() {
    justify-content: space-between;
  }
}

</style>
