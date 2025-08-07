<template>
    <div
        class="[ old-monitor-effect ] h-screen overflow-hidden
        bg-green-900 text-white text-20 font-Terminal leading-normal"
    >
        <Transition
            name="animated-cells"
            mode="out-in"
            :duration="{ leave: transitionDurationMs, enter: 0 }"
        >
            <LoadingScreen v-if="loading" @loading="loading = false" />

            <Terminal v-else />
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import Terminal from './components/Terminal.vue'
    import LoadingScreen from './components/LoadingScreen/index.vue'

    const transitionDurationMs = 200

    const loading = ref(true)
</script>

<style>
    .animated-cells-leave-active::after {
        @apply content-[''] absolute inset-0 bg-[length:80px_100px];
        animation: animated-cells v-bind('transitionDurationMs + "ms"') linear forwards;
    }

    @keyframes animated-cells {
        0% {
            background-image:
                linear-gradient(to bottom, theme('colors.green.900') 50%, transparent 50%),
                linear-gradient(to right, theme('colors.green.900') 50%, theme('colors.green.500') 50%);
        }
        100% {
            background-image:
                linear-gradient(to bottom, theme('colors.green.900') 90%, transparent 90%),
                linear-gradient(to right, theme('colors.green.900') 50%, theme('colors.green.500') 50%);
        }
    }
</style>
