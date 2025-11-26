<script setup>
import { useTheme } from '@/composables'
import { Moon, Sun } from 'lucide-vue-next'

const { theme, toggleTheme } = useTheme()

const props = defineProps({
    width: {
        type: Number,
        default: 24,
    },
    height: {
        type: Number,
        default: 24,
    },
})
</script>

<template>
    <button
        @click="toggleTheme"
        type="button"
        class="text-default cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full p-2 transition-all duration-300 ease-in-out"
    >
        <transition name="icon-fade" mode="out-in">
            <component
                :is="theme === 'light' ? Moon : Sun"
                :key="theme"
                :style="{ width: props.width + 'px', height: props.height + 'px' }"
                class="transition-transform duration-300 ease-in-out transform"
            />
        </transition>
    </button>
</template>

<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
    transition: all 0.3s ease;
}

.icon-fade-enter-from {
    opacity: 0;
    transform: rotate(-90deg) scale(0.6);
}

.icon-fade-leave-to {
    opacity: 0;
    transform: rotate(90deg) scale(0.6);
}
</style>
