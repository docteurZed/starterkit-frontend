<script setup>
import { AppLogo } from '@/components'

const props = defineProps({
    heading: String,
    subheading: String,
})
</script>

<template>
    <div class="flex justify-center">
        <AppLogo />
    </div>

    <div class="text-center">
        <h2 class="text-xl font-bold text-default">
            {{ heading }}
        </h2>
        <p v-if="subheading" class="text-muted mt-1">
            {{ subheading }}
        </p>
    </div>
</template>
