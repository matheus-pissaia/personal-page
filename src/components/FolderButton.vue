<template>
    <div class="isolate">
        <button
            class="[ folder-button ]"
            :class="{
                '[ folder-button-selected ]': selected,
                'border-green-500 hover:bg-white hover:border-white hover:text-green-900': !selected,
            }"
        >
            <slot />
        </button>
    </div>
</template>

<script setup lang="ts">
    defineProps<{ selected?: boolean }>()
</script>

<style scoped>
    .folder-button {
        @apply relative inline-flex justify-start w-[208px] h-[128px] p-3
        border-2 bg-green-900 text-32 text-left leading-none;
    }

    .folder-button-selected::before {
        @apply content-[''] -z-10 absolute-center w-[calc(100%+36px)] h-[calc(100%+4px)]
        bg-white border-white border-2;
    }
</style>
