<template>
    <svg
        width="100%"
        height="100%"
        class="absolute pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path class="stroke-white stroke-2 fill-none" :d="pathCommands" />
    </svg>
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps<{
        fromElement: HTMLElement | null
        toElement: HTMLElement | null
    }>()

    const pathCommands = computed(() => {
        if (!props.fromElement || !props.toElement)
            return

        const fromElement = props.fromElement
        const toElement = props.toElement

        const fromElementX = fromElement.offsetLeft + fromElement.offsetWidth
        const fromElementY = fromElement.offsetTop + (fromElement.offsetHeight / 2)

        const toElementX = toElement.offsetLeft
        const toElementY = toElement.offsetTop + (toElement.offsetHeight / 2)
        const middleX = (fromElementX + toElementX) / 2

        return `M${fromElementX} ${fromElementY} L${middleX} ${fromElementY} L${middleX} ${toElementY}`
    })
</script>
