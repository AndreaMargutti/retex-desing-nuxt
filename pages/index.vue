<script setup lang="ts">
const config = useRuntimeConfig()
// console.log(config);

const data = await $fetch(`https://newsapi.org/v2/everything?q=apple&pageSize=20&apiKey=${config.public.apiSecret}`);

const articles = data.articles;
console.log(articles);
</script>

<template>
  <div>
    <h1 class="tetx-3x1 font-bold underline">
      Page: HomePage
    </h1>
    <div>
      <ul>
        <!-- articoli -->
        <li v-for="article in articles" :key="article.title">
          <h4>{{ article.title }}</h4>
          <p>
            {{ article.description }}
            <a :href="article.url" target="_blank">Read more</a>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
