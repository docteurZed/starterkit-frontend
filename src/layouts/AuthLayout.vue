<script setup>
import { Card } from '@/components'
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 p-6">
        <Card class="w-full max-w-md p-6">
            <div class="relative flex flex-col gap-6">
                <slot />
            </div>
        </Card>
    </div>
</template>
