import { ref, computed, watch } from 'vue'

export const useTheme = () => {
    const theme = ref<string>('dark')

    // Initialize immediately
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme')
        theme.value = savedTheme || 'dark'
        if (theme.value === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const isDarkMode = computed(() => theme.value === 'dark')

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
        if (theme.value === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme.value)
    }

    return { theme, isDarkMode, toggleTheme }
}
