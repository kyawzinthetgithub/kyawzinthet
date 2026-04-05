<template>
    <div class="container mx-auto px-4 py-12">
        <h2 class="mb-5 text-center text-3xl font-bold text-foreground">Projects</h2>
        <div class="flex justify-center items-center">
            <div class="hidescrollbar max-w-full overflow-x-auto rounded-xl bg-muted px-5 py-2">
                <ButtonGroup :options="options" v-model="mode" />
            </div>
        </div>

        <div class="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-3">
            <ProjectCard v-for="(project, index) in filteredProjects" :key="index" :project="project" />
        </div>
    </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { computed, ref } from 'vue';

const mode = ref('all');
const options = [
    { label: 'All', value: 'all' },
    { label: 'Fullstack', value: 'fullstack' },
    { label: 'Ecommerce', value: 'ecommerce' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Open Source', value: 'opensource' },
];

const projects = [
    {
        title: 'Global Marketplace',
        teach: 'NuxtJs, HTML, CSS, JavaScript, TailwindCSS, Websockets',
        href: 'https://marketplace.com.mm/',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763565147/image/globalmarketplace_vjtd5n.png',
        type: ['frontend', 'ecommerce'],
    },
    {
        title: 'BB Perfume',
        teach: 'NuxtJs, HTML, CSS, JavaScript, TailwindCSS, Websockets',
        href: 'https://demo.bbperfumestores.com/',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763562502/image/bbperfumes_jttgtd.svg',
        type: ['frontend', 'ecommerce'],
    },
    {
        title: 'ZawGyi Mart',
        teach: 'NuxtJs, HTML, CSS, JavaScript, TailwindCSS, Websockets',
        href: 'https://zawgyimart.com/',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763562506/image/zawgyimart_hp10yh.png',
        type: ['frontend', 'ecommerce'],
    },
    {
        title: 'Shop By Myanmar Post',
        teach: 'NuxtJs, HTML, CSS, JavaScript, TailwindCSS, Websockets',
        href: 'https://shop.myanmarpost.com.mm/',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763563664/image/myanmarpost_one_worr82.webp',
        type: ['frontend', 'ecommerce'],
    },
    {
        title: 'TalkTiko Man',
        teach: 'NuxtJs, HTML, CSS, JavaScript, TailwindCSS, Websockets',
        href: 'https://talktikoman.com/',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763562507/image/talktikoman_dyqpjk.png',
        type: ['frontend', 'ecommerce'],
    },
];

const filteredProjects = computed(() => {
    if (mode.value === 'all') {
        return projects;
    }

    return projects.filter((project) => project.type.includes(mode.value));
});
</script>
