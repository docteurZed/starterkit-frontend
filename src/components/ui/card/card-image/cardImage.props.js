export const cardImageProps = {
    imageSrc: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        default: 'Image',
    },
    imagePosition: {
        type: String,
        default: 'top',
        validator: (v) => ['top', 'bottom', 'left', 'right'].includes(v),
    },
}
