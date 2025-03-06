<script setup>
const props = defineProps({
    title: { type: String, required: true}
})
</script>

<template>
    <h1>{{ title }}</h1>
</template>

<style scoped lang="scss">
h1 {
    color: black;
    font-weight: 700;
    font-size: 24px;
}

@media screen and (min-width: 769px) {
    h1 {
        color: white;
        font-size: 40px;
    }
}
</style>