<template>
    <div class="flex text-center mt-1 align-items-center padding-page">
        <div class="flex-basis-50 border border--right--0 py-1">
            Contribuisci
        </div>
        <div class="flex-basis-50 border py-1">
            Abbonati
        </div>
        <div class="d-none flex-grow">
            <div class="flex justify-end align-items-center">
                <img src="../../public/access_icon.png" alt="acces_icon" style="width: 16px; height: 16px;">
                <p class="ps-1">
                    Accedi
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

    /* mobile */
    @media screen and (max-width: 768px) {
        .padding-page {
            padding: 0;
        }
    }


    /* first breakpoint */
    @media screen and (min-width: 768px) {
        /* remove border */
        .border {
            border: 0;
        }

        /* toggle visibility */

        .d-none {
            display: inline;
        }

        /* adjust layout */

        .text-center {
            text-align: start;
        }

       .flex-basis-50 {
        flex-basis: auto
       }
    }
</style>