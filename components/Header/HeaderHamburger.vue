<script setup>
const info = ref([
    { id: 1, label: 'Chi Siamo' },
    { id: 2, label: 'Comitato Editoriale' },
    { id: 3, label: 'Servizi' },
    { id: 4, label: 'Agenda/Eventi' },
    { id: 5, label: `Mappa dell'attivismo` },
    { id: 6, label: 'Inchieste crowdfunding' }
])
</script>

<template>
    <div class="flex flex-wrap">
        <div class="menu-article border">
            <h1>Articoli</h1>
            <p class="menu-article__text">Trend, dati e novità del Terzo Settore.</p>
        </div>
        <div class="menu-article border">
            <h1>Storie</h1>
            <p class="menu-article__text">Letture ed approfondimenti dei fenomeni complessi.</p>
        </div>
        <div class="menu-article border">
            <h1>Interviste</h1>
            <p class="menu-article__text">Racconti reali di persone ed organizzazioni.</p>
        </div>
        <div class="menu-article border">
            <h1>Opinioni</h1>
            <p class="menu-article__text">Riflessioni e confronti dei nostri opinionisti.</p>
        </div>
        <div class="menu-article border">
            <h1>Podcast</h1>
            <p class="menu-article__text">Un luogo per dare voce ai protagonisti della sostenibilità.</p>
        </div>
        <div class="menu-article border">
            <h1>Bookazine</h1>
            <p class="menu-article__text">Una rivista da leggere e un libro da conservare.</p>
        </div>
    </div>
    <div>
        <HeaderHamburgerFooter :info="info"/>
    </div>
</template>

<style scoped lang="scss">
    h1 {
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 48px;
    }

    .menu-article {
        flex-basis: calc(100%);
        padding: 40px;
        padding-top: 50px;
    }

    .menu-article__text {
        font-size: 14px;
    }

    @media screen and (min-width: 970px) {
        .menu-article {
            flex-basis: calc(100% / 3);
            padding-top: 144px;
        }
    }
</style>