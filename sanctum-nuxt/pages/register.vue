<script setup lang="ts">
definePageMeta({
    middleware: ['sanctum:guest'],
});

const client = useSanctumClient();

const form = ref({
    name: "",
    email: "",
    password: ""
});

async function handleRegister() {
    const {data, pending, error, refresh} = await useAsyncData("register", () => 
        client("/register", {
            method: 'POST',
            body: {
                name: form.value.name,
                email: form.value.email,
                password: form.value.password,
                password_confirmation: form.value.password
            }
        })
    );

    if (data.value === undefined && error.value === null) {
        navigateTo("/");
    }
}
</script>

<template>
    <div>
        <p>Register :)</p>

        <form @submit.prevent="handleRegister">
            <label for="name" class="name">Name</label>
            <input type="text" name="name" id="name" v-model="form.name">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="form.email">
            <label for="password"></label>
            <input type="password" name="password" id="password" v-model="form.password">

            <input type="submit" value="Register">
        </form>
    </div>

</template>