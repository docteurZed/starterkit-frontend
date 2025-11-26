import { ref, watchEffect } from 'vue'

const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')

const savedTheme = localStorage.getItem('color-theme')
const theme = ref(savedTheme ? savedTheme : systemPrefersDark.matches ? 'dark' : 'light')

systemPrefersDark.addEventListener('change', (e) => {
    if (!savedTheme) {
        theme.value = e.matches ? 'dark' : 'light'
    }
})

document.documentElement.classList.toggle('dark', theme.value === 'dark')

watchEffect(() => {
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
    localStorage.setItem('color-theme', theme.value)
})

function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}

export function useTheme() {
    return { theme, toggleTheme }
}
