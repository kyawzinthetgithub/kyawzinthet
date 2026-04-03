<template>
  <div :class="vertical ? 'flex flex-col gap-2' : 'inline-flex space-x-2'" role="group">
    <Button
      v-for="(opt, idx) in options"
      :key="idx"
      :text="opt.label"
      :variant="selected === opt.value ? (opt.activeVariant ?? 'info') : (opt.variant ?? 'secondary')"
      :disabled="opt.disabled"
      :class="[buttonClass]"
      @click="select(opt)"
    />

    <slot v-if="!options || options.length === 0"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Opt = {
  label: string;
  value: any;
  variant?: string;
  activeVariant?: string;
  disabled?: boolean;
};

const props = defineProps({
  options: {
    type: Array as () => Opt[],
    default: () => []
  },
  modelValue: null,
  vertical: {
    type: Boolean,
    default: false
  },
  buttonClass: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const selected = computed(() => props.modelValue);

const select = (opt: Opt) => {
  if (opt.disabled) return;
  emit('update:modelValue', opt.value);
  emit('change', opt);
};
</script>
