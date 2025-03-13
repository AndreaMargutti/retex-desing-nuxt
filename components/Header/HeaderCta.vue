<script setup lang="ts">
import { IconsLogIn } from '#components';

const headerTopLink = [
  { id: 1, label: 'Contribuisci', icon: '' },
  { id: 2, label: 'Abbonati', icon: '' },
  { id: 3, label: 'Accedi', icon: IconsLogIn }
]

</script>

<template>
    <div
      v-for="{id,label, icon} in headerTopLink" :key="id"
      :class="{'log-in--display': id === 3 }"
      class="d-flex flex-basis-50"
    >
        <component :is="icon" class="log-in--display"/>
        <NuxtLink
          :class="{'topHeader__link-border-left-0': id === 1}"
          class="topHeader__link--width topHeader__link--text topHeader__link--padding topHeader__link--border-width border-solid-black"
        >
          {{ label }}
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">

.topHeader__link--width {
  width: 100%;
}

.topHeader__link--text {
  text-align: center;
}

.topHeader__link--padding {
  padding: 8px 8px;
}

.topHeader__link--border-width {
  border-top-width: 1px;
  border-left-width: 1px;
  border-bottom-width: 1px;
}

.topHeader__link-border-left-0 {
  border-left-width: 0;
}

.log-in {

  &--display {
    display: none;
    
    @include for-tablet() {
      display: flex;
    }
  }
}
</style>
