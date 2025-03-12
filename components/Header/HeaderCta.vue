<script setup lang="ts">
import { IconsLogIn } from '#components';

const headerTopLink = [
  { id: 1, label: 'Contribuisci', icon: '' },
  { id: 2, label: 'Abbonati', icon: '' },
  { id: 3, label: 'Accedi', icon: IconsLogIn }
]

</script>

<template>
  <div class="white-band" />
  <div class="flex text-center text__md-start align-items-center padding-sm padding-page">
    <!--
    TODO:
      - aggiungere HeaderTopLink (prop: link, label, icon)
      - mi aspetto l'utilizzo di <NuxtLink />
    -->
    <div v-for="{id,label, icon} in headerTopLink" :key="id">
      <component :is="icon" />
      <NuxtLink> {{ label }}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* mobile */
/**
* TODO:
* - come posso centralizzare le media query? (tip: usare i mixin)
* - non ha senso sovrascrivere le utility classes
*/
@media screen and (max-width: 768px) {
  .white-band {
    height: 44px;
    background-color: white;
  }

  .padding-sm {
    padding: 0;
  }
}

/* first breakpoint */
@media screen and (min-width: 768px) {
  /* remove border */
  .border__md-0 {
    border: 0;
  }

  /* toggle visibility */

  .log-display__md {
    display: inline;
  }

  /* adjust layout */

  .text__md-start {
    text-align: start;
  }

  .flex-basis__md-auto {
    flex-basis: auto;
  }
}
</style>
