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
  <div v-if="newsletter.length" class="flex flex-wrap">
    <div class="flex-item text-center blog__border border-md">
      <h1>Il Blog</h1>
    </div>
    <MainSingleBlog
      v-for="news in newsletter"
      :key="news.id"
      :blog="news"
      :class="[
        { 'blog__border-bottom': news.id === 4 },
        { 'blog__border-right': news.id === 1 || news.id === 3 },
      ]"
      class="flex-item blog__border border-md"
    />
    <div
      class="flex-item text-center blog__border blog__border-right blog__border-bottom border-md-0"
    >
      <h1 style="color: black">Tutti i Blog</h1>
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

h1 {
  padding: 24px;
  color: red;
  font-weight: 700;
  font-size: 24px;
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
