<script setup>
import { watch } from 'vue'
import { Button } from '@/components/ui'
import { AlertCircle, X } from 'lucide-vue-next'
import { dialogPlacements } from './dialog.placements'
import { useDialog } from '@/composables'

const { isOpen, message, placement, hideDialog, confirm } = useDialog()

const placementClasses = dialogPlacements[placement.value]

const handleKeydown = (e) => {
    if (e.key === 'Escape') hideDialog()
}

const handleBackdropClick = (e) => {
    if (e.target.dataset.dialogBackdrop === 'true') hideDialog()
}

watch(placement, (newPlacement) => {
    placementClasses = dialogPlacements(newPlacement)
})

document.addEventListener('keydown', handleKeydown)
</script>

<template>
    <transition name="fade-slide">
        <div
            v-if="isOpen"
            @click="handleBackdropClick"
            data-dialog-backdrop="true"
            class="fixed inset-0 z-60 flex bg-black/80 p-4 justify-center items-center"
        >
            <div class="bg-muted rounded-lg shadow-lg w-full max-w-sm relative">
                <button
                    @click="hideDialog"
                    type="button"
                    class="absolute top-3 end-2.5 text-muted hover:text-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 rounded-lg w-8 h-8 flex justify-center items-center cursor-pointer"
                >
                    <X class="w-5 h-5" />
                </button>
                <div class="p-4 md:p-5 text-center">
                    <AlertCircle class="mx-auto mb-4 text-default w-12 h-12" />
                    <h3 class="mb-5 text-lg font-semibold text-muted">{{ message }}</h3>
                    <div class="space-x-2">
                        <Button @click="hideDialog">Annuler</Button>
                        <Button variant="error" @click="confirm">Confirmer</Button>
                    </div>
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
