import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'fr-FR',
    title: 'Starter Kit',
    description: 'Documentation officielle du Starter Kit',

    themeConfig: {
        search: {
            provider: 'local',
        },

        nav: [
            { text: 'Frontend', link: '/frontend/introduction' },
            { text: 'Backend', link: '/backend/introduction' },
        ],

        sidebar: {
            '/frontend/': [
                {
                    text: 'Guide',
                    collapsed: false,
                    items: [
                        { text: 'Introduction', link: '/frontend/introduction' },
                        { text: 'Architecture', link: '/frontend/architecture' },
                        { text: 'Démarrage', link: '/frontend/getting-start' },
                    ],
                },
                {
                    text: 'Structure',
                    collapsed: true,
                    items: [
                        { text: 'assets/', link: '/frontend/structure/assets' },
                        { text: 'components/', link: '/frontend/structure/components' },
                        { text: 'composables/', link: '/frontend/structure/composables' },
                        { text: 'config/', link: '/frontend/structure/config' },
                        { text: 'layouts/', link: '/frontend/structure/layouts' },
                        { text: 'modules/', link: '/frontend/structure/modules' },
                        { text: 'pages/', link: '/frontend/structure/pages' },
                        { text: 'router/', link: '/frontend/structure/router' },
                        { text: 'services/', link: '/frontend/structure/services' },
                        { text: 'stores/', link: '/frontend/structure/stores' },
                        { text: 'utils/', link: '/frontend/structure/utils' },
                    ],
                },
                {
                    text: 'Composants UI',
                    collapsed: true,
                    items: [
                        { text: 'AppLogo', link: '/frontend/components/app-logo' },
                        { text: 'ThemeSwitcher', link: '/frontend/components/theme-switcher' },
                        { text: 'Alert', link: '/frontend/components/alert' },
                        { text: 'Avatar', link: '/frontend/components/avatar' },
                        { text: 'AvatarImage', link: '/frontend/components/avatar-image' },
                        { text: 'Badge', link: '/frontend/components/badge' },
                        { text: 'Breadcrumb', link: '/frontend/components/breadcrumb' },
                        { text: 'Button', link: '/frontend/components/button' },
                        { text: 'Card', link: '/frontend/components/card' },
                        { text: 'CardImage', link: '/frontend/components/card-image' },
                        { text: 'Dialog', link: '/frontend/components/dialog' },
                        { text: 'Drawer', link: '/frontend/components/drawer' },
                        { text: 'Dropdown', link: '/frontend/components/dropdown' },
                        { text: 'Modal', link: '/frontend/components/modal' },
                        { text: 'social Icons', link: '/frontend/components/social-icons' },
                        { text: 'Toast', link: '/frontend/components/toast' },
                    ],
                },
                {
                    text: 'Composants Form',
                    collapsed: true,
                    items: [
                        { text: 'Checkbox', link: '/frontend/components/checkbox' },
                        { text: 'FileInput', link: '/frontend/components/file-input' },
                        { text: 'FormWrapper', link: '/frontend/components/form-wrapper' },
                        { text: 'ImageDropzone', link: '/frontend/components/image-dropzone' },
                        { text: 'PasswordInput', link: '/frontend/components/password-input' },
                        { text: 'Radio', link: '/frontend/components/radio' },
                        { text: 'SearchInput', link: '/frontend/components/search-input' },
                        { text: 'Select', link: '/frontend/components/select' },
                        { text: 'Switch', link: '/frontend/components/switch' },
                        { text: 'TextInput', link: '/frontend/components/text-input' },
                        { text: 'Textarea', link: '/frontend/components/textarea' },
                    ],
                },
                {
                    text: 'Composants Table',
                    collapsed: true,
                    items: [{ text: 'DataTable', link: '/frontend/components/data-table' }],
                },
            ],

            '/backend/': [
                {
                    text: 'Guide backend',
                    items: [{ text: 'Introduction', link: '/backend/introduction' }],
                },
            ],
        },

        outline: {
            label: 'Sur cette page',
            level: [2, 3],
        },

        lastUpdated: {
            text: 'Dernière mise à jour',
        },

        docFooter: {
            prev: 'Page précédente',
            next: 'Page suivante',
        },

        footer: {
            copyright: 'Copyright © 2025 <a href="mailto:amoszotepe11@gmail.com">docteurZed</a>',
        },
    },
})
