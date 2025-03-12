<script setup lang="ts">
import { IconsLogIn } from '#components';

const headerTopLink = [
  { id: 1, label: 'Contribuisci', icon: '' },
  { id: 2, label: 'Abbonati', icon: '' },
  { id: 3, label: 'Accedi', icon: IconsLogIn }
]

</script>

<template>
  <div class="d-flex padding-page topHeader__padding--top">
    <div v-for="{id,label, icon} in headerTopLink" :key="id">
      <div 
        :class="{ 'log-in__display': id === 3}">
        <component :is="icon" />
        <NuxtLink> {{ label }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* mobile */
/**
* TODO:
* - come posso centralizzare le media query? (tip: usare i mixin)
* - non ha senso sovrascrivere le utility classes
*/

@mixin for-desktop {
  @media screen and (min-width: 768px) { @content; }
}

.topHeader {

  &__padding--top {
    padding-top: 44px;
    
    @include for-desktop() {
      padding-top: 0;
    }
  }
}

.log-in {

  &__display {
    display: none;
    @include for-desktop() {
      display: flex;
    }
  }
}
</style>
