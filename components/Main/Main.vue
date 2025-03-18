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

// const allSections = [];
// allSections.push(topArticles, middleArticles(), bottomArticles());
// console.log(allSections);
</script>

<template>
  <MainArticlesSection :articles="topArticles" :layout="'top'" />
  <MainContributeBanner />
  <MainArticlesSection :articles="middleArticles()" :layout="'middle'" />
  <MainCitationBanner />
  <MainBlog />
  <MainArticlesSection :articles="bottomArticles()" :layout="'bottom'" />
</template>
