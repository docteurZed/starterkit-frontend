<script setup>
import { datatableRowProps } from './data-table-row.props'

defineProps(datatableRowProps)
</script>

<template>
    <tr
        :class="[
            isHeader
                ? 'bg-zinc-200/50 dark:bg-zinc-800/50 font-semibold'
                : 'hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 border-b border-default',
        ]"
    >
        <slot />
    </tr>
</template>
