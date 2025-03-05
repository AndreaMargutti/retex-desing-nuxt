<script setup lang="ts">
const config = useRuntimeConfig();

const { data } = await useAsyncData('', () => {
    return $fetch('/api/articles');
});

const articles = data?.value?.articles ?? [];
console.log(articles);
</script>

<template>
    <MainTopArticles :articles="articles"/>
</template>