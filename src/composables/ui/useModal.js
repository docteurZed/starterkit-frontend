import { ref } from 'vue'

export function useModal() {
    const isOpen = ref(false)

    const show = () => (isOpen.value = true)
    const hide = () => (isOpen.value = false)
    const toggle = () => (isOpen.value = !isOpen.value)

    return { isOpen, show, hide, toggle }
}
