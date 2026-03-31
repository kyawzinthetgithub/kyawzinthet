<template>
    <button @click.prevent="toggleTheme" class="mt-1.5">
        <Icon :icon="'mynaui:sun-solid'" class="dark:hidden text-2xl text-warning cursor-pointer" />
        <Icon :icon="'line-md:moon-twotone'" class="hidden dark:block text-2xl text-info cursor-pointer" />
    </button>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useTheme } from '../composables/useTheme';

const { toggleTheme, theme } = useTheme();
</script>