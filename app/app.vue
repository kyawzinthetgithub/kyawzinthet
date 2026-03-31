<template>
  <div class="bg-theme min-h-screen">
    <div class="text-lg text-danger">
      nuxt app for portfolio — theme is {{ isDark ? 'dark' : 'light' }}
    </div>
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
</script>
