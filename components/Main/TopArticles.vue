<script setup lang="ts">
    const props = defineProps({
        articles : { type: Array, required: true },
    })
</script>

<template>
    <div class="grid-container">
        <MainSingleArticle 
        v-for="article in articles" :key="article.id" 
        :singleArticle="article"
        />
    </div>
</template>

<style scoped lang="scss">
.grid-container {
    display: grid;
}
</style>