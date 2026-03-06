<template>
    <div
        class="flex items-center justify-between px-4
        bg-green-500 text-28 text-green-900 leading-none"
    >
        <span>PERSONAL TERMINAL</span>
        <time id="time">{{ currentTime }}</time>
    </div>
</template>

<script setup lang="ts">
    import { useTime } from '@/composables/time'

    const { currentTime } = useTime()
</script>
