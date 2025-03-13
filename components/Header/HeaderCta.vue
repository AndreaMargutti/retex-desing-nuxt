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

.topHeader {

  &__padding--top {
    padding-top: 44px;
    
    @include for-tablet() {
      padding-top: 0;
    }
  }
}

.log-in {

  &__display {
    display: none;
    @include for-tablet() {
      display: flex;
    }
  }
}
</style>
