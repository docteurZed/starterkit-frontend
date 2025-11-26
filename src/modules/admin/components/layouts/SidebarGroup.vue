<script setup>
import { ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

const props = defineProps({
    label: { type: String, required: true },
    defaultOpen: { type: Boolean, default: true },
})

const isOpen = ref(props.defaultOpen)
const toggle = () => (isOpen.value = !isOpen.value)
</script>

<template>
    <div class="flex flex-col mb-4">
        <button
            @click="toggle"
            class="flex items-center justify-between px-3 py-2 text-sm font-bold uppercase tracking-wider text-muted hover:text-primary-500 dark:hover:text-primary-600 transition-colors select-none cursor-pointer"
        >
            <span>{{ label }}</span>
            <span class="transition-transform duration-200" :class="{ 'rotate-90': isOpen }">
                <ChevronRight class="w-4 h-4" />
            </span>
        </button>

        <transition name="expand">
            <div v-show="isOpen" class="flex flex-col gap-1 mt-1">
                <slot />
            </div>
        </transition>
    </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
    transition: all 0.25s ease;
}

.expand-enter-from,
.expand-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>
