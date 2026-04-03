<template>
    <div class="min-h-screen bg-background text-foreground scroll-smooth">
        <!-- <ThemeToggler /> -->
        <header class="sticky top-0 z-30 bg-white/10 dark:bg-black/30 backdrop-blur-md border-b border-gray-300/20">
            <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <NuxtLink to="/" @click.prevent="scrollTo('home')" class="text-lg font-bold hover:text-primary transition">{{'< KZT />'}}</NuxtLink>
                <!-- Mobile menu button -->
                <button
                    class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary focus:outline-none cursor-pointer"
                    @click="mobileMenuOpen = !mobileMenuOpen"
                    aria-label="Open main menu"
                >
                    <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <!-- Desktop nav -->
                <div class="hidden sm:flex justify-end items-center gap-x-3">
                    <nav class="space-x-4">
                        <a href="#" @click.prevent="scrollTo('home')" class="hover:text-primary transition">Home</a>
                        <a href="#" @click.prevent="scrollTo('about')" class="hover:text-primary transition">About</a>
                        <a href="#" @click.prevent="scrollTo('projects')" class="hover:text-primary transition">Projects</a>
                        <a href="#" @click.prevent="scrollTo('contact')" class="hover:text-primary transition">Contact</a>
                    </nav>
                    <div>
                        <ThemeToggler />
                    </div>
                </div>
            </div>
            <!-- Mobile nav -->
            <transition name="fade">
                <div v-if="mobileMenuOpen" class="sm:hidden px-4 pb-4">
                    <nav class="flex flex-col gap-2">
                        <a href="#" @click.prevent="scrollTo('home'); mobileMenuOpen = false" class="hover:text-primary transition">Home</a>
                        <a href="#" @click.prevent="scrollTo('about'); mobileMenuOpen = false" class="hover:text-primary transition">About</a>
                        <a href="#" @click.prevent="scrollTo('projects'); mobileMenuOpen = false" class="hover:text-primary transition">Projects</a>
                        <a href="#" @click.prevent="scrollTo('contact'); mobileMenuOpen = false" class="hover:text-primary transition">Contact</a>
                        <div>
                            <ThemeToggler />
                        </div>
                    </nav>
                </div>
            </transition>
        </header>
        <main class="p-5 mx-auto">
            <HomeSection id="home" />
            <AboutSection id="about" />
            <TeachStack />
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);
const mobileMenuOpen = ref(false);

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