<script setup>
import { generateColorClasses, getPaddingSize } from '@/utils'
import { buttonProps } from './button.props'
import { RouterLink } from 'vue-router'

const props = defineProps(buttonProps)

const variantClasses = generateColorClasses(props.variant)
const sizeClasses = getPaddingSize(props.size)
</script>

<template>
    <component
        :is="as === 'router-link' ? RouterLink : as"
        :to="as === 'router-link' ? to : undefined"
        :href="as === 'a' ? href : undefined"
        :type="as === 'button' ? 'button' : undefined"
        :disabled="as === 'button' ? disabled : undefined"
        class="inline-flex items-center justify-center px-4 py-2 font-medium rounded-lg focus:outline-none focus:ring-2 transition-colors duration-150 focus:ring-offset-2 cursor-pointer"
        :class="[
            disabled
                ? 'text-default opacity-50 cursor-not-allowed pointer-events-none'
                : ['text-white', variantClasses.bg, variantClasses.border, variantClasses.focus],
            sizeClasses,
        ]"
    >
        <slot />
    </component>
</template>
