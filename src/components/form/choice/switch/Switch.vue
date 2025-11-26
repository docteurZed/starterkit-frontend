<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import { switchProps } from './switch.props'
import { getBgColor } from '@/utils'

const props = defineProps(switchProps)

const emit = defineEmits(['update:modelValue'])

const isChecked = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
})

const variantClasses = getBgColor(props.variantOn)

const uncheckedClasses = {
    neutral: 'bg-zinc-300',
    primary: 'bg-primary-200',
    secondary: 'bg-secondary-200',
    tertiary: 'bg-tertiary-200',
    success: 'bg-success-200',
    error: 'bg-error-200',
    info: 'bg-info-200',
    warning: 'bg-warning-200',
}
</script>

<template>
    <label :for="id" class="inline-flex items-center cursor-pointer select-none">
        <span v-if="label" class="mr-3 font-semibold text-default">
            {{ label }}
        </span>
        <div
            :class="[
                'relative rounded-full transition-colors duration-300 ease-in-out w-11 h-6',
                isChecked ? variantClasses : uncheckedClasses[variantOff],
            ]"
            @click="isChecked = !isChecked"
        >
            <span
                :class="[
                    'absolute bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out w-5 h-5',
                    isChecked ? 'translate-x-full' : 'translate-x-0',
                    'top-0.5 left-0.5',
                ]"
            ></span>
        </div>
    </label>
</template>
