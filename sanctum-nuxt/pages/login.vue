<script setup lang="ts">
definePageMeta({
    middleware: ['sanctum:guest'],
});

const { login } = useSanctumAuth();

const form = ref({
    email: 'test@example.com',
    password: 'password',
});

async function handleLogin() {
    await login({
        email: form.value.email,
        password: form.value.password
    });
}
</script>

<template>
    <div>
        <form @submit.prevent="handleLogin">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="form.email">
            <label for="password"></label>
            <input type="password" name="password" id="password" v-model="form.password">

            <input type="submit" value="Log in">
        </form>
    </div>
</template>

<!--<script lang="ts">
export default {
    data() {
        return {
            email: "test@example.com",
            password: "password"
        };
    },
    methods: {
        async handleLogin() {
            await login({
                username: this.email,
                password: this.password
            });
        }
    }
}
</script>-->