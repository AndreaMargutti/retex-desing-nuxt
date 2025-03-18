<script setup lang="ts">
const props = defineProps({
  singleArticle: { type: Object, required: true },
  index: { type: Number, required: true },
});

const backgroundImage = `url(${props.singleArticle.imgUrl})`;
const author = props.singleArticle.author.name;
console.log(props.singleArticle);
</script>

<template>
  <div
    :class="[
      singleArticle.type === 'main-article' ? 'main-article' : '',
      singleArticle.type === 'media-article' ? 'media-article' : '',
      singleArticle.type === 'editorial-article' ? 'editorial-article' : '',
    ]"
    class="article"
  >
    <div class="articles-info">
      <NuxtImg
        :src="singleArticle.imgUrl"
        :class="[
          singleArticle.type === 'media-article' ? 'mobile-img' : 'd-none',
        ]"
      />
      <MainArticleTag :tag="singleArticle.tag" />
      <MainArticleTitle
        :id="props.index"
        :title="singleArticle.title"
        :type="singleArticle.type"
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
  @include for-tablet() {
    background-image: v-bind(backgroundImage);
    background-position: center;
    background-size: cover;

    min-height: 23.7rem;
    display: flex;
    align-items: end;
  }
}

.main-article {
  background-image: v-bind(backgroundImage);
  background-position: center;
  background-size: cover;
  min-height: 20rem;
  display: flex;
  align-items: end;

  @include for-tablet() {
    min-height: 31.5rem;

    & ~ .media-article {
      justify-content: start;
      align-items: end;
    }
  }
}

.media-article {
  @include for-tablet() {
    align-items: start;
    justify-content: end;
  }
}

.articles-info {
  padding: 2rem 1rem;
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
