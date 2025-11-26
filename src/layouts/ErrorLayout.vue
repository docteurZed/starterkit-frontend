<script setup>
import { Button } from '@/components'

const props = defineProps({
    code: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: '',
    },
})
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 class="text-8xl font-extrabold text-secondary-500 mb-4 animate-pulse">404</h1>
        <p class="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200">Page introuvable</p>
        <p v-if="subtitle" class="text-zinc-600 dark:text-zinc-500">
            Oups... la page que vous cherchez n'existe pas ou a été déplacée.
        </p>

        <Button variant="primary" size="lg" as="router-link" :to="{ name: 'home' }" class="mt-6">
            Retour à l'accueil
        </Button>
    </div>
</template>
