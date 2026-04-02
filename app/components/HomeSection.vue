<template>
    <div class="grid md:grid-cols-2 gap-x-5 py-5">
        <div class="flex justify-center items-center order-2 md:order-1">
            <div class="">
                <h1 class="md:text-4xl text-3xl font-bold mb-4">Hi, I'm Kyaw Zin Thet 👋</h1>
                <p class="text-lg mb-6">
                    I'm into a
                    <span class="inline-block">
                        <span class="typed font-bold text-primary" aria-live="polite">{{ typed }}</span>
                        <span class="cursor" aria-hidden="true"></span>
                    </span>
                </p>
                <div>
                        <p>
                            Experienced Full Stack Web Developer ({{ experienceYears }}+ years) specializing in <b class="text-primary">PHP</b>,
                            <b class="text-primary">Laravel</b>, <b class="text-primary">Vue.js</b>, and <b
                                class="text-primary">Nuxt.js</b>. I build scalable, test-driven backend APIs, write clean,
                            well-documented code, mentor junior developers, and improve POS usability with practical,
                            user-focused solutions.
                        </p>
                </div>
                <div class="flex gap-4 mt-3">
                    <a href="" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">View
                        Projects</a>
                    <a href=""
                        class="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">Contact
                        Me</a>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center order-1 md:order-2">
            <div class="relative w-40 sm:w-48 md:w-64 lg:w-80 h-40 sm:h-48 md:h-64 lg:h-80 hidden md:block">
                <img :src="developer" alt="Developer Image"
                    class="w-full h-full object-cover rounded-full mx-auto shadow-lg">

                <!-- absolute icons for md+ screens -->
                <img :src="mysqlimg" alt="MySQL Image"
                    class="hidden md:block absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-12 md:h-12 w-8 h-8 rounded-full shadow-md bg-white p-1">

                <img :src="phpimg" alt="PHP Image"
                    class="hidden md:block absolute md:top-2/3 md:-right-10 md:transform md:-translate-y-1/2 md:translate-x-1/2 md:w-12 md:h-12 w-8 h-8 rounded-full shadow-md bg-white p-1">

                <img :src="laravelimg" alt="Laravel Image"
                    class="hidden md:block absolute md:left-1/2 md:-bottom-10 md:transform md:-translate-x-1/2 md:translate-y-1/2 md:w-12 md:h-12 w-8 h-8 rounded-full shadow-md bg-white p-1">

                <img :src="vueimg" alt="Vue.js Image"
                    class="hidden md:block absolute md:top-1/2 md:-left-10 md:transform md:-translate-y-1/2 md:-translate-x-1/2 md:w-12 md:h-12 w-8 h-8 rounded-full shadow-md bg-white p-1">

                <img :src="vscodeimg" alt="VS Code Image"
                    class="hidden md:block absolute md:top-10 md:right-0 md:transform md:w-12 md:h-12 w-7 h-7 rounded-full shadow-sm bg-white p-1">
            </div>

            <!-- simple icon row for small screens -->
            <div class="relative w-58 sm:w-58 md:w-64 lg:w-80 h-40 sm:h-58 py-5 mb-16 md:h-64 lg:h-80 md:hidden">
                <img :src="developer" alt="Developer Image"
                    class="w-full h-full object-cover rounded-full mx-auto shadow-lg">

                <!-- absolute icons for md+ screens -->
                <img :src="mysqlimg" alt="MySQL Image"
                    class="md:hidden absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-md bg-white p-1">

                <img :src="phpimg" alt="PHP Image"
                    class="md:hidden absolute top-2/3 -right-5 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full shadow-md bg-white p-1">

                <img :src="laravelimg" alt="Laravel Image"
                    class="md:hidden absolute left-1/2 -bottom-5 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 rounded-full shadow-md bg-white p-1">

                <img :src="vueimg" alt="Vue.js Image"
                    class="md:hidden absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full shadow-md bg-white p-1">

                <img :src="vscodeimg" alt="VS Code Image"
                    class="md:hidden absolute top-5 right-0 transform w-8 h-8 rounded-full shadow-sm bg-white p-1">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const phrases = ['Frontend Development', 'Backend Development'];
const typed = ref('');
const developer = '/imgs/developer.png';
const experienceYears = new Date().getFullYear() - 2023;
const phpimg = '/imgs/php.svg';
const laravelimg = '/imgs/laravel.svg';
const vueimg = '/imgs/vuejs.svg';
const mysqlimg = '/imgs/mysql.svg';
const vscodeimg = '/imgs/vscode.svg';


let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timer = null;

const type = () => {
    const current = phrases[phraseIndex % phrases.length]

    if (!isDeleting) {
        typed.value = current.slice(0, charIndex + 1)
        charIndex++

        if (charIndex === current.length) {
            isDeleting = true
            timer = setTimeout(type, 1200)
            return
        }

        timer = setTimeout(type, 100)
    } else {
        typed.value = current.slice(0, Math.max(0, charIndex - 1))
        charIndex--

        if (charIndex === 0) {
            isDeleting = false
            phraseIndex++
            timer = setTimeout(type, 500)
            return
        }

        timer = setTimeout(type, 50)
    }
}

onMounted(() => {
    type()
});

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
});
</script>

<style scoped>
.typed {
    display: inline-block;
    color: #00e5ff;
    /* neon-blue fallback */
    font-weight: 700;
}

.cursor::after {
    content: '|';
    display: inline-block;
    margin-left: 6px;
    color: currentColor;
    animation: blink 1s steps(1) infinite;
}

@keyframes blink {
    0% {
        opacity: 1
    }

    50% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}
</style>
