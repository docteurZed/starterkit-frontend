<script setup>
import { AppLogo, ThemeSwitcher } from '@/components'
import { Menu } from 'lucide-vue-next'

const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
    <nav
        class="w-full flex items-center justify-between py-4 px-8 md:px-16 bg-white dark:bg-zinc-950/50 border-b border-default"
    >
        <AppLogo />

        <div class="hidden md:flex items-center gap-6 font-semibold">
            <slot name="menu" />
        </div>

        <div class="hidden md:flex items-center gap-3">
            <ThemeSwitcher />
            <slot name="actions" />
        </div>

        <div class="md:hidden flex items-center gap-1">
            <ThemeSwitcher />
            <button
                @click="$emit('toggle-sidebar')"
                class="p-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
            >
                <Menu class="w-6 h-6 text-default" />
            </button>
        </div>
    </nav>
</template>
