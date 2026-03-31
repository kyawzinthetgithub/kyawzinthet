<template>
    <div class="min-h-screen bg-background text-foreground scroll-smooth">
        <!-- <ThemeToggler /> -->
        <header class="sticky top-0 z-30 bg-white/10 dark:bg-black/30 backdrop-blur-md border-b border-gray-300/20">
            <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <NuxtLink to="/" class="text-lg font-bold">My Portfolio</NuxtLink>
                <div class="flex justify-end items-center gap-x-3">
                    <nav class="space-x-4">
                        <a href="#" @click.prevent="scrollTo('home')" class="hover:text-primary transition">Home</a>
                        <a href="#" @click.prevent="scrollTo('about')" class="hover:text-primary transition">About</a>
                        <a href="#" @click.prevent="scrollTo('projects')"
                            class="hover:text-primary transition">Projects</a>
                        <a href="#" @click.prevent="scrollTo('contact')"
                            class="hover:text-primary transition">Contact</a>
                    </nav>
                    <div>
                        <ThemeToggler />
                    </div>
                </div>
            </div>
        </header>
        <main class="p-5 mx-auto">
            <HomeSection id="home" />
            <AboutSection id="about" />
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

onMounted(() => {
    isDark.value = document.documentElement.classList.contains('theme-dark');
    window.addEventListener('theme-changed', (e) => {
        isDark.value = !!e.detail?.isDark;
    });
});

function scrollTo(id) {
    const el = document.getElementById(id);
    const header = document.querySelector('header');
    const offset = header ? header.offsetHeight : 0;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
}
</script>