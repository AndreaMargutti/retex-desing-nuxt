<script setup>
const config = useRuntimeConfig();

const { data } = await useAsyncData( () => {
  return $fetch(`https://newsapi.org/v2/everything?q=politics&apiKey=${config.apiSecret}`);
})

const articles = data.value.articles;
// console.log(articles)

</script>

<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.title">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
