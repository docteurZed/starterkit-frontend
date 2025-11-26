<script setup>
import { Breadcrumb, Drawer } from '@/components'
import { ref } from 'vue'
import Navbar from './layouts/Navbar.vue'
import Sidebar from './layouts/Sidebar.vue'

const drawerRef = ref(null)
const openSidebar = () => drawerRef.value?.show()
</script>

<template>
    <Navbar @toggle-sidebar="openSidebar" />

    <div class="flex overflow-hidden p-4">
        <aside class="hidden md:block w-1/5 h-full overflow-y-auto p-2">
            <Sidebar />
        </aside>

        <Drawer ref="drawerRef" placement="left" size="md" :dismissible="false">
            <Sidebar />
        </Drawer>

        <main class="flex-1 h-full overflow-y-auto rounded-lg p-4 md:ml-4">
            <Breadcrumb
                :items="[
                    { label: 'Tableau de bord', href: { name: 'dashboard' } },
                    { label: 'Tableau de bord' },
                ]"
            />

            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-zinc-800 dark:text-zinc-200">Tableau de bord</h2>
            </div>

            <slot />
        </main>
    </div>
</template>
