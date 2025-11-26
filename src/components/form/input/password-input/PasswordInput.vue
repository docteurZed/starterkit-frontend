<script setup>
import { ref, computed, defineProps, defineEmits, watch } from 'vue'
import { passwordInputProps } from './password-input.props'
import { Eye, EyeOff } from 'lucide-vue-next'

const props = defineProps(passwordInputProps)

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)
const typeInput = computed(() => (showPassword.value ? 'text' : 'password'))

const borderClasses = computed(() =>
    props.error
        ? 'border-strong focus:ring-1 focus-red focus:border-red-500 dark:focus:border-red-600'
        : 'border-strong focus:ring-1 focus-default',
)

const localValue = ref(props.modelValue)

watch(localValue, (val) => emit('update:modelValue', val))
watch(
    () => props.modelValue,
    (val) => (localValue.value = val),
)
</script>

<template>
    <div class="relative">
        <div class="flex items-center justify-between">
            <label :for="id" v-if="label" class="block mb-2 font-semibold text-default">
                {{ label }}
            </label>
            <RouterLink v-if="forgotPassword" :to="forgotPasswordLink">
                <span class="text-error font-semibold">Mot de passe oublié ?</span>
            </RouterLink>
        </div>

        <div class="relative">
            <input :id="id" :type="typeInput" :name="name" :placeholder="placeholder" :required="required"
                v-model="localValue" :class="[
                    'bg-zinc-200/50 text-default text-sm rounded-lg block w-full p-2.5 pr-10 dark:bg-zinc-800/50 placeholder-zinc-500 dark:placeholder-zinc-600 border',
                    borderClasses,
                ]" />

            <button v-if="showToggle" type="button" @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-2.5 flex items-center text-muted hover:text-zinc-800 dark:hover:text-zinc-200">
                <transition name="fade" mode="out-in">
                    <component :key="showPassword" :is="showPassword ? EyeOff : Eye" class="w-5 h-5" />
                </transition>
            </button>
        </div>

        <p v-if="helperText && !error" class="mt-2 text-sm text-muted">
            {{ helperText }}
        </p>
        <p v-if="error" class="mt-2 text-sm text-red">
            {{ error }}
        </p>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
