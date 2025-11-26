import { createRouter, createWebHistory } from 'vue-router'
import _admin from './_admin'
import _error from './_error'
import _auth from './_auth'
import _public from './_public'

const routes = [..._admin, ..._error, ..._auth, ..._public]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
