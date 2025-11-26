<script setup>
import { inject } from 'vue'

const { toggle } = inject('dropdown')
</script>

<template>
    <div @click="toggle">
        <slot />
    </div>
</template>
