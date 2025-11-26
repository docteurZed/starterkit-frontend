import { ForgotPassword, Login, ResetPassword } from '@/modules/auth'

export default [
    {
        path: '/',
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login,
            },
            {
                path: 'forgot-password',
                name: 'forgotPassword',
                component: ForgotPassword,
            },
            {
                path: 'reset-password',
                name: 'resetPassword',
                component: ResetPassword,
            },
        ],
    },
]
