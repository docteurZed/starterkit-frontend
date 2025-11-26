<script setup>
import {
    Button,
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
import Navbar from './Navbar.vue'
import NavbarMenu from './NavbarMenu.vue'
import Sidebar from './Sidebar.vue'
import SidebarMenu from './SidebarMenu.vue'
import { ref } from 'vue'

const emit = defineEmits(['toggle-sidebar'])
const sidebarRef = ref(null)
</script>

<template>
    <header>
        <div
            class="hidden md:flex w-full bg-primary text-sm font-semibold py-3 px-8 md:px-16 text-zinc-200 flex items-center justify-between flex-col md:flex-row items-center justify-between gap-4"
        >
            <div class="flex gap-2 md:gap-4 items-center justify-center md:justify-start flex-wrap">
                <span class="flex gap-1 items-center">
                    <Map class="w-5 h-5" />
                    Lomé, Togo
                </span>
                <span class="flex gap-1 items-center">
                    <Mail class="w-5 h-5" />
                    <a :href="`mailto:mail@mail.com`"> mail@mail.com </a>
                </span>
                <span class="flex gap-1 items-center">
                    <Phone class="w-5 h-5" />
                    +228 00000000
                </span>
            </div>

            <div class="flex gap-3 items-center text-zinc-200">
                <Facebook class="hover:text-white" />
                <Linkedin class="hover:text-white" />
                <Tiktok class="hover:text-white" />
                <Instagram class="hover:text-white" />
                <Github class="hover:text-white" />
                <Threads class="hover:text-white" />
                <Whatsapp class="hover:text-white" />
                <Twitter class="hover:text-white" />
            </div>
        </div>

        <Navbar @toggle-sidebar="sidebarRef.show()">
            <template #menu>
                <NavbarMenu label="Accueil" :to="{ name: 'home' }" />
            </template>

            <template #actions>
                <Button as="router-link" :to="{ name: 'login' }" variant="primary"
                    >Connexion</Button
                >
            </template>
        </Navbar>

        <Sidebar ref="sidebarRef">
            <SidebarMenu label="Accueil" :to="{ name: 'home' }" />

            <Button as="router-link" :to="{ name: 'login' }" variant="primary">Connexion</Button>
        </Sidebar>
    </header>
</template>
