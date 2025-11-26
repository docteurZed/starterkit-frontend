import { sizes } from '@/utils'

export const modalProps = {
    placement: {
        type: String,
        default: 'center',
    },
    size: {
        type: String,
        default: 'md',
        validator: (v) => Object.keys(sizes).includes(v),
    },
}
