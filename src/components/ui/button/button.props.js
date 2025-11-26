import { sizes, variants } from '@/utils'

export const buttonProps = {
    as: {
        type: String,
        default: 'button',
    }, // 'button', 'a', ou 'router-link'
    href: {
        type: String,
        default: null,
    },
    to: {
        type: [String, Object],
        default: null,
    },
    variant: {
        type: String,
        default: 'neutral',
        validator: (v) => Object.keys(variants).includes(v),
    },
    size: {
        type: String,
        default: 'md',
        validator: (v) => Object.keys(sizes).includes(v),
    },
    disabled: {
        type: Boolean,
        default: false,
    },
}
