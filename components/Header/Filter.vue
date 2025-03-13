<script setup lang="ts">
const props = defineProps({
  topics: { type: Array, required: true },
});

const showBtns = ref(false);
const toggleBtns = () => {
  showBtns.value = !showBtns.value;
};
</script>

<template>
  <div
    class="filter justify-between align-center padding-page topFilter--padding border filter--bottom-border"
  >
    <ul class="d-flex align-center">
      <li v-for="{ id, title } in topics" :key="id" class="filter--item">
        <h3 class="filter--title">{{ title }}</h3>
      </li>
    </ul>
    <IconsText />
  </div>
  <div class="filter-buttons justify-between padding-filter background-gray">
    <div class="d-flex align-center gap-12 filter--title-big__padding-bottom">
      <h3 class="filter--title__big">{{ topics[0].title }}</h3>
      <IconsDropDown class="icon-display" @click="toggleBtns" />
    </div>
    <div v-show="!showBtns" class="filter-buttons align-center">
      <HeaderFilterButtons
        v-for="topic in topics"
        v-show="topic.title != 'Tutti i temi'"
        :key="topic.id"
        :title="topic.title"
        :color="topic.color"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter {
  display: none;

  @include for-desktop() {
    display: flex;
  }
}

.topFilter--padding {
  padding-top: 24px;
  padding-bottom: 24px;
}

.filter--bottom-border {
  border-bottom-width: 1px;
}

.filter--title {
  font-family: "Raleway";
  font-size: 28px;
  font-weight: 700;

  &__big {
    font-weight: 700;
    font-size: 51px;
  }
}

.filter-buttons {
  display: block;

  @include for-desktop() {
    display: flex;
  }
}

.filter--item {
  padding: 8px;
}

.filter--title-big__padding-bottom {
  padding-bottom: 12px;
}

.padding-filter {
  padding: 24px 16px;

  @include for-desktop() {
    padding: 64px 40px;
  }
}

.icon-display {
  display: block;

  @include for-desktop() {
    display: none;
  }
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
