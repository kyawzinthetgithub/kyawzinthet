<template>
  <div class="flex flex-col gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
    <div class="relative group overflow-hidden rounded-lg bg-violet-50">
      <img :src="project.img" alt="project image" class="w-full h-46 object-cover rounded-lg" />
      <div
        class="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <a v-if="project.href" :href="project.href" target="_blank"
          class="px-4 py-2 rounded-md font-semibold bg-white/50 flex justify-center items-center">
          <Icon icon="mdi:open-in-new" class="h-5 w-5 inline-block" />
        </a>
        <a v-if="project.github" :href="project.github" target="_blank"
          class="px-4 py-2 rounded-md font-semibold bg-white/50 flex justify-center items-center">
          <Icon icon="mdi:github" class="h-5 w-5 inline-block" />
        </a>
      </div>
    </div>
    <div class="relative">
      <div>
        <h2 class="text-xl font-semibold">{{ project.title }}</h2>
        <p class="text-gray-600 dark:text-gray-400">
          Tech Stack: {{ project.teach }}
        </p>
      </div>
    </div>

  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  project: {
    type: Object,
    required: true
  }
});

</script>