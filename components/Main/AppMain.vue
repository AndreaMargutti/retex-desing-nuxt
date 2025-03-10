<script setup lang="ts">
const config = useRuntimeConfig();

const { data } = await useAsyncData("", () => {
  return $fetch("/api/articles");
});

const articles = data?.value?.articles ?? [];
console.log(articles);

const topArticles = articles.toSpliced(4);
console.log(topArticles);
console.log(articles);
</script>

<template>
  <MainTopArticles :articles="topArticles" />
  <MainContributeBanner />
  <MainCitationBanner />
  <MainBlog />
</template>
