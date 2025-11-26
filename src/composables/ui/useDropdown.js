import { ref } from 'vue'

export function useDropdown() {
    const isOpen = ref(false)

    const toggle = () => (isOpen.value = !isOpen.value)
    const close = () => (isOpen.value = false)

    return {
        isOpen,
        toggle,
        close,
    }
}
