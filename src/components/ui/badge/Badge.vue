<script setup>
import { getBgColor } from '@/utils'
import { badgeProps } from './badge.props'

const props = defineProps(badgeProps)

const variantClasses = getBgColor(props.variant)
</script>

<template>
    <span
        :class="[
            'text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm text-white text-center',
            variantClasses,
        ]"
    >
        <slot />
    </span>
</template>
