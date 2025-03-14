<template>
  <div class="padding-page banner align-center justify-between">
    <div>
      <h3 class="banner__title">Il tuo supporto è fondamentale</h3>
    </div>
    <div class="d-flex gap-025">
      <h5 class="banner__cta">Dai il tuo contributo</h5>
      <IconsRightArrow />
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #f4f1de;

  @include for-tablet {
    display: flex;
    // padding-top: 5rem;
    // padding-bottom: 5rem;
    padding-block: 5rem;
  }

  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    color: black;
    margin-bottom: 0.9rem;

    @include for-tablet {
      font-size: 2.5rem;
      margin-bottom: 0;
    }
  }

  &__cta {
    font-weight: 700;
    font-size: 0.1rem;
    color: black;
  }
}

.gap-025 {
  gap: 0.25rem;
}
</style>
