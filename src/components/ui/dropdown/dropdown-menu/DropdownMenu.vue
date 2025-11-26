<script setup>
import { inject, computed } from 'vue'
import { dropdownMenuProps } from './dropdown-menu.props'

const props = defineProps(dropdownMenuProps)

const { isOpen } = inject('dropdown')

const sizeClasses = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
    xl: 'w-80',
}
const menuWidthClass = computed(() => sizeClasses[props.size] || sizeClasses.md)
</script>

<template>
    <transition name="fade">
        <div
            v-if="isOpen"
            :class="[
                'absolute mt-2 bg-muted rounded-md shadow-lg border border-strong z-50',
                align === 'right' ? 'right-0' : 'left-0',
                menuWidthClass,
            ]"
        >
            <slot />
        </div>
    </transition>
</template>
