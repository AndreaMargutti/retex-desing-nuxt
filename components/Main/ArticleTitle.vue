<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  id: { type: Number, required: true },
  type: { type: String, required: true },
  img: { type: String, required: false },
});
</script>

<template>
  <h2
    :style="[img === '' ? { color: 'black' } : '']"
    :class="[
      type === 'main-article' ? 'main-title' : '',
      type === 'media-article' ? 'media-title' : '',
    ]"
    class="title"
  >
    {{ title }}
  </h2>
</template>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.6;
  color: black;

  @include for-tablet() {
    font-size: 1.5rem;
    line-height: 1.3;
    color: white;
  }
}

.main-title {
  color: white;
  font-size: 1.5rem;
  line-height: 1.4;
  @include for-tablet() {
    font-size: 2.5rem;
    line-height: 1.3;
  }
}

.media-title {
  font-size: 1.3rem;
  line-height: 1.5;

  @include for-tablet() {
    font-size: 2rem;
    line-height: 1.5;
  }
}

.no-image {
  color: black;
}

.color-white {
  color: white;
}
</style>
