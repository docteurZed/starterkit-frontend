<script setup>
import { Button } from '@/components/ui'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed, watch } from 'vue'

const props = defineProps({
    totalRows: { type: Number, required: true },
    perPageOptions: { type: Array, default: () => [10, 25, 50] },
    modelValue: { type: Number, default: 1 },
    perPage: { type: Number, default: 10 },
})

const emit = defineEmits(['update:modelValue', 'update:perPage'])

const currentPage = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
})

const rowsPerPage = computed({
    get: () => props.perPage,
    set: (val) => emit('update:perPage', val),
})

const totalPages = computed(() => Math.ceil(props.totalRows / rowsPerPage.value))

const paginationItems = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    const items = []

    if (total <= 5) {
        for (let i = 1; i <= total; i++) items.push(i)
    } else {
        items.push(1)
        if (current > 3) items.push('...')

        const start = Math.max(2, current - 1)
        const end = Math.min(total - 1, current + 1)
        for (let i = start; i <= end; i++) items.push(i)

        if (current < total - 2) items.push('...')
        items.push(total)
    }

    return items
})

const goPrevious = () => {
    if (currentPage.value > 1) currentPage.value--
}
const goNext = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
}

watch(rowsPerPage, () => {
    currentPage.value = 1
})

const displayedRows = computed(() => {
    const start = (props.modelValue - 1) * rowsPerPage.value
    const end = Math.min(start + rowsPerPage.value, props.totalRows)
    return end - start
})
</script>

<template>
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center p-3">
        <div>
            <select
                v-model="rowsPerPage"
                class="font-semibold bg-muted border border-default rounded-lg px-2 py-1.5 text-sm text-default focus:outline-none focus:ring-2 focus-primary focus:border-primary-500 transition-all cursor-pointer"
            >
                <option v-for="opt in perPageOptions" :key="opt" :value="opt">{{ opt }}</option>
            </select>
        </div>

        <div class="flex items-center space-x-1">
            <Button size="sm" @click="goPrevious" :disabled="currentPage === 1">
                <span class="hidden md:block">Précédent</span>
                <ChevronLeft class="w-4 h-4 md:hidden" />
            </Button>

            <template v-for="item in paginationItems" :key="item">
                <span v-if="item === '...'">...</span>
                <Button
                    v-else
                    size="sm"
                    @click="currentPage = item"
                    :variant="currentPage === item ? 'primary' : 'transparent'"
                >
                    {{ item }}
                </Button>
            </template>

            <Button size="sm" @click="goNext" :disabled="currentPage === totalPages">
                <span class="hidden md:block">Suivant</span>
                <ChevronRight class="w-4 h-4 md:hidden" />
            </Button>
        </div>

        <div class="font-semibold text-muted">
            Affichage de
            <span class="text-primary">{{ displayedRows }}</span>
            sur
            <span class="text-default">{{ totalRows }}</span>
            entrées
        </div>
    </div>
</template>
