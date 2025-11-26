export const radioProps = {
    id: {
        type: [String, Number],
        default: 'radio',
    },
    modelValue: {
        type: [String, Number, Boolean],
        default: null,
    },
    label: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
    value: {
        type: [String, Number, Boolean],
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
}
