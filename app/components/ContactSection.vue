<template>
    <div class="container mx-auto px-4 py-12">
        <h2 class="mb-5 text-center text-3xl font-bold text-foreground">Contact Me</h2>

        <div class="grid md:grid-cols-2 gap-x-5">
            <div class="flex justify-center items-center">
                <img :src="contactImage" alt="Contact Image" class="hidden md:block w-102 h-102 object-cover">
            </div>

            <div>
                <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
                <p>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    visions. Feel free to reach out to me through the form below or connect with me on social media.
                </p>
                <form @submit.prevent="sendEmail" class="space-y-4 mt-3">
                    <p v-if="success" class="text-success mt-4">
                        Message sent successfully!
                    </p>

                    <p v-if="error" class="text-danger mt-4">
                        Failed to send message.
                    </p>
                    <input type="text" name="fullname" id="fullname" v-model="form.name"
                        class="w-full border border-primary rounded-lg p-3 focus-visible:ring-0 focus-visible:outline-0"
                        placeholder="Full Name *">
                    <input type="email" name="email" id="email" v-model="form.email"
                        class="w-full border border-primary rounded-lg p-3 focus-visible:ring-0 focus-visible:outline-0"
                        placeholder="Email *">
                    <textarea name="message" id="message" v-model="form.message" rows="4"
                        class="w-full border border-primary rounded-lg p-3 focus-visible:ring-0 focus-visible:outline-0"
                        placeholder="Your Message *"></textarea>

                    <div class="flex justify-between items-center">
                        <div class="flex gap-3">
                            <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank"
                                rel="noopener noreferrer" :aria-label="social.label"
                                class="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-white/85 text-primary shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-primary hover:text-white dark:bg-black/70">
                                <Icon :icon="social.icon" class="text-2xl" />
                            </a>
                        </div>
                        <button type="submit" :disabled="isDisabled"
                            class="bg-primary text-white px-6 py-3 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400">
                            {{ loading ? 'Sending...' : 'Say Hello!' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- <form @submit.prevent="sendEmail" class="space-y-4">

            <button type="submit" :disabled="loading" class="bg-blue-600 text-white px-6 py-3 rounded-lg">
                {{ loading ? 'Sending...' : 'Send Message' }}
            </button>
        </form> -->
    </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { ref, watch } from 'vue';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/vue';

const contactImage = '/imgs/contact_me.png';
const isDisabled = ref(true);

const publicKey = 'yBOnnZmqAMKX0AGkr';
const templateId = 'template_jcpchfc';
const serviceId = 'service_8nrcpnt';

const loading = ref(false)
const success = ref(false)
const error = ref(false)

const form = ref({
    name: '',
    email: '',
    message: ''
});

const socialLinks = [
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/kyaw-zin-thet-160199310/',
        label: 'Open LinkedIn profile',
        icon: 'mdi:linkedin',
    },
    {
        name: 'github',
        href: 'https://github.com/kyawzinthetgithub',
        label: 'Open GitHub profile',
        icon: 'mdi:github',
    },
];

watch(() => form.value, () => {
    isDisabled.value = !form.value.name || !form.value.email || !form.value.message;
}, { deep: true });

const sendEmail = async () => {
    loading.value = true
    success.value = false
    error.value = false

    try {
        await emailjs.send(
            serviceId,
            templateId,
            {
                from_name: form.value.name,
                from_email: form.value.email,
                message: form.value.message,
                time: new Date().toLocaleString(),
            },
            publicKey
        )

        success.value = true

        form.value = {
            name: '',
            email: '',
            message: ''
        }
    } catch (err) {
        console.error(err)
        error.value = true
    } finally {
        loading.value = false
        if (success.value) {
            setTimeout(() => {
                success.value = false
            }, 5000)
        }
        if (error.value) {
            setTimeout(() => {
                error.value = false
            }, 5000)
        }
    }
}
</script>