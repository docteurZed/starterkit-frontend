<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { textareaProps } from './textarea.props'

const props = defineProps(textareaProps)

const emit = defineEmits(['update:modelValue'])

const borderClasses = computed(() =>
    props.error
        ? 'border-strong focus:ring-1 focus-red focus:border-red-500 dark:focus:border-red-600'
        : 'border-strong focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500',
)
</script>

<template>
    <div>
        <label v-if="label" :for="id" class="block mb-2 font-semibold text-default">
            {{ label }}
        </label>

        <textarea
            :id="id"
            :name="name"
            :placeholder="placeholder"
            :required="required"
            :rows="rows"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            :class="[
                'bg-zinc-200/50 text-default text-sm rounded-lg block w-full p-2.5 pr-10 dark:bg-zinc-800/50 placeholder-zinc-600 dark:placeholder-zinc-500 border',
                borderClasses,
            ]"
        ></textarea>

        <p v-if="helperText && !error" class="mt-2 text-sm text-muted">
            {{ helperText }}
        </p>
        <p v-if="error" class="mt-2 text-sm text-red">
            {{ error }}
        </p>
    </div>
</template>
