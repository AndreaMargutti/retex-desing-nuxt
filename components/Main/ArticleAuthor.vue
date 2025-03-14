<script setup lang="ts">
const props = defineProps({
  author: { type: Object, required: true },
  date: { type: String, required: false },
});
</script>

<template>
  <div class="d-flex align-center gap-12" style="margin-top: 10px">
    <div class="profile-pic">
      <img :src="author.profile_pic" alt="" />
    </div>
    <div class="profile-info">
      <h6 class="profile-info__name">{{ author.name }}</h6>
      <p class="profile-info__date">{{ date }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-pic {
  width: 2rem;
  height: 2rem;

  @include for-tablet() {
    width: 3rem;
    height: 3rem;
  }

  img {
    border-radius: 20px;
  }
}

.profile-info {
  color: black;

  .profile-info__name {
    font-weight: 400;
    font-size: 0.9rem;
  }

  .profile-info__date {
    font-weight: 400;
    font-size: 0.6rem;
  }
}
</style>
