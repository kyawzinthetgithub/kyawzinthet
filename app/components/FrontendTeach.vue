<template>
  <TeachGrid :items="items" />
</template>

<script setup lang="ts">

const items = [
  { name: 'HTML', src: "https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/html5.svg", bgColor: 'bg-[#b4756556]' },
  { name: 'CSS', src: "https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/css3.svg", bgColor: 'bg-[#2e4fe056]' },
  { name: 'JavaScript', src: "https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/js.svg", bgColor: 'bg-[#aae02e56]' },
  { name: 'Pinia', src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/other/pinia.svg', bgColor: 'bg-[#ed433556]'},
  { name: 'Vue.js', src: 'https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/vuejs.svg', bgColor: 'bg-[#0c491e56]' },
  { name: 'Nuxt.js', src: "https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/nuxtjs.svg", bgColor: 'bg-[#25e69556]' },
  { name: 'Bootstrap', src: "https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/bootstrap4.svg", bgColor: 'bg-[#5695e656]' },
  { name: 'Tailwind CSS', src: "https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/tailwindcss.svg", bgColor: 'bg-[#06b6d456]' },
  { name: 'Vite', src: "https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/vitejs.svg", bgColor: 'bg-[#646cff56]' },
  { name: 'PrimeVue', src: "https://cdn.jsdelivr.net/gh/YeThura-424/img_data@main/frontend/primevue.svg", bgColor: 'bg-[#42b88356]'},
];
</script>