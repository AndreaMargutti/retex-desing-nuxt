<script setup lang="ts">
type ArticleSize = "lg" | "md" | "sm" | "xs";
type AricleWidth = "full" | "half" | "third";
type ArticleAuthorDisplay = "flex" | "block";

const props = defineProps({
  singleArticle: { type: Object, required: true },
  index: { type: Number, required: true },
});

const backgroundImage = `url(${props.singleArticle.imgUrl})`;
const author = props.singleArticle.author.name;
console.log(props.singleArticle);

const articleSize: ArticleSize = computed(() => {
  if (props.singleArticle.type === "main-article") {
    return "lg";
  } else if (props.singleArticle.type === "media-article") {
    if (props.index === 2) {
      return "md";
    } else if (props.index === 9) {
      return "lg";
    } else if (props.index === 10) {
      return "md";
    }
  }

  if (
    props.index === 15 ||
    props.index === 16 ||
    props.index === 17 ||
    props.index === 18
  ) {
    return "xs";
  } else if (props.index === 19) {
    return "md";
  }
  return "sm";
});

const articleWidth: AricleWidth = computed(() => {
  if (props.singleArticle.type === "main-article") return "full";
  if (props.singleArticle.type === "media-article") {
    if (props.index === 9) {
      return "half";
    } else if (props.index === 10) {
      return "third";
    }
  }
  return "full";
});

const articleAuthorDisplay: ArticleAuthorDisplay = computed(() => {
  if (props.singleArticle.type === "media-article") {
    if (props.index === 10) {
      return "block";
    }
  }
  return "flex";
});
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
    <div
      :class="[
        articleWidth === 'full' ? 'articles-info__full' : '',
        articleWidth === 'half' ? 'articles-info__half' : '',
        articleWidth === 'third' ? 'articles-info__third' : '',
      ]"
      class="articles-info"
    >
      <div
        :class="[
          singleArticle.type === 'media-article' ? 'mobile-img' : 'd-none',
        ]"
        class="article--image"
      >
        <NuxtImg :src="singleArticle.imgUrl" class="article--cover" />
        <div class="article--icons">
          <IconsImage />
          <IconsPlay />
        </div>
      </div>
      <MainArticleTag :tag="singleArticle.tag" />
      <MainArticleTitle
        :id="props.index"
        :title="singleArticle.title"
        :type="singleArticle.type"
        :img="singleArticle.imgUrl"
        :size="articleSize"
      />
      <MainArticleAuthor
        :id="props.index"
        :author="singleArticle.author"
        :date="singleArticle.date"
        :img="singleArticle.imgUrl"
        :type="singleArticle.type"
        :display="articleAuthorDisplay"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.article {
  border-bottom: 1px solid black;
  @include for-tablet() {
    border: 0;
    background-image: v-bind(backgroundImage);
    background-position: center;
    background-size: cover;
    display: flex;

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

  &__full {
    max-width: 100%;
  }

  &__half {
    max-width: 50%;
  }

  &__third {
    width: 33%;
  }
}

.article--image {
  position: relative;
}

.article--icons {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.mobile-img {
  max-height: 202px;
  width: 100%;
  margin-bottom: 1.5rem;
  justify-self: center;
  overflow: hidden;

  @include for-tablet() {
    display: none;
  }
}

.article--cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.editorial-article {
  background-color: #e63036;
  color: white;
}
</style>
