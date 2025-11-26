<script setup>
import { cardProps } from './card.props'

const props = defineProps(cardProps)
</script>

<template>
    <div
        :class="[
            'flex flex-col transition-all duration-300 rounded-lg shadow-sm border border-default bg-muted overflow-hidden text-default',
        ]"
    >
        <div v-if="$slots.header" class="p-4 border-b border-default font-semibold">
            <slot name="header" />
        </div>

        <div :class="['flex-1', setPadding ? 'p-4' : '']">
            <slot />
        </div>

        <div v-if="$slots.footer" class="p-4 border-t border-default">
            <slot name="footer" />
        </div>
    </div>
</template>
