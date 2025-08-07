<template>
    <div class="relative h-full grid place-content-center text-green-500">
        <div>
            <Sevastolink />
            <p class="text-28 text-right">
                AN LM-LINK PRODUCT
            </p>
        </div>

        <div class="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-screen-sm w-full">
            <div class="w-full h-5 border border-b-green-500 mb-10">
                <span
                    class="block h-full bg-green-500 w-0 [ animated-bar ]"
                    @animationend="emit('loading')"
                />
            </div>

            <p class="text-32 text-center">
                (C) LM-LINK DATA SYSTEMS
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Sevastolink from './Sevastolink.vue'

    const emit = defineEmits(['loading'])
</script>

<style>
    .animated-bar {
        animation: fill 5s step-start forwards;
        animation-delay: 1s;
    }

    @keyframes fill {
        0%, 15% {
            width: 0%;
        }

        40% {
            width: 20%;
        }

        55% {
            width: 47%;
        }

        65% {
            width: 71%;
        }

        80%, 90% {
            width: 95%;
        }

        91%, 100% {
            width: 100%;
        }
    }
</style>
