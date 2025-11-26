<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { textInputProps } from './text-input.props'

const props = defineProps(textInputProps)

const emit = defineEmits(['update:modelValue'])

const borderClasses = computed(() =>
    props.error
        ? 'border-strong focus:ring-1 focus-red focus:border-red-500 dark:focus:border-red-600'
        : 'border-strong focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500',
)
</script>

<template>
    <div>
        <label v-if="label" :for="id" class="block mb-2 font-semibold text-zinc-800 dark:text-zinc-200">
            {{ label }}
        </label>

        <input :type="type" :name="name" :id="id" :placeholder="placeholder" :required="required" :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)" :class="[
                'bg-zinc-200/50 text-zinc-800 text-sm rounded-lg block w-full p-2.5 pr-10 dark:bg-zinc-800/50 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-600 border',
                borderClasses,
            ]" />

        <p v-if="helperText && !error" class="mt-2 text-sm text-muted">
            {{ helperText }}
        </p>
        <p v-if="error" class="mt-2 text-sm text-red">
            {{ error }}
        </p>
    </div>
</template>
