import { ref } from 'vue'

const isOpen = ref(false)
const message = ref('')
const onConfirm = ref(null)
const placement = ref('center')

export function useDialog() {
    const showDialog = (options = {}) => {
        message.value = options.message || 'Êtes-vous sûr(e) ?'
        placement.value = options.placement || 'center'
        onConfirm.value = options.onConfirm || null
        isOpen.value = true
    }

    const confirm = () => {
        if (onConfirm.value) onConfirm.value()
        isOpen.value = false
    }

    const hideDialog = () => {
        isOpen.value = false
    }

    return {
        isOpen,
        message,
        placement,
        showDialog,
        hideDialog,
        confirm,
    }
}
