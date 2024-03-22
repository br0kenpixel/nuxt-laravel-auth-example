<script setup lang="ts">
definePageMeta({
    middleware: ['sanctum:guest'],
});

const form = ref({
    name: "",
    email: "",
    password: ""
});

async function handleRegister() {
    const result = await register(form.value.name, form.value.email, form.value.password);

    if(result === true) {
        navigateTo("/");
        return;
    }

    console.error(result);
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