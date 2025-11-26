export const switchProps = {
    id: {
        type: [String, Number],
        default: 'switch',
    },
    modelValue: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: '',
    },
    variantOn: {
        type: String,
        default: 'primary',
    },
    variantOff: {
        type: String,
        default: 'neutral',
    },
}
