<script setup>
import { AuthLayout } from '@/layouts'
import { AuthHeader } from '@/modules/auth'
import Form from '../sections/Form.vue'
</script>

<template>
    <AuthLayout>
        <AuthHeader heading="Connexion" subheading="Entrez vos données pour vous connecter" />
        <div>
            <Form />
        </div>
    </AuthLayout>
</template>
