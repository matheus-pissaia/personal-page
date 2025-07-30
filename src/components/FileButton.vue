<template>
    <button
        class="[ file-button ]"
        :class="{
            'border-white bg-green-500/50 [ white-line ]': selected,
            'border-green-500/25 hover:bg-green-500/20 [ dotted-line ]': !selected,
        }"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
    defineProps<{ selected?: boolean }>()
</script>

<style scoped>
    .file-button {
        @apply relative w-5/6 h-14 border-2 pl-4 text-left align-middle text-36 leading-none;

        &::before {
            @apply content-[''] absolute top-1/2 -translate-y-1/2 -left-[35px] border-t-2;
        }
    }

    .dotted-line::before {
        @apply w-5 border-dotted border-green-500;
    }

    .white-line::before {
        @apply w-8 border-white;
    }
</style>
