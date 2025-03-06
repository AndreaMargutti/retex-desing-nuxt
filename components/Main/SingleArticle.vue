<script setup>
const props = defineProps({
    singleArticle: { type: Object, required: true }
})
</script>

<template>
    <div class="grid-item">
         <MainArticleTag :tag="singleArticle.tag"/>
         <!-- inserisco componente title -->
          <MainArticleTitle :title="singleArticle.title"/>
          <!-- inserisco componente autore -->
    </div>
</template>

<style scoped lang="scss">

</style>