<template>
    <div
        class="flex items-center justify-between px-4 pr-1
        bg-green-500 text-28 text-green-900 leading-none bloom-effect"
    >
        <span>PERSONAL TERMINAL</span>

        <a
            href="https://github.com/matheus-pissaia"
            title="GitHub"
            target="_blank"
            rel="noopener"
        >
            <GitHub class="size-6 text-green-900/90" />
        </a>

        <div class="flex items-center gap-1">
            <time id="time" class="w-[8ch]">{{ currentTime }}</time>
            <div class="w-4 self-stretch my-1 bg-green-900/70" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useTime } from '@/composables/time'
    import GitHub from './GitHub.vue'

    const { currentTime } = useTime()
</script>
