<template>
    <div class="container mx-auto px-4 py-12">
        <h2 class="mb-5 text-center text-3xl font-bold text-foreground">Projects</h2>
        <div class="flex justify-center items-center">
            <div class="hidescrollbar max-w-full overflow-x-auto rounded-xl bg-muted px-5 py-2">
                <ButtonGroup :options="options" v-model="mode" />
            </div>
        </div>

        <div class="mx-auto mt-8 grid max-w-6xl gap-6 md:grid-cols-3 ">
            <ProjectCard v-for="(project, index) in filteredProjects" :key="index" :project="project" />
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const mode = ref('fullstack');
const options = [
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
    
    // fullstack
    {
        title: 'Myanmar Post Office',
        teach: 'HTML, CSS, JavaScript, VueJs, VueX, PHP, Laravel, PostgreSQL, Websockets, Laravel Reverb, Redis',
        href: 'https://myanmarpost.com.mm/',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763562503/image/myanmarpost_qsfcy0.png',
        type: ['fullstack', 'frontend', 'backend'],
    },
    {
        title: 'Task Assign Management System',
        teach: 'HTML, CSS, JavaScript, VueJs, PHP, Laravel, PostgreSQL, Websockets, Laravel Reverb',
        github: 'https://github.com/HninYeeNwe/TaskAssignManagementSystem',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763216631/image/task_assign_two_tasrvh.jpg',
        type: ['fullstack'],
    },
    {
        title: 'Finance Tracker',
        teach: 'NuxtJs, TailwindCSS, Supabase',
        href: 'https://gr-expense.netlify.app/login',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763216630/image/finance_tracker_io7kch.jpg',
        type: ['fullstack'],
    },
    {
        title: 'JetPack Mall',
        teach: 'HTML5, CSS3, JavaScript, jQuery, PHP, Laravel, MySQL',
        github: 'https://github.com/YeThura-424/jetpackmall',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763216631/image/online_shopping_gkyuev.jpg',
        type: ['fullstack'],
    },

    //backend
    {
        title: 'POS LITE (API)',
        teach: 'PHP, PostgreSQL, Laravel, Redis, MongoDB, Websockets, Supabase',
        href: 'https://poslite.marketplace.com.mm/',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763562504/image/poslite_xyg0oj.png',
        type: ['backend'],
    },

    //opensource
    {
        title: 'Tech Stack Icon',
        teach: 'Python, HTML, CSS, JavaScript',
        href: 'https://tech-icon.netlify.app/docs/',
        github: 'https://github.com/YeThura-424/tech_stack_icon',
        img: 'https://res.cloudinary.com/dznadalbq/image/upload/v1763562507/image/techstack_icon_kxzfe3.png',
        type: ['opensource'],
    },
    {
        title: 'User Role Permissions (Laravel Package)',
        teach: 'PHP, Laravel',
        href: 'https://packagist.org/packages/kyawzinthet/role-permissions',
        github: 'https://github.com/kyawzinthetgithub/role-permissions',
        img: 'https://imgs.search.brave.com/C4CCiVPKtWFetu4t9DJ0YjRZnjFfeQxnTEVKcjxI6-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L1RkZmlkOG5RRnV0/THBHSmd2aW0zTmlu/MzhzLndlYnA_d2lk/dGg9MTkyMCZoZWln/aHQ9OTYw',
        type: ['opensource'],
    },
    
];

const filteredProjects = computed(() => {
    if (mode.value === 'all') {
        return projects;
    }

    return projects.filter((project) => project.type.includes(mode.value));
});
</script>
