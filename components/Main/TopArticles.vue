<script setup lang="ts">
    const props = defineProps({
        articles : { type: Array, required: true },
    })
</script>

<template>
    <div class="grid-container">
        <MainSingleArticle 
        v-for="(article, index) in articles" :key="article.id" 
        :singleArticle="article"
        :index="article.id"
        />
    </div>
</template>

<style scoped lang="scss">
.grid-container {
    display: grid;
    grid-template-columns: 100%;
}

@media screen and (min-width: 769px) {
    .grid-container {
        grid-template-columns: repeat(12, 1fr);
    }
}
</style>