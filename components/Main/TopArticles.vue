<script setup lang="ts">
const props = defineProps({
    articles: { type: Array, required: true }
})
</script>

<template>
    <section class="grid-container">
        <div class="img-container total-col">
            <img :src="articles[0].imgUrl">
            <div class="article-infos">                 
                <MainArticleTag>{{ articles[0].tag.label.toLocaleUpperCase() }}</MainArticleTag>
                <h1>{{ articles[0].title }}</h1>
                <MainAuthors />
            </div>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
    </section>
</template>

<style scoped lang="scss">
.grid-container {
    display: grid;
    grid-template-columns: 60% auto;
}

.total-col {
    grid-column-start: 1;
    grid-column-end: 3;
}

// titoli
h1 {
    color: white;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 24px;
}

.img-container {
    position: relative;
}

.article-infos {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 24px 16px;
}

// responsive

@media screen and (min-width: 780px) {
    .img-container {
        max-height: 500px;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    .article-infos {
        padding: 44px 40px;
    }

    h1 {
        font-size: 40px;
    }
}

</style>