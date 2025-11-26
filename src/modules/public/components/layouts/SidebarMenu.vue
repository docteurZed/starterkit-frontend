<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
    label: String,
    to: {
        type: [String, Object],
        default: null,
    },
    hasChildren: { type: Boolean, default: false },
})

const route = useRoute()
const router = useRouter()
const open = ref(false)

const isActive = computed(() => {
    if (!props.to) return false

    const resolved = router.resolve(props.to)
    return route.path === resolved.path
})
</script>

<template>
    <div class="w-full">
        <RouterLink
            v-if="!hasChildren"
            :to="to"
            :class="[
                'block px-3 py-2 rounded-md w-full transition-colors duration-200',
                isActive
                    ? 'bg-zinc-300 dark:bg-zinc-700/50 border-l-4 border-primary'
                    : 'hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50',
            ]"
        >
            {{ label }}
        </RouterLink>

        <div v-else class="w-full">
            <button
                @click="open = !open"
                type="button"
                class="w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors duration-200"
                :class="
                    isActive
                        ? 'bg-zinc-300 text-primary dark:bg-zinc-700'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50'
                "
            >
                <span>{{ label }}</span>
                <ChevronRight
                    :class="{ 'rotate-90': open }"
                    class="w-4 h-4 transition-transform duration-300"
                />
            </button>

            <transition
                name="accordion"
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-200 ease-in"
            >
                <div v-show="open" class="mx-4 mt-2 flex flex-col gap-1 overflow-hidden">
                    <slot />
                </div>
            </transition>
        </div>
    </div>
</template>

<style scoped>
.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
    max-height: 500px;
    opacity: 1;
}
</style>
