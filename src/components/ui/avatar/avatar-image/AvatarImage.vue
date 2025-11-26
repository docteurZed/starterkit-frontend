<script setup>
import { getBoxSize, getRingColor } from '@/utils'
import { avatarImageProps } from './avatar-image.props'

const props = defineProps(avatarImageProps)

const sizeClasses = getBoxSize(props.size)

const roundedClass = props.roundedFull ? 'rounded-full' : 'rounded-sm'

const ringClass = props.ring ? 'ring-2' : ''

const ringColor = getRingColor(props.ringVariant)
</script>

<template>
    <img :class="[sizeClasses, roundedClass, ringClass, ringColor]" :src="src" :alt="alt" />
</template>
