<script setup lang="ts">
const props = defineProps({
  singleArticle: { type: Object, required: true },
  index: { type: Number, required: true },
});

const backgroundImage = `url(${props.singleArticle.imgUrl})`;
const author = props.singleArticle.author.name;
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
    <div
      :class="[
        { 'padding-top-144': index === 1 },
        { 'padding-top-2': index === 2 },
        { 'padding-top-484': index === 2 },
        { 'padding-top-140': index === 3 },
        { 'padding-top-60': index === 4 },
        { 'editorial-article': author === 'Redazione' },
      ]"
      class="articles-info"
    >
      <NuxtImg
        :src="singleArticle.imgUrl"
        :class="[index === 2 ? 'mobile-img' : 'd-none']"
      />
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @include for-tablet() {
    background-image: v-bind(backgroundImage);
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

  @include for-tablet() {
    padding-top: 256px;
  }
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

.mobile-img {
  display: block;
  margin-bottom: 1.5rem;

  @include for-tablet() {
    display: none;
  }
}

.editorial-article {
  background-color: #e63036;
  color: white;
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
