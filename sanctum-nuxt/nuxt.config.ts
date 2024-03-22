export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: [
        'nuxt-auth-sanctum'
    ],
    sanctum: {
        baseUrl: 'http://localhost:8000', // Laravel API
        origin: 'http://localhost:3000', // Nuxt app, by default will be used 'useRequestURL().origin'
        redirect: {
            onLogin: '/auth-only',
            onLogout: '/',
            onAuthOnly: '/login',
            keepRequestedRoute: false,
            onGuestOnly: false,
        },
        redirectIfAuthenticated: true
    }
})
