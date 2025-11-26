<script setup>
import { onMounted, onUnmounted, provide, ref } from 'vue'
import { useDropdown } from '@/composables'

const dropdown = useDropdown()

const menuRef = ref(null)

provide('dropdown', dropdown)

const handleClickOutside = (e) => {
    if (menuRef.value && !menuRef.value.contains(e.target)) {
        dropdown.close()
    }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
    <div ref="menuRef" class="relative inline-block text-left">
        <slot />
    </div>
</template>
