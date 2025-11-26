export const selectProps = {
    id: {
        type: [String, Number],
        default: 'select',
    },
    modelValue: {
        type: [String, Number],
        default: null,
    },
    name: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: 'Sélectionnez une option...',
    },
    filterable: {
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
    options: {
        type: Array,
        required: true,
        default: () => [],
    },
}
