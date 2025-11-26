import { variants } from '@/utils'

export const badgeProps = {
    variant: {
        type: String,
        default: 'neutral',
        validator: (v) => Object.keys(variants).includes(v),
    },
}
