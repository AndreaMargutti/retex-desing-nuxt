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
        <div class="border">
            <h1>Articoli</h1>
            <p>Trend, dati e novità del Terzo Settore.</p>
        </div>
        <div class="border">
            <h1>Storie</h1>
            <p>Letture ed approfondimenti dei fenomeni complessi.</p>
        </div>
        <div class="border">
            <h1>Interviste</h1>
            <p>Racconti reali di persone ed organizzazioni.</p>
        </div>
        <div class="border">
            <h1>Opinioni</h1>
            <p>Riflessioni e confronti dei nostri opinionisti.</p>
        </div>
        <div class="border">
            <h1>Podcast</h1>
            <p>Un luogo per dare voce ai protagonisti della sostenibilità.</p>
        </div>
        <div class="border">
            <h1>Bookazine</h1>
            <p>Una rivista da leggere e un libro da conservare.</p>
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

    .flex {
        div {
            flex-basis: calc(100% / 3);
            padding: 40px;
            padding-top: 144px;
        }

        p {
            font-size: 14px;
        }
    }
</style>