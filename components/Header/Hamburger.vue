<script setup lang="ts">

const sections = [
  { id: 1, title: 'Articoli', description: 'Trend, dati e novità del Terzo Settore.' },
  { id: 2, title: 'Storie', description: 'Letture ed approfondimenti dei fenomeni complessi.' },
  { id: 3, title: 'Interviste', description: 'Racconti reali ed organizzazioni.' },
  { id: 4, title: 'Opinioni', description: 'Riflessioni e confronti dei nostri opinionisti.' },
  { id: 5, title: 'Podcast', description: 'Un luogo per dare voce ai protagonisti delle sostenibilità.' },
  { id: 6, title: 'Bookazine', description: 'Una rivista da leggere e un libro da conservare.' }
]

const info = [
  { id: 1, label: "Chi Siamo" },
  { id: 2, label: "Comitato Editoriale" },
  { id: 3, label: "Servizi" },
  { id: 4, label: "Agenda/Eventi" },
  { id: 5, label: `Mappa dell'attivismo` },
  { id: 6, label: "Inchieste crowdfunding" },
];
</script>

<template>
<div class="menu-container">
  <div class="d-flex flex-wrap menu-article__container">
    <div 
    v-for="{id, title, description} in sections" :key="id"
    class="menu-article border menu-article__border"
    >
    <h2 class="menu-article__title">{{ title }}</h2>
    <p class="menu-article__description">
      {{ description }}
    </p>
  </div>
  </div>
  <div>
    <HeaderHamburgerFooter :info="info" />
  </div>
</div>
</template>

<style scoped lang="scss">
/**
 * - creare un file `typography` dove specificare tutti gli stili globali
 */

 .menu-container {
   height: 100%;
  display: flex;
  flex-direction: column;
 }

 .menu-article__container{
  height: 100%;
}

.menu-article {
  flex-basis: calc(100%);
  // padding: 40px;
  // padding-top: 144px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 1rem;

  @include for-desktop() {
    flex-basis: calc(100% / 3);
  }

  &__description {
  font-size: 14px;
  }

  &__title {
    font-family: "Raleway";
  font-weight: 700;
  font-size: 48px;
  }

}

.menu-article__border {
  border-width: 0 0 1px 0;

  @include for-tablet () {
    border-width: 0 1px 1px 0;
  }
}
</style>
