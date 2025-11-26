<script setup>
import { inject } from 'vue'

const props = defineProps({
    divider: Boolean,
})

const { close } = inject('dropdown')
</script>

<template>
    <div v-if="divider" class="border-t border-default"></div>
    <div
        v-else
        @click="close"
        class="px-4 py-2 text-sm hover:bg-zinc-300 dark:hover:bg-zinc-700 text-muted rounded-sm cursor-pointer"
    >
        <slot />
    </div>
</template>
