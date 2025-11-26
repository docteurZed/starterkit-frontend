export const passwordInputProps = {
    id: {
        type: [String, Number],
        default: 'password-input',
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    label: {
        type: String,
        default: '',
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
    showToggle: {
        type: Boolean,
        default: true,
    },
    forgotPassword: {
        type: Boolean,
        default: false,
    },
    forgotPasswordLink: {
        type: [String, Object],
        default: '#',
    },
}
