<script setup>
import AppHeader from '~/components/Header/AppHeader.vue';
const config = useRuntimeConfig();
// const { data } = await useAsyncData( () => {
//   return $fetch(`https://newsapi.org/v2/everything?q=politics&apiKey=${config.apiSecret}`);
// })
// const articles = data.value.articles;

const { data } = await useAsyncData( () => {
    return $fetch('/api/articles');
})

const articles = data.value.articles;
console.log(articles);
</script>

<template>
    <AppHeader/>
</template>

<style scoped>
</style>
