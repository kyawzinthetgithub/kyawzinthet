<template>
    <div>
        <h1 class="text-center mb-5 font-bold text-3xl">Technologies & Tools</h1>
        <div class="flex justify-center items-center">
            <div class="bg-gray-300 dark:bg-gray-600 rounded-xl px-5 py-2">
                <ButtonGroup :options="options" v-model="mode" />
            </div>
        </div>

        <div class="mt-6">
            <FrontendTeach v-if="mode === 'frontend'" />
            <BackendTeach v-else-if="mode === 'backend'" />
            <DatabaseTeach v-else-if="mode === 'database'" />
            <ToolsTeach v-else-if="mode === 'tools'" />
        </div>
    </div>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { ref } from 'vue';
const mode = ref('frontend');
const options = [
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    {label: 'Database', value: 'database' },
    { label: 'Tools', value: 'tools' }
];
</script>