<script setup>
import { inject } from 'vue'
import { datatableCellHeaderProps } from './data-table-cell-header.props'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-vue-next'

defineProps(datatableCellHeaderProps)

const sortColumn = inject('sortColumn')
const sortAsc = inject('sortAsc')
const toggleSort = inject('toggleSort')
</script>

<template>
    <th
        :class="[
            'px-4 py-3 text-left font-semibold bg-zinc-100 dark:bg-zinc-700/50',
            sortable ? 'cursor-pointer' : '',
        ]"
        @click="sortable && toggleSort?.(columnKey, true)"
    >
        <div class="flex gap-4 items-center">
            <slot>
                {{ label }}
            </slot>
            <span v-if="sortable">
                <span v-if="sortColumn === columnKey">
                    <ArrowUp class="w-3 h-4" v-if="sortAsc" />
                    <ArrowDown class="w-3 h-4" v-else />
                </span>
                <span v-else>
                    <ArrowUpDown class="w-3 h-4" />
                </span>
            </span>
        </div>
    </th>
</template>
