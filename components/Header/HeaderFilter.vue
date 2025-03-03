<script setup>
const props = defineProps({
    topics: Array,
})

</script>

<template>
    <div class="d-none justify-between padding-page border align-items-center">
        <ul class="flex align-items-center">
            <li v-for="{ id, title } in topics" :key="id">
                <h1> {{ title }} </h1>
            </li>
        </ul>
        <IconsText />
    </div>
</template>

<style scoped lang="scss">
// responsive
@media screen and (min-width: 920px) {
    .d-none {
        display: flex;
    }
}

h1 {
    font-family: 'Raleway';
    font-size: 24px;
    font-weight: 700;
    padding-right: 10px;
}

.padding-page {
    padding: 24px 40px
}

.border {
    border-top: 0;
    border-left: 0;
    border-right: 0;
}

li {
    padding: 8px;
}
</style>