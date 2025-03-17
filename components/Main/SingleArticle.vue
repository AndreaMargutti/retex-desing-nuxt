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
      index === 1 ? { 'background-image': `url(${singleArticle.imgUrl})` } : '',
    ]"
    class="article"
  >
    <div
      :class="[{ 'editorial-article': author === 'Redazione' }]"
      class="articles-info"
    >
      <NuxtImg
        :src="singleArticle.imgUrl"
        :class="[
          index === 2 ? 'mobile-img' : 'd-none',
          index === 9 ? 'mobile-img' : 'd-none',
          index === 10 ? 'mobile-img' : 'd-none',
        ]"
      />
      <MainArticleTag :tag="singleArticle.tag" />
      <MainArticleTitle
        :id="props.index"
        :title="singleArticle.title"
        :img="singleArticle.imgUrl"
      />
      <MainArticleAuthor
        :id="props.index"
        :author="singleArticle.author"
        :date="singleArticle.date"
        :img="singleArticle.imgUrl"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.article {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 1px solid black;

  @include for-tablet() {
    background-image: v-bind(backgroundImage);
    border-bottom: 0;
  }
}

.articles-info {
  padding: 2rem 1rem;

  @include for-tablet() {
    min-height: 100%;
  }
}

.mobile-img {
  width: 100%;
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
</style>
