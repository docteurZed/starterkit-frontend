<script setup>
import { SearchInput } from '@/components'
import { defineProps, defineEmits } from 'vue'
import { datatableSearchProps } from './data-table-search.props'

const props = defineProps(datatableSearchProps)

const emit = defineEmits(['update:modelValue'])

const updateValue = (e) => {
    emit('update:modelValue', e.target.value)
}
</script>

<template>
    <div class="p-3 flex items-center justify-center sm:justify-end">
        <SearchInput :placeholder="placeholder" />
    </div>
</template>
