<script setup>
import { defineProps, defineEmits } from 'vue'
import { checkboxProps } from './checkbox.props'

const props = defineProps(checkboxProps)

const emit = defineEmits(['update:modelValue'])

const toggle = () => emit('update:modelValue', !props.modelValue)
</script>

<template>
    <div class="flex items-center gap-2">
        <input
            type="checkbox"
            :id="id"
            :checked="modelValue"
            :name="name"
            @change="toggle"
            class="w-4 h-4 text-primary bg-zinc-200 border-default rounded focus:ring-2 focus-primary dark:ring-offset-zinc-800 dark:bg-zinc-700 transition duration-150 ease-in-out"
        />
        <label :for="id" class="text-sm font-medium text-default">
            {{ label }}
        </label>
    </div>
</template>
