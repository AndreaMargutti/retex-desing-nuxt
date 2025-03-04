<script setup>
const props = defineProps(['title'])
</script>

<template>
    <button>
        {{ title.toUpperCase() }}
    </button>
</template>

<style scoped lang="scss">
    button {
        padding: 12px 16px;
        border: 1px solid black;
        border-radius: 4px;
        box-shadow: -2px 2px black;
        // testo
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 10px;
    }
</style>