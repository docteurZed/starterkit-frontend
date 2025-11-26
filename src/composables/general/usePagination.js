import { ref, computed } from 'vue'

export function usePagination(totalPagesInit = 1, currentPageInit = 1) {
    const totalPages = ref(totalPagesInit)
    const currentPage = ref(currentPageInit)

    const paginationItems = computed(() => {
        const total = totalPages.value
        const current = currentPage.value
        const items = []

        if (total <= 5) {
            for (let i = 1; i <= total; i++) items.push(i)
        } else {
            items.push(1)
            if (current > 3) items.push('...')

            const start = Math.max(2, current - 1)
            const end = Math.min(total - 1, current + 1)
            for (let i = start; i <= end; i++) items.push(i)

            if (current < total - 2) items.push('...')
            items.push(total)
        }

        return items
    })

    const goPrevious = () => {
        if (currentPage.value > 1) currentPage.value--
    }

    const goNext = () => {
        if (currentPage.value < totalPages.value) currentPage.value++
    }

    return { currentPage, totalPages, paginationItems, goPrevious, goNext }
}
