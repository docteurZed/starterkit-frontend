export const fileInputProps = {
    id: {
        type: [String, Number],
        default: 'file-input',
    },
    modelValue: {
        type: [File, Array],
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
    multiple: {
        type: Boolean,
        default: false,
    },
}
