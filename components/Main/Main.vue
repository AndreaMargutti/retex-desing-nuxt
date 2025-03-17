<script setup lang="ts">
const config = useRuntimeConfig();

const { data } = await useAsyncData("", () => {
  return $fetch("/api/articles");
});

const articles = data?.value?.articles ?? [];
console.log(articles);

const topArticles = articles.toSpliced(4);
console.log("top", topArticles);
console.log(articles);

const middleArticles = () => {
  const firstSplice = articles.toSpliced(0, 4);
  return firstSplice.toSpliced(5);
};

console.log(middleArticles());
</script>

<template>
  <MainTopArticles :articles="topArticles" />
  <MainContributeBanner />
  <MainMiddleArticles :articles="middleArticles()" />
  <MainCitationBanner />
  <MainBlog />
</template>
