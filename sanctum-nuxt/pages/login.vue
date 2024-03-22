<script setup lang="ts">
definePageMeta({
    middleware: ['sanctum:guest'],
});

const { login } = useSanctumAuth();
import { FetchError } from 'ofetch';

const form = ref({
    email: 'test@example.com',
    password: 'password',
});
const error = ref(null as null|string);

async function handleLogin() {
    error.value = null;

    try {
        await login({
            email: form.value.email,
            password: form.value.password
        });
    } catch (e) {
        if (e instanceof FetchError && e.response?.status === 422) {
            error.value = e.response?._data.message;
        }
    }
}
</script>

<template>
    <div>
        <p style="color: red;" v-show="error != null">Error: {{ error }}</p>

        <form @submit.prevent="handleLogin">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="form.email">
            <label for="password"></label>
            <input type="password" name="password" id="password" v-model="form.password">

            <input type="submit" value="Log in">
        </form>
    </div>
</template>