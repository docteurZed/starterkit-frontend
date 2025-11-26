export const datatablePaginationProps = {
    totalRows: {
        type: Number,
        required: true,
    },
    perPageOptions: {
        type: Array,
        default: () => [10, 25, 50],
    },
    modelValue: {
        type: Number,
        default: 1,
    },
    perPage: {
        type: Number,
        default: 10,
    },
}
