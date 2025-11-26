<script setup>
import { breadcrumbProps } from './breadcrumb.props'
import { ChevronRight, Home } from 'lucide-vue-next'

const props = defineProps(breadcrumbProps)
</script>

<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li v-for="(item, index) in props.items" :key="index" class="inline-flex items-center">
                <template v-if="index === 0">
                    <RouterLink
                        :to="item.href"
                        variant="light"
                        class="inline-flex items-center cursor-pointer text-sm font-semibold hover:text-primary-500 dark:hover:text-primary-600"
                        :class="[props.lightColor ? 'text-zinc-200' : 'text-default']"
                    >
                        <Home class="w-3 h-3 me-2.5" />
                        {{ item.label }}
                    </RouterLink>
                </template>

                <template v-else>
                    <div class="flex items-center">
                        <ChevronRight class="rtl:rotate-180 w-3 h-3 text-zinc-500 mx-1" />
                        <RouterLink
                            v-if="index < props.items.length - 1"
                            :to="item.href"
                            variant="light"
                            class="ms-1 cursor-pointer text-sm font-semibold hover:text-primary-500 dark:hover:text-primary-600 md:ms-2"
                            :class="[props.lightColor ? 'text-zinc-200' : 'text-default']"
                        >
                            {{ item.label }}
                        </RouterLink>
                        <span
                            v-else
                            aria-current="page"
                            class="ms-1 text-sm font-medium md:ms-2"
                            :class="[props.lightColor ? 'text-zinc-400' : 'text-muted']"
                        >
                            {{ item.label }}
                        </span>
                    </div>
                </template>
            </li>
        </ol>
    </nav>
</template>
