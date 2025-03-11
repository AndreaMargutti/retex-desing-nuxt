<script setup>
//TODO: perché una `ref`?
const topics = ref([
  { id: 1, title: "Tutti i temi", color: "null" },
  { id: 2, title: "Ambiente", color: "#E2F1E8" },
  { id: 3, title: "Economia", color: "#FFFFFF" },
  { id: 4, title: "Mondo", color: "#F1DADA" },
  { id: 5, title: "Non Profit", color: "#FFFFFF" },
  { id: 6, title: "Politica", color: "#F1F1E2" },
  { id: 7, title: "Società", color: "#FFFFFF" },
  { id: 8, title: "Welfare", color: "#FFFFFF" },
]);

/**
 * TODO:
 * - manca default di hamburger status
 * - rimuovere console.log
 * - spostare questa logica in una composable `useHamburgerMenu`
 *
 * export default useHamburgerMenu() {
 *  const status = useState(false)
 *
 *  changeStauts = (status) => status.value = status;
 *
 *  export {
 *  status,
 *  changeStatus
 * }
 * }
 */
let hamburgerStatus = ref();
function changeStatus(status) {
  hamburgerStatus.value = status;
  // console.log(hamburgerStatus);
}
</script>

<template>
  <HeaderCta />
  <HeaderSearchBar @hamburger-toggle="changeStatus" />
  <HeaderFilter :topics="topics" :hamburgerStatus="hamburgerStatus" />
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

<style scoped></style>
