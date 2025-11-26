export const variants = {
    neutral: {
        text: 'text-muted',
        border: 'border-strong',
        focus: 'focus-default',
        ring: 'ring-default',
        bg: 'bg-zinc-500',
    },
    primary: {
        text: 'text-primary',
        border: 'border-primary',
        focus: 'focus-primary',
        ring: 'ring-primary',
        bg: 'bg-primary',
    },
    secondary: {
        text: 'text-secondary',
        border: 'border-secondary',
        focus: 'focus-secondary',
        ring: 'ring-secondary',
        bg: 'bg-secondary',
    },
    tertiary: {
        text: 'text-tertiary',
        border: 'border-tertiary',
        focus: 'focus-tertiary',
        ring: 'ring-tertiary',
        bg: 'bg-tertiary',
    },
    error: {
        text: 'text-error',
        border: 'border-error',
        focus: 'focus-error',
        ring: 'ring-error',
        bg: 'bg-error',
    },
    info: {
        text: 'text-info',
        border: 'border-info',
        focus: 'focus-info',
        ring: 'ring-info',
        bg: 'bg-info',
    },
    success: {
        text: 'text-success',
        border: 'border-success',
        focus: 'focus-success',
        ring: 'ring-success',
        bg: 'bg-success',
    },
    warning: {
        text: 'text-warning',
        border: 'border-warning',
        focus: 'focus-warning',
        ring: 'ring-warning',
        bg: 'bg-warning',
    },
    transparent: {
        text: 'text-default hover:text-white',
        border: 'border-default',
        focus: 'focus-default',
        ring: 'ring-default',
        bg: 'bg-transparent hover:bg-zinc-600 dark:hover:bg-zinc-700',
    },
}

export function generateColorClasses(variant) {
    const config = variants[variant] ?? {}

    return {
        text: config.text ?? '',
        border: config.border ?? '',
        focus: config.focus ?? '',
        ring: config.ring ?? '',
        bg: config.bg ?? '',
    }
}

export function getTextColor(variant) {
    return generateColorClasses(variant).text
}

export function getBorderColor(variant) {
    return generateColorClasses(variant).border
}

export function getFocusColor(variant) {
    return generateColorClasses(variant).focus
}

export function getRingColor(variant) {
    return generateColorClasses(variant).ring
}

export function getBgColor(variant) {
    return generateColorClasses(variant).bg
}
