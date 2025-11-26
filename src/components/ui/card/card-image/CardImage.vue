<script setup>
import { cardImageProps } from './cardImage.props'

const props = defineProps(cardImageProps)
</script>

<template>
    <div
        :class="[
            'flex bg-muted border border-default shadow-sm rounded-lg overflow-hidden text-default group',
            imagePosition === 'left' || imagePosition === 'right' ? 'flex-row' : 'flex-col',
        ]"
    >
        <template v-if="imagePosition === 'top' || imagePosition === 'left'">
            <img
                :src="imageSrc"
                :alt="imageAlt"
                :class="[
                    'transition-transform duration-300 ease-in-out group-hover:scale-102',
                    imagePosition === 'top' ? 'w-full rounded-t-lg' : 'h-full rounded-l-lg',
                    imagePosition === 'left' ? 'w-40 object-cover' : '',
                ]"
            />
        </template>

        <div class="flex-1 flex flex-col justify-between">
            <div v-if="$slots.header" class="p-4 border-b border-default font-semibold">
                <slot name="header" />
            </div>

            <div class="flex-1 p-4">
                <slot />
            </div>

            <div v-if="$slots.footer" class="p-4 border-t border-default">
                <slot name="footer" />
            </div>
        </div>

        <template v-if="imagePosition === 'bottom' || imagePosition === 'right'">
            <img
                :src="imageSrc"
                :alt="imageAlt"
                :class="[
                    'transition-transform duration-300 ease-in-out group-hover:scale-102',
                    imagePosition === 'bottom' ? 'w-full rounded-b-lg' : 'h-full rounded-r-lg',
                    imagePosition === 'right' ? 'w-40 object-cover' : '',
                ]"
            />
        </template>
    </div>
</template>
