<script setup>
//TODO: Perché importi solamente questo componente? Gli altri?
import AppHeader from "~/components/Header/AppHeader.vue";

//TODO: da rimuovere i commenti inutili
// const config = useRuntimeConfig();
// const { data } = await useAsyncData( () => {
//   return $fetch(`https://newsapi.org/v2/everything?q=politics&apiKey=${config.apiSecret}`);
// })
// const articles = data.value.articles;

// TODO:
// - dove viene utilizzato questo `data`?
// - differenza tra useAsyncData e useFetch
const { data } = await useAsyncData(() => {
  return $fetch("/api/articles");
});

const articles = data.value.articles;

//TODO: da rimuovere
console.log(articles);
</script>

<template>
  <div>
    <AppHeader />
    <MainAppMain />
    <FooterAppFooter />
  </div>
</template>
