<script setup>
const props = defineProps({
    singleArticle: { type: Object, required: true }
})
</script>

<template>
    <div>
        <h1>{{ singleArticle.title }}</h1>
    </div>
</template>

<style scoped lang="scss">

</style>