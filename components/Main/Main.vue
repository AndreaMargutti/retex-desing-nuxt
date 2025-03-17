<script setup lang="ts">
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
  <MainTopArticles :articles="topArticles" />
  <MainContributeBanner />
  <MainMiddleArticles :articles="middleArticles()" />
  <MainCitationBanner />
  <MainBlog />
  <MainBottomArticles :articles="bottomArticles()" />
</template>
