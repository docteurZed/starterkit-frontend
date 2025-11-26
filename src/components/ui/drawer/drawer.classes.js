import { computed } from 'vue'

export function useDrawerClasses(isOpen, placement, sizeClasses) {
    return computed(() => {
        const size = sizeClasses || 'md'

        switch (placement) {
            case 'top':
                return `top-0 left-0 right-0 ${size.split(' ')[1]} transform ${isOpen.value ? 'translate-y-0' : '-translate-y-full'}`
            case 'bottom':
                return `bottom-0 left-0 right-0 ${size.split(' ')[1]} transform ${isOpen.value ? 'translate-y-0' : 'translate-y-full'}`
            case 'left':
                return `top-0 left-0 h-screen ${size.split(' ')[0]} transform ${isOpen.value ? 'translate-x-0' : '-translate-x-full'}`
            case 'right':
                return `top-0 right-0 h-screen ${size.split(' ')[0]} transform ${isOpen.value ? 'translate-x-0' : 'translate-x-full'}`
        }
    })
}
