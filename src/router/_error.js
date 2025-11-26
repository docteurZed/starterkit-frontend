import { NotFound } from '@/pages'

export default [
    {
        path: '/',
        children: [
            {
                path: ':pathMatch(.*)*',
                name: 'NotFound',
                component: NotFound,
            },
        ],
    },
]
