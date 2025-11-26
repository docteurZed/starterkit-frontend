<script setup>
import { defineProps, defineEmits } from 'vue'
import { radioProps } from './radio.props'

const props = defineProps(radioProps)

const emit = defineEmits(['update:modelValue'])

const select = () => {
    if (!props.disabled) {
        emit('update:modelValue', props.value)
    }
}
</script>

<template>
    <div class="flex items-center gap-2">
        <input
            :id="id"
            type="radio"
            :name="name"
            :checked="modelValue === value"
            @change="select"
            :disabled="disabled"
            class="w-4 h-4 text-default bg-zinc-200/50 dark:bg-zinc-800/50 border-default focus:ring-2 focus-primary rounded-full transition duration-150 ease-in-out"
        />
        <label :for="id" class="text-sm font-medium text-default cursor-pointer">
            {{ label }}
        </label>
    </div>
</template>
