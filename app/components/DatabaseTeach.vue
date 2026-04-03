<template>
    <div data-aos="zoom-in">
        <TeachGrid :items="items" />
    </div>
</template>

<script setup>
const items = [
    {name: "MySQL", src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/database/mysql.svg' , bgColor: 'bg-[#cfdae3b8]'},
    {name: "PostgreSQL", src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/database/postgresql.svg', bgColor: 'bg-[#33679156]'},
    {name: "MongoDB", src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/backend/mongodb.svg', bgColor: 'bg-[#47a24856]'},
    {name: "SQLite", src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/database/sqlite.svg', bgColor: 'bg-[#07405e56]'},
];
</script>