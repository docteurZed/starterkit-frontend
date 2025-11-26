<script setup>
import { AppLogo } from '@/components'
import { Home, User } from 'lucide-vue-next'
import SidebarMenu from './SidebarMenu.vue'
import SidebarGroup from './SidebarGroup.vue'
</script>

<template>
    <div>
        <div class="sm:hidden mb-4 px-3">
            <AppLogo />
        </div>

        <nav class="flex flex-col gap-3 overflow-auto">
            <SidebarMenu label="Tableau de bord" :icon="Home" :to="{ name: 'dashboard' }" />

            <SidebarGroup label="Utilisateurs">
                <SidebarMenu label="Utilisateurs" :icon="User" :to="{ name: 'user' }" />
            </SidebarGroup>
        </nav>
    </div>
</template>
