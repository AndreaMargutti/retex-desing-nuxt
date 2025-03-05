<script setup>
</script>

<template>
    <div class="white-band" />
    <div class="flex text-center align-items-center padding-sm padding-page">
        <div class="flex-basis-50 border border--right--0 py-1">
            Contribuisci
        </div>
        <div class="flex-basis-50 border py-1">
            Abbonati
        </div>
        <div class="d-none log-display__md flex-grow">
            <div class="flex justify-end align-items-center">
                <IconsLogIn />
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
        .border {
            border: 0;
        }

        /* toggle visibility */

        .log-display__md {
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