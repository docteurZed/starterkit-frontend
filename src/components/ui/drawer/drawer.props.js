import { sizes } from '@/utils'

export const drawerProps = {
    placement: {
        type: String,
        default: 'right',
        validator: (v) => ['top', 'right', 'bottom', 'left'].includes(v),
    },
    size: {
        type: String,
        default: 'md',
        validator: (v) => Object.keys(sizes).includes(v),
    },
    dismissible: {
        type: Boolean,
        default: true,
    },
}
