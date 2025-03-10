<script setup>
const props = defineProps({
  author: { type: Object, required: true },
  date: { type: String, required: false },
});
</script>

<template>
  <div class="flex align-items-center gap-12" style="margin-top: 10px">
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
  width: 32px;
  height: 32px;
  img {
    border-radius: 20px;
  }
}

.profile-info {
  color: black;

  .profile-info__name {
    font-weight: 400;
    font-size: 14px;
  }

  .profile-info__date {
    font-weight: 400;
    font-size: 10px;
  }
}

@media screen and (min-width: 769px) {
  .profile-pic {
    width: 48px;
    height: 48px;
  }
}
</style>
