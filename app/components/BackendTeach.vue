<template>
  <TeachGrid :items="items" :columns="5" />
</template>

<script setup lang="ts">

const items = [
  { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/backend/php.svg', bgColor: 'bg-[#7a7a7a56]' },
  { name: 'Laravel', src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/backend/laravel.svg', bgColor: 'bg-[#f0534056]' },
  { name: 'Supabase', src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/other/supabase.svg', bgColor: 'bg-[#3fcf8e56]' },
  { name: 'AppWrite', src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/other/appwrite.svg', bgColor: 'bg-[#ff6b6b56]' },
];
</script>