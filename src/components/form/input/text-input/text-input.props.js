export const textInputProps = {
    id: {
        type: [String, Number],
        default: 'text-input',
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    name: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
    },
    helperText: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
}
