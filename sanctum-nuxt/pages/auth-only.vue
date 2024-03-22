<script setup lagn="ts">
definePageMeta({
    middleware: ['sanctum:auth'],
});

const user = useSanctumUser();
const { logout } = useSanctumAuth();
</script>

<template>
    <div>
        <p>Welcome, {{ user?.name }}!</p>
        <p>Your email is <strong>{{ user?.email }}</strong></p>
        <p>Your ID is <strong>{{ user?.id }}</strong></p>

        <button @click="logout">Log out</button>
    </div>
</template>