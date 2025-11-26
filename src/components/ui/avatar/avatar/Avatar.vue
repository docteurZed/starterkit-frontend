<script setup>
import { computed } from 'vue'
import { avatarProps } from './avatar.props'
import { getBoxSize, getRingColor, getTextSize } from '@/utils'

const props = defineProps(avatarProps)

const boxClasses = computed(() => getBoxSize(props.size))
const textClasses = computed(() => getTextSize(props.size))
const ringClasses = computed(() => getRingColor(props.ringVariant))
const roundedClass = computed(() => (props.roundedFull ? 'rounded-full' : 'rounded-sm'))
</script>

<template>
    <div
        :class="[
            'relative inline-flex items-center justify-center overflow-hidden bg-zinc-300 dark:bg-zinc-700 ring-2',
            boxClasses,
            roundedClass,
            ringClasses,
        ]"
    >
        <span :class="['font-semibold text-zinc-600 dark:text-zinc-500', textClasses]">
            <slot />
        </span>
    </div>
</template>
