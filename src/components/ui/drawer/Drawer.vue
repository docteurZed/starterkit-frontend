<script setup>
import { ref, computed, defineProps, defineExpose } from 'vue'
import { drawerProps } from './drawer.props'
import { X } from 'lucide-vue-next'
import { useDrawerClasses } from './drawer.classes'
import { getDimensionSize } from '@/utils'

const props = defineProps(drawerProps)

const sizeClasses = getDimensionSize(props.size)

const isOpen = ref(false)
const show = () => (isOpen.value = true)
const hide = () => (isOpen.value = false)
defineExpose({ show, hide })

const drawerClasses = useDrawerClasses(isOpen, props.placement, sizeClasses)
</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-40" @click="hide"></div>

    <div
        :class="[
            'fixed z-50 bg-muted p-4 overflow-auto rounded-b shadow-lg duration-500 transform transition-transform',
            drawerClasses,
        ]"
    >
        <button
            v-if="dismissible"
            @click="hide"
            class="absolute top-2.5 end-2.5 text-muted hover:text-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white flex items-center justify-center rounded-lg p-1.5 cursor-pointer"
        >
            <X class="w-5 h-5" />
        </button>

        <div class="text-default">
            <slot />
        </div>
    </div>
</template>
