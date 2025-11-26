import { ref } from 'vue'

const isOpen = ref(false)
const placement = ref('right')
const size = ref('md')
const dismissible = ref(true)

export function useDrawer() {
    const showDrawer = (options = {}) => {
        placement.value = options.placement || 'right'
        size.value = options.size || 'md'
        dismissible.value = options.dismissible !== undefined ? options.dismissible : true
        isOpen.value = true
    }

    const hideDrawer = () => {
        isOpen.value = false
    }

    return {
        isOpen,
        placement,
        size,
        dismissible,

        showDrawer,
        hideDrawer,
    }
}
