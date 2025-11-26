<script setup>
import { Breadcrumb } from '@/components'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: '',
    },
    breadcrumbItems: {
        type: Array,
        required: true,
    },
    backgroundImage: {
        type: String,
        default: '/img/image-2.jpg',
    },
})
</script>

<template>
    <section
        class="relative w-full h-[40vh] flex items-center justify-center text-center overflow-hidden"
    >
        <div
            class="absolute inset-0 bg-center bg-cover bg-no-repeat bg-zinc-700 bg-blend-multiply"
            :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>

        <div class="absolute inset-0 bg-primary-900/50 mix-blend-multiply"></div>

        <div class="relative z-10 px-6 mx-auto max-w-3xl">
            <Breadcrumb :light-color="true" :items="breadcrumbItems" class="justify-center mb-3" />

            <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-2">
                {{ title }}
            </h1>

            <p v-if="subtitle" class="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto">
                {{ subtitle }}
            </p>
        </div>

        <div
            class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary-800/50 via-transparent to-primary-800/25"
        ></div>
    </section>
</template>
