<script setup lang="ts">
const props = defineProps({
  singleArticle: { type: Object, required: true },
  index: { type: Number, required: true },
});
</script>

<template>
  <div
    :style="[
      index === 1
        ? { 'background-image': 'url(' + singleArticle.imgUrl + ')' }
        : { 'background-color': white },
    ]"
    :class="{
      'grid-item-8': index === 2,
      'grid-item-5': index === 3 || index === 4,
    }"
    class="article"
  >
    <MainArticleBackgroundImage
      v-show="index === 2"
      :img="singleArticle.imgUrl"
      class="article-img"
    />
    <!-- inserisco componenti icone -->
    <div
      :class="{
        'padding-top-144': index === 1,
        'padding-top-2': index === 2,
        'padding-top-484': index === 2,
        'padding-top-140': index === 3,
        'padding-top-60': index === 4,
      }"
      class="articles-info"
    >
      <MainArticleTag :tag="singleArticle.tag" />
      <MainArticleTitle :id="props.index" :title="singleArticle.title" />
      <MainArticleAuthor
        :id="props.index"
        :author="singleArticle.author"
        :date="singleArticle.date"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.article {
  background-size: cover;
  background-position: center;
}

.article-img {
  width: 80%;
  margin: 1.2rem auto;

  @include for-tablet() {
    display: none;
  }
}

.articles-info {
  padding: 2rem 1rem;

  @include for-tablet() {
    min-height: 100%;
  }
}

.padding-top-144 {
  padding-top: 144px;
}

.padding-top-2 {
  padding-top: 2rem;
}

.padding-top-140 {
  padding-top: 140px;
}

.padding-top-60 {
  padding-top: 60px;
}

@media screen and (min-width: 769px) {
  .article:first-of-type {
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

  .padding-top-484 {
    padding-top: 484px;
  }
}
</style>
