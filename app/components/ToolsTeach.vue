<template>
    <div>
        <TeachGrid :items="items" :columns="5" />
    </div>
</template>

<script setup>
const items = [
    { name: 'Git', src: 'https://icon.icepanel.io/Technology/svg/Git.svg', bgColor: 'bg-[#f0534056]' },
    { name: 'GitHub', src: 'https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png', bgColor: 'bg-[#f0f0f056]' },
    { name: 'Postman', src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/tools/postman.svg', bgColor: 'bg-[#f0f0f056]' },
    { name: 'Redis', src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/database/redis.svg', bgColor: 'bg-[#c5747252]' },
    {name: 'Apache', src: 'https://icon.icepanel.io/Technology/svg/Apache.svg', bgColor: 'bg-[#b83faf14]'},
    {name: 'Linux', src: 'https://icon.icepanel.io/Technology/png-shadow-512/Linux.png', bgColor: 'bg-[#909b5956]'},
];
</script>