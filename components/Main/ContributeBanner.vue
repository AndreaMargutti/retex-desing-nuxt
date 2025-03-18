<template>
  <div class="banner align-center justify-between">
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
  padding-block: 2rem;
  padding-inline: 1rem;
  background-color: #f4f1de;

  @include for-tablet {
    display: flex;
    gap: 1rem;
    padding-block: 5rem;
    padding-inline: 2.5rem;
  }

  &__title {
    font-weight: 700;
    font-size: 1.5rem;
    color: black;
    margin-bottom: 0.9rem;
    white-space: nowrap;

    @include for-tablet {
      font-size: 2.5rem;
      margin-bottom: 0;
    }
  }

  &__cta {
    font-weight: 700;
    font-size: 1rem;
    color: black;
    white-space: nowrap;
  }
}

.gap-025 {
  gap: 0.25rem;
}
</style>
