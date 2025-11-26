import { Dashboard, User } from '@/modules/admin'

export default [
    {
        path: '/admin',
        children: [
            {
                path: 'tableau-de-bord',
                name: 'dashboard',
                component: Dashboard,
            },
            {
                path: 'utilisateurs',
                name: 'user',
                component: User,
            },
        ],
    },
]
