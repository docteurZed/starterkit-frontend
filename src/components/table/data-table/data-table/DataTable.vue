<script setup>
import { ref, computed, provide } from 'vue'
import { Card, DataTableEmpty, DataTablePagination, DataTableSearch } from '@/components'
import { datatableProps } from './data-table.props'

const props = defineProps(datatableProps)

const search = ref('')
const currentPage = ref(1)
const perPage = ref(props.perPageOptions[0])
const sortColumn = ref(null)
const sortAsc = ref(true)

const toggleSort = (col, sortable = true) => {
    if (!sortable) return
    if (sortColumn.value === col) {
        sortAsc.value = !sortAsc.value
    } else {
        sortColumn.value = col
        sortAsc.value = true
    }
}

provide('sortColumn', sortColumn)
provide('sortAsc', sortAsc)
provide('toggleSort', toggleSort)

const filteredRows = computed(() => {
    let data = [...props.rows]

    if (props.searchable && search.value.trim() !== '') {
        const q = search.value.toLowerCase()
        data = data.filter((row) =>
            Object.values(row).some((val) => String(val).toLowerCase().includes(q)),
        )
    }

    if (sortColumn.value) {
        data.sort((a, b) => {
            if (a[sortColumn.value] < b[sortColumn.value]) return sortAsc.value ? -1 : 1
            if (a[sortColumn.value] > b[sortColumn.value]) return sortAsc.value ? 1 : -1
            return 0
        })
    }

    return data
})

const paginatedRows = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    return filteredRows.value.slice(start, start + perPage.value)
})
</script>

<template>
    <Card :set-padding="false">
        <div class="w-full overflow-x-auto text-sm text-default">
            <DataTableSearch v-if="props.searchable" v-model="search" />

            <table class="w-full border-collapse">
                <thead>
                    <slot name="thead"></slot>
                </thead>
                <tbody>
                    <slot name="tbody" :rows="paginatedRows"></slot>
                </tbody>
            </table>

            <DataTableEmpty v-if="filteredRows.length === 0" message="Pas de résultats trouvés" />

            <DataTablePagination
                :total-rows="filteredRows.length"
                v-model="currentPage"
                v-model:perPage="perPage"
                :per-page-options="perPageOptions"
            />
        </div>
    </Card>
</template>
