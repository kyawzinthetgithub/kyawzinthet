<template>
  <div>
    <div class="max-w-3xl mx-auto">
      <div :class="gridClass">
        <div v-for="(item, idx) in itemsToShow" :key="idx" class="flex flex-col items-center text-center">
          <div class="rounded-full p-3 shadow-md flex items-center justify-center w-20 h-20" :class="item.bgColor ?? 'bg-gray-200'">
            <img v-if="item.src" :src="item.src" :alt="item.name" class="w-14 h-14 object-contain rounded-full" />
            <span v-else class="text-sm font-semibold">{{ initials(item.name) }}</span>
          </div>
          <div class="mt-2 text-xl font-semibold text-gray-700 dark:text-gray-300">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Tech = { name: string; src?: string; bgColor?: string };

const props = defineProps({
  items: {
    type: Array as () => Tech[],
    required: true
  },
  limit: {
    type: Number,
    default: 0
  }
});

const itemsToShow = computed(() => (props.limit > 0 ? props.items.slice(0, props.limit) : props.items));

const gridClass = computed(() => `grid grid-cols-3 md:grid-cols-5 gap-4`);

const initials = (name: string) => {
  if (!name) return '';
  return name.split(/\s+/).map(n => n[0]).slice(0,2).join('').toUpperCase();
};
</script>
