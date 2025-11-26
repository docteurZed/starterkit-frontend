import { sizes, variants } from '@/utils'

export const avatarImageProps = {
    size: {
        type: String,
        default: 'md',
        validator: (v) => Object.keys(sizes).includes(v),
    },
    src: {
        type: String,
    },
    alt: {
        type: String,
        default: 'Avatar',
    },
    roundedFull: {
        type: Boolean,
        default: false,
    },
    ring: {
        type: Boolean,
        default: false,
    },
    ringVariant: {
        type: String,
        default: 'neutral',
        validator: (v) => Object.keys(variants).includes(v),
    },
}
