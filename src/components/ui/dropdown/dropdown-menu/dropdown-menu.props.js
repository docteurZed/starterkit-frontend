import { sizes } from '@/utils'

export const dropdownMenuProps = {
    align: {
        type: String,
        default: 'left',
    },
    size: {
        type: String,
        default: 'md',
        validator: (v) => Object.keys(sizes).includes(v),
    },
}
