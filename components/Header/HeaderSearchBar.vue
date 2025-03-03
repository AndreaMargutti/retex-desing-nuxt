<template>
    <div class="flex justify-between">
        <!-- hamburger meni -->
        <div>
            <IconsHamburger />
        </div>
        <div class="flex-grow" />
        <!-- search -->
        <div>
            <IconsSearch />
        </div>
    </div>
</template>

<style scoped lang="scss">
.flex {
    div {
        border: 0.5px solid black;
        border-top: 0;
        border-right: 0;
        padding: 16px;
    }

    // ? Necessaria
    div:first-child {
        border-left: 0;
    }
}

@media screen and (min-width: 768px) {
    .flex {
        div {
            padding: 40px;
            border-top: 0.5px solid;
        }
    }
}
</style>