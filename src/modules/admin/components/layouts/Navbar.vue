<script setup>
import { Bell, Eye, Menu, MessagesSquare } from 'lucide-vue-next'
import {
    AppLogo,
    Avatar,
    AvatarImage,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    SearchInput,
    ThemeSwitcher,
} from '@/components'

const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
    <header
        class="h-16 w-full flex items-center justify-between py-4 px-8 bg-white dark:bg-zinc-950/50 border-b border-zinc-100 dark:border-zinc-800"
    >
        <button
            class="md:hidden p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
            @click="$emit('toggle-sidebar')"
        >
            <Menu class="w-5 h-5 text-default" />
        </button>

        <div class="hidden md:block">
            <AppLogo />
        </div>

        <div class="flex items-center gap-2 md:gap-3">
            <SearchInput />

            <ThemeSwitcher />

            <div class="hidden md:block">
                <Dropdown align="right" size="xl">
                    <DropdownTrigger>
                        <div
                            class="relative p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
                        >
                            <Bell class="w-6 h-6 text-default" />
                            <span
                                class="absolute top-1 right-1 block w-2 h-2 bg-red-500 rounded-full"
                            ></span>
                        </div>
                    </DropdownTrigger>

                    <DropdownMenu>
                        <div
                            class="w-full bg-white dark:bg-zinc-900 rounded-lg shadow-md divide-y divide-zinc-300 dark:divide-zinc-700"
                        >
                            <div
                                class="px-4 py-2 font-medium text-center text-zinc-700 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-800 rounded-t-lg"
                            >
                                Notifications
                            </div>

                            <DropdownItem>
                                <div class="flex">
                                    <div class="relative shrink-0">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/65.jpg"
                                            rounded-full=""
                                        />

                                        <MessagesSquare
                                            class="absolute p-1 flex items-center justify-center w-5 h-5 -mt-2 ms-6 bg-blue-600 border text-white border-zinc-100 rounded-full dark:border-zinc-900"
                                        />
                                    </div>
                                    <div class="w-full ps-3">
                                        <div
                                            class="text-sm text-zinc-700 dark:text-zinc-300 mb-1.5"
                                        >
                                            Nouveau message de
                                            <span
                                                class="font-semibold text-zinc-900 dark:text-white"
                                                >Awa Diop</span
                                            >
                                            : "Salut ! Disponible ?"
                                        </div>
                                        <div class="text-xs text-primary-500">Il y a 2 min</div>
                                    </div>
                                </div>
                            </DropdownItem>

                            <div
                                class="py-2 text-sm font-medium text-center text-zinc-900 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white rounded-b-sm cursor-pointer"
                            >
                                <div class="inline-flex items-center gap-2 justify-center">
                                    <Eye class="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                                    Voir toutes les notifications
                                </div>
                            </div>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <Dropdown align="right">
                <DropdownTrigger>
                    <Avatar rounded-full size="md">JD</Avatar>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem>Déconnexion</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </header>
</template>
