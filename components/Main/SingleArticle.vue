<script setup>
const props = defineProps({
    singleArticle: { type: Object, required: true }
})
</script>

<template>
    <div class="grid-item">
        <MainArticleTag :tag="singleArticle.tag"/>
        <MainArticleTitle :title="singleArticle.title"/>
        <MainArticleAuthor :author="singleArticle.author" :date="singleArticle.date"/>
    </div>
</template>

<style scoped lang="scss">

</style>