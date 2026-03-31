<template>
    <button @click="handleClick" :class="[classes, 'px-4 py-2 rounded hover:brightness-90 transition', disabled ? 'opacity-50 cursor-not-allowed' : '']" :disabled="disabled">
        <span class="capitalize">{{ text }}</span>
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    text: {
        type: String,
    },
    variant: {
        type: String,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const classes = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'bg-primary text-primary-foreground';
        case 'secondary':
            return 'bg-secondary text-secondary-foreground';
        case 'info':
            return 'bg-info text-info-foreground';
        case 'danger':
            return 'bg-danger text-danger-foreground';
        default:
            return '';
    }
});

const emit = defineEmits(['click']);

const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};
</script>