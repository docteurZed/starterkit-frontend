<script setup lang="ts">
import { PublicLayout } from '@/layouts'
import { Footer, Header, Sidebar } from '@/modules/public'
import { ref } from 'vue'

const drawerRef = ref(null)
</script>

<template>
    <PublicLayout>
        <Header @toggle-sidebar="drawerRef.show()" />

        <main class="flex-grow">
            <slot />
        </main>

        <Footer />

        <Sidebar ref="drawerRef" />
    </PublicLayout>
</template>
