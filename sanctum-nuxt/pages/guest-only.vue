<script setup lang="ts">
definePageMeta({
    middleware: ['sanctum:guest'],
});
</script>

<template>
    <p>Welcome, guest!</p>
</template>