<script setup lang="ts">
import { MainArticlesGrid } from "#components";

const config = useRuntimeConfig();

const { data } = await useAsyncData("", () => {
  return $fetch("/api/articles");
});

const articles = data?.value?.articles ?? [];
console.log(articles);

const topArticles = articles.toSpliced(4);

const middleArticles = () => {
  const firstSplice = articles.toSpliced(0, 4);
  return firstSplice.toSpliced(5);
};

const bottomArticles = () => {
  return articles.toSpliced(0, 9);
};
</script>

<template>
  <MainArticlesGrid :articles="topArticles" :layout="'top'" />
  <MainContributeBanner />
  <MainArticlesGrid :articles="middleArticles()" :layout="'middle'" />
  <MainCitationBanner />
  <MainBlog />
  <MainArticlesGrid :articles="bottomArticles()" :layout="'bottom'" />
</template>
