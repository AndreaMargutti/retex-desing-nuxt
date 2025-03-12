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
</script>

<template>
  <HeaderCta />
  <HeaderSearchBar />
  <HeaderFilter :topics="topics" />
 
  <!--
    <HeaderTop />
      <HeaderTopLink />
    <Header[Container] />
      <HeaderHamburgerMenu />
      <HeaderSearch />
    <HeaderNavbar />
    <HeaderMenu />
  -->
</template>
