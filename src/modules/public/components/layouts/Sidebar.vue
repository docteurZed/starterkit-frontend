<script setup>
import { Drawer } from '@/components'
import { ref, defineExpose } from 'vue'

const drawerRef = ref(null)
const show = () => drawerRef.value?.show()
const hide = () => drawerRef.value?.hide()
defineExpose({ show, hide })
</script>

<template>
    <Drawer ref="drawerRef" placement="right" :dismissible="false">
        <div class="p-4 flex gap-4 flex-col h-full justify-between font-semibold">
            <slot />
        </div>
    </Drawer>
</template>
