<script setup>
import { ref, computed, defineProps, defineEmits, onMounted, onBeforeUnmount, watch } from 'vue'
import { selectProps } from './select.props'
import { ChevronsUpDown, Search } from 'lucide-vue-next'

const props = defineProps(selectProps)

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const search = ref('')
const selectRef = ref(null)

const selectedLabel = ref('')

const toggleDropdown = () => (isOpen.value = !isOpen.value)
const closeDropdown = () => (isOpen.value = false)

function selectOption(option) {
    emit('update:modelValue', option.value)
    selectedLabel.value = option.label
    isOpen.value = false
}

function handleClickOutside(e) {
    if (selectRef.value && !selectRef.value.contains(e.target)) {
        closeDropdown()
    }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))

watch(
    () => props.modelValue,
    (newValue) => {
        const found = props.options.find((opt) => opt.value === newValue)
        selectedLabel.value = found ? found.label : ''
    },
    { immediate: true },
)

const filteredOptions = computed(() => {
    if (!props.filterable || !search.value) return props.options
    return props.options.filter((opt) =>
        opt.label.toLowerCase().includes(search.value.toLowerCase()),
    )
})
</script>

<template>
    <div class="mb-5 relative" ref="selectRef">
        <label
            v-if="label"
            :for="id"
            class="block mb-2 font-semibold text-zinc-900 dark:text-white"
        >
            {{ label }}
        </label>

        <input v-if="name" type="hidden" :name="name" :value="modelValue" />

        <div
            @click="toggleDropdown"
            class="bg-zinc-200/50 dark:bg-zinc-800/50 border rounded-lg px-3 py-2.5 flex justify-between items-center cursor-pointer text-sm text-default border-strong"
            :class="{ 'border-red': error }"
        >
            <span class="truncate">{{ selectedLabel || placeholder }}</span>
            <ChevronsUpDown class="w-5 h-5 text-muted" />
        </div>

        <transition name="fade">
            <div
                v-if="isOpen"
                class="absolute z-50 mt-1 w-full bg-muted border border-default rounded-lg shadow-lg overflow-hidden"
            >
                <div v-if="filterable" class="flex items-center px-2 py-2 border-b border-default">
                    <Search class="w-4 h-4 text-muted mr-2" />
                    <input
                        v-model="search"
                        type="text"
                        placeholder="Rechercher..."
                        class="w-full bg-transparent focus:outline-none text-sm text-default placeholder-zinc-500"
                    />
                </div>

                <ul class="max-h-48 overflow-auto divide-y divide-zinc-300 dark:divide-zinc-700">
                    <li
                        v-for="option in filteredOptions"
                        :key="option.value"
                        @click="selectOption(option)"
                        class="px-3 py-2 cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700"
                    >
                        {{ option.label }}
                    </li>
                </ul>
            </div>
        </transition>

        <p v-if="helperText && !error" class="mt-2 text-sm text-muted">{{ helperText }}</p>
        <p v-if="error" class="mt-2 text-sm text-red">{{ error }}</p>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
