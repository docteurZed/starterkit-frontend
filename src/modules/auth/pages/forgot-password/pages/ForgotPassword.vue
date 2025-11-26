<script setup>
import { AuthLayout } from '@/layouts'
import { AuthHeader } from '@/modules/auth'
import Form from '../sections/Form.vue'
</script>

<template>
    <AuthLayout>
        <AuthHeader
            heading="Mot de passe oubliés"
            subheading="Entrez vos données pour récupérer votre mot de passe"
        />
        <div>
            <Form />
        </div>
    </AuthLayout>
</template>
