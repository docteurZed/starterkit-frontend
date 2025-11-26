export const imageDropzoneProps = {
    id: {
        type: String,
        default: 'dropzone-file',
    },
    modelValue: {
        type: [File, null],
        default: null,
    },
    label: {
        type: String,
        default: '',
    },
    helperText: {
        type: String,
        default: 'PNG, JPG, GIF',
    },
    error: {
        type: String,
        default: '',
    },
}
