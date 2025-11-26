<script setup>
import { toasts, removeToast } from '@/composables'
import { AlertCircle, AlertOctagon, CheckCircle, TriangleAlert, X } from 'lucide-vue-next'

const props = defineProps({ placement: { type: String, default: 'top-right' } })

const icons = {
    info: AlertOctagon,
    success: CheckCircle,
    warning: TriangleAlert,
    error: X,
    neutral: AlertCircle,
}

const placementClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
}
</script>

<template>
    <div :class="['fixed z-50 flex flex-col', placementClasses[props.placement]]">
        <transition-group name="toast" tag="div">
            <div
                v-for="t in toasts"
                :key="t.id"
                class="flex items-center w-full max-w-xs p-4 mb-3 border-l-4 rounded-lg shadow bg-zinc-200 dark:bg-zinc-800"
                :class="{
                    'border-info text-info': t.variant === 'info',
                    'border-success text-success': t.variant === 'success',
                    'border-warning text-warning': t.variant === 'warning',
                    'border-error text-error': t.variant === 'error',
                    'border-strong text-muted': t.variant === 'neutral',
                }"
            >
                <component :is="icons[t.variant]" class="w-5 h-5 shrink-0" />
                <span class="ms-3 font-medium">{{ t.message }}</span>
                <button
                    v-if="t.dismissible"
                    @click="removeToast(t.id)"
                    class="ms-auto p-1 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full"
                >
                    <X class="w-4 h-4" />
                </button>
            </div>
        </transition-group>
    </div>
</template>
