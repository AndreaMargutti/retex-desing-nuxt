<script setup>
const props = defineProps({
    singleArticle: { type: Object, required: true },
    index: {type: Number, required: true }
})
</script>

<template>
    <div 
    :style="{ 'background-image': 'url(' + singleArticle.imgUrl + ')' }"
    :class="{
        'grid-item-8': index === 1,
        'grid-item-5': index === 2 || index === 3,
    }"
    class="grid-item"
    >
         <!-- <MainArticleBackgroundImage 
            :img="singleArticle.imgUrl" 
            class="article-img"
         /> -->
         <div
            :class="{
                'padding-top-144': index === 0, 
                'padding-top-250': index === 1,
                'padding-top-140': index === 2,
                'padding-top-60': index === 3
             }"
            class="articles-info min-height-100"
         >
             <MainArticleTag :tag="singleArticle.tag"/>
             <MainArticleTitle :title="singleArticle.title"/>
             <MainArticleAuthor :author="singleArticle.author" :date="singleArticle.date"/>
         </div>
    </div>
</template>

<style scoped lang="scss">

.grid-item {
    background-size: cover;
    background-position: center;
}

.articles-info {
    padding: 24px 16px;
}

.p-relative {
    position: relative;
}

.p-absolute {
    position: absolute;
}

.padding-top-144 {
    padding-top: 144px;
}

.padding-top-250 {
    padding-top: 250px;
    background-color: blue;
}

.padding-top-140 {
    padding-top: 140px;
    background-color: dodgerblue;
}

.padding-top-60 {
    padding-top: 60px;
    background-color: aqua;
}

@media screen and (min-width: 769px) {
    .grid-item:first-of-type {
        grid-column: 1 / span 12;
    }

    .padding-top-250 {
        padding-top: 484px;
    }

    .grid-item-8 {
        grid-column: 1 / span 7;
        grid-row: 2 / span 2;
    }

    .grid-item-5 {
        grid-column: 8 / span 5;
    }

    .min-height-100 {
        min-height: 100%;
    }
}
</style>