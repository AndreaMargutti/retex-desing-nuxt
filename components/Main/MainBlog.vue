<script setup lang="ts">
const appConfig = useAppConfig();

const { data } = await useAsyncData(() => {
  return $fetch("/api/blog");
});

// console.log(data.value);

const newsletter = data?.value?.newsletter || [];
console.log(newsletter);
</script>

<template>
  <div v-if="newsletter.length" class="d-flex flex-wrap">
    <div class="flex-item text-center blog__border border-md">
      <h3 class="blog__main-title">Il Blog</h3>
    </div>
    <MainSingleBlog
      v-for="news in newsletter"
      :key="news.id"
      :blog="news"
      :class="[
        { 'blog__border-bottom': news.id === 4 },
        { 'blog__border-right': news.id === 1 || news.id === 3 },
        { 'last-blog': news.id === 5 },
      ]"
      class="flex-item blog__border border-md"
    />
    <div
      class="flex-item flex-column align-center text-center blog__border blog__border-right blog__border-bottom border-md-0 all-blog-item"
    >
      <h3 style="color: black" class="blog__main-title">Tutti i Blog</h3>
      <IconsRightArrow />
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex-item {
  flex-basis: 50%;
}

.blog__border {
  border-style: 1px solid;
  border-color: black;
  border-width: 1px 1px 0 0;
}

.blog__border-bottom {
  border-bottom-width: 1px;
}

.blog__border-right {
  border-right-width: 0;
}

.blog__main-title {
  padding: 1.5rem;
  color: red;
  font-weight: 700;
  font-size: 1.5rem;
}

.last-blog {
  display: none;

  @include for-desktop() {
    display: inline;
  }
}

.all-blog-item {
  display: flex;

  @include for-desktop() {
    display: none;
  }
}

@media screen and (min-width: 900px) {
  .flex-item {
    flex-basis: calc(100% / 6);
  }

  .border-md {
    border-style: solid black;
    border-width: 0px 1px 0px 0px;
  }

  .border-md-0 {
    border: 0;
  }
}
</style>
