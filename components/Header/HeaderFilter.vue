<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<script setup>
const props = defineProps({
    topics: {type: Array, required: true},
    hamburgerStatus: {type: Boolean, required: true}
})

const showBtns = ref(false);

const toggleBtns = () => {
    showBtns.value = !showBtns.value
}
</script>

<template>
    <div v-show="!hamburgerStatus" class="d-none flex-md justify-between padding-page border border-bottom align-items-center">
        <ul class="flex align-items-center">
            <li v-for="{ id, title } in topics" :key="id">
                <h1> {{ title }} </h1>
            </li>
        </ul>
        <IconsText />
    </div>
    <div class="flex-md justify-between padding-filter background-gray">
        <div class="padding-bottom flex align-items-center gap-12">
            <h1 id="filter-title"> {{ topics[0].title }}</h1>
            <IconsDropDown class="icon-display" @click="toggleBtns" />
        </div>
        <!-- TODO: inserire bottoni -->
         <div v-show="!showBtns" class="filter-buttons align-items-center">
             <HeaderFilterButtons
                 v-for="topic in topics" 
                 v-show="topic.title != 'Tutti i temi'" 
                 :key="topic.id" 
                 :title="topic.title"
                 :color="topic.color"
             />
         </div>
    </div>
</template>

<style scoped lang="scss">

h1 {
    font-family: 'Raleway';
    font-size: 28px;
    font-weight: 700;
}

li {
    padding: 8px;
}

.padding-bottom {
    padding-bottom: 12px;
}

.padding-filter{
    padding: 24px 16px;
}

#filter-title {
    font-size: 51px;
}

.icon-display {
    display: block;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

// responsive
@media screen and (min-width: 1100px) {
    .flex-md {
        display: flex;
    }

    .padding-filter {
    padding: 64px 40px;
    }

    .icon-display {
        display: none;
    }
}
</style>