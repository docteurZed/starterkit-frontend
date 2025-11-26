<script setup>
import { AuthLayout } from '@/layouts'
import { AuthHeader } from '@/modules/auth'
import Form from '../sections/Form.vue'
</script>

<template>
    <AuthLayout>
        <AuthHeader
            heading="Réinitialiser le mot de passe"
            subheading="Choisissez un nouveau mot de passe sécurisé pour votre compte."
        />
        <div>
            <Form />
        </div>
    </AuthLayout>
</template>
