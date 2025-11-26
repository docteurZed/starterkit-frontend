import { ref } from 'vue'

export const toasts = ref([])

export const addToast = ({ message, variant = 'neutral', duration = 3000, dismissible = true }) => {
    const id = Date.now() + Math.random()
    if (toasts.value.some((t) => t.id === id)) return
    toasts.value.push({ id, message, variant, duration, dismissible })
    setTimeout(() => removeToast(id), duration)
}

export const removeToast = (id) => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
}
