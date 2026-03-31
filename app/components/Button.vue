<template>
    <button @click="handleClick"
        :class="[classes, 'px-4 py-2 rounded hover:brightness-90 transition', disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer']"
        :disabled="disabled">
        <Icon v-if="icon && !loading" :icon="icon" class="h-4.5 w-4.5 sm:h-5 sm:w-5" />
        <span class="capitalize">{{ text }}</span>
    </button>
</template>

<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';

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
    },
    loading: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: null
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