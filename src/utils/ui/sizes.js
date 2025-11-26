export const sizes = {
    xs: {
        box: 'w-6 h-6',
        text: 'text-xs',
        padding: 'px-3 py-2 text-xs text-center',
        dimension: 'w-56 h-28',
        maxWidth: 'max-w-xs',
    },
    sm: {
        box: 'w-8 h-8',
        text: 'text-sm',
        padding: 'px-3 py-2 text-sm text-center',
        dimension: 'w-64 h-32',
        maxWidth: 'max-w-sm',
    },
    md: {
        box: 'w-12 h-12',
        text: 'text-base',
        padding: 'px-5 py-2.5 text-sm text-center',
        dimension: 'w-80 h-64',
        maxWidth: 'max-w-md',
    },
    lg: {
        box: 'w-16 h-16',
        text: 'text-2xl',
        padding: 'px-5 py-3 text-base text-center',
        dimension: 'w-96 h-80',
        maxWidth: 'max-w-lg',
    },
    xl: {
        box: 'w-24 h-24',
        text: 'text-4xl',
        padding: 'px-6 py-3.5 text-base text-center',
        dimension: 'w-[480px] h-[400px]',
        maxWidth: 'max-w-xl',
    },
}

export function generateSizeClasses(size) {
    const config = sizes[size] ?? {}

    return {
        box: config.box ?? '',
        text: config.text ?? '',
        padding: config.padding ?? '',
        dimension: config.dimension ?? '',
        maxWidth: config.maxWidth ?? '',
    }
}

export function getBoxSize(size) {
    return generateSizeClasses(size).box
}

export function getTextSize(size) {
    return generateSizeClasses(size).text
}

export function getPaddingSize(size) {
    return generateSizeClasses(size).padding
}

export function getDimensionSize(size) {
    return generateSizeClasses(size).dimension
}

export function getMaxWidthSize(size) {
    return generateSizeClasses(size).maxWidth
}
