<template>
  <div class="padding-page banner align-center justify-between">
    <div>
      <h3 class="banner__title">Il tuo supporto è fondamentale</h3>
    </div>
    <div class="d-flex gap-4">
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
    margin-bottom: 14px;

    @include for-tablet {
      font-size: 40px;
      margin-bottom: 0;
    }
  }

  &__cta {
    font-weight: 700;
    font-size: 14px;
    color: black;
  }
}

.gap-4 {
  gap: 4px;
}
</style>
