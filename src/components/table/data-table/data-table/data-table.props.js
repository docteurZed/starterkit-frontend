export const datatableProps = {
    rows: {
        type: Array,
        required: true,
    },
    searchable: {
        type: Boolean,
        default: true,
    },
    perPageOptions: {
        type: Array,
        default: () => [10, 25, 50],
    },
}
