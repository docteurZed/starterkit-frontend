<script setup>
import { FormWrapper, TextInput, PasswordInput } from '@/components'

const submit = () => {
    console.log('test')
}
</script>

<template>
    <FormWrapper :submit-handler="submit">
        <div class="space-y-4">
            <TextInput name="email" id="email" type="email" label="Email" />

            <PasswordInput name="password" id="password" label="Mot de passe" />

            <PasswordInput
                name="password_confirmation"
                id="password_confirmation"
                label="Confirmer le mot de passe"
            />
        </div>
    </FormWrapper>
</template>
