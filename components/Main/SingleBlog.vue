<script setup lang="ts">
const props = defineProps({
  blog: { type: Object, required: true },
});
</script>

<template>
  <div>
    <figure class="text-center">
      <img :src="blog.author.profile_img" alt="author_pic" />
      <h3>{{ blog.title }}</h3>
      <h4>{{ blog.author.name }}</h4>
    </figure>
  </div>
</template>

<style scoped lang="scss">
figure {
  padding: 2rem;

  img {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 1.9rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
  }

  h4 {
    font-weight: 400;
    font-size: 0.8rem;
  }
}
</style>
