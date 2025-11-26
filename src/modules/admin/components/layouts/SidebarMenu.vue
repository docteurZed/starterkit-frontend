<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
    label: { type: String, required: true },
    icon: { type: [Object, Function], default: null },
    to: { type: [String, Object], required: false },
})

const emit = defineEmits(['navigate'])

const route = useRoute()
const router = useRouter()

const isActive = computed(() => {
    if (!props.to) return false
    const resolved = router.resolve(props.to)
    return route.path === resolved.path
})

const navigate = () => {
    if (props.to) {
        router.push(props.to)
        emit('navigate')
    }
}
</script>

<template>
    <div
        role="button"
        tabindex="0"
        @click="navigate"
        @keypress.enter="navigate"
        :class="[
            'flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors select-none focus:outline-none focus:ring-2 focus:ring-primary-400/40',
            isActive
                ? 'bg-muted text-primary border-l-3 border-primary'
                : 'text-muted hover:bg-zinc-200 dark:hover:bg-zinc-800',
        ]"
    >
        <component v-if="icon" :is="icon" class="w-5 h-5" />
        <span class="font-medium truncate">{{ label }}</span>
    </div>
</template>
