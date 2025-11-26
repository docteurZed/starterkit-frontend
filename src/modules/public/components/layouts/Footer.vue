<script setup>
import {
    AppLogo,
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Threads,
    Tiktok,
    Twitter,
    Whatsapp,
} from '@/components'
import { Mail, Map, Phone } from 'lucide-vue-next'
</script>

<template>
    <footer class="bg-zinc-800 dark:bg-zinc-900 border-t border-default">
        <div class="mx-auto w-full max-w-screen-xl p-6 lg:px-16">
            <div class="md:flex md:justify-between md:gap-8">
                <div class="mb-6 md:mb-0 md:w-2/5">
                    <AppLogo />
                    <p class="mt-4 text-zinc-500 text-sm">
                        Fournir des solutions et informations fiables pour notre communauté.
                    </p>
                    <div class="flex flex-col gap-2 mt-4 text-zinc-500 text-sm">
                        <span class="flex gap-1 items-center">
                            <Map class="w-4 h-4" />
                            Lomé, TOGO
                        </span>
                        <span class="flex gap-1 items-center">
                            <Mail class="w-4 h-4" />
                            <a :href="`mailto:mail@mail.com`" class="hover:underline">
                                mail@mail.com
                            </a>
                        </span>
                        <span class="flex gap-1 items-center">
                            <Phone class="w-4 h-4" />
                            +228 00000000
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 sm:gap-6 md:w-3/5">
                    <div>
                        <h2 class="mb-6 font-bold uppercase text-zinc-200">Navigation</h2>
                        <ul class="text-zinc-500 font-medium text-sm">
                            <li class="mb-4">
                                <RouterLink
                                    :to="{ name: 'home' }"
                                    class="hover:underline cursor-pointer"
                                >
                                    Accueil</RouterLink
                                >
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="mb-6 font-bold uppercase text-zinc-200">Ressources</h2>
                        <ul class="text-zinc-500 font-medium text-sm">
                            <li class="mb-4">
                                <RouterLink to="/" class="hover:underline cursor-pointer"
                                    >Textes & règlements
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr class="my-6 border-zinc-500 sm:mx-auto lg:my-8" />

            <div class="sm:flex sm:items-center sm:justify-between text-center">
                <span class="text-sm sm:text-center text-zinc-400">
                    © 2025
                    <RouterLink :to="{ name: 'home' }" class="hover:underline cursor-pointer"
                        >AEMPO</RouterLink
                    >. Tous droits réservés.
                </span>

                <div class="flex mt-4 justify-center sm:mt-0 gap-3 text-zinc-600">
                    <Facebook class="hover:text-white" />
                    <Linkedin class="hover:text-white" />
                    <Instagram class="hover:text-white" />
                    <Tiktok class="hover:text-white" />
                    <Threads class="hover:text-white" />
                    <Whatsapp class="hover:text-white" />
                    <Github class="hover:text-white" />
                    <Twitter class="hover:text-white" />
                </div>
            </div>
        </div>
    </footer>
</template>
