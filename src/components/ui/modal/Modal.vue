<script setup>
import { ref, onMounted, onUnmounted, defineExpose } from 'vue'
import { X } from 'lucide-vue-next'
import { modalProps } from './modal.props'
import { modalPlacements } from './modal.placements'
import { getMaxWidthSize } from '@/utils'

const isOpen = ref(false)
const props = defineProps(modalProps)

const placementClasses = modalPlacements[props.placement]
const sizeClasses = getMaxWidthSize(props.size)

const show = () => (isOpen.value = true)
const hide = () => (isOpen.value = false)
defineExpose({ show, hide })

const handleKeydown = (e) => {
    if (e.key === 'Escape') hide()
}

const handleBackdropClick = (e) => {
    if (e.target.dataset.modalBackdrop === 'true') hide()
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
    <transition name="fade-slide">
        <div v-if="isOpen" @click="handleBackdropClick" data-modal-backdrop="true"
            :class="['fixed inset-0 z-50 flex bg-black/80 p-4 overflow-y-auto', placementClasses]">
            <div :class="['bg-muted rounded-lg shadow-lg w-full relative', sizeClasses]">
                <!-- Header -->
                <div class="flex items-center p-4 border-b border-zinc-300 dark:border-zinc-700 border-default rounded-t"
                    :class="$slots.header ? 'justify-between' : 'justify-end'">
                    <h3 v-if="$slots.header" class="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                        <slot name="header" />
                    </h3>
                    <button type="button" @click="hide"
                        class="text-muted hover:text-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 rounded-lg p-1.5 cursor-pointer">
                        <X class="w-5 h-5" />
                    </button>
                </div>

                <!-- Body -->
                <div class="p-6 space-y-4 text-muted">
                    <slot />
                </div>

                <!-- Footer -->
                <div v-if="$slots.footer" class="p-4 border-t border-default flex justify-end space-x-2">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>
