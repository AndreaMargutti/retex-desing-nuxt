<template>
    <button>
       <slot>Default</slot>
    </button>
</template>

<style scoped lang="scss">
    button {
        background-color: white;
        padding: 4px 12px;
        border: 1px solid;
        border-radius: 4px;
        box-shadow: -2px 2px black;
        font-family: 'Raleway';
        font-size: 10px;
        font-weight: 700;
    }
</style>