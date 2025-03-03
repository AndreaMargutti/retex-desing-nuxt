<script setup>
const topics = ref([
    { id: 1, title: 'Tutti i temi' },
    { id: 2, title: 'Ambiente' },
    { id: 3, title: 'Economia' },
    { id: 4, title: 'Mondo' },
    { id: 5, title: 'Non Profit' },
    { id: 6, title: 'Politica' },
    { id: 7, title: 'Società' },
    { id: 8, title: 'Welfare' }
])

</script>

<template>
    <HeaderCta />
    <HeaderSearchBar />
    <HeaderFilter :topics="topics"/>
</template>