<script setup>
const props = defineProps(['title', 'color'])
</script>

<template>
    <button :style="{backgroundColor: color}" class="white-bg">
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

    @media screen and (max-width: 1099px) {
        .white-bg {
            background-color: white !important;
        }
    }
</style>