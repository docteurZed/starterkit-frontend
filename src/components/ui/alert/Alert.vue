<script setup>
import { ref, computed } from 'vue'
import { alertProps } from './alert.props'
import { getBorderColor, getFocusColor, getTextColor } from '@/utils'
import { AlertCircle, AlertOctagon, CheckCircle, TriangleAlert, X } from 'lucide-vue-next'

const props = defineProps(alertProps)

const isVisible = ref(true)

const iconComponent = computed(() => {
    switch (props.variant) {
        case 'info':
            return AlertOctagon
        case 'success':
            return CheckCircle
        case 'warning':
            return TriangleAlert
        default:
            return AlertCircle
    }
})

const textClasses = getTextColor(props.variant)
const borderClasses = getBorderColor(props.variant)
const focusClasses = getFocusColor(props.variant)
</script>

<template>
    <transition
        name="fade"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-3"
    >
        <div
            v-if="isVisible"
            :class="['p-4 border-l-4 bg-muted rounded-lg shadow-sm mb-4', borderClasses]"
            role="alert"
        >
            <div class="flex items-center">
                <component :is="iconComponent" :class="['shrink-0 w-5 h-5', textClasses]" />

                <div :class="['ms-3 font-medium', textClasses]">
                    <slot name="title">Titre de l'alerte</slot>
                </div>

                <button
                    v-if="dismissible"
                    type="button"
                    @click="isVisible = false"
                    :class="[
                        'ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 hover:bg-zinc-300 inline-flex items-center justify-center h-8 w-8 dark:hover:bg-zinc-700',
                        textClasses,
                        focusClasses,
                    ]"
                    aria-label="Close"
                >
                    <X class="w-5 h-5" />
                </button>
            </div>

            <div v-if="$slots.description" :class="['mt-2 mb-4 text-sm', textClasses]">
                <slot name="description" />
            </div>
        </div>
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition:
        opacity 0.3s,
        transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
