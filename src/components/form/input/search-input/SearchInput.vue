<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { searchInputProps } from './search-input.props'
import { Search } from 'lucide-vue-next'

const props = defineProps(searchInputProps)

const emit = defineEmits(['update:modelValue', 'search'])

const borderClasses = computed(() =>
    props.error
        ? 'border-strong focus:ring-1 focus-red focus:border-red-500 dark:focus:border-red-600'
        : 'border-strong focus:ring-1 focus-default',
)

function handleInput(e) {
    emit('update:modelValue', e.target.value)
    emit('search', e.target.value)
}
</script>

<template>
    <div>
        <label v-if="label" :for="id" class="block mb-2 font-semibold text-default">
            {{ label }}
        </label>

        <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <Search class="w-5 h-5 text-muted" />
            </span>
            <input
                type="text"
                :id="id"
                :name="name"
                :placeholder="placeholder"
                :required="required"
                :value="modelValue"
                @input="handleInput"
                class="bg-zinc-200/50 text-default text-sm rounded-lg block w-full p-2.5 pl-8 dark:bg-zinc-800/50 placeholder-zinc-600 dark:placeholder-zinc-500 border"
                :class="borderClasses"
            />
        </div>

        <p v-if="error" class="mt-2 text-sm text-red">
            {{ error }}
        </p>
    </div>
</template>
