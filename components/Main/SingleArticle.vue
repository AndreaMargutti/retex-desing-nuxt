<script setup>
const props = defineProps({
    singleArticle: { type: Object, required: true }
})
</script>

<template>
    <div class="grid-item">
        <!-- inserisco componente tag -->
         <MainArticleTag :tag="singleArticle.tag"/>
         <!-- inserisco componente title -->
          <!-- inserisco componente autore -->
    </div>
</template>

<style scoped lang="scss">

</style>