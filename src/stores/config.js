import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import appConfig from '@/config/app'
import { api } from '@/services/backend'

export const useConfigStore = defineStore('config', () => {
    const state = reactive({
        name: appConfig.name,
        lang: appConfig.lang,
        updatedAt: null,
    })

    // Mettre à jour la config depuis le backend
    async function loadConfig() {
        try {
            const data = await api.get('/app-config')
            Object.assign(state, data)
            state.updatedAt = Date.now()

            document.title = state.name
            document.documentElement.lang = state.lang
        } catch (err) {
            console.warn('Impossible de charger la config depuis le backend', err)
        }
    }

    const name = computed(() => state.name)
    const lang = computed(() => state.lang)

    // Mettre à jour la config côté client
    function setConfig(newConfig) {
        Object.assign(state, newConfig)
        state.updatedAt = Date.now()
        document.title = state.name
        document.documentElement.lang = state.lang
    }

    return { state, loadConfig, setConfig }
})
