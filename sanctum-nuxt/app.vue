<template>
    <div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">Login</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/register">Register</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/auth-only">Auth only</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/guest-only">Guest only</NuxtLink>
                </li>
            </ul>
        </nav>
        
        <NuxtPage/>
    </div>
</template>
