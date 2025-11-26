<script setup>
import { defineProps, defineEmits, ref, computed } from 'vue'
import { fileInputProps } from './file-input.props'

const props = defineProps(fileInputProps)

const emit = defineEmits(['update:modelValue'])

const selectedFiles = ref([])

const borderClasses = computed(() =>
    props.error
        ? 'border-red-600 dark:border-red-500 focus:ring-1 focus:ring-red-600 dark:focus:ring-red-500 focus:border-red-600 dark:focus:border-red-500'
        : 'border-zinc-400 dark:border-zinc-600 focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500',
)

function handleFileChange(event) {
    const files = Array.from(event.target.files)
    selectedFiles.value = files
    emit('update:modelValue', props.multiple ? files : files[0] || null)
}
</script>

<template>
    <div>
        <label v-if="label" :for="id" class="block mb-2 font-semibold text-zinc-800 dark:text-zinc-200">
            {{ label }}
        </label>

        <input type="file" :id="id" :name="name" :required="required" :multiple="multiple" @change="handleFileChange"
            class="block w-full text-sm text-zinc-800 dark:text-zinc-200 bg-zinc-200/50 dark:bg-zinc-800/50 file:py-2.5 file:px-4 file:rounded-l-lg file:border-0 file:bg-zinc-300 dark:file:bg-zinc-700 file:text-zinc-800 dark:file:text-zinc-200 hover:file:bg-zinc-400/80 dark:hover:file:bg-zinc-600/80 border rounded-lg"
            :class="borderClasses" />

        <p v-if="selectedFiles.length" class="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Fichier(s) sélectionné(s):
            <span v-for="(file, i) in selectedFiles" :key="i">{{ file.name }}<span v-if="i < selectedFiles.length - 1">,
                </span></span>
        </p>

        <p v-if="helperText && !error" class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {{ helperText }}
        </p>
        <p v-if="error" class="mt-2 text-sm text-red-600 dark:text-red-500">
            {{ error }}
        </p>
    </div>
</template>
