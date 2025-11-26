import { sizes, variants } from '@/utils'

export const avatarProps = {
    size: {
        type: String,
        default: 'md',
        validator: (v) => Object.keys(sizes).includes(v),
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
