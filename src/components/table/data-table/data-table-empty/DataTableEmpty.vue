<script setup>
import { defineProps } from 'vue'
import { datatableEmptyProps } from './data-table-empty.props'

const props = defineProps(datatableEmptyProps)
</script>

<template>
    <div class="text-center px-4 py-2 border-b border-default">
        {{ message }}
    </div>
</template>
