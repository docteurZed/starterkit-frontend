import { Home } from '@/modules/public'

export default [
    {
        path: '/',
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
            },
        ],
    },
]
